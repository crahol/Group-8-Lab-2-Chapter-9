
/* add code here  */
let inputs = document.getElementsByClassName('hilightable');

for (let i=0; i<inputs.length; i++) {
    inputs[i].addEventListener('focus', () => {
        inputs[i].classList.toggle('highlight')
    });
    inputs[i].addEventListener('blur', () => {
        inputs[i].classList.toggle('highlight')
    });
}
