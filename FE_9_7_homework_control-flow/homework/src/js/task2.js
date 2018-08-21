// Your code goes here
let maxMagicNumber = 5;
let playGame = confirm('Do you want to play a game?');
if(playGame) {
    let prize1 = 10;
    let prize2 = 5;
    let prize3 = 2;
    let total = 0;
    while (playGame === true) {
        let numberOfAttemps = 0;
        const magicNumber = Math.floor(Math.random() * maxMagicNumber);
        while (numberOfAttemps < 3) {
            numberOfAttemps++;
            let userNumber ;
            if(numberOfAttemps === +'1'){
                userNumber = prompt('Choose a number in range [0; '+ maxMagicNumber + ']' +'\n'
                +'Attempts left : 3'+ '\n'
                +'Total prize : ' + total + '$' + '\n'
                +'Possible prize on current attempt : ' + prize1 +'$')
            }else if (numberOfAttemps === +'2'){
                userNumber = prompt('Choose a number in range [0; '+ maxMagicNumber + ']' +'\n'
                    +'Attempts left : 2'+ '\n'
                    +'Total prize : ' + total + '$'+'\n'
                    +'Possible prize on current attempt : ' + prize2 +'$')
            }else if(numberOfAttemps === +'3'){
                userNumber = prompt('Choose a number in range [0; '+ maxMagicNumber + ']' +'\n'
                    +'Attempts left : 1'+ '\n'
                    +'Total prize : ' + total + '$' + '\n'
                    +'Possible prize on current attempt : ' + prize3 +'$')

            }
            if (magicNumber === +userNumber) {
                if (numberOfAttemps === +'1') {
                    total += prize1;
                } else if (numberOfAttemps === +'2') {
                    total += prize2;
                } else if (numberOfAttemps === +'3') {
                    total += prize3;
                }
                maxMagicNumber *= +'2';
                alert('Congratulation!   Your prize is: '+ total + ' $');
                playGame = confirm('Do you want to continue?');
                if(playGame === true){
                    prize1 *= +'3';
                    prize2 *= +'3';
                    prize3 *= +'3';
                }else{
                    alert('Thank you for a game. Your prize is: ' + total +'$')
                }
                break;
            } else if (numberOfAttemps === 3 && magicNumber !== +userNumber) {
                alert('Thank you for a game. Your prize is: 0$');
                prize1 = +'10';
                prize2 = +'5';
                prize3 = +'2';
                total = 0;
                playGame = confirm('Would you like to play again?');
                maxMagicNumber= +'5';
                break;
            }
        }
    }
} else {
    alert('You did not become a millionaire, but can.');
}