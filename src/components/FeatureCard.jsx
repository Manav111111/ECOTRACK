export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-105 transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}
