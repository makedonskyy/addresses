const block = document.getElementById('block')
const string = document.getElementById('string')

const btnString = document.getElementById('string-btn')
const btnBlock = document.getElementById('block-btn')

const mediumBreakpoint = 992

if (window.innerWidth <= mediumBreakpoint) {
    block.classList.remove('d-none')
    string.classList.add('d-none')
    btnString.classList.replace('active-btn', 'grey-btn')
    btnBlock.classList.replace('grey-btn', 'active-btn')
} else {
    block.classList.add('d-none')
}


btnString.addEventListener('click', function () {
    if (!block.classList.contains('d-none')) {
        block.classList.add('d-none')
        string.classList.remove('d-none')
        if (btnString.classList.contains('grey-btn')) {
            btnString.classList.replace('grey-btn', 'active-btn')
            btnBlock.classList.replace('active-btn', 'grey-btn')
        }
    }
})

btnBlock.addEventListener('click', function () {
    if (!string.classList.contains('d-none')) {
        string.classList.add('d-none')
        block.classList.remove('d-none')
        if (btnBlock.classList.contains('grey-btn')) {
            btnBlock.classList.replace('grey-btn', 'active-btn')
            btnString.classList.replace('active-btn', 'grey-btn')
        }
    }
})