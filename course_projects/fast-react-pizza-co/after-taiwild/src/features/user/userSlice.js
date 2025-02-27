import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function (_, { rejectWithValue }) {
    try {
      const positionObj = await getPosition();
      const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
      };

      const addressObj = await getAddress(position);
      const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

      return { position, address };
    } catch (error) {
      return rejectWithValue(error.message || 'Nie udało się pobrać adresu.');
    }
  }
);

const initialState = {
  username: '',
  status: 'idle',
  position: null,
  address: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
        state.error = ''; // Resetujemy ewentualne stare błędy
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        console.log( action.payload)
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        console.log(action.payload); // To jest poprawne, bo w "rejected" mamy payload
        state.status = 'error';
        state.error = action.payload;
      }),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
