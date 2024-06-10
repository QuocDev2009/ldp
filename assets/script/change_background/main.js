const sliderElement = document.querySelector('#slider')
var index = 0
const listImages = [
    'hoian.jpg',
    'dongvan.jpg',
    'hanoi.jpg'
]
const listTextHeading = [
    'Phố cỗ Hội An',
    'Phố cỗ Đồng Văn',
    'Phố cỗ Hà Nội'
]
const listTextDes = [
    'Quảng Nam',
    'Hà Giang',
    "Hà Nội"
]
function changeImages(){
    index++
    index%=3
    sliderElement.style.backgroundImage = `url(./assets/images/${listImages[index]})`
    const textHeading = document.querySelector('#text-heading')
    const textDes = document.querySelector('#text-description')
    textHeading.innerText = listTextHeading[index]
    textDes.innerText = listTextDes[index]
}
setInterval(
    changeImages, 
    3000
)