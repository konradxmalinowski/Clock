import { useState, useRef } from 'react';

import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer/Timer';
import Button from './Components/Button';

export default function App() {
  const timer = useRef();
  const [time, setTime] = useState([0, 0, 0]);
  const [isTimeStarted, setIsTimeStarted] = useState(false);

  const [selectedTool, setSelectedTool] = useState('');

  const timeCondition = time[0] !== 0 || time[1] !== 0 || time[2] !== 0;

  function handleStart(type = 'stopwatch') {
    setIsTimeStarted(true);
    if (type === 'timer') {
      timer.current = setInterval(() => {
        setTime((time) => decreaseTimeValue(time));
      }, 1000);
    } else {
      timer.current = setInterval(() => {
        setTime((time) => increaseTimeValue(time));
      }, 1000);
    }
  }

  function handleEnd() {
    clearInterval(timer.current);
    setIsTimeStarted(false);
  }

  function clear() {
    setTime([0, 0, 0]);
    setIsTimeStarted(false);
  }

  function increaseTimeValue(time) {
    const updatedTime = [...time];

    if (updatedTime[2] === 59) {
      updatedTime[2] = 0;

      if (updatedTime[1] === 59) {
        updatedTime[1] = 0;
        updatedTime[0]++;
      } else updatedTime[1]++;
    } else updatedTime[2]++;

    return updatedTime;
  }

  function decreaseTimeValue(time) {
    const updatedTime = [...time];

    if (updatedTime[0] === 0 && updatedTime[1] === 0 && updatedTime[2] === 0) {
      handleEnd();
      alert('Time is up!');
      return [0, 0, 0];
    }

    if (updatedTime[2] > 0) {
      updatedTime[2]--;
    } else if (updatedTime[1] > 0) {
      updatedTime[2] = 59;
      updatedTime[1]--;
    } else if (updatedTime[0] > 0) {
      updatedTime[2] = 59;
      updatedTime[1] = 59;
      updatedTime[0]--;
    }

    return updatedTime;
  }

  const functionsAndVariables = {
    handleStart,
    handleEnd,
    clear,
    timeCondition,
    isTimeStarted,
    setTime,
    time,
  };

  return (
    <>
      <Button
        label=""
        id="come-back-button"
        onClick={() => {
          clear();
          handleEnd();
          setSelectedTool('');
        }}
        className={!selectedTool ? 'hidden' : undefined}
      >
        &lt;
      </Button>
      <div id="menu">
        {selectedTool === 'stopwatch' ? (
          <Stopwatch data={functionsAndVariables} />
        ) : selectedTool === 'timer' ? (
          <Timer data={functionsAndVariables} />
        ) : (
          <>
            <h1>Choose tool</h1>
            <div className="buttons-wrapper">
              <Button
                label="Stopwatch"
                onClick={() => setSelectedTool('stopwatch')}
              />
              <Button label="Timer" onClick={() => setSelectedTool('timer')} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
