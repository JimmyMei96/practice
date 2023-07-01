function booleanExample() {
    const number = 20

    if ( number === 10) {
        console.log('number is equal to 10')
    } else {
        console.log('number does not equal to 10')
    }
}

//booleanExample()

function greaterThan100(number) {
    // ! if number is greater than 100, print greater than 100
    // ! if it's not then print not greater than 100
    if (number > 100) {
        console.log('number is greater than 100')
    } else {
        console.log('number is less than 100')
    }
}

//greaterThan100(100)

function checkGrade(score) {
    if(score === 100) {
        return('You scored A+!')
    } else if(score >= 90) {
        return('You scored A')
    } else if(score >= 80) {
        return('You scored B')
    } else if(score >= 70) {
        return('You scored C')
    } else if(score >= 60) {
        return('You scored D')
    } else if(score <= 59) {
        return('You scored F :(')
    }
}
console.log(checkGrade(20))
//console.log(checkGrade(100)) // ! print A+
//console.log(checkGrade(90)) // ! print A
//console.log(checkGrade(80)) // ! print B
//console.log(checkGrade(70)) // ! print C
//console.log(checkGrade(60)) // ! print D
//console.log(checkGrade(50)) // ! print F