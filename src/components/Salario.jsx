export default function Salario (){
    return(
    <div className="ml-8">
        <h1 className="text-green-400">Calculo do salário com base no valor investido</h1>
        <p>Valor arrecadado no mês:</p>
        <input
        className="pl-2 rounded-lg mt-2 mb-7"
        type="number"
        placeholder="Valor mensal guardado:"/>
        <p>Valor Investido na compra de produtos:</p>
        <input
        className="pl-2 rounded-lg mr-5 mt-2 mb-10"
        type="number"
        placeholder="Investimento:"/>
        <button className="">Calcular</button>
        <p className="text-2xl text-green-400">Esse Mês seu salário foi: 5.000</p>
    </div>
    )
}