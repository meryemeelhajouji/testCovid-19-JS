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
let score = document.querySelector("#score");
let question = document.querySelector("#question");
let precedent = document.querySelector("#precedent")
let form = document.querySelector(".form")
let progress = document.querySelector("#progress")
let mesChoix = document.querySelector("#mesChoix")
let i = 0, responseContent ="", allResponse = [];
for(let k = 0; k<= 23; k++){
    allResponse[k] = "";
}
submit(i)
form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log("name", allResponse);
    i++;
    let index = i;
    submit(index);
})
precedent.addEventListener('click', e => {
    i -= 1;
    let index = i;
    submit(index);
})
function submit(index){
    if(index != 0)
        allResponse[index] = form.reponse.value;
    score.textContent = index+1;
    console.log("index", index);
    responseContent = "";
    if(index >= 22){
        window.location.href= "./result.html";
    }
    if(questions[index].type === 'multichoix'){
        let j = 0;
        questions[index].choix.forEach(e => {
            responseContent += `<div class="input${j}">
            <label for="input${j}" class="choix d-block form-label">${e}</label>
            <input id="input${j}" class="form-check-input" type="radio" name="reponse" value="${e}" required>
            </div>
            `;
            j++;
        });
    }else if(questions[index].type === 'text'){
        responseContent = `<div class="input-group mb-3">
        <input type="number" class="form-control" placeholder="${questions[index].min}-${questions[index].max}"
        aria-label="Recipient's username" name="reponse" aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">${questions[index].unite}</span>
        </div>
        `;
    }else{
        responseContent = `<div class="input-group mb-3">
        <input type="number" class="form-control" placeholder=""
        aria-label="Recipient's username" name="reponse" aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">Text</span>
        </div>
        `;
    }
    question.textContent = questions[index].question;
    mesChoix.innerHTML = responseContent;
    progress.style.width = `${(i + 1) * 4.17}%`;
}