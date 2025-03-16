export default function SetPanel({ data }) {
  function handleChange(idx, value) {
    data.setTime((time) => {
      const updatedTime = [...time];
      updatedTime[idx] = parseInt(value);

      return updatedTime;
    });
  }

  return (
    <section id="column-wrapper">
      <section>
        <label htmlFor="hours">Hours</label>
        <input
          type="number"
          className="time"
          id="hours"
          value={data.time[0]}
          onChange={(event) => handleChange(0, event.target.value)}
        />
      </section>
      <section>
        <span>:</span>
      </section>
      <section>
        <label htmlFor="minutes">Minutes</label>
        <input
          type="number"
          className="time"
          id="minutes"
          value={data.time[1]}
          onChange={(event) => handleChange(1, event.target.value)}
        />
      </section>
      <section>
        <span>:</span>
      </section>
      <section>
        <label htmlFor="seconds">Seconds</label>
        <input
          type="number"
          className="time"
          id="seconds"
          value={data.time[2]}
          onChange={(event) => handleChange(2, event.target.value)}
        />
      </section>
    </section>
  );
}
