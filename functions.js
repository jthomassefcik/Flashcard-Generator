module.exports = {
    inquirer: require('inquirer'),
    basicArray: [],
    clozeArray: [],
    queryBegin: function () {
        module.exports.inquirer.prompt([
            {
                type: 'list',
                name: 'test',
                message: 'Do you want to create a Basic or Closed card?',
                choices: ['Basic Card', 'Cloze Card']
            }
        ]).then(function(answers) {
            if (answers.test === 'Basic Card') {
                console.log('Basic Card Test Worked');
                module.exports.createBasic();
            }
            else if (answers.test === 'Cloze Card') {
                console.log('Cloze Card Test Worked');
                    // Finish this !
                module.exports.createCloze();
            }
            
        })
    },

    createBasic: function () {
        module.exports.inquirer.prompt([
            {
                type: 'input',
                name: 'front',
                message: 'Type in the front of the card.'
            },
            {
                type: 'input', 
                name: 'back',
                message: 'Type in the back of your card.'
            }
        ]).then(function(answers){
            var basicCard = require('./BasicCard.js')
            var x = new basicCard(answers.front, answers.back)
            module.exports.basicArray.push(x);
            console.log(module.exports.basicArray);
        })
    },

    createCloze: function() {
        // DO THE SAME THING HERE YOU DID STARTING ON LINE 22 ( *** SEE LINE 13)
        module.exports.inquirer.prompt([
            {
                type: 'input',
                name: 'completeText',
                message: 'Type in your sentence.'
            },
            {
                type: 'input', 
                name: 'clozeText',
                message: "Type in the part of your sentence you'd like to cloze."
            }
        ]).then(function(answers){
            var clozeCard = require('./ClozeCard.js');
            var x = new clozeCard(answers.completeText, answers.clozeText);
            module.exports.clozeArray.push(x);
            console.log(module.exports.clozeArray);
        })
    }
}



