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
        question: "Quel est votre âge ?", type: "text", min: 5, max: 120, unite: "ans"
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
let r = []
for(let k = 0; k < 24; k++){
    r[k] = '';
}
let affichage = () => {
    score.textContent = i+1
    bar.style.width = `${4.17 * (i+1)}%`
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
            r[i] = form.reponse.value;
        }
        else{
            alert("Valeur non valide")
            return
        }
    }else{
        r[i] = form.reponse.value;
    }
    i++
    if(i == 24){
        main.innerHTML = `
                        <div class="board-stepper fw-bold text-center d-flex justify-content-around align-items-center">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10">
                                <ellipse id="Ellipse_270" data-name="Ellipse 270" cx="5.5" cy="5" rx="5.5" ry="5" fill="#1078ad" />
                            </svg>
                            <div class="information">Informations</div>
                        </div>
                        <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10">
                            <ellipse id="Ellipse_270" data-name="Ellipse 270" cx="5.5" cy="5" rx="5.5" ry="5" fill="#1078ad" />
                        </svg>
                            <div class="information">Questionnaire</div>
                        </div>
                        <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
                            <circle id="Ellipse_271" data-name="Ellipse 271" cx="19.5" cy="19.5" r="19.5" fill="#88b7d3" />
                            <circle id="Ellipse_275" data-name="Ellipse 275" cx="5" cy="5" r="5" transform="translate(15 14)"
                            fill="#f4cf1b" />
                        </svg>
                            <div class="information">Résultats</div>
                        </div>
                        </div>
                        <section class="text-center d-flex justify-content-center align-items-center w-100 p-5  ">
                        <div class="card   px-5 py-5  mb-1 border-1 style_card ">
                        <h5> Résultats </h5>
                        <p class="title">Appelez le 141</p>
                        <hr>
                        <p>Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre
                            température deux fois par jour. Rappel des mesures d’hygiène.</p>

                        </div>

                        </div>

                        </section>
                        <div class=" text-center">
                        <button onclick="window.location.href='information.html'" type="button" class=" btn btn-lg  button m-2 ">Recommencer le test</button>
                        </div>
                        `;
    }else
        affichage()
})
precedent.addEventListener("click", () => {
    i--
    affichage()
})

messageAffiche = [
    ` nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes. `,
    `téléconsultation ou médecin généraliste ou visite à domicile  préciser “appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.” 
   `,
    `appel 141 `,
    ` téléconsultation ou médecin généraliste ou visite à domicile  `,
    `Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute`,
    `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil. 
   `,
    ` Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. `,
  ];

let facteurGravite = () => {
    let f = 0
    if(r[0] == "oui" && (r[1] <= 35.4 || r[1] >= 39))
        f++
    if(r[6] == "oui" && r[7] == "oui")
        f++
    if(r[8] == "oui")
        f++
    if(r[9] == "oui")
        f++
    if(r[10] == "mal" || r[10] == "très mal")
        f++
    if(f > 0){
        if(r[1] >= 39 && r[6] == "oui" && (r[10] == "mal" || r[10] == "très mal"))
            return [f, "mineur"]
        else if(r[9] == "oui" && r[8] == "oui" && r[1] <= 35.4)
            return [f, "majeur"]
    }else{
        return [f, null]
    }
}

let facteurPronostic = () => {
    let p = 0
    if(r[12] >= 70 || (r[14] == "oui" || r[14] == "ne sait pas") || r[15] == "oui" || r[16] == "oui" || r[17] == "oui" || r[18] == "oui" || r[19] == "oui" || r[20] == "oui" || r[21] == "oui" || r[22] == "oui" )
        p++
    return p
}