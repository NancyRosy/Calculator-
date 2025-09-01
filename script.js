const affichage = document.getElementById('affichage');
const boutons = document.querySelectorAll('button');

let valeurCourante = '';
let valeurPrecedente = '';
let operation = '';

boutons.forEach(bouton => {
  bouton.addEventListener('click', () => {
    const valeurBouton = bouton.textContent;

    if (valeurBouton >= '0' && valeurBouton <= '9') {
      valeurCourante += valeurBouton;
      affichage.value = valeurCourante;
    } else if (valeurBouton === '+' || valeurBouton === '-' || valeurBouton === '*' || valeurBouton === '/') {
      valeurPrecedente = valeurCourante;
      valeurCourante = '';
      operation = valeurBouton;
    } else if (valeurBouton === '=') {
      const resultat = eval(`${valeurPrecedente} ${operation} ${valeurCourante}`);
      affichage.value = resultat;
      valeurCourante = resultat.toString();
      valeurPrecedente = '';
      operation = '';
    } else if (valeurBouton === 'E') {
      valeurCourante = '';
      valeurPrecedente = '';
      operation = '';
      affichage.value = '';
    }
  });
});