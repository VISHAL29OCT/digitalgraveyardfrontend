import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-24  bg-[url('/homebg.jpg')] bg-cover bg-center bg-no-repea">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-500 mb-6">
          Digital Graveyard 💀
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Every failed idea deserves a resting place.  
          Track your failed projects, learn from them, and grow stronger.
        </p>

        <div className="space-x-4">
          <Link
            to="/register"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="bg-red-700 hover:bg-slate-700 px-6 py-3 rounded-lg font-semibold"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 bg-slate-900">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
          Why Digital Graveyard?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">📊 Track Failures</h3>
            <p className="text-gray-300">
              Save every failed idea and analyze patterns behind them.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">🔐 Secure</h3>
            <p className="text-gray-300">
              Protected authentication using JWT.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">📈 Learn & Improve</h3>
            <p className="text-gray-300">
              Understand why ideas failed and improve your next one.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center bg-black">
        <h2 className="text-3xl font-bold mb-6">
          Ready to bury your first idea?
        </h2>
        <Link
          to="/register"
          className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold"
        >
          Create Free Account
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Digital Graveyard. Built by Vishal.
      </footer>
    </div>
  );
}

export default Home;
