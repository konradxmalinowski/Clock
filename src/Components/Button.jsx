export default function Button({ label, className, children, ...props }) {
  return (
    <button {...props} className={className ? className : undefined}>
      {label} {children}
    </button>
  );
}
