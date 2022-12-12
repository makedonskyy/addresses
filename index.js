let block = document.getElementById('block')
let string = document.getElementById('string')

let btnString = document.getElementById('string-btn')
let btnBlock = document.getElementById('block-btn')

btnString.addEventListener('click', function () {
    if (!block.classList.contains('d-none')) {
        block.classList.add('d-none')
        string.classList.remove('d-none')
        if (btnString.classList.contains('grey-btn')) {
            btnString.classList.remove('grey-btn')
            btnString.classList.add('active-btn')
        }
    }
    btnBlock.classList.remove('active-btn')
    btnBlock.classList.add('grey-btn')
})

btnBlock.addEventListener('click', function () {
    if (!string.classList.contains('d-none')) {
        string.classList.add('d-none')
        block.classList.remove('d-none')
        if (btnBlock.classList.contains('grey-btn')) {
            btnBlock.classList.remove('grey-btn')
            btnBlock.classList.add('active-btn')
        }
    }
    btnString.classList.remove('active-btn')
    btnString.classList.add('grey-btn')
})