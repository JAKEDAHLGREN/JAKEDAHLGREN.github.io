var keys = Math.floor(Math.random() * 9)
var sadFace = Math.floor(Math.random() * 9)
if(keys === sadFace) {
   sadFace = Math.floor(Math.random() * 9)
}
const treasurehunt = (location) => {
       if(location === keys) {
      document.getElementById(location).innerHTML = "🔑"
      setTimeout(function() {
        alert ("Congrats! You found your keys!")
      }, 0.5)
      
   }
   else if(location === sadFace) {
      document.getElementById(location).innerHTML = "😥"
      setTimeout(function() {
        alert ("Congrats! Your keys are forever gone.Time to call a locksmith!")
      }, 0.5)
   }    
   else {
      document.getElementById(location).innerHTML = "🔍"
   }   
}













 