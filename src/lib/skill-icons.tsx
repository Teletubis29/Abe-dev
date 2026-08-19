export function renderSkillIcon(iconKey: string) {
  switch (iconKey) {
    case "nextjs":
      return (
        <div className="w-8 h-8 rounded-full bg-black border border-neutral-700 flex items-center justify-center font-bold text-xs text-white">
          N
        </div>
      );
    case "react":
      return (
        <svg className="w-7 h-7 text-[#61dafb]" viewBox="0 0 115.3 100" fill="currentColor" aria-label="React logo">
          <circle cx="57.65" cy="50" r="15.25" />
          <path
            d="M57.65 0C25.8 0 0 22.38 0 50s25.8 50 57.65 50c31.86 0 57.65-22.38 57.65-50S89.5 0 57.65 0zm0 91.5C31.5 91.5 10.3 72.9 10.3 50S31.5 8.5 57.65 8.5 105 27.1 105 50s-21.2 41.5-47.35 41.5z"
            opacity=".25"
          />
          <path
            d="M57.65 10C27.9 10 3.8 27.9 3.8 50s24.1 40 53.85 40 53.85-17.9 53.85-40-24.1-40-53.85-40zm0 72c-24.8 0-45-14.3-45-32s20.2-32 45-32 45 14.3 45 32-20.2 32-45 32z"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      );
    case "typescript":
      return (
        <div className="w-7 h-7 rounded-lg bg-[#3178c6] flex items-center justify-center font-bold text-xs text-white">
          TS
        </div>
      );
    case "tailwind":
      return (
        <svg className="w-7 h-7 text-[#38bdf8]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "bootstrap":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Bootstrap logo">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#7b11f8" />
          <path
            d="M24 18h8.5c7.2 0 12.8 4.2 12.8 10.6 0 4-2.1 7.1-5.5 8.5 4.1 1.2 6.8 4.6 6.8 9.3C46.6 50.2 40.8 54 32.5 54H24V18Zm8.4 15.4h3c3.4 0 5.4-1.8 5.4-4.5 0-2.5-1.8-4.2-5.1-4.2h-3.3v8.7Zm.5 15.2h3.2c3.6 0 5.8-1.8 5.8-4.9 0-3.3-2.3-4.8-6-4.8H32.9v9.7Z"
            fill="#fff"
          />
          <path d="M20 24.5h7.5v18.5H20z" fill="#cdb4ff" opacity="0.9" />
        </svg>
      );
    case "html5":
      return (
        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-black text-xs text-white">
          5
        </div>
      );
    case "css3":
      return (
        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center font-black text-xs text-white">
          3
        </div>
      );
    case "nodejs":
      return (
        <div className="w-7 h-7 rounded-md bg-emerald-600 flex items-center justify-center font-bold text-xs text-white">
          JS
        </div>
      );
    case "express":
      return <span className="font-mono font-bold text-xs text-neutral-300">Express</span>;
    case "restapi":
      return (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "jwt":
      return (
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-[9px] font-black text-white">
          JWT
        </div>
      );
    case "socketio":
      return (
        <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-amber-400 text-xs">
          ⚡
        </div>
      );
    case "postgresql":
      return <span className="text-xl">🐘</span>;
    case "prisma":
      return <span className="text-lg font-mono font-bold text-white">△</span>;
    case "redis":
      return (
        <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
          R
        </div>
      );
    case "database-design":
      return (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S4 5 4 7zm9 0v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S13 5 13 7z" />
        </svg>
      );
    case "migrations":
      return (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Docker logo">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#0db7ed" />
          <path d="M22 25h5v5h-5zm8 0h5v5h-5zm8 0h5v5h-5zm8 0h5v5h-5zm-16 8h5v5h-5zm8 0h5v5h-5zm8 0h5v5h-5zm-32 0h5v5h-5zm8-8h5v5h-5zm-8 16h5v5h-5zm8 0h5v5h-5zm8 0h5v5h-5zm8 0h5v5h-5zm8 0h5v5h-5z" fill="#fff" opacity="0.9" />
          <circle cx="47" cy="29" r="4" fill="#fff" />
        </svg>
      );
    case "nginx":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Nginx logo">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#009639" />
          <path d="M20 44V20l12 8 12-8v24L32 36l-12 8Zm10-10.5L24.5 26v11L30 38v-4.5Zm4 0V38l5.5-1.5V26L30 34.5Z" fill="#fff" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Git logo">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#f05032" />
          <path d="M32 17 20 29l12 12 12-12-12-12Zm0 8.5 4.2 4.2L32 34l-4.2-4.3L32 25.5Zm-7.5 12.8 4.3-4.3 3.2 3.2-4.3 4.2-3.2-3.1Zm15 0-3.1 3.1-4.3-4.2 3.2-3.2 4.2 4.3Z" fill="#fff" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="GitHub logo">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#181717" />
          <path d="M32 18c-8 0-14.5 6.5-14.5 14.5 0 6.4 4.1 11.8 9.8 13.7.7.1.9-.3.9-.7v-2.4c-4 .9-4.9-1.7-4.9-1.7-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.7 4.4 1.3.1-.9.5-1.6.9-2-3.2-.4-6.5-1.6-6.5-7.2 0-1.6.6-2.9 1.5-3.9-.2-.4-.7-1.9.1-4 0 0 1.2-.4 4 1.5 1.1-.3 2.4-.5 3.7-.5 1.3 0 2.6.2 3.7.5 2.8-1.9 4-1.5 4-1.5.8 2.1.3 3.6.1 4 .9 1 .1 2.3.1 3.9 0 5.7-3.4 6.8-6.6 7.2.5.4.9 1.2.9 2.4v3.6c0 .4.2.8.9.7 5.7-1.9 9.8-7.3 9.8-13.7C46.5 24.5 40 18 32 18Z" fill="#fff" />
        </svg>
      );
    case "linux":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Linux logo">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#f4c20d" />
          <path d="M27 19c-5.8 0-10.5 4.7-10.5 10.5 0 4.4 2.7 8.1 6.5 9.6v5.7h9v-5.7c3.8-1.5 6.5-5.2 6.5-9.6C37.5 23.7 32.8 19 27 19Zm0 5.8c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7Zm-8.7 20.5h17.4v3.6H18.3v-3.6Z" fill="#000" />
          <path d="M24.5 42.3h5v4.2h-5zM18.5 25.5l4.2 3.2-2.2 3.8-4.5-3.2 2.5-3.8Zm17.5-3.2 4.5 3.2-2.5 3.8-4.2-3.2 2.2-3.8Z" fill="#fff" opacity="0.8" />
        </svg>
      );
    case "pm2":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="PM2 logo">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#1f9d55" />
          <path d="M18 42V22h7l9 9 9-9h7v20h-6V30l-10 10-10-10v12h-6Z" fill="#fff" />
        </svg>
      );
    case "jira":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Jira logo">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#2684ff" />
          <path d="M20 18.5h18.4c7.8 0 14 6.2 14 14v1.6c0 7.8-6.2 14-14 14H28.5v-7.2h9.9c3.7 0 6.7-3 6.7-6.7v-.2c0-3.7-3-6.7-6.7-6.7H20v-5.7Z" fill="#fff" />
          <path d="M26.5 44.8h11.7c5.7 0 10.3-4.6 10.3-10.3v-.8H34c-3.7 0-6.7 3-6.7 6.7v4.4Z" fill="#dfe6ff" opacity="0.9" />
          <circle cx="22" cy="47" r="4.1" fill="#ffab00" />
        </svg>
      );
    case "slack":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Slack logo">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#4a154b" />
          <g fill="#fff">
            <path d="M26.5 18.5c-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2h4.2v-4.2c0-2.3-1.9-4.2-4.2-4.2Zm0 10.8h-8.4c-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2h8.4c2.3 0 4.2-1.9 4.2-4.2 0-2.3-1.9-4.2-4.2-4.2Z" />
            <path d="M45.5 18.5c0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2v4.2h4.2c2.3 0 4.2-1.9 4.2-4.2Zm-10.8 0v8.4c0 2.3 1.9 4.2 4.2 4.2 2.3 0 4.2-1.9 4.2-4.2v-8.4c0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2Z" />
            <path d="M18.5 37.5c-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2h4.2v-4.2c0-2.3-1.9-4.2-4.2-4.2Zm0 10.8h-8.4c-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2h8.4c2.3 0 4.2-1.9 4.2-4.2 0-2.3-1.9-4.2-4.2-4.2Z" />
            <path d="M45.5 37.5c0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2v4.2h4.2c2.3 0 4.2-1.9 4.2-4.2Zm-10.8 0v8.4c0 2.3 1.9 4.2 4.2 4.2 2.3 0 4.2-1.9 4.2-4.2v-8.4c0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2Z" />
          </g>
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="MongoDB logo">
          <path d="M32 6c-7.3 0-13.2 5.9-13.2 13.2 0 7 5 12.8 11.7 13.5v18.9c0 1.1.9 2 2 2s2-.9 2-2V32.7c6.7-.7 11.7-6.5 11.7-13.5C45.2 11.9 39.3 6 32 6Z" fill="#13aa52" />
          <path d="M32 10.5c-5.2 0-9.5 4.3-9.5 9.5 0 5.2 4.3 9.5 9.5 9.5s9.5-4.3 9.5-9.5c0-5.2-4.3-9.5-9.5-9.5Zm0 16.4c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9Z" fill="#fff" opacity="0.95" />
          <path d="M32 13.6c-3.2 0-5.8 2.6-5.8 5.8v1.7c1.7-1.4 3.7-2.2 5.8-2.2 2.2 0 4.2.8 5.9 2.2v-1.7c0-3.2-2.6-5.8-5.9-5.8Z" fill="#d9ffe2" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Figma logo">
          <path d="M24 8c-6.6 0-12 5.4-12 12 0 5.8 4.1 10.7 9.5 11.7v.6c0 6.6 5.4 12 12 12s12-5.4 12-12-5.4-12-12-12h-1.5V8H24Z" fill="#f24e1e" />
          <path d="M24 18.5h9.5c5.2 0 9.5-4.3 9.5-9.5S38.7 0 33.5 0H24v18.5Z" fill="#ff7262" />
          <path d="M24 29.2c-5.2 0-9.5 4.3-9.5 9.5S18.8 48.2 24 48.2s9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5Z" fill="#a259ff" />
          <path d="M33.5 29.2c5.2 0 9.5 4.3 9.5 9.5s-4.3 9.5-9.5 9.5c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5Z" fill="#0acf83" />
          <path d="M24 8c5.2 0 9.5 4.3 9.5 9.5S29.2 27 24 27H16.5C11.3 27 7 22.7 7 17.5S11.3 8 16.5 8H24Z" fill="#ff7262" />
        </svg>
      );
    case "postman":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Postman logo">
          <path d="M32 6c-8.7 0-15.8 7.1-15.8 15.8 0 6.5 3.9 12.1 9.4 14.5l3.1 18.1h6.6l3.1-18.1c5.5-2.4 9.4-8 9.4-14.5C47.8 13.1 40.7 6 32 6Zm-8.8 18c0-4.9 4-8.9 8.8-8.9s8.8 4 8.8 8.9c0 1.5-.4 2.9-1.1 4.1l-1.9-1.2c-1.1-2.9-4-4.9-7.2-4.9-3.4 0-6.3 2.3-7.1 5.4l-2.3-1.4c.7-1.8 1.8-3.3 3.8-4.3Z" fill="#ff6c37" />
          <path d="M20.2 34.4c-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2h23.6c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H20.2Z" fill="#f7b267" />
          <circle cx="32" cy="19.5" r="6.3" fill="#f4d35e" />
        </svg>
      );
    case "vscode":
      return (
        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
        </svg>
      );
    case "eslint":
      return (
        <div className="w-6 h-6 rounded bg-purple-700 flex items-center justify-center text-[10px] font-bold text-white">
          ES
        </div>
      );
    case "prettier":
      return (
        <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Prettier logo">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="#1a2b34" />
          <g fill="#f8d75d">
            <circle cx="20" cy="18" r="3" />
            <rect x="25" y="15" width="22" height="6" rx="3" />
            <circle cx="20" cy="30" r="3" />
            <rect x="25" y="27" width="18" height="6" rx="3" />
            <circle cx="20" cy="42" r="3" />
            <rect x="25" y="39" width="14" height="6" rx="3" />
          </g>
          <path d="M17 47.5c0-1.9 1.5-3.5 3.5-3.5h12.5v7H20.5c-1.9 0-3.5-1.6-3.5-3.5Z" fill="#f8d75d" />
          <circle cx="45.5" cy="47.5" r="5.5" fill="#f8d75d" />
        </svg>
      );
    case "cicd":
      return (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return <span className="text-xs">⚡</span>;
  }
}
