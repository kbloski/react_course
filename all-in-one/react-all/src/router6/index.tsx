// React router v6 required 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from '../features/0_ui/AppLayout';
import HomePage from '../features/0_ui/HomePage'

// Basic Knowladge
import BasicReact from '../features/BaseKnowladge/01_basic/BasicReact'
import FormsReact from '../features/BaseKnowladge/02_useForms/FormsReact'
import StylesPage from '../features/BaseKnowladge/03_stylesModule/StylesPage'
import RefPage from '../features/BaseKnowladge/04_useRef/RefPage'
import ReducerPage from '../features/BaseKnowladge/05_useReducer/ReducerPage'

// Stores 
import ContextApiPage from '../features/Stores/contextApi/ContextApiPage'

// ReduxToolkit 
import ReduxPage from '../features/ReduxToolkit/ReduxPage'

// React Router 6+
import ComponentWithLoader, {loader as loaderForComponent} from '../features/ReactRouter/TheLoader';
import ComponentWithActions, { action as actionForComponent} from '../features/ReactRouter/TheActions';

const router = createBrowserRouter([{
    // Main routing 
    element: <AppLayout children={undefined} />,
    // errorElement: <ErrorPage />

    children: [
        {
            path: "/",
            element: <HomePage />,
            // loader: 
        },
        {
            path: '/basic',
            element: <BasicReact message="Hello from props"/>
        },
        {
            path: '/forms',
            element: <FormsReact />
        },
        {
            path: '/styles-modules',
            element: <StylesPage />,
            
        },
        {
            path: '/useRef',
            element: <RefPage />
        },
        {
            path: '/useReducer',
            element: <ReducerPage />
        },
        {
            path: '/context-api',
            element: <ContextApiPage />
        },
        {
            path: '/redux-toolkit',
            element: <ReduxPage />
        },
        {
            path: '/router-v6',
            children: [
                {
                    path: 'loader/:loaderId',
                    element: <ComponentWithLoader />,
                    loader: loaderForComponent,
                },
                {
                    path: 'action',
                    element: <ComponentWithActions />,
                    action: actionForComponent
                }
            ]
        },

    ]
}
])

// Used in App.tsx
export default function RouterV6Provider(){
    return <RouterProvider router={router} />
}