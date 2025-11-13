export default function StepCard({ step, title, description }) {
  return (
    <div className="p-6 bg-emerald-100 dark:bg-gray-800 rounded-xl shadow">
      <h3 className="text-2xl font-bold text-emerald-600 mb-2">{step}</h3>
      <h4 className="font-semibold">{title}</h4>
      <p>{description}</p>
    </div>
  );
}
