import { useState } from "react"

export default function Produtos (){
    const [valor, setValor] = useState ("")
    const [quantidade, setQuantidade] = useState ("")
    const [button, setButton] = useState ("")


  
    function click (){
        setButton( valor * quantidade)
    }
    function limpar (){
        setButton("")
    }    

    return( 
    <div className=""> 
        {/* <h1>Estoque de Mercadorias DoceAlice</h1> */}
        <h3 className="text-[22px] w-[180px] mb-[10px] text-white">Tipos de Produto:</h3>
    <div className="flex">
        <p className="text-cyan-500 mr-5 text-lg">Gravatinha</p>
        <input className="w-[120px] pl-2 mr-5 rounded-lg"
        type="number"
        value={valor}
        onChange={(ev) => setValor (ev.target.value)}
        placeholder="insira o valor..." />
        <input className="pl-2 w-[165px] rounded-lg"
        type="number"
        value={quantidade}
        onChange={(ev)=>setQuantidade(ev.target.value)}
        placeholder="Insira a quantidade..." />
    </div>
        <p className="mt-4 mb-5 text-cyan-500">Gravatinhas em estoque: {quantidade}</p>
        <button onClick={click}>Calcular</button>
        <button onClick={limpar}  className="ml-3">Limpar</button>
        <p className="text-[20px] mt-[20px] mb-[5px]">Valor total em reais: {button} R$</p>
        <hr className="mt-[10px] mb-[50px]" /> 
    </div>
    )
}