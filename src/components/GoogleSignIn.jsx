import { useState } from 'react';
import { LogOut, User, CheckCircle2, ShieldCheck } from 'lucide-react';

const GoogleIcon = () => (
  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

export default function GoogleSignIn({ onSignIn, onSignOut, currentUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // A list of Google accounts for the picker, featuring the user's real email
  const accounts = [
    {
      name: 'stxrly441',
      email: 'stxrly441@gmail.com',
      avatarColor: 'bg-emerald-600',
      status: 'Active AI Studio Session'
    },
    {
      name: 'Guest Player',
      email: 'guest.player@gmail.com',
      avatarColor: 'bg-zinc-700',
      status: 'Offline profile'
    }
  ];

  const handleAccountSelect = (account) => {
    setLoading(true);
    // Simulate authentic Google verification latency
    setTimeout(() => {
      setLoading(false);
      setIsOpen(false);
      onSignIn({
        name: account.name,
        email: account.email,
        picture: null,
        initial: account.name.charAt(0).toUpperCase()
      });
      
      // Trigger temporary success notification
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
    }, 1200);
  };

  return (
    <div className="relative font-mono" id="google-auth-module">
      {/* Dynamic Native Style Verification Toast */}
      {showToast && (
        <div className="fixed bottom-20 right-6 z-50 bg-zinc-900 border border-emerald-500 rounded-lg p-3 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-white uppercase block">AUTH SUCCESSFUL</span>
            <span className="text-zinc-400 text-[10px]">Welcome to Nova Arcade, {currentUser?.name}!</span>
          </div>
        </div>
      )}

      {/* Trigger Button or Active User Dropdown */}
      {!currentUser ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-1.5 bg-zinc-950 border border-zinc-700 hover:border-brand-fuchsia text-[11px] font-bold tracking-wider text-zinc-300 hover:text-white uppercase rounded transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_10px_rgba(217,70,239,0.2)]"
          id="google-signin-trigger-btn"
        >
          <GoogleIcon />
          <span>SIGN IN WITH GOOGLE</span>
        </button>
      ) : (
        <div className="flex items-center gap-3" id="active-user-profile-widget">
          {/* User Info Bar */}
          <div className="text-right hidden sm:block">
            <div className="text-[11px] font-black text-white uppercase tracking-tight flex items-center justify-end gap-1">
              <span>{currentUser.name}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-[9px] text-zinc-500 font-bold">{currentUser.email}</div>
          </div>

          {/* User Avatar Circle with interactive click to Sign Out */}
          <div className="group relative">
            <button
              onClick={onSignOut}
              className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-red-600 border border-white flex items-center justify-center font-black text-xs text-white uppercase cursor-pointer transition-all duration-300 relative overflow-hidden shadow-[0_0_8px_rgba(16,185,129,0.5)]"
              title="Click to sign out"
              id="google-signout-btn"
            >
              {/* Profile Initial */}
              <span className="group-hover:opacity-0 transition-opacity duration-200">
                {currentUser.initial}
              </span>
              {/* Replace with Logout Icon on hover */}
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-red-600">
                <LogOut className="w-3.5 h-3.5 text-white" />
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Simulated Google Account Selector Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div 
            className="w-full max-w-sm bg-white text-zinc-900 rounded-lg shadow-2xl overflow-hidden font-sans border-t-4 border-blue-500"
            id="google-accounts-picker-modal"
          >
            {/* Modal Header */}
            <div className="p-6 text-center border-b border-zinc-100 pb-5">
              <div className="flex justify-center mb-3">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-zinc-900 tracking-tight">Sign in with Google</h2>
              <p className="text-zinc-500 text-xs mt-1">to continue to <strong className="text-zinc-800 font-semibold">Nova Arcade</strong></p>
            </div>

            {/* Simulated verification loading overlay */}
            {loading ? (
              <div className="p-10 flex flex-col items-center justify-center min-h-[220px]">
                {/* Native looking circular Google spinner */}
                <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin mb-4" />
                <p className="text-sm font-medium text-zinc-700">Verifying account credentials...</p>
                <p className="text-xs text-zinc-400 mt-1">Connecting to Google Auth server</p>
              </div>
            ) : (
              /* Accounts List */
              <div className="p-4 space-y-2">
                <p className="text-[10px] uppercase font-black tracking-widest text-zinc-400 px-2 mb-2 font-mono">SELECT GOOGLE ACCOUNT</p>
                
                {accounts.map((acc) => (
                  <button
                    key={acc.email}
                    onClick={() => handleAccountSelect(acc)}
                    className="w-full flex items-center p-3 rounded-lg hover:bg-zinc-50 transition-colors text-left border border-transparent hover:border-zinc-200 cursor-pointer group"
                  >
                    {/* Circle Avatar with Name Initial */}
                    <div className={`w-9 h-9 rounded-full ${acc.avatarColor} text-white flex items-center justify-center font-bold text-sm shrink-0 mr-3`}>
                      {acc.name.charAt(0).toUpperCase()}
                    </div>
                    {/* User email & branding */}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-zinc-800 flex items-center gap-1.5">
                        <span>{acc.name}</span>
                        {acc.email === 'stxrly441@gmail.com' && (
                          <span className="bg-blue-50 text-[9px] text-blue-600 px-1 py-0.5 rounded font-mono font-bold tracking-wider">PRESET</span>
                        )}
                      </div>
                      <div className="text-xs text-zinc-500 truncate">{acc.email}</div>
                    </div>
                    {/* Connected Status or arrow */}
                    <div className="text-[9px] font-mono font-bold text-zinc-400 bg-zinc-100 px-2 py-1 rounded group-hover:bg-zinc-200 group-hover:text-zinc-600 shrink-0">
                      SELECT
                    </div>
                  </button>
                ))}

                {/* Additional simulated options */}
                <button
                  type="button"
                  onClick={() => handleAccountSelect({
                    name: 'Custom User',
                    email: 'custom.user@gmail.com',
                    avatarColor: 'bg-indigo-600'
                  })}
                  className="w-full flex items-center p-3 rounded-lg hover:bg-zinc-50 transition-colors text-left border border-transparent hover:border-zinc-200 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-full border border-dashed border-zinc-300 flex items-center justify-center bg-zinc-50 text-zinc-500 mr-3">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-zinc-700">Use another account</div>
                    <div className="text-xs text-zinc-400">Configure custom Google email</div>
                  </div>
                </button>

                {/* Footer close button */}
                <div className="pt-4 border-t border-zinc-100 flex justify-end gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 hover:bg-zinc-100 rounded text-sm text-zinc-500 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
