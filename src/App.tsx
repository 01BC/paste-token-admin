import { useState } from 'react';
import {
  RefreshCw,
  Trash2,
  BarChart2,
  LogOut,
  KeyRound,
  ShieldCheck,
  Clock,
  Activity,
  Users,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

const sessions = [
  { id: '9239087', deviceCode: 'FWTY5N3TZ', status: 'PENDING' },
  { id: '6179428', deviceCode: 'FTX3X4JAW', status: 'PENDING' },
  { id: '8785810', deviceCode: 'F339H92YP', status: 'PENDING' },
];

const oauthKeys = [
  { name: 'Oauth 1', uuid: '116b5dad-908f-45c9-aa56-760002135c47', activeSessions: 0, captured: 0, secretOk: true, enabled: true },
  { name: 'Oauth 2', uuid: '99e783cd-a885-47b6-9867-75cd34386012', activeSessions: 0, captured: 0, secretOk: true, enabled: true },
  { name: 'Oauth 3', uuid: 'a3f21bc4-cd45-48de-b901-12ef56789abc', activeSessions: 1, captured: 0, secretOk: true, enabled: true },
  { name: 'Oauth 4', uuid: 'b7d32ef1-1234-56ab-cdef-fedcba987654', activeSessions: 0, captured: 0, secretOk: false, enabled: false },
];

function StatCard({
  label,
  value,
  icon: Icon,
  color,
  glowClass,
  accent,
}: {
  label: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
  glowClass: string;
  accent: string;
}) {
  return (
    <div className="bg-[#0d1117] border border-white/[0.06] rounded-2xl p-5 card-glow relative overflow-hidden group hover:border-white/[0.12] transition-all duration-300">
      <div className={`absolute inset-x-0 top-0 h-px ${accent}`} />
      <div className="flex items-start justify-between mb-4">
        <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">{label}</p>
        <div className={`p-2 rounded-lg ${color.replace('text-', 'bg-').replace('400', '400/10').replace('500', '500/10')}">
          <Icon size={14} className={color} />
        </div>
      </div>
      <p className={`text-5xl font-bold tracking-tight ${color} ${glowClass}`}>{value}</p>
    </div>
  );
}

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-300 focus:outline-none ${enabled ? 'bg-emerald-500' : 'bg-slate-700'}`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 rounded-full bg-white shadow-md transition-transform duration-300 ${enabled ? 'translate-x-4.5' : 'translate-x-0.5'}`}
      />
    </button>
  );
}

export default function App() {
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [keys, setKeys] = useState(oauthKeys);

  function toggleKey(idx: number) {
    setKeys((prev) =>
      prev.map((k, i) => (i === idx ? { ...k, enabled: !k.enabled } : k))
    );
  }

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 pb-16">
      {/* Top bar */}
      <div className="border-b border-white/[0.05] bg-[#080c14]/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-blue-500 flex items-center justify-center">
              <ShieldCheck size={11} className="text-white" />
            </div>
            <span className="text-xs font-semibold text-slate-400 tracking-widest uppercase">Paste Token Admin</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-500">Live</span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6 space-y-4">

        {/* Header Card */}
        <div className="bg-[#0d1117] border border-white/[0.06] rounded-2xl p-6 card-glow relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-2.5 mb-1">
              <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <ShieldCheck size={18} className="text-blue-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-100 leading-tight">Admin Dashboard</h1>
                <p className="text-[11px] text-slate-500 font-medium tracking-wide">PASTE TOKEN ADMIN</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 mt-3 mb-5 leading-relaxed">
              Device Authentication Flow Monitoring
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-2 bg-slate-800/60 border border-white/[0.06] rounded-lg px-3 py-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-[10px] font-bold text-white">F</div>
                <span className="text-sm font-medium text-slate-300">fomo</span>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-2 bg-slate-800/60 hover:bg-slate-700/60 border border-white/[0.06] hover:border-white/[0.12] text-slate-400 hover:text-slate-200 font-medium rounded-lg text-sm transition-all duration-200">
                <LogOut size={13} />
                Logout
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 bg-slate-800/60 hover:bg-slate-700/60 border border-white/[0.06] hover:border-white/[0.12] text-slate-400 hover:text-slate-200 font-medium rounded-lg text-sm transition-all duration-200">
                <KeyRound size={13} />
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            label="Total Sessions"
            value={291}
            icon={Users}
            color="text-blue-400"
            glowClass="stat-glow-blue"
            accent="bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
          />
          <StatCard
            label="Pending"
            value={14}
            icon={AlertCircle}
            color="text-red-400"
            glowClass="stat-glow-red"
            accent="bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
          />
          <StatCard
            label="Captured"
            value={268}
            icon={CheckCircle2}
            color="text-emerald-400"
            glowClass="stat-glow-green"
            accent="bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
          />
          <StatCard
            label="Server Uptime"
            value="44d 11h 1m"
            icon={Clock}
            color="text-blue-400"
            glowClass="stat-glow-blue"
            accent="bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
          />
        </div>

        {/* Active Sessions */}
        <div className="bg-[#0d1117] border border-white/[0.06] rounded-2xl card-glow overflow-hidden">
          <div className="px-5 pt-5 pb-4 border-b border-white/[0.05]">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Activity size={15} className="text-blue-400" />
                <h2 className="text-sm font-semibold text-slate-200 tracking-wide">Active Sessions</h2>
                <span className="bg-slate-800 text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-white/[0.06]">
                  {sessions.length}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Auto-refresh</span>
                  <Toggle enabled={autoRefresh} onToggle={() => setAutoRefresh((v) => !v)} />
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 text-blue-400 font-medium rounded-lg text-xs transition-all duration-200">
                  <RefreshCw size={11} />
                  Refresh
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 text-red-400 font-medium rounded-lg text-xs transition-all duration-200">
                  <Trash2 size={11} />
                  Cleanup
                </button>
              </div>
            </div>
          </div>

          <div className="px-5">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1.4fr_1fr] py-3 border-b border-white/[0.04]">
              <span className="text-[10px] font-semibold tracking-widest text-slate-600 uppercase">ID</span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-600 uppercase">Device Code</span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-600 uppercase">Status</span>
            </div>

            {sessions.map((s, i) => (
              <div
                key={s.id}
                className={`grid grid-cols-[1fr_1.4fr_1fr] py-3.5 items-center group hover:bg-white/[0.02] -mx-5 px-5 transition-colors ${i < sessions.length - 1 ? 'border-b border-white/[0.04]' : ''}`}
              >
                <span className="text-sm font-mono text-slate-300 font-medium">{s.id}</span>
                <span className="inline-flex">
                  <span className="font-mono text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-lg tracking-wider">
                    {s.deviceCode}
                  </span>
                </span>
                <span className="inline-flex">
                  <span className="text-[10px] font-bold tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full uppercase">
                    {s.status}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="px-5 py-3 bg-white/[0.02] border-t border-white/[0.04] flex items-center justify-end">
            <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors">
              View all sessions <ChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* Client Key Pool */}
        <div className="bg-[#0d1117] border border-white/[0.06] rounded-2xl card-glow overflow-hidden">
          <div className="px-5 pt-5 pb-4 border-b border-white/[0.05]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <KeyRound size={15} className="text-amber-400" />
                <h2 className="text-sm font-semibold text-slate-200 tracking-wide">Client Key Pool</h2>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/60 hover:bg-slate-700/60 border border-white/[0.06] hover:border-white/[0.12] text-slate-400 hover:text-slate-200 font-medium rounded-lg text-xs transition-all duration-200">
                <RefreshCw size={11} />
                Refresh Keys
              </button>
            </div>
          </div>

          {/* Key Pool Stats */}
          <div className="grid grid-cols-4 divide-x divide-white/[0.04] border-b border-white/[0.05]">
            {[
              { label: 'Total Keys', value: 9, color: 'text-blue-400' },
              { label: 'Enabled', value: 8, color: 'text-emerald-400' },
              { label: 'Disabled', value: 1, color: 'text-red-400' },
              { label: 'Rotation', value: 'RANDOM', color: 'text-slate-300' },
            ].map((s) => (
              <div key={s.label} className="py-4 flex flex-col items-center gap-1">
                <p className="text-[9px] font-semibold tracking-widest text-slate-600 uppercase">{s.label}</p>
                {s.label === 'Rotation' ? (
                  <span className="text-[10px] font-bold tracking-widest text-slate-300 bg-slate-800 border border-white/[0.08] px-2 py-0.5 rounded mt-0.5">
                    {s.value}
                  </span>
                ) : (
                  <p className={`text-2xl font-bold tracking-tight ${s.color}`}>{s.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* OAuth Keys */
          <div className="divide-y divide-white/[0.04]">
            {keys.map((key, idx) => (
              <div key={key.name} className="px-5 py-4 hover:bg-white/[0.02] transition-colors">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full mt-0.5 ${key.enabled ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                    <h3 className="text-sm font-semibold text-slate-200">{key.name}</h3>
                  </div>
                  <button
                    onClick={() => toggleKey(idx)}
                    className={`shrink-0 px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all duration-200 border ${
                      key.enabled
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                        : 'bg-slate-800 border-white/[0.08] text-slate-500 hover:border-white/[0.16] hover:text-slate-300'
                    }`}
                  >
                    {key.enabled ? 'Enabled' : 'Enable'}
                  </button>
                </div>

                <div className="bg-slate-900/60 border border-white/[0.05] rounded-lg px-3 py-2 mb-3">
                  <span className="font-mono text-[11px] text-slate-500 tracking-wide break-all">{key.uuid}</span>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <BarChart2 size={12} className="text-blue-400" />
                    <span className="text-[11px] text-slate-500">Active:</span>
                    <span className="text-[11px] font-semibold text-blue-400">{key.activeSessions}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span className="text-[11px] text-slate-500">Captured:</span>
                    <span className="text-[11px] font-semibold text-emerald-400">{key.captured}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {key.secretOk ? (
                      <ShieldCheck size={12} className="text-emerald-400" />
                    ) : (
                      <AlertCircle size={12} className="text-red-400" />
                    )}
                    <span className={`text-[11px] font-semibold ${key.secretOk ? 'text-emerald-400' : 'text-red-400'}`}>
                      Secret {key.secretOk ? 'OK' : 'Error'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}