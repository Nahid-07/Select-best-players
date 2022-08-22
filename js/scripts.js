const playerArray = [];
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
// common function
function getInputFields(elementId){
    const playerField = document.getElementById(elementId);
    const playerInputString = playerField.value;
    const playerInputNumber = parseInt(playerInputString);
    return playerInputNumber
}

document.getElementById("btn-expense").addEventListener('click',function(){
    const playerNumber = getInputFields('per-player-field')
    const total = playerNumber*playerArray.length;
    const totalPlayerCost = document.getElementById('total-player-cost');
    totalPlayerCost.innerText = total
})


