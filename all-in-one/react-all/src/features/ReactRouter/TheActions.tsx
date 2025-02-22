import { ActionFunctionArgs, Form, redirect } from "react-router-dom";

const createUser = async (name : string) => {
    if (!name) return null;
    return { name }
}

export default function ComponentWithActions(){
    const unknownData = 'Your unknown custom data'

    // return <Form method="POST" action="/router-v6/action">
    // Domyślnie form wybiera najblizszą ścieżkę akcji
    return <Form method="POST"> 
        <input type="text" hidden name="unknownData" defaultValue={unknownData} />
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
    
    const newUser = await createUser( data?.name as string)

    if (!newUser) return alert("Please provide data for create user!")

    alert("Hurra! Created new user!")
    return redirect('/');
}