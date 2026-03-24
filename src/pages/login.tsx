import { useState } from "react";
import { Eye, EyeOff, ArrowLeft, Sun, Moon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { setToken } from "@/lib/auth";
import { useTheme } from "@/lib/theme";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/index";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (!emailRe.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // TODO: replace with real auth call
    // Mock successful login: store a token and redirect back to `from`
    setToken("demo-token");
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <ThemeToggle />
      <div className="w-full max-w-md bg-card p-8 rounded-lg shadow relative border border-slate-200 dark:border-slate-700">
        <button
          type="button"
          onClick={() => navigate('/')}
          aria-label="Go to signup"
          className="absolute left-4 top-4 inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted/20 dark:text-foreground dark:hover:bg-muted/30"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-semibold mb-2 text-center text-foreground">Sign in</h1>
        <p className="text-sm text-muted-foreground mb-6 text-center">Sign in to your account to continue.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-slate-200 dark:border-slate-600 bg-transparent px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-slate-200 dark:border-slate-600 bg-transparent px-3 py-2 pr-10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your password"
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground p-1"
                aria-label={show ? "Hide password" : "Show password"}
              >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Sign in
            </button>


          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-slate-600">Don't have an account? </span>
            <button
              className="text-sm text-indigo-600 hover:underline"
              onClick={() => navigate('/signup', { state: { from: (location.state as any)?.from } })}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      title="Toggle theme"
      className="fixed top-4 right-4 z-50 inline-flex items-center justify-center p-2 rounded-md border bg-card"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};
