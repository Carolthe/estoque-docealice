import Produtos from "./components/Produtos"
import Salario from "./components/Salario"

function App() {
  const produtosEmEstoque = ["Gravatinha"]

  return (
  <div className="grid grid-cols-3 m-14">
  <Produtos itens={produtosEmEstoque}/>
  <Produtos itens={produtosEmEstoque}/>
  <Produtos itens={produtosEmEstoque}/>
  <Produtos itens={produtosEmEstoque}/>
  <Produtos itens={produtosEmEstoque}/>
  <Produtos itens={produtosEmEstoque}/>
  <Produtos itens={produtosEmEstoque}/>
  <Produtos itens={produtosEmEstoque}/>
  <Produtos itens={produtosEmEstoque}/>
  <Produtos itens={produtosEmEstoque}/>
  <Salario />
  </div>
  )
}

export default App
