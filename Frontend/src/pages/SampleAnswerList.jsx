import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FilePlus, ArrowLeft, ListTodo } from "lucide-react";

const SampleAnswerList = () => {
  const [samples, setSamples] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSamples = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/sample-questions`);
        setSamples(res.data);
      } catch (err) {
        console.error("Error fetching sample answers:", err);
      }
    };

    fetchSamples();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
      {/* Glow Backgrounds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <ListTodo className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">All Sample Answers</h2>
            <p className="text-gray-400">
              View all sample answers
            </p>
          </div>
        </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/add-sample")}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-5 py-2 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <FilePlus className="w-4 h-4" />
              Add Sample
            </button>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-400 text-white px-5 py-2 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        </div>

        {/* Sample Cards */}
        {samples.length === 0 ? (
          <p className="text-gray-400">No sample answers found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {samples.map((sample) => (
              <div
                key={sample.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all hover:shadow-xl hover:border-gray-500"
              >
                <h2 className="text-xl font-semibold text-white capitalize mb-1">
                  {sample.question_title}
                </h2>
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">Language:</strong> {sample.language}
                </p>
                <pre className="bg-gray-900/60 text-gray-200 p-4 rounded-md text-sm overflow-x-auto max-h-60 border border-gray-700 whitespace-pre-wrap">
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
