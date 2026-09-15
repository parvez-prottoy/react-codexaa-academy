import { useState } from 'react';
import { HiArrowRight, HiEye, HiEyeSlash, HiLockClosed, HiEnvelope } from 'react-icons/hi2';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../hooks/useToast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [searchParams] = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const { login } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }

    try {
      setIsSubmitting(true);
      await login(email, password);
      toast.success('Welcome back! Signed in successfully.');
      navigate(callbackUrl, { replace: true });
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || err.response?.data?.error || 'Invalid credentials. Please try again.';
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <SEO
        title="Sign In | Codexaa Academy"
        description="Log into your student account to access your enrolled courses, certificates, and learning track."
      />

      <div className="max-w-md w-full">
        {/* Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.05)] border border-slate-200/80 space-y-6">
          <div className="text-center space-y-1.5">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#2470A8] border border-blue-200/60">
              Student Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sign In to Codexaa
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Access your enrolled courses and accelerated curriculum.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-slate-600"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <HiEnvelope size={18} />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#2470A8] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-600"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <HiLockClosed size={18} />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#2470A8] focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <HiEyeSlash size={18} /> : <HiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-5 rounded-2xl bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-sm font-bold shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <HiArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Switch to Register */}
          <div className="pt-2 text-center text-xs text-slate-500 font-medium">
            Don&apos;t have an account yet?{' '}
            <Link
              to={`/register${callbackUrl ? `?callbackUrl=${encodeURIComponent(callbackUrl)}` : ''}`}
              className="font-bold text-[#2470A8] hover:underline"
            >
              Register now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
