import { Provider } from 'react-redux'
import store from "./index"

import ContentReduxStore from './ContentReduxStore';
import ContentRtkQuery from './ContentRtkQuery';


export default function ReduxPage(){
    return (
        <ReduxStoreProvider>
            <h2>Redux store</h2>
            <ContentReduxStore />

            <h2>Rtk Query Redux</h2>
            <ContentRtkQuery />
        </ReduxStoreProvider>
    );
}


interface ReduxStoreProvider {
    children: React.ReactNode
}
function ReduxStoreProvider({ children} : ReduxStoreProvider){
    return <Provider store={store}>{ children }</Provider>
}




