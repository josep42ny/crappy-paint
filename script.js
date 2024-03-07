document.addEventListener("click", (event) => {
    switch (event.target.id) {
        case "gridBtn":
            buildGrid(document.querySelector("#gridSize").value);
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
    const tileSize = 500/gridSize;
    grid.textContent = "";
    for (let i = 0; i < gridSize*gridSize; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.width = tileSize + "px";
        tile.style.height = tileSize + "px";
        grid.appendChild(tile);
    }
}