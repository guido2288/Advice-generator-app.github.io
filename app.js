const id = document.getElementById('numberId');
const advice = document.getElementById('advice');
const btn = document.getElementById('btn');

// data.slip.advice ==> advice
// data.slip.id ==> id number

const url = 'https://api.adviceslip.com/advice';

const generateAdvice = () => {

    fetch(url)
        .then(response =>  {
            return response.json()
        })
        .then(data => {
            id.textContent = data.slip.id;
            advice.textContent = data.slip.advice
        })

}

btn.addEventListener('click' , generateAdvice);


