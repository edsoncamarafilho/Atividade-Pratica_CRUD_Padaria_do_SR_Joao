const cardapio = [
  {
      id: 1,
      nome: 'Pao de Ló',
      estoque: 15,
      preco: 5,
  },
  {
      id: 2,
      nome: 'Cacetinho',
      estoque: 80,
      preco: 0.25,
  },
  {
      id: 3,
      nome: 'Quindin',
      estoque: 25,
      preco: 4,
  },
]


// 1
function listarProduto() {
  const opcoes = prompt(`Escolha o modo de listagem: 
  1 - simplificada
  2 - por ordem de preço
  3 - por ordem alfabética`)

  let produtosOrdenados

  switch (opcoes) {
      case '1':
          cardapio.forEach((produtos) => {
              alert(`ID: ${produtos.id} | Nome: ${produtos.nome} | Estoque: ${produtos.estoque} | Preço: ${produtos.preco}`);
          });
          break;
      case '2':
          produtosOrdenados = cardapio.sort((a, b) => a.preco - b.preco)
          alert(`ID: ${produtos.id} | Nome: ${produtos.nome} | Estoque: ${produtos.estoque} | Preço: ${produtos.preco}`)
          break;
      case '3':
          produtosOrdenados = cardapio.sort((a, b) => a.nome - b.nome)
          alert(`ID: ${produtos.id} | Nome: ${produtos.nome} | Estoque: ${produtos.estoque} | Preço: ${produtos.preco}`)
          break;
      default:
          alert('opção invalida')
          break;
  }
}
// 2
function cadastrarProduto() {
  const id = cardapio.length + 1
  const nome = prompt('Digite o nome do produto')
  const estoque = prompt('Estoque do produto')
  const preco = prompt('Preço do produto')

  const novoProduto = (id, nome, estoque, preco)

  cardapio.push(novoProduto)

  alert('Produto cadastrado com sucesso!')
}

// 3
function editarProduto() {
  const atualizarNome = prompt('Digite o nome do produto')
  const produtos = cardapio.find((produto) => produto.nome === atualizarNome)

  if (produtos) {
      const novoNome = prompt('Novo Nome do produto')
      const novoEstoque = prompt('Novo Estoque do produto')
      const novoPreco = prompt('Novo preço do produto')

      produtos.nome = novoNome
      produtos.preco = novoPreco
      produtos.estoque = novoEstoque
      alert('Produto alterado com sucesso')
  } alert('Produto nao encontrado')
}

// 4 
function deletarProduto() {
  const deletarProduto = prompt('Qual o nome do produto que deseja deletar?')
  const produtos = catalogo.find((produto) => produto.nome === deletarProduto);

  if (produtos !== -1) {
      cardapio.splice(produtos, 1)
      alert('Produto removido')
  } alert('Produto nao encontrado')
}

function menuPadoca() {
  while (true) {
      const opcoes = +prompt(`Bem-vindo ao sistema de CRUD de veículos:

      No momento, o sistema tem ${cardapio.length} produtos cadastrados.

      Escolha uma das opções para interagir com o sistema:
      1 - Cadastrar um produto
      2 - Listar todos os produtos
      3 - ediatr Produtos
      4 - Remover Produtos`);
  

  switch (opcoes) {
      case 1:
          cadastrarProduto()
          break;
      case 2:
          listarProduto()
          break;
      case 3:
          editarProduto()
          break;
      case 4:
          deletarProduto()
          break;
      case 5:
          deletarProduto()
          break;
      case 6:
          alert('Esta opção está em periodo de desenvolvimento')
          break;
      case 7:
        alert('Esta opção está em periodo de desenvolvimento')
          break;
      default:
          alert('Opção invalida')
          break;
  }
}
}

menuPadoca()