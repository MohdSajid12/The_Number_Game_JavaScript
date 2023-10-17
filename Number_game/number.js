document.addEventListener('DOMContentLoaded', function() {
    let random = Math.trunc((Math.random()*20)+1)
    let score = 19
    let highScore = 0;
   
    let again = document.querySelector('.playAgain');

    let text = document.querySelector('.correct').textContent;
     let button = document.querySelector('.check');
     let input = document.querySelector('.input');
     console.log(input);
     button.addEventListener('click',function(){
        let inputValue = document.querySelector('.value').value;
       if(!inputValue)
       {
        let text = document.querySelector('.correct').textContent='please fill any value';
       }
       else if(inputValue>random){
        if(score >=0){
            let text = document.querySelector('.correct').textContent='too high';
            let sc = score--;
            let displayScore = document.querySelector('.score').innerHTML=sc;
        }    else
        {
            let text = document.querySelector('.correct').textContent='you lost the game';
        }  
       }
       else if(inputValue<random)
       {
        if(score >=0){
            let text = document.querySelector('.correct').textContent='too low';
            let sc = score--;
            let displayScore = document.querySelector('.score').innerHTML=sc;
        }  else
        {
            let text = document.querySelector('.correct').textContent='you lost the game';
        }
       }
       else if (inputValue==random)
       {
           
           let text = document.querySelector('.correct').textContent='You Won';
           let body = document.querySelector('body').style.backgroundColor ='#60b347';
           let numberbox = document.querySelector('.number').textContent=random;


       }
     })


     again.addEventListener('click' ,function(){
        let random = Math.trunc((Math.random()*20)+1);
        let numberbox = document.querySelector('.number').textContent='?';
        let inputValue = document.querySelector('.value').value = '';
        let body = document.querySelector('body').style.backgroundColor ='#f0f0f0';
     })

});
;
