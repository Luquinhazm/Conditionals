const nome = document.querySelector('#nomeE')
const país = document.querySelector('#país')
const btn = document.querySelector('#send')

const res = document.getElementById("res")

btn.addEventListener('click', () => {
    if (país.value.toLowerCase() != 'brasil') {
        res.innerHTML = ( `${nome.value} você é considerado estrangeiro por nasce em ${país.value}`)
    } else{
        res.innerHTML = (`${nome.value} você é considerado Brasileiro`)
    }
})

const model = document.querySelector('#modelCar')
const vel = document.querySelector('#vel')

const btnVel = document.querySelector('#send2')

const res2 = document.querySelector('#res2')

btnVel.addEventListener('click', () => {
    if(vel.valueAsNumber > 60){
        res2.innerHTML = (`Você foi multado por excesso de velocidade`)
    }
} )