// File: src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmitCode from './pages/SubmitCode';
import AddSampleAnswer from './pages/AddSampleAnswer';
import SampleAnswerList from './pages/SampleAnswerList';
import SubmissionHistory from './pages/SubmissionHistory';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4 bg-black">
        <Routes>
          <Route path="/" element={<div>Welcome to AI Code Reviewer</div>} />
          <Route path="/submit" element={<SubmitCode />} />
          <Route path="/add-sample" element={<AddSampleAnswer />} />
          <Route path="/sample-questions" element={<SampleAnswerList />} />
          <Route path="/history-submissions" element={<SubmissionHistory />} />
        </Routes>
      </div>
    </Router>
  );
}
