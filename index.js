let block = document.getElementById('block')
let string = document.getElementById('string')

let btnString = document.getElementById('string-btn')
let btnBlock = document.getElementById('block-btn')

btnString.addEventListener('click', function () {
if (!block.classList.contains('d-none')) {
    block.classList.add('d-none')
    string.classList.remove('d-none')
}
btnString.style.fill =  '#AA0000'
}
)

btnBlock.addEventListener('click', function () {
    if (!string.classList.contains('d-none')) {
        string.classList.add('d-none')
        block.classList.remove('d-none')
    }
    btnBlock.style.fill =  '#AA0000'
    }
    )

console.log(btnString);
console.log(string);