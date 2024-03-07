document.addEventListener("click", (event) => {
    switch (event.target.id) {
        case "gridBtn":
            buildGrid(document.querySelector("#gridSize").value);
        default:
            return;
    }
});

function buildGrid(gridSize) {
    const grid = document.querySelector("#gridArea");
    for (let i = 0; i < gridSize; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        grid.appendChild(tile);
    }
}