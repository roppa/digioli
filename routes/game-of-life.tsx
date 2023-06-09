import GameOfLifeControls from "../islands/GameOfLifeControls.tsx";

export default function GameOfLife() {
  return (
    <>
      <head>
        <title>Game of Life</title>
        <link rel="stylesheet" href="game.css" />
        <script src="game.js"></script>
      </head>
      <h1>Game of Life</h1>
      <section>
        <h2>Rules:</h2>
        <ul>
          <li>
            any live cell with fewer than two live neighbours dies, as if by
            under-population
          </li>
          <li>
            any live cell with two or three live neighbours lives on to the next
            generation
          </li>
          <li>
            any live cell with more than three live neighbours dies, as if by
            overpopulation
          </li>
          <li>
            any dead cell with exactly three live neighbours becomes a live
            cell, as if by reproduction
          </li>
        </ul>
        <p>
          Click squares to create living cells (clicking living cells kills
          them)
        </p>
      </section>
      <GameOfLifeControls />
      <section id="grid"></section>
    </>
  );
}
