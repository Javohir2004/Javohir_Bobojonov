const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="Images/LaptopImg.jpg" width="1000" height="1000">'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam laboriosam consectetur architecto?'
    profile_img.innerHTML = '   <img src="Images/NatureImg.jpg" width="1000" height="1000">'
    name.innerHTML = 'Javohir'
    date.innerHTML = 'Feb 28, 2004'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}