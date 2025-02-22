import { ActionFunctionArgs, Form } from "react-router-dom";

export default function ComponentWithActions(){
    // return <Form method="POST" action="/router-v6/action">
    // Domyślnie form wybiera najblizszą ścieżkę akcji
    return <Form method="POST"> 
         <label>
            Name
            <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
    </Form>;
}

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData()
    const data = Object.fromEntries( formData )
    
    alert(JSON.stringify( data ));

    return null;
}