function About() {
  return (
    <div className="mx-auto max-w-5xl">
      <section className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-linear-to-br from-slate-900 to-slate-800 px-6 py-8 text-white sm:px-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">About</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for quick, clear weather checks
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
            This app keeps the weather experience focused: search a city, review the current conditions,
            and jump straight to the five-day forecast without unnecessary clutter.
          </p>
        </div>

        <div className="grid gap-6 px-6 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-slate-700">
            <p className="text-base leading-7">
              Weather App is a React and Vite project styled with TailwindCSS and powered by live weather data.
              It is designed to feel lightweight, responsive, and easy to scan on desktop and mobile.
            </p>
            <p className="text-base leading-7">
              The interface surfaces the important details first, including current temperature, wind, humidity,
              pressure, visibility, and a clear five-day forecast for quick planning.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Stack</p>
              <p className="mt-2 text-lg font-medium text-slate-900">React, Vite, TailwindCSS</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Data</p>
              <p className="mt-2 text-lg font-medium text-slate-900">Live weather and forecast API</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Use case</p>
              <p className="mt-2 text-lg font-medium text-slate-900">Quick checks for any city</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About