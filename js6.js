// const inputElement = document.createElement('input')
// const ulElement = document.createElement('ul')
// document.body.append(inputElement)
// document.body.append(ulElement)
// document.querySelector('input').addEventListener('keydown', function (event) {
    // const liElement = document.createElement('li')
    // ulElement.append(liElement)
    // liElement.textContent = event.key
// })





// let input = document.querySelector('input')
// input.addEventListener('keyup', () =>
    // console.log(input.value))
// document.querySelector('input').addEventListener('keyup', function (event) {
    // document.querySelector('div').textContent = 'Клиент набирает: ' + event.key
// })




const formElement = document.createElement('form')
const inputElement = document.createElement('input')
const ulElement = document.createElement('ul')
document.body.append(formElement)
document.body.append(ulElement)
formElement.append(inputElement)

const submitElement = document.createElement('input')
submitElement.setAttribute("type", "submit")
formElement.append(submitElement)
submitElement.value = 'Button'
formElement.addEventListener('submit', function(event){
    event.preventDefault()
    const liElement = document.createElement('li')
    ulElement.append(liElement) 
    const inputElementValue = formElement.querySelector('input')
    liElement.textContent= inputElementValue.value
    inputElementValue.value='' 
})