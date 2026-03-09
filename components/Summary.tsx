export default function Summary() {
  return (
    <section className="bg-[#121212] pt-32 px-6 md:px-24">
      <div className="max-w-6xl mx-auto pb-12 border-b border-white/5">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
          <h3 className="text-xl font-bold text-white mb-4">Summary</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Experienced Test Engineer with 9+ years in IT, specializing in test strategy, execution, and estimation. Strong collaborator with developers, business analysts, and stakeholders. Proven testing team leader with expertise in automation frameworks, CI/CD pipelines, and emerging testing technologies including AI-assisted testing tools. Passionate about clean code practices and knowledge sharing.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/sadabnepal" target="_blank" className="px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider rounded-xl border border-indigo-500/30 transition-all pointer-events-auto">LinkedIn</a>
            <a href="https://github.com/sadabnepal" target="_blank" className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-xl border border-white/10 transition-all pointer-events-auto">GitHub</a>
            <a href="https://www.youtube.com/@TestAutomationHub" target="_blank" className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider rounded-xl border border-red-500/20 transition-all pointer-events-auto">YouTube</a>
          </div>
        </div>
      </div>
    </section>
  );
}
