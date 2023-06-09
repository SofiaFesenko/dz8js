let button = document.querySelector('.container__content__button')
let input = document.querySelectorAll('.container__content__input')
let block = document.querySelector('.container__result')

let history = document.querySelector('.history__history')

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

button.addEventListener('click', () => {
    let a = block.textContent = getRandomNumber(parseInt(input[0].value), parseInt(input[1].value))
    let li = document.createElement('li')
    li.textContent = a
    history.append(li)
})

// let slider = document.querySelector('.slider')

// function createImages(link) {
//     let img = document.createElement('img')
//     img.src = link
//     return img
// }

// let images = [
//     'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
// ].map(createImages)

// let currentImageIndex = 0
// slider.append(images[currentImageIndex])

// function next() {
//     images[currentImageIndex].remove()
//     currentImageIndex++
//     if (currentImageIndex > images.length - 1) {
//         currentImageIndex = images.length - 1
//     }
//     slider.append(images[currentImageIndex])
// }

// function prev() {
//     images[currentImageIndex].remove()
//     currentImageIndex--
//     if (currentImageIndex < 0) {
//         currentImageIndex = 0
//     }
//     slider.append(images[currentImageIndex])
// }

// document.addEventListener('keydown', (event) => {
//     if (event.code == 'ArrowRight') {
//         next()
//     } 
//     else if (event.code == 'ArrowLeft') {
//         prev()
//     }
// })

// document.addEventListener('keydown', (event) => {
//     if (event.code == 'KeyQ' && event.ctrlKey == true) {
//         let newLink = prompt()
//         let newImg = createImages(newLink)
//         images.push(newImg)
//     }
// })