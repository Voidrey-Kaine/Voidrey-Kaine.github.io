import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { Language, TerminalLog } from '../types';
import { soundFx } from '../utils/soundEffects';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      id: 'init-1',
      type: 'system',
      content: 'VOIDREY TERMINAL OS [v4.2.0-ECLIPSE]',
    },
    {
      id: 'init-2',
      type: 'system',
      content: 'Type "help" or "menu" to list commands. Press ESC to exit.',
    },
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const logsEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim().toLowerCase();
    if (!raw) return;

    soundFx.playKeypress();

    // Add input log
    const inputLog: TerminalLog = {
      id: Math.random().toString(),
      type: 'input',
      content: raw,
    };

    setHistory((prev) => [...prev, raw]);
    setHistoryIdx(-1);

    let outputLog: TerminalLog;

    switch (raw) {
      case 'help':
      case 'menu':
        outputLog = {
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-slate-300">
              <p className="text-amber-400 font-bold">AVAILABLE COMMANDS:</p>
              <p>• <span className="text-red-400 font-bold">whoami</span> / <span className="text-red-400 font-bold">about</span> - Display Voidrey identity & specs</p>
              <p>• <span className="text-red-400 font-bold">skills</span> / <span className="text-red-400 font-bold">focus</span> - Engineering focus domains</p>
              <p>• <span className="text-red-400 font-bold">stack</span> - Tech stack & workstation configuration</p>
              <p>• <span className="text-red-400 font-bold">artifacts</span> - Visual dossier list</p>
              <p>• <span className="text-red-400 font-bold">socials</span> / <span className="text-red-400 font-bold">contact</span> - Links & email</p>
              <p>• <span className="text-red-400 font-bold">matrix</span> - Run cyber matrix diagnostic</p>
              <p>• <span className="text-red-400 font-bold">clear</span> - Clear terminal screen</p>
              <p>• <span className="text-red-400 font-bold">exit</span> - Close CLI interface</p>
            </div>
          ),
        };
        break;

      case 'whoami':
      case 'about':
        outputLog = {
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-slate-300">
              <p className="text-purple-400 font-bold">IDENTITY: VOIDREY</p>
              <p>Role: AI Engineer & Systems Architect</p>
              <p>Environment: Arch Linux (Hyprland / Wayland)</p>
              <p>Motto: "Build once. Automate forever."</p>
            </div>
          ),
        };
        break;

      case 'skills':
      case 'focus':
        outputLog = {
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-slate-300">
              <p className="text-emerald-400 font-bold">ENGINEERING DOMAINS:</p>
              <p>1. AI Engineering & Autonomous Agents (Gemini 2.5)</p>
              <p>2. Model Context Protocol (MCP) Servers & Tools</p>
              <p>3. Automation Frameworks & Scheduled Daemons</p>
              <p>4. Keyboard-Driven CLI Tools (Rust / Bash)</p>
              <p>5. Cloud Run / Docker Container Infrastructure</p>
            </div>
          ),
        };
        break;

      case 'stack':
        outputLog = {
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-slate-300">
              <p className="text-sky-400 font-bold">CORE STACK:</p>
              <p>Languages: Python, TypeScript, Rust, Bash</p>
              <p>Editor: Neovim (Lua configs)</p>
              <p>Terminal: Kitty (GPU Accelerated)</p>
              <p>AI SDKs: @google/genai, MCP Protocol</p>
            </div>
          ),
        };
        break;

      case 'artifacts':
        outputLog = {
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-slate-300">
              <p className="text-amber-400 font-bold">VISUAL DOSSIER:</p>
              <p>• Character Portrait Study (Gothic Cyberpunk)</p>
              <p>• Eclipse Sigil Emblem (Obsidian Celestial Compass)</p>
              <p>• Void Horizon Canvas (Space Nebula Art)</p>
            </div>
          ),
        };
        break;

      case 'socials':
      case 'contact':
        outputLog = {
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div className="space-y-1 text-slate-300">
              <p className="text-red-400 font-bold">CONNECT LINKS:</p>
              <p>GitHub: github.com/Voidrey-Kaine</p>
              <p>YouTube: @Voidrey-Kaine</p>
              <p>X: x.com/Voidrey_Kaine</p>
              <p>Email: voidrey.kaine@gmail.com</p>
            </div>
          ),
        };
        break;

      case 'matrix':
        outputLog = {
          id: Math.random().toString(),
          type: 'matrix',
          content: (
            <div className="text-emerald-400 font-mono-code leading-none space-y-0.5 animate-pulse">
              <p>01000110 01001111 01010101 01010010 01000101 01011001</p>
              <p>SYSTEM RECURSION ACTIVE // ECLIPSE CORE OK</p>
              <p>EVALUATING NEURAL AGENTS... ALL SYSTEMS NOMINAL [100%]</p>
            </div>
          ),
        };
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        setInputVal('');
        return;

      default:
        outputLog = {
          id: Math.random().toString(),
          type: 'error',
          content: `Command not recognized: "${raw}". Type "help" for command menu.`,
        };
        break;
    }

    setLogs((prev) => [...prev, inputLog, outputLog]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    soundFx.playKeypress();

    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < history.length) {
          setHistoryIdx(nextIdx);
          setInputVal(history[history.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl">
      <div className="relative w-full max-w-3xl bg-[#07080c] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[75vh]">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#080a0f] border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono-code text-xs text-slate-400 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
              voidrey@station-01:~
            </span>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-1 rounded bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Logs Output Screen */}
        <div className="flex-1 p-4 font-mono-code text-xs space-y-3 overflow-y-auto scanlines">
          {logs.map((log) => (
            <div key={log.id}>
              {log.type === 'input' && (
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="text-red-500 font-bold">voidrey@eclipse:~$</span>
                  <span>{log.content}</span>
                </div>
              )}

              {log.type === 'system' && (
                <div className="text-purple-400 italic">{log.content}</div>
              )}

              {log.type === 'output' && (
                <div className="pl-4 py-1 text-slate-300">{log.content}</div>
              )}

              {log.type === 'error' && (
                <div className="pl-4 py-1 text-red-400">{log.content}</div>
              )}

              {log.type === 'matrix' && (
                <div className="pl-4 py-1">{log.content}</div>
              )}
            </div>
          ))}
          <div ref={logsEndRef} />
        </div>

        {/* Input Prompt Box */}
        <div className="p-3 bg-[#080a0f] border-t border-white/10 flex items-center gap-2 font-mono-code text-xs">
          <span className="text-blue-400 font-bold">voidrey@eclipse:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type "help" or "whoami"...'
            className="flex-1 bg-transparent text-slate-100 focus:outline-none placeholder:text-slate-600"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 hover:bg-blue-500/30 transition-colors cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
