// src/components/CodeEditor.jsx
import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, onChange, language }) {
  return (
    <div className="border border-green-500 rounded-xl shadow-lg bg-black p-2">
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
  );
}
