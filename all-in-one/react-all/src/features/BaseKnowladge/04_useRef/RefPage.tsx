import { useEffect, useRef, useState } from "react";

export default function RefPage(){
    const [toggleRender, setToggleRender] = useState(false)
    const refSpan = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const spanElement = document.getElementById('ref-span');
        if (spanElement) {
            refSpan.current = spanElement;
        }

        console.log( refSpan.current )
    }, [])


    if (refSpan.current) refSpan.current.innerText += "Ten tekst dodano do refSpan"

    return (
        <div>
            <button onClick={ () => setToggleRender(val => !val)}>Rerender</button>
            <div>
                refSpan <span id="ref-span"></span>
            </div>
            <h3>useRef</h3>
            <p>
                useRef to hook w React, który pozwala przechowywać referencję do
                elementu DOM lub wartości, które nie powodują ponownego
                renderowania komponentu.
            </p>
            <h5>Podsumowanie (Kiedy używać)</h5>
            <p>
                <br /> Zastosowanie Czy używać useRef? 📌 Dostęp do elementów
                <br /> DOM (np. input, video, canvas) ✅ TAK 📌 Przechowywanie
                <br /> wartości między renderami (bez ich wywoływania) ✅ TAK 🔄
                <br /> Śledzenie poprzedniej wartości stanu ✅ TAK 🎯
                <br /> Aktualizacja wartości bez ponownego renderowania ✅ TAK
                <br /> ⚡ Zmiana wartości i jednoczesne wymuszenie renderowania
                ❌ NIE (użyj useState)
            </p>
        </div>
    );
}