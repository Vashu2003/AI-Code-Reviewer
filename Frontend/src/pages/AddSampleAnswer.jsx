// src/pages/AddSampleAnswer.jsx

import React, { useState } from "react";
import axios from "axios";
import CodeEditor from "@/components/CodeEditor";
import { useNavigate } from "react-router-dom";

const AddSampleAnswer = () => {
  const navigate = useNavigate();
  const [questionTitle, setQuestionTitle] = useState("");
  const [language, setLanguage] = useState("python");
  const [idealCode, setIdealCode] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/add-sample-answer`,
        {
          question_title: questionTitle,
          language,
          ideal_code: idealCode,
        }
      );

      setMessage(response.data.message);
      setQuestionTitle("");
      setIdealCode("");
    } catch (err) {
      const detail = err.response?.data?.detail;
      setError(detail || "Failed to add sample answer.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-black text-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-green-400">
        Add Sample Answer
      </h2>

      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          {message}
        </div>
      )}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium text-white">
            Question Title
          </label>
          <input
            type="text"
            className="w-full bg-gray-800 text-white border border-green-500 rounded px-3 py-2"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-white">Language</label>
          <select
            className="w-full bg-gray-800 text-white border border-green-500 rounded px-3 py-2"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-white">
            Ideal Code
          </label>
          <CodeEditor
            language={language}
            value={idealCode}
            onChange={setIdealCode}
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit Sample Answer
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSampleAnswer;
