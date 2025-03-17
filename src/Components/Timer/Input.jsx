export default function Input({ label, data, onChange }) {
  const idx = label === 'Hours' ? 0 : label === 'Minutes' ? 1 : 2;

  return (
    <section>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type="number"
        id={label.toLowerCase()}
        value={data.time[idx]}
        onChange={(event) => onChange(idx, event.target.value)}
        min={0}
        max={100}
      />
    </section>
  );
}
