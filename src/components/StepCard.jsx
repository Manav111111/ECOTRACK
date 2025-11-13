export default function StepCard({ step, title, description }) {
  return (
    <div className="p-6 bg-emerald-100 dark:bg-gray-800 rounded-xl shadow">
      <h3 className="text-2xl font-bold text-emerald-600 mb-2">{step}</h3>
      <h4 className="font-semibold text-charcoal dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
