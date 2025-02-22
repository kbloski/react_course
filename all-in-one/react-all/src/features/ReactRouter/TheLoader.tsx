import { LoaderFunctionArgs, Route, Router, useLoaderData } from "react-router-dom";

function ComponentWithLoader(){
    const dataFromLoader = useLoaderData()
    return <div>
        Data From Loader:
        <pre>
            { JSON.stringify( dataFromLoader )}
        </pre>
    </div>;
}


export async function loader({ params }: LoaderFunctionArgs ) {
    // we can wetching date in this place

    const { loaderId } = params;

    const dataFromLoader = {
        message: "data from loader",
    };

    return {
        ...dataFromLoader,
        loaderId
    };
}

export default ComponentWithLoader;