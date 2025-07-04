import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SampleAnswerList = () => {
  const [samples, setSamples] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSamples = async () => {
      try {
        const res = await axios.get("http://localhost:8000/sample-questions");
        setSamples(res.data);
      } catch (err) {
        console.error("Error fetching sample answers:", err);
      }
    };

    fetchSamples();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-400">All Sample Answers</h1>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/add-sample")}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              ➕ Add Sample Answer
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600"
            >
              ← Back to Submit
            </button>
          </div>
        </div>

        {/* Content */}
        {samples.length === 0 ? (
          <p className="text-gray-400">No sample answers found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {samples.map((sample) => (
              <div
                key={sample.id}
                className="bg-slate-800 border border-slate-700 rounded-lg p-4 shadow-md hover:shadow-green-500/30 transition"
              >
                <h2 className="text-xl font-semibold text-green-300 capitalize mb-1">
                  {sample.question_title}
                </h2>
                <p className="text-sm text-gray-300 mb-2">
                  <strong>Language:</strong> {sample.language}
                </p>
                <pre className="bg-slate-900 text-green-100 p-3 rounded text-sm overflow-auto whitespace-pre-wrap max-h-60">
                  {sample.ideal_code}
                </pre>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SampleAnswerList;
