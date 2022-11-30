// Récupération des parametres dans l'url
const query = window.location.search


let params = (new URL(document.location)).searchParams;
let nom = params.get('nom'); 
let prenom = params.get('prenom');
let email = params.get('email');
let adresse = params.get('adresse');
let ville = params.get('ville');
let color = params.get('color');
let livraison = params.get('livraison');
let derailleur = params.get('derailleur');
let cadre = params.get('cadre');
let roues = params.get('roues');

// Affichage des confettis après verification du remplissage de tous les champs
if (nom && prenom && email && adresse && ville && color && livraison && derailleur && cadre && roues) {
    let end = Date.now() + 2000;
    let colors = ['#bb0000', '#ffffff'];

    function explosion() {
        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });
            
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

    }


    window.addEventListener('load', explosion)



    // Remplissage du cadre du vélo avec la bonne couleur
    let part1 = document.querySelector('#path2458')
    let part2 = document.querySelector('#path2484')
    let part3 = document.querySelector('#path2462')
    let part4 = document.querySelector('#path3276')

    part1.style.fill = color
    part2.style.fill = color
    part3.style.fill = color
    part4.style.fill = color

    
    // résumé de la commande
    document.querySelector('#nom').innerHTML = nom
    document.querySelector('#prenom').innerHTML = prenom
    document.querySelector('#email').innerHTML = email
    document.querySelector('#adresse').innerHTML = adresse + ', ' + ville
    document.querySelector('#derailleur').innerHTML = derailleur
    document.querySelector('#livraison').innerHTML = livraison
    document.querySelector('#roues').innerHTML = roues
    document.querySelector('#cadre').innerHTML = cadre

} else { // Si tous les champs ne sont pas remplis, on redirige vers la premiere page
    alert("Tous les champs sont obligatoires, recommencez.")
    window.location.href = './index.html'
}