export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition transform duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
