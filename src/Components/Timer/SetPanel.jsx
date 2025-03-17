import Input from './Input';

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
      <Input label="Hours" data={data} onChange={handleChange} />
      <section>
        <span>:</span>
      </section>
      <Input label="Minutes" data={data} onChange={handleChange} />
      <section>
        <span>:</span>
      </section>
      <Input label="Seconds" data={data} onChange={handleChange} />
    </section>
  );
}
