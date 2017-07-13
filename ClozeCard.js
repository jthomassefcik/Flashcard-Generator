class clozeCard {
    constructor(completeText, clozeText) {
        if (!completeText.includes(clozeText)) {
            console.log('ERROR: Cloze Deletion text not found in Complete Text')
        }
        this.completeText = completeText;
        this.clozeText = clozeText;
        this.partialText = completeText.replace(clozeText, '...');
    }
}

module.exports = clozeCard;