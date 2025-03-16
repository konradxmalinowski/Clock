import Button from './Button';

export default function Stopwatch({ data }) {
  return (
    <div id="stopwatch">
      <h2>
        {data.time[0].toString().padStart(2, 0)}:
        {data.time[1].toString().padStart(2, 0)}:
        {data.time[2].toString().padStart(2, 0)}
      </h2>

      <div className="buttons-wrapper">
        <Button
          label={data.timeCondition ? 'Resume' : 'Start'}
          onClick={data.handleStart}
          disabled={data.isTimeStarted}
        />
        <Button
          label="Stop"
          disabled={!data.isTimeStarted}
          onClick={data.handleEnd}
        />
        <Button label="Clear" onClick={data.clear} />
      </div>
    </div>
  );
}
