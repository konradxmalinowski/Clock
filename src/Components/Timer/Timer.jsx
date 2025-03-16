import Button from '../Button';
import SetPanel from './SetPanel';

export default function Timer({ data }) {
  return (
    <div id="timer">
      <SetPanel data={data} />

      <div className="buttons-wrapper">
        <Button
          label="Start"
          onClick={() => data.handleStart('timer')}
          disabled={data.isTimeStarted || !data.timeCondition}
        />
        <Button
          label="Stop"
          onClick={() => data.handleEnd('timer')}
          disabled={!data.isTimeStarted || !data.timeCondition}
        />
        <Button
          label="Clear"
          onClick={data.clear}
          disabled={!data.isTimeStarted || !data.timeCondition}
        />
      </div>
    </div>
  );
}
