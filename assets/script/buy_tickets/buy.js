const buyTicketList = document.querySelectorAll('.buy-ticket')
const modalElement = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-buy')
const closeElements = document.getElementsByClassName('close-board')
function turnOnBoard(){
    modalElement.style.display = 'flex'
    modalContainer.style.display = 'block'
}
function turnOfBoard(){
    modalElement.style.display = 'none'
    container.style.display = 'none'
    modalContainer.style.display = 'none'
    list.innerHTML = ''
}
for (var element of buyTicketList){
    element.addEventListener('click', turnOnBoard)
}
for (var element of closeElements){
    element.addEventListener('click', turnOfBoard)
}