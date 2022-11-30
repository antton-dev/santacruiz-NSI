// affichage de la carte quand "domicile" est selectionné
frame = document.querySelector('#iframe')
function map(state) {
    frame.style.display = state
}

const radioButtons = document.querySelectorAll('.radioButton');

for(const radioButton of radioButtons){
    radioButton.addEventListener('change', function() {
        if (document.querySelector('#magasin').checked) {
            map('block')
        } else {
            map('none')
        }
    });
}