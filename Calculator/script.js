let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach( (button) => {

    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector(".txt").value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector(".txt").value = string;
        }
        else if(e.target.innerHTML == 'DE'){
            string = document.querySelector(".txt").value.toString().slice(0, -1);
            document.querySelector(".txt").value = string;
        }
        else{
        string = string + e.target.innerHTML;
        document.querySelector(".txt").value = string;
        }
        
    })
})

