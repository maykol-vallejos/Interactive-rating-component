let numberContainer = document.querySelector('.rating-state-container');
let rateNumber = document.querySelector('.result-number');
let submitBtn = document.querySelector('.rating-state-button');
let ratingState = document.querySelector('.rating-state');
let thankRatingstate = document.querySelector('.thank-rating-state');

numberContainer.addEventListener('click',event=>{
    // console.log(event.target.innerText);
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;

    // console.log(numberSelected);

    if(numberSelected >0 || numberSelected <=5 ){
        submitBtn.addEventListener('click', () =>{
            // console.log('submit');
            ratingState.style.display= 'none';
            thankRatingstate.style.display = 'flex';
        });
    }
});



