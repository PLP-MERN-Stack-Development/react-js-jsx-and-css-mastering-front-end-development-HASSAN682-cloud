export default function Card({ title, children, className = "" }) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}
