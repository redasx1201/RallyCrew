import Header from "./components/Header";

const features = [
  {
    icon: "🎾",
    title: "Find Players Near You",
    description:
      "Discover pickleball players in your area based on skill level and availability. Never play alone again.",
  },
  {
    icon: "📅",
    title: "Coordinate Games",
    description:
      "Create or join pickup games and organized events with just a few taps. Scheduling made simple.",
  },
  {
    icon: "💬",
    title: "Real-Time Chat",
    description:
      "Message teammates and opponents directly. Group chats for your crew, one-on-one for quick coordination.",
  },
  {
    icon: "🏆",
    title: "Track Your Progress",
    description:
      "Build your player profile, showcase your skill level, and watch your game grow with every match.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-[90vh] flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              Pickleball Community
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Find Your{" "}
              <span className="text-green-600">Rally Crew</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect with pickleball players nearby, coordinate games, chat in
              real time, and join events — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/login"
                className="bg-green-600 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
              >
                Start Playing Free
              </a>
              <a
                href="#features"
                className="border border-gray-200 text-gray-700 font-semibold text-base px-8 py-4 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
              {[
                { value: "10K+", label: "Players" },
                { value: "500+", label: "Games / Week" },
                { value: "50+", label: "Cities" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-extrabold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative court lines */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-50" />
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Everything you need to play more
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                RallyCrew takes the hassle out of organizing games so you can
                focus on what matters — playing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-5 p-8 rounded-2xl border border-gray-100 hover:border-green-100 hover:bg-green-50/30 transition-colors group"
                >
                  <div className="text-4xl flex-shrink-0">{f.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Up and running in minutes
              </h2>
              <p className="text-gray-500 text-lg">Three simple steps to your next game.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  title: "Create your profile",
                  desc: "Sign up with Google, set your skill level, and tell us when you're available to play.",
                },
                {
                  step: "02",
                  title: "Discover players",
                  desc: "Browse players near you filtered by skill, location, and availability.",
                },
                {
                  step: "03",
                  title: "Rally up",
                  desc: "Send a game invite, chat, confirm the court — and go play pickleball.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-600 text-white font-extrabold text-lg mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-green-600">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Ready to find your crew?
            </h2>
            <p className="text-green-100 text-lg mb-10">
              Join thousands of pickleball players already on RallyCrew. Free to join, always.
            </p>
            <a
              href="/login"
              className="inline-block bg-white text-green-700 font-bold text-base px-10 py-4 rounded-full hover:bg-green-50 transition-colors shadow-xl"
            >
              Get Started — It&apos;s Free
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-green-500 font-bold text-lg">RallyCrew</div>
            <p className="text-sm">© {new Date().getFullYear()} RallyCrew. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
