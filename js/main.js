// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Aggiugno evento al clic sul btn Play

const btnPlay = document.querySelector(".btn-play");

const wrapGrid = document.querySelector(".wrap-grid");

const difficultLevel = document.getElementById("level-select");

btnPlay.addEventListener("click", function () {
  //  reset di h2
  wrapGrid.innerHTML = "";

  //   Creare la griglia a seconda del livello che viene selezionato dall'utente
  const gridLevel = difficultLevel.value;
  //   console.log(gridLevel);

  let cellsNumber;
  let cellPerSide;

  switch (gridLevel) {
    case "1":
      cellsNumber = 100;
      cellPerSide = 10;
      break;

    case "2":
      cellsNumber = 81;
      cellPerSide = 9;
      break;

    case "3":
      cellsNumber = 49;
      cellPerSide = 7;
  }
  //   console.log(cellsNumber);
  //   console.log(cellPerSide);

  // Generazione della griglia totale (div con classe grid)
  const grid = document.createElement("div");
  grid.classList.add("grid");

  //   Generare le celle/square
  for (let i = 1; i <= cellsNumber; i++) {
    const squareElement = createGridSquare(i, cellPerSide);
    // Aggiungo allo square Element la classe square-clicked quado clicco sopra uno degli square
    squareElement.addEventListener("click", function () {
      this.classList.add("square-clicked");
    });
    // Aggiungo alla grid lo square Element
    grid.append(squareElement);
  }
  wrapGrid.append(grid);
});

/*****************************
 FUNZIONI
 *****************************/

function createGridSquare(num, cells) {
  // Inserire numeri crescenti con span
  const span = document.createElement("span");
  span.append(num);

  // Creare nodo square
  const square = document.createElement("div");
  square.classList.add("square", "square-number");

  square.style.width = `calc(100% / ${cells})`;

  square.style.height = `calc(100% / ${cells})`;

  //   Inserisco lo span nel nodo square
  square.append(span);

  //   Ritorno
  return square;
}
