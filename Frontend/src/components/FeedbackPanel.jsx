export default function FeedbackPanel({ feedback }) {
    const {
      pass_status,
      readability_score,
      efficiency_score,
      suggestions,
      errors,
      corrected_code,
      similarity_score,
      is_similar_to_sample,
    } = feedback;
  
    return (
      <div className="mt-6 border border-green-600 rounded-lg p-5 bg-slate-900 text-white shadow-md h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-green-400 mb-3">⚡ AI Feedback Summary</h2>
  
        <div className="space-y-2 text-sm">
          <p>
            <strong className="text-green-300">Status:</strong>{" "}
            {pass_status ? (
              <span className="text-green-400">✅ Pass</span>
            ) : (
              <span className="text-red-400">❌ Fail</span>
            )}
          </p>
  
          <p>
            <strong className="text-green-300">Readability:</strong>{" "}
            {readability_score}/10
          </p>
  
          <p>
            <strong className="text-green-300">Efficiency:</strong>{" "}
            {efficiency_score}/10
          </p>
  
          {similarity_score !== null && (
            <p>
              <strong className="text-green-300">Similarity to Sample:</strong>{" "}
              {similarity_score}% –{" "}
              {is_similar_to_sample ? (
                <span className="text-green-400">✅ Similar</span>
              ) : (
                <span className="text-red-400">❌ Not Similar</span>
              )}
            </p>
          )}
  
          {errors?.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-red-400 mb-1">🚫 Detected Errors:</h3>
              <ul className="list-disc list-inside text-red-300">
                {errors.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          )}
  
          {suggestions?.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-blue-300 mb-1">💡 Suggestions:</h3>
              <ul className="list-disc list-inside text-blue-200">
                {suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
  
          {corrected_code && (
            <div className="mt-4">
              <h3 className="font-semibold text-green-400 mb-2">✅ Suggested Correction:</h3>
              <pre className="bg-slate-800 border border-slate-700 rounded p-3 text-green-100 text-xs overflow-x-auto whitespace-pre-wrap">
                <code>{corrected_code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    );
  }
  