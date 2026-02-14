// create documen and set innertext of innerhtml
const newChild = document.createElement("li");
newChild.innerText = "Dybala";

// find the parent where the child will be appended
const playerlist = document.getElementById("player-list");

// append the child to the parent
playerlist.appendChild(newChild);