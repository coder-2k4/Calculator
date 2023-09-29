let string = "";
let buttons = document.querySelectorAll('.btn');
let input = document.querySelector('input');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == "=") {
            console.log(e.target);
            string = eval(string);
            input.value = string;

        }
        else if (e.target.innerHTML == "C") {
            string = " ";
            input.value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            input.value = string;
        }

    })
})
