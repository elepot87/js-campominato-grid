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
  console.log(cellsNumber);
  console.log(cellPerSide);
});
