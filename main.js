// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

const team = document.getElementById("team-images")

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const teamArray = [
    {
        "nome" : "Wayne Barnett",
        "posizione" : "Founder & CEO",
        "immagine" : "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Caroll",
        "posizione": "Chief Editor",
        "immagine": "angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter Gordon",
        "posizione": "Office Manager",
        "immagine": "walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela Lopez",
        "posizione": "Social Media Manager",
        "immagine": "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada",
        "posizione": "Developer",
        "immagine": "scott-estrada-developer.jpg"
    },
    {
        "mome": "Barbara Ramos",
        "posizione": "Graphic Designer",
        "immagine": "barbara-ramos-graphic-designer.jpg"
    },
]


// MILESTONE 1
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < teamArray.length; i++) {
    const membroTeam = teamArray[i];
    console.log(membroTeam)
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

for (let i = 0; i < teamArray.length; i++) {

    // Definisco l'oggetto di riferimento
    let oggetto = teamArray[i] 

    // Creo un elemento div
    let div = document.createElement("div")

    // Aggiungo una classe all'elemento div
    div.classList.add("col-md-3")

    for(let key in oggetto){
        div.append((oggetto[key]))
    }

    // Aggiungo i comandi alla pagina HTML
    team.appendChild(div)
}

console.log(team);

