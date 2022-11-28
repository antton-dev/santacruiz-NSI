function send(e) {
    e.preventDefault();
    let nom = document.querySelector('#nom').value;
    let prenom = document.querySelector('#prenom').value;
    let email = document.querySelector('#email').value;
    let adresse = document.querySelector('#adresse').value;
    let ville = document.querySelector('#ville').value;
    let cadre = document.querySelector('#cadre').value;
    let roues = document.querySelector('#roues').value;
    let derailleur = document.querySelector('#derailleur').value;
    let color = document.querySelector('#color').value;
    let domicile = document.querySelector('#domicile').value;
    let relais = document.querySelector('#relais').value;
    let magasin = document.querySelector('#magasin').value;

    if (nom && prenom && email && adresse && ville && cadre && roues && color) {
        if (domicile || relais || magasin) {
            alert('votre est passée');
        } else {
            alert('tous obligatoires')
        }
    } else {
        alert('tous les champs obligatoires');
        document.querySelector('#nom').setAttribute(value, nom);
    }
} 


document.querySelector('#submit').addEventListener('click', send(e))


