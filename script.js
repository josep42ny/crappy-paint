document.addEventListener("click", (event) => {
    switch (event.target.id) {
        case "buildGridBtn":
            buildGrid(getInput());
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
            console.log(gridSize, typeof Number(gridSize));
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
        
        function getInput() {
            const rawInput = Number(prompt("Enter a size between 1-50")); 
            if(validate(rawInput)) {
                return rawInput;
            } else {
                return getInput();
            }
        }

        function validate(raw) {
            return (raw >= 1 && raw <= 100) ? true : false;
        }