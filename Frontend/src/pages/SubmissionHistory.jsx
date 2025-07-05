import React, { useEffect, useState } from "react";
import axios from "axios";

const SubmissionHistory = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/submission-history`);
        setSubmissions(res.data);
      } catch (err) {
        console.error("Failed to load submission history", err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-green-400">Submission History</h2>

        {submissions.length === 0 ? (
          <p className="text-gray-300">No submissions yet.</p>
        ) : (
          <div className="space-y-6">
            {submissions.map((sub) => (
              <div
                key={sub.id}
                className="border border-gray-700 rounded-lg p-4 bg-slate-800 shadow-lg hover:shadow-green-500/30 transition"
              >
                <div className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">Submitted:</strong>{" "}
                  {new Date(sub.created_at).toLocaleString()}
                </div>

                <pre className="bg-slate-900 text-green-200 p-3 rounded-md text-sm overflow-x-auto max-h-60">
                  {sub.code}
                </pre>

                <div className="mt-3 text-sm space-y-1 text-gray-300">
                  <div>
                    <strong className="text-white">Language:</strong> {sub.language}
                  </div>
                  <div>
                    <strong className="text-white">Pass:</strong>{" "}
                    {sub.pass_status ? (
                      <span className="text-green-400">✅ Passed</span>
                    ) : (
                      <span className="text-red-400">❌ Failed</span>
                    )}
                  </div>
                  <div>
                    <strong className="text-white">Readability:</strong>{" "}
                    {sub.readability_score}/10
                  </div>
                  <div>
                    <strong className="text-white">Efficiency:</strong>{" "}
                    {sub.efficiency_score}/10
                  </div>
                  <div>
                    <strong className="text-white">Similarity:</strong>{" "}
                    {sub.similarity_score != null
                      ? `${sub.similarity_score}%`
                      : "N/A"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmissionHistory;
