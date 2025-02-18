// OLD WERSION REDUX (without toolkit)

const initialState = {
    fullName: "Kamil",
    nationalId: "",
    createdAt: "",
};

const CREATE_CUSTOMER =  "customer/createCustomer";
const UPDATE_CUSTOMER = "customer/updateName";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CUSTOMER:
            return { ...state, ...action.payload };
        case UPDATE_CUSTOMER:
            return { ...state, fullName: action.payload.fullName };
        case UPDATE_CUSTOMER:
            return { ...state, fullName: action.payload.fullName };
        default:
            return state;
    }
}

export function createCustomer(fullName, nationalId) {
    return {
        type: CREATE_CUSTOMER,
        payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
        },
    };
}

export function updateName(fullName) {
    return { type: CREATE_CUSTOMER, payload: fullName };
}

export function getCustomer(){
    return { type: UPDATE_CUSTOMER, payload : null }
}
