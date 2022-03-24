let questions = [
    {
        question: "Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?", type: "multichoix", choix: ["oui","non","ne sait pas"]
    },
    {
        question: "quelle est votre température ?", type: "text", min: 34, max: 42, unite: "°C"
    },
    {
        question: "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?", type: "multichoix", choix: ["oui","non"]
    },
    {
        question: "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?", type: "multichoix", choix: ["oui","non"]
    },
    {
        question: "Avez-vous un mal de gorge apparu ces derniers jours ?", type: "multichoix", choix: ["oui","non"]
    },
    {
        question: "Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?", type: "multichoix", choix: ["oui","non"]
    },
    {
        question: "Avez-vous une fatigue inhabituelle ces derniers jours ?", 
        type: "multichoix", choix: ["oui","non"]
    },
    {
        question: "Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?", type: "multichoix", choix: ["oui","non"]
    },
    {
        question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h?", 
        type: "multichoix", choix: ["oui","non"]
    },
    {
        question: "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?", 
        type: "multichoix", choix: ["oui","non"]
    },
    {
        question: "Comment vous sentez-vous ?", 
        type: "multichoix", choix: ["bien" ,"assez bien" ,"mal" ,"très mal"]
    },
    {
        question: "Avez-vous d’autre symptôme ?",
        type: "libre"
    },
    {
        question: "Quel est votre âge ?", type: "text", min: 15, max: 110, unite: "ans"
    },
    {
        question: "Quel est votre poids ?", type: "text", min: 20, max: 220, unite: "kg"
    },
    {
        question: "Quelle est votre taille ?", type: "text", min: 80, max: 250, unite: "cm"
    },
    {
        question: "Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ?  Ou prenez-vous un traitement à visée cardiologique ?", type: "multichoix", choix: ["oui","non","ne sait pas"]
    },
    {
        question: "Êtes-vous diabétique ? ", type: "multichoix", choix: ["oui","non","ne sait pas"]
    },
    {
        question: "Avez-vous ou avez-vous eu un cancer ? ", type: "multichoix", choix: ["oui","non"]
    },
    {
        question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        type: "multichoix",
        choix: ["oui","non"]
    },
    {
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",
        type: "multichoix",
        choix: ["oui","non"]
    }
    ,{
        question: "Avez-vous une maladie chronique du foie ?",
        type: "multichoix",
        choix: ["oui","non"]
    }
    ,{
        question: "Êtes-vous enceinte ?",
        type: "multichoix",
        choix: ["oui","non","homme"]
    }
    ,{
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires?",
        type: "multichoix",
        choix: ["oui","non","ne sait pas"]
    }
    ,{
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
        type: "multichoix",
        choix: ["oui","non","ne sait pas"]
    }
]
let i = 0
let form = document.querySelector("form")
let score = document.querySelector("#score")
let question = document.querySelector("#question")
let formulaire = document.querySelector("#formulaire")
let precedent = document.querySelector("#precedent")
let main = document.querySelector("main")
let bar = document.querySelector(".progress-bar")
let affichage = () => {
    score.textContent = i+1
    let calcul = 4.17 * (i+1)
    bar.style.width = `${calcul}%`
    if(i == 0)
        precedent.style.display = "none"
    else
        precedent.style.display = "block"
    question.textContent = questions[i].question
    if(questions[i].type == "multichoix"){
        formulaire.innerHTML = ""
        questions[i].choix.forEach((choix, index) => {
            formulaire.innerHTML += `
            <div>
                <label for="${index}" class="choix">${choix}</label>
                <input class="form-check-input" type="radio" id="${index}" name="reponse" value="${choix}" required>
            </div> `
        })
    }else if(questions[i].type == "text"){
        formulaire.innerHTML = `
        <div class="input-group mb-3">
            <input type="number" class="form-control" name="reponse" placeholder="${questions[i].min} - ${questions[i].max}">
            <span class="input-group-text">${questions[i].unite}</span>
        </div> `
    }else{
        formulaire.innerHTML = `
        <div class="mb-3">
            <input type="text" name="reponse" class="form-control">
        </div>`
    }
}
affichage()
form.addEventListener("submit",(e) => {
    e.preventDefault()
    if(questions[i].type == "text"){
        if((form.reponse.value >= questions[i].min) && (form.reponse.value <= questions[i].max)){
            console.log(form.reponse.value)
        }
        else{
            alert("Valeur non valide")
            return
        }
    }else{
        console.log(form.reponse.value)
    }
    i++
    if(i == 24){
        main.innerHTML = "le resultat"
    }else
        affichage()
})
precedent.addEventListener("click", () => {
    i--
    affichage()
})