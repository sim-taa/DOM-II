import './less/index.less'

// Your code goes here!

// //Button
// const signMeUpFunSun = document.querySelector('.btn');

window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'Here you are.'

    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })

    document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})

document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
})

document.body.addEventListener('select', evt => {
    evt.target.textContent += 'boom'
})
}
