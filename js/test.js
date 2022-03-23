let questions = [
    {
        question: "Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?", type: "multichoix", choix: ["oui","non","ne sait pas"], complexe: true, sousQuestion: {question: "quelle est votre température ?", type: "text", min: 34, max: 42, unite: "°C"}
    },
    {
        question: "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?", type: "multichoix", choix: ["oui","non"], complexe: false
    },
    {
        question: "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?", type: "multichoix", choix: ["oui","non"], complexe: false
    },
    {
        question: "Avez-vous un mal de gorge apparu ces derniers jours ?", type: "multichoix", choix: ["oui","non"], complexe: false
    },
    {
        question: "Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?", type: "multichoix", choix: ["oui","non"], complexe: false
    },
    {
        question: "Avez-vous une fatigue inhabituelle ces derniers jours ?", 
        type: "multichoix", choix: ["oui","non"], 
        complexe: true, 
        sousQuestion: {question: "Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?", type: "mmultichoix", choix: ["oui","non"] }
    },
    {
        question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h?", 
        type: "multichoix", choix: ["oui","non"], complexe: false
    },
    {
        question: "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?", 
        type: "multichoix", choix: ["oui","non"], complexe: false
    },
    {
        question: "Comment vous sentez-vous ?", 
        type: "multichoix", choix: ["Bien" ,"Assez bien" ,"mal" ,"très mal"], complexe: false
    },
    {
        question: "Avez-vous d’autre symptôme ?",
        type: "text",
        complexe: false
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
        choix: ["oui","non"], complexe: false
    },
    {
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",
        type: "multichoix",
        choix: ["oui","non"], complexe: false
    }
    ,{
        question: "Avez-vous une maladie chronique du foie ?",
        type: "multichoix",
        choix: ["oui","non"], complexe: false
    }
    ,{
        question: "Êtes-vous enceinte ?",
        type: "multichoix",
        choix: ["oui","non","Homme"], complexe: false
    }
    ,{
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires?",
        type: "multichoix",
        choix: ["oui","non","Ne sait pas"], complexe: false
    }
    ,{
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
        type: "multichoix",
        choix: ["oui","non","Ne sait pas"], complexe: false
    }
]
let i = 1
let score = document.querySelector("#score")
let question = document.querySelector("#question")