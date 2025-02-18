import style from './FormsReact.module.scss'
import { useForm } from "react-hook-form";

// useForm()
// Właściwość	Opis
// register	Rejestruje pole formularza
// handleSubmit	Obsługuje wysyłanie formularza
// formState.errors	Przechowuje błędy walidacji
// watch	Pozwala obserwować wartości pól w czasie rzeczywistym
// reset	Resetuje formularz do wartości początkowych
// setValue	Pozwala programowo ustawić wartość pola



type FormValues = {
    name: string,
    age: number,
    interests: string[],
    educations: string
}
const interestsList = ['Sport', "Music", "Technologies", "Travels", "Cooking", "Programming"]
const educationsList = ["Middle", 'Technic', 'Practice']

function ReactFormPage(){
    const { register, reset, handleSubmit, formState: {errors}} = useForm<FormValues>()

    function onSubmit( data : FormValues){
        console.log( data )
        // reset()
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    {...register('name', { required: "Name is required.", minLength: 3})} />
                    { errors.name && <p className={style.error}>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" {...register('age', { required: "Age is required", min: {value: 18 , message: "Age must be more than 18."}})} />
                    { errors.age && <p className={style.error}>{ errors.age.message }</p>}
                </div>
                <div>
                    { interestsList.map( interest => (<label key={interest}>
                        <input type="checkbox" value={interest} {...register("interests")} />
                        { interest }
                    </label>))}
                </div>
                <div>
                    { educationsList.map( education => <label key={education}>
                        <input type='radio' value={education} {...register("educations")} />
                        { education }
                    </label>)}
                </div>

                <button>Sumit form</button>
            </form>
        </div>
    );

}

export default ReactFormPage;