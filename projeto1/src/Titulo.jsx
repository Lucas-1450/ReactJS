import { useState } from "react";


function Titulo({nome, anonascimento}) {

    const [texto, setTexto] = useState("Título inicial");
    const [inputText, setInputText] = useState("");

    function clicou() {
        setTexto(inputText);
    }

    const hoje = new Date();
    let idade = hoje.getFullYear() - anonascimento;
    

    return (
    <div>
        <h1>{texto}</h1>
        <input value={inputText} onChange={(e) => { setInputText(e.target.value) }} type="text"  />
        <button onClick={clicou}>Mudar</button>
        <p>Oi Eu sou um {nome ? nome : "Fulano"} e tenho {idade} anos</p>
    </div>
    )
}

export default Titulo