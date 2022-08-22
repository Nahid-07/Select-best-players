const playerArray = [];
// common function
function getInputFields(elementId){
    const playerField = document.getElementById(elementId);
    const playerInputString = playerField.value;
    const playerInputNumber = parseInt(playerInputString);
    return playerInputNumber
}
// common function 2
function covertTextToNumber(elementId){
    const CostFieldString = getInputFields(elementId);
    const CostFieldInput = parseInt(CostFieldString);
    return CostFieldInput
}
function getButtons(elementId){
    const PlayerName = elementId.parentNode.children[0].innerText;
    const playerObject = {
        PlayerName : PlayerName
    };
    const listContainer = document.getElementById('list-item');
    const listItems = document.createElement('li');
    listItems.innerText = playerObject.PlayerName;
    playerArray.push(listItems)
    if(playerArray.length >5){
        alert('Sorry you cannot select more than 5');
        return;
    }
    listContainer.append(listItems);
}
document.getElementById("btn-expense").addEventListener('click',function(){
    const playerNumber = getInputFields('per-player-field')
    const total = playerNumber*playerArray.length;
    const totalNumber = parseInt(total)
    const totalPlayerCost = document.getElementById('total-player-cost');
    totalPlayerCost.innerText = totalNumber;
    console.log(totalNumber)
})
document.getElementById('btn-over-all-cost').addEventListener('click',function(){
    const mangerCostFieldInput = covertTextToNumber('manger-cost-field');
    const coachCostFieldInput = covertTextToNumber('coach-cost-field')
    const totalPlayerCosElement = document.getElementById('total-player-cost');
    const totalPlayerCosString = totalPlayerCosElement.innerText;
    const totalPlayerCostNumber = parseInt(totalPlayerCosString);
    const costOfManagerAndCoachPlayer = mangerCostFieldInput + coachCostFieldInput + totalPlayerCostNumber;
    const overAllTotalCost = document.getElementById('total-cost-of-all');
    overAllTotalCost.innerText = costOfManagerAndCoachPlayer;
})