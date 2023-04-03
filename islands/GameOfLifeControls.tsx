import { useEffect, useState } from "preact/hooks";

export default function GameOfLifeControls() {
  const [startButtonDisabled, setStartButtonDisabled] = useState(false);
  const [stopButtonDisabled, setStopButtonDisabled] = useState(true);

  const startButtonOnclick = (event) => {
    // setStartButtonDisabled(true);
    // setStopButtonDisabled(false);
    window.game.start();
  };

  const stopButtonOnclick = (event) => {
    // setStartButtonDisabled(false);
    // setStopButtonDisabled(true);
    window.game.stop();
  };

  useEffect(() => {
    window.game.drawGrid(window.game.generate(50));
    window.game.attachGridEventHandler();
  });

  return (
    <>
      <section id="controls">
        <button
          id="start"
          // disabled={startButtonDisabled}
          onClick={startButtonOnclick}
        >
          Start
        </button>
        <button
          id="stop"
          // disabled={stopButtonDisabled}
          onClick={stopButtonOnclick}
        >
          Stop
        </button>
      </section>
    </>
  );
}
