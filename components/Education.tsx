export default function Education() {
  return (
    <section className="bg-[#121212] px-6 md:px-24">
      <div className="max-w-6xl mx-auto py-12 pb-32">
        <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h4 className="text-white text-lg font-semibold mb-2">Bachelor's degree, Computer Science</h4>
            <p className="text-indigo-400 text-sm mb-4">Jamal Mohamed College, India</p>
            <p className="text-gray-500 text-xs font-mono">2012 - 2015</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h4 className="text-white text-lg font-semibold mb-2">Intermediate, Intermediate in Science</h4>
            <p className="text-indigo-400 text-sm mb-4">Tribhuvan University, Nepal</p>
            <p className="text-gray-500 text-xs font-mono">2008 - 2010</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-8">Languages</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { name: "Nepali", level: "Native or Bilingual" },
            { name: "Urdu", level: "Full Professional" },
            { name: "Hindi", level: "Professional Working" },
            { name: "English", level: "Professional Working" },
            { name: "Tamil", level: "Elementary" }
          ].map((lang) => (
            <div key={lang.name} className="flex flex-col items-start px-5 py-3 bg-white/5 text-gray-300 rounded-xl border border-white/10">
              <span className="text-white font-semibold mb-1">{lang.name}</span>
              <span className="text-xs text-indigo-300">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
