export default function Hero() {
  return (
    <section className="text-center py-32 px-6 bg-gradient-to-br from-emerald-600 to-green-500 text-white">
      <h1 className="text-5xl font-bold mb-6">Smart Carbon Footprint Tracker</h1>

      <p className="text-xl max-w-2xl mx-auto mb-8">
        Monitor your daily carbon emissions, track your progress, and take action for a greener future.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="/dashboard"
          className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
        >
          Start Tracking
        </a>

        <a
          href="/features"
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
