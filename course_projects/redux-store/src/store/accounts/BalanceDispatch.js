// ACTION

export function deposit(amount, currency) {
    if (currency === 'USD') return { type: "account/deposit", payload: amount };
    
    return async (dispatch, getState) => {
        console.log( currency)

        const API_URL = `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=USD`;

        const res = await fetch(API_URL)
        const data = await res.json()

        if (data?.rates?.USD)
            dispatch({ type: "account/deposit", payload: data?.rates?.USD });
        // console.log( data?.amount )
    }
}
