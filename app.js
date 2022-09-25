const board = document.querySelector('#board')
const colors = ['#83F03C', '#CF5FD3', '#FF5F00', '#F43D6B', '#58E000', '#A101A6', '#FF8740', '#AE2C4C']
const SQUARES_NUMBER = 588

const setSquareColor = event => {
    const element = event.target
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}, 0 0 18px ${color}`
}

const removeSquareColor = event => {
    const element = event.target
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #0000`
}

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', setSquareColor)
    square.addEventListener('mouseleave', removeSquareColor)
    board.append(square)
}