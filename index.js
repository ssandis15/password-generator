const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];




function randomPassword(){
    document.getElementById('password-el').textContent = "  "
    document.getElementById('password-el2').textContent = "  "
    for (let i = 0; i < 15; i++){
        
        let randomNumber = Math.floor(Math.random() * characters.length );
        let index = characters[randomNumber]
        document.getElementById('password-el').textContent += index
        
        let randomNumber2 = Math.floor(Math.random() * characters.length );
        let index2 = characters[randomNumber2]
        document.getElementById('password-el2').textContent += index2
        }

}
