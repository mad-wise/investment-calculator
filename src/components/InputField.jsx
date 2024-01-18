export default function InputField({ name, value, onChange }) {
  return (
    <p>
      <label>{name}</label>
      <input type="number" required value={value} onChange={onChange} />
    </p>
  );
}
