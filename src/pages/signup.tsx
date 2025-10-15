import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { registerUser, setToken } from "@/lib/auth";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/index";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    const res = registerUser(email, password, name);
    if (!res.success) {
      setError(res.message || "Registration failed");
      return;
    }

    // Auto-login after signup and go to the intended page or dashboard
    setToken("demo-token");
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-2 text-center">Create account</h1>
        <p className="text-sm text-slate-500 mb-6 text-center">Create a new account to access FinAI.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Full name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2"
              placeholder="Create a password"
            />
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Create account
            </button>

            <button
              type="button"
              className="text-sm text-slate-600 hover:underline"
              onClick={() => navigate('/login')}
            >
              Have an account?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
