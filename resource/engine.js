const button = Array.from(document.getElementsByClassName('button'));
const subBtn = document.getElementById('submit');
const card = document.getElementById('card');
const card2 = document.getElementById('card2');
const rate = document.getElementById('rate')
const title = document.getElementById('title')
let selected = ''


button.forEach(btn => {
    btn.addEventListener("click", (e) => {
        selected = e.target.innerHTML
    })
})




button.forEach(btn => {
    btn.addEventListener('click', e => {
       


    })
})


subBtn.addEventListener('click', e => {
    subBtn.style.backgroundColor = 'white';
    subBtn.style.color = '#FC7614';
    card.style.display = 'none'
    card2.style.display = 'flex'
    rate.innerHTML = `You selected ${selected} out of 5`;
    

});


