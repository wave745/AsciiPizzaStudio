import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
}

export default function TerminalWindow({ title, children }: TerminalWindowProps) {
  return (
    <div className="terminal-window rounded-lg">
      {title && (
        <div className="bg-gray-800 px-4 py-2 rounded-t-lg flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center text-sm text-gray-300">{title}</div>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}
