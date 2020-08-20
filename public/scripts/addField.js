//Procurar o botao
const button = document.querySelector('#add-time');

//Quando clicar no botão
button.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
  //Duplicar os campos: que campos ??
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)


  //limpar os campos
  const fields = newFieldContainer.querySelectorAll('input')

  // para cada campo, limpar
  fields.forEach((cleanField) => {
    //pegar o field do momento e limpa ele
    cleanField.value = '' 
  })

  // COlocar na página: Onde ??
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
