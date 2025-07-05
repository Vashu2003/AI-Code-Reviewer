// src/components/CodeEditor.jsx
import Editor from "@monaco-editor/react";

import { Terminal } from "lucide-react";

// Monaco Editor Component (using your existing component)
export default function CodeEditor({ code, onChange, language }) {
  // Note: Monaco Editor would normally be imported here
  // For this demo, we'll simulate it with a styled textarea
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative border border-gray-700 rounded-xl shadow-lg bg-black">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 border-b border-gray-700 rounded-t-lg">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">
              Monaco Editor - {language}
            </span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <Editor
          height="400px"
          theme="vs-dark"
          defaultLanguage={language}
          language={language}
          value={code}
          onChange={onChange}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 10 },
          }}
        />
      </div>
    </div>
  );
}
