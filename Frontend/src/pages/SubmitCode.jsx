import React, { useEffect, useState } from "react";
import axios from "axios";
import CodeEditor from "@/components/CodeEditor";
import FeedbackPanel from "@/components/FeedbackPanel";
import { useNavigate } from "react-router-dom";

const SubmitCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionOptions, setQuestionOptions] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch questions from backend
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:8000/sample-questions");
        setQuestionOptions(res.data);
      } catch (err) {
        console.error("Failed to fetch questions", err);
      }
    };
    fetchQuestions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await axios.post("http://localhost:8000/submit-code", {
        code,
        language,
        question_title: questionTitle,
      });
      setFeedback(res.data);
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left - Code Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 space-y-6 max-h-screen overflow-y-auto"
        >
          <h2 className="text-xl font-bold text-green-500">Submit Your Code</h2>

          {/* Language Selector */}
          <div>
            <label className="block text-sm mb-1 font-medium text-white">
              Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-gray-800 text-white border border-green-500 rounded px-3 py-2"
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
            </select>
          </div>

          {/* Question Title Selector */}
          <div>
            <label className="block text-sm mb-1 font-medium text-white">
              Select Question
            </label>
            <select
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
              required
              className="w-full bg-gray-800 text-white border border-green-500 rounded px-3 py-2"
            >
              <option value="">-- Select a question --</option>
              {questionOptions.map((q) => (
                <option key={q.id} value={q.question_title}>
                  {q.question_title}
                </option>
              ))}
            </select>
          </div>

          {/* Code Editor */}
          <CodeEditor language={language} value={code} onChange={setCode} />

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded"
            >
              {loading ? "Submitting..." : "Submit Code"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/sample-answers")}
              className="bg-white text-black border border-green-500 hover:bg-green-100 font-medium px-4 py-2 rounded"
            >
              View Sample Answers
            </button>
          </div>
        </form>

        {/* Right - Feedback Section */}
        <div className="w-full lg:w-[40%] h-full overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 text-green-400">
            AI Feedback
          </h2>
          {feedback ? (
            <FeedbackPanel feedback={feedback} />
          ) : (
            <p className="text-slate-400">Feedback will appear here after submission.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmitCode;
