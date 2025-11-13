export default function Hero() {
  return (
    <section className="text-center py-32 px-8 bg-gradient-to-br from-emerald-400 to-green-600 text-white">
      <h1 className="text-5xl font-bold mb-6 animate-fadeIn">
        Smart Carbon Footprint Tracker
      </h1>

      <p className="text-xl max-w-2xl mx-auto mb-8">
        Monitor your daily carbon emissions, track your progress, and take
        climate-positive actions.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="/dashboard"
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          Start Tracking
        </a>

        <a
          href="/features"
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
