




function incrementButton()
{
    var element =document.getElementById('cartincrement');
    var value =element.innerHTML;
    ++ value;
    console.log(value);
    document.getElementById('cartincrement').innerHTML=value;
}
 
function menuToggle() {
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle( 'active')
    }

function placeorder() {
      const placeorder = document.querySelector('.placeorder');
      placeorder.classList.toggle( 'aclick')
  }   


  function buynow() {
    alert ("please login")
}   