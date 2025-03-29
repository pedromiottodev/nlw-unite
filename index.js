let participantes = [
  {
    nome: "Boby Miotto",
    email: "bobymiotto@gmail.com",
    dataInscricao: new Date(2025, 1, 22, 19, 20),
    dataCheckIn: new Date(2025, 1, 24, 22, 0)
  },
  {
    nome: "Alexandre Jhonatan",
    email: "alejhonatan@gmail.com",
    dataInscricao: new Date(2025, 1, 21, 8, 20),
    dataCheckIn: null
  },
  {
    nome: "Juan Brasileiro",
    email: "juanbrasileiro@gmail.com",
    dataInscricao: new Date(2025, 1, 21, 10, 45),
    dataCheckIn: new Date(2025, 1, 25, 20, 30)
  },
  {
    nome: "Tonny Santos",
    email: "tonnysantos@gmail.com",
    dataInscricao: new Date(2025, 0, 20, 14, 10),
    dataCheckIn: new Date(2025, 1, 24, 21, 50)
  },
  {
    nome: "Diego Gomes",
    email: "diegogomes@gmail.com",
    dataInscricao: new Date(2025, 1, 19, 16, 5),
    dataCheckIn: new Date(2025, 1, 23, 19, 40)
  },
  {
    nome: "Breno Henrique",
    email: "brenohenrique@gmail.com",
    dataInscricao: new Date(2025, 0, 18, 9, 25),
    dataCheckIn: new Date(2025, 1, 22, 18, 55)
  },
  {
    nome: "Lucas Almeida",
    email: "lucasalmeida@gmail.com",
    dataInscricao: new Date(2025, 0, 17, 6, 15),
    dataCheckIn: null
  },
  {
    nome: "Marlene Rodrigues",
    email: "marlenerodrigues@gmail.com",
    dataInscricao: new Date(2025, 0, 16, 12, 30),
    dataCheckIn: new Date(2025, 1, 25, 20, 10)
  },
  {
    nome: "Valter Aparecido",
    email: "valteraparecido@gmail.com",
    dataInscricao: new Date(2025, 1, 15, 11, 40),
    dataCheckIn: new Date(2025, 1, 26, 22, 5)
  },
  {
    nome: "Joaquim Mendes",
    email: "joaquimmendes@gmail.com",
    dataInscricao: new Date(2025, 1, 14, 15, 55),
    dataCheckIn: null
  }
]

const criarNovoParticipante = (participante) =>{
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if(participante.dataCheckIn == null){
    dataCheckIn = `
    <button
    data-email = "${participante.email}"
    onclick = "fazerCheckIn(event)">
    Confirmar check-in
    </button>
    `
  }
  return `
  <tr>
    <td>
      <strong>${participante.nome}</strong>
      <br>
      <small>${participante.email}</small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) =>{

  let saida = ""
  for(let participante of participantes){
    saida = saida + criarNovoParticipante(participante)
  }
  //substituir informação do HTML
  //document é um documento html em formato objeto do JS
  //querySelector: busca um seletor (tag),e com isso o document se transforma na tag que eu colocar dentro dos parênteses
  document.querySelector("tbody").innerHTML = saida
}

atualizarLista(participantes)

//botão = sempre que um botão estiver dentro de um formulário, o formulário irá tentar enviar esses dados para algum lugar com a função preventDefault impedimos que esse comportamento padrão aconteça
const adicionarParticipante = (event) => {
  event.preventDefault()

  //dentro dos parênteses preciso informar de qual formulário eu quero obter os dados. esse mesmo evento nos traz quem é o target(alvo) do evento, que no caso é o nosso formulário que está com onsubmit
  const dadosFormulario = new FormData(event.target)

  const participante = {
    //pega o nome que foi digitado no formuário com input chamado "nome"
    nome: dadosFormulario.get("nome"),
    //pega o e-mail que foi digitado no formuário com input chamado "email"
    email: dadosFormulario.get("email"),
    //deixa vazio que ele pega a data de agora
    dataInscricao: new Date(),
    //null pois a data de check-in ainda não existe
    checkIn: null
  }

  //verificar se o participante já existe na lista
  const participanteExiste = participantes.find((p) => {
    return p.email == participante.email
    }
  )
  if(participanteExiste){
    alert("E-mail já cadastrado!")
    return
  }
  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar formulário após o usuário digitar o participante
  event.target.querySelector('[name = "nome"]').value = ""
  event.target.querySelector('[name = "email"]').value = ""
}

const fazerCheckIn = (event) => {
  //confirmar se a pessoa realmente quer fazer o check-in
  const confirmacao = confirm("Tem certeza que deseja realizar o check-in?")
  alert(confirmacao)

  if(confirmacao){
    //encontrar o participante dentro da lista
    //cada item da lista participantes passará por uma função, chamaremos esse item de "p".
    //o e-mail está guardado no evento do botão, lá na função "criarNovoParticipante"
    const participante = participantes.find((p) => {
      //event.target é o botão
      //dataset é o data-(data- é obrigatório o que depois eu escolho, nesse caso colocamos como data-email pois estamos pegando o e-mail
      return p.email == event.target.dataset.email
    })
    //atualizar o check-in do participante
    participante.dataCheckIn = new Date()
    //atualizar a lista de participantes
    atualizarLista(participantes)
  }
  else{
    return
  }
}