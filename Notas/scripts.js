function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <=89
    let scoreC = score >= 70 && score <=79
    let scoreD = score >= 60 && score <=69
    let scoreF = score <= 60 && score >=0

    let scoreFinal;

    if(scoreA){
        scoreFinal = "A"
    } else if (scoreB){
        scoreFinal = "B"
    } else if (scoreC){
        scoreFinal = "C"
    } else if (scoreD){
        scoreFinal = "D"
    } else if (scoreF){
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }

    return scoreFinal
}

console.log (getScore(101))
console.log (getScore(-1))
console.log (getScore(10))
console.log (getScore(65))
console.log (getScore(86))
console.log (getScore(53))
console.log (getScore(99))