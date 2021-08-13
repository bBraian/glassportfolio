const circle1 = document.querySelector('.circle1')
const circle2 = document.querySelector('.circle2')


function moveCircle(){
    circle1.style.top = '5%'
    circle1.style.right = '15%'
    circle1.style.transition = '5s'

    circle2.style.bottom = '5%'
    circle2.style.left = '10%'
    circle2.style.transition = '3s'
}
setInterval(moveCircle, 5)

function load_page_streams(){
    var twitch = document.getElementById('twitch')
    twitch.addClass('active')
}