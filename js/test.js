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
        type: "multichoix", choix: ["Bien" ,"Assez bien" ,"mal" ,"très mal"]
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
        choix: ["oui","non","Homme"]
    }
    ,{
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires?",
        type: "multichoix",
        choix: ["oui","non","Ne sait pas"]
    }
    ,{
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
        type: "multichoix",
        choix: ["oui","non","Ne sait pas"]
    }
]
let i = 1
let score = document.querySelector("#score")
let question = document.querySelector("#question")
let precedent =  document.querySelector("#precedent")
let suivent = document.querySelector("#suivent")
let ligne = document.querySelector("#ligne")
let text = document.querySelector("#formulaire")



    
precedent.addEventListener('click',()=>{
    if (i == 1) {

        precedent.disabled = true;
        suivent.disabled = false;

    } else {
        i--;

       affichage()
    }
})
suivent.addEventListener('click',()=>{
    
    if (i == 24) {

        suivent.disabled = true;
        precedent.disabled = false;

   } else {
       i++;

     affichage();

   }

})

function affichage() {
    if(i==1){
        precedent.style.display="none"
    }else{
    
        precedent.style.display="block"
    }
    
    if(questions[i-1].type == "multichoix"){
        formulaire.innerHTML = ""
        questions[i-1].choix.forEach((choix, index) => {
            formulaire.innerHTML += 
            `<div>
                <label for="${index}" class="choix">${choix}</label>
                <input class="form-check-input" type="radio" id="${index}" name="reponse" value="${choix}" required>
            </div> `
        })
    }else if(questions[i-1].type == "text"){
        formulaire.innerHTML = 
        `<div class="input-group mb-3">
            <input type="number" class="form-control" name="reponse" placeholder="${questions[i-1].min} - ${questions[i-1].max}">
            <span class="input-group-text">${questions[i-1].unite}</span>
        </div> `
    }else{
        formulaire.innerHTML = 
        `<div class="mb-3">
            <input type="text" name="reponse" class="form-control">
        </div>`
    }
    let cal = i * 4.17;
    ligne.style.width= `${cal}%`
    score.innerHTML= i;
    question.innerHTML=questions[i-1].question;
}

