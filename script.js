
var buttonSubmit = document.querySelector('body div button')
var cep = document.querySelector('body div input')
var content = document.querySelector('body div main')

buttonSubmit.addEventListener ('click', run)

function run (event){
    event.preventDefault()

   var codigocep = cep.value

   codigocep = codigocep.replace (' ', '')
   codigocep = codigocep.replace ('.', '')
   codigocep = codigocep.trim()

axios.get ('https://viacep.com.br/ws/' + codigocep +'/json/')
.then(function (response){
if(response.data.erro){
    throw new Error 
}

    content.innerHTML = ''
    createLine(response.data.logradouro)
    createLine(response.data.bairro)
    createLine(response.data.localidade)
    createLine(response.data.uf)
    
})
.catch(function (error){
    content.innerHTML = ''
    createLine('Ops, algo deu errado!')
})
}

function createLine(text){
    var line = document.createElement('p')
    var text = document.createTextNode(text)
    

    line.appendChild(text)
    content.appendChild (line)
}
