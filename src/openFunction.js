
export default function openfunction()
{
    let btns = document.querySelectorAll('.btns')
   
    let cards = document.querySelectorAll('.content');
    cards.forEach((data)=>{
      
      data.addEventListener('click',()=>{
         for (let i = 0; i < cards.length; i++) {
        if (cards[i] === data) {
          cards[i].classList.add('active');
         
        } else {
          cards[i].classList.remove('active');
          btns[i].style.display="none"
        }
      }
      })
       
    })
    
}



