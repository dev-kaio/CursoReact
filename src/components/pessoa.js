function Pessoa({nome, idade, profissao, foto}) {
    return (
        <div>
            <img src={foto} alt="fotona"/>
            <h2>Nome: {nome}</h2>
            <h2>idade: {idade}</h2>
            <h2>Profissão: {profissao}</h2>

        </div>
    )
}

export default Pessoa