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

