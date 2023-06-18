
var btn = document.getElementById('darkbtn')
console.log(btn)
btn.addEventListener('click', function() {
    document.body.classList.toggle("light")
    document.body.classList.toggle("dark")
    console.log('sucess')
} )
