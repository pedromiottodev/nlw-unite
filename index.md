estou na aula dois, minuto 32

HTML:
Linguagem de marcação de hiper texto
h1 = tag de título
a = tag link

document = objeto java script

//objeto js
const participante = {
  //quando definimos umm objeto usamos : e não =, pois é  um estrutura de chave-valor (igual os dicionários em python)
  nome: "Boby Miotto",
  email: "bobymiotto@gmail.com",
  //ano, mes(começando do zero), dia, hora, minuto
  dataInscricao: new Date(2025, 2, 18, 18, 39),
  dataCheckIn: new Date(2025, 2, 22, 12, 58)
}

form = serve para agruparmos ideias de foormulários(campos, botões, etc...)
fieldset = conjunto de campos
div = uma tag que não tem significado no html, serve para agrupar outras tags
botão = sempre que um botão estiver dentro de um formulário, o formulário irá tentar enviar esses dados para algum lugar, então nós precisamos avisar o formulário que após um submit ele deve realizar uma ação específica. onsubmit é o evento de envio do formulário, quando passamos o event, estamos passando para a função o evento ccom informações do formulário
required = significa que a informação não pode vir vazia, é um requisito