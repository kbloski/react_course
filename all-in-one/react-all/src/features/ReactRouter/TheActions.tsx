import { ActionFunctionArgs, Form, redirect,  useActionData,  useNavigation } from "react-router-dom";

const createUser = async (name : string) => {
    if (!name) return null;
    return { name }
}

export default function ComponentWithActions(){
    const formErrors = useActionData(); // custom action hook

    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    const unknownData = 'Your unknown custom data'


    // return <Form method="POST" action="/router-v6/action">
    // Domyślnie form wybiera najblizszą ścieżkę akcji
    return <Form method="POST"> 
        <input type="text" hidden name="unknownData" defaultValue={unknownData} />
         <label>
            { formErrors?.name && <p>{formErrors.name}</p>}
            Name
            <input type="text" name="name" />
        </label>
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Loading..." : 'Submit' }</button>
    </Form>;
}

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData()
    const data = Object.fromEntries( formData )
    
    alert(JSON.stringify( data ));
    

    // Errors Validation
    const errors: { 
        name?: string 
    } = {}
    if (!data?.name) errors.name = "Please give use your correct name. "

    if( Object.keys(errors).length > 0) return errors;

    // If everything is OK
    const newUser = await createUser(data?.name as string);
    alert("Hurra! Created new user!")
    return redirect('/');
}