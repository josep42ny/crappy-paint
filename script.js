document.addEventListener("click", (event) => {
    switch (event.target.id) {
        case "buildGridBtn":
            const selectedSize = getInput();
            if(selectedSize === null){return;}
            buildGrid(selectedSize);
            return;
        default:
            return;
    }
});

document.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("tile")) {
        event.target.style.backgroundColor = "black";
    }
});

buildGrid(10);
function buildGrid(gridSize) {
    const grid = document.querySelector("#gridArea");
    const tileSize = 500 / gridSize;
    grid.textContent = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.width = tileSize + "px";
        tile.style.height = tileSize + "px";
        grid.appendChild(tile);
    }
}

function getInput() {
    const input = Number(prompt("Enter a size between 1-50", 16));
    const isValidInput = validate(input); 
    if (isValidInput) {
        return input;
    } else {
        return null;
    } 
}

function validate(raw) {
    return (raw >= 1 && raw <= 50) ? true : false;
}