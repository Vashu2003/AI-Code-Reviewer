# 🤖 AI Code Reviewer

![License](https://img.shields.io/badge/license-MIT-green)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Status](https://img.shields.io/badge/deployed-Railway-blue)
![Frontend](https://img.shields.io/badge/frontend-Netlify-green)

AI Code Reviewer is a web application that allows developers to submit their code and receive instant, AI-generated feedback on **bugs**, **suggestions**, **readability**, **efficiency**, and a **corrected version** (if applicable). It also compares the submitted code with ideal sample solutions and stores all submissions in a history log.

---

## 🌐 Live Demo

🚀 [Live App on Netlify](https://devaudit0.netlify.app/)

---

## 📁 Project Structure

```
AI-Code-Reviewer/
├── Backend/ # FastAPI backend
│ ├── app/ # Main app files
│ │ ├── main.py
│ │ ├── models.py
│ │ ├── database.py
│ │ ├── schemas.py
│ │ └── ai_utils.py
│ ├── requirements.txt
│ └── start.sh
├── Frontend/ # React + Tailwind frontend (Vite)
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── public/
│ ├── vite.config.js
│ └── .env
└── README.md
```

---

## 🧠 Features

- ✅ Submit Python or JavaScript code
- 🧠 AI-generated feedback using Gemini API
- 📊 Readability & efficiency scoring
- 🐞 Bug detection & suggestions
- 💡 Improved code recommendations
- 🧩 Similarity check with ideal sample answers
- 🕓 Submission history viewer
- 🧑‍🏫 Admin panel to add sample answers
- 💻 Monaco-based code editor

---

## 💡 Tech Stack

**Frontend**

- React (Vite)
- TailwindCSS
- Axios
- Monaco Editor
- Chart.js
- Lucide Icons
- Deployed on **Netlify**

**Backend**

- FastAPI
- SQLAlchemy + SQLite
- Google Generative AI (Gemini 2.5 Pro)
- Uvicorn
- Deployed on **Railway**

---

## 🔧 Setup Instructions

### ⚙️ Backend

```bash
cd Backend
python -m venv venv
source venv/bin/activate  # Or venv\Scripts\activate on Windows
pip install -r requirements.txt

# Set up .env
echo "GEMINI_API_KEY=your-api-key-here" > .env

# Run server
uvicorn app.main:app --reload
```

### ⚙️ Frontend

```bash
cd Frontend
npm install

# Create .env file
echo "VITE_API_BASE_URL=http://localhost:8000" > .env

npm run dev
```

### ⚙️ Environment Variables

- Backend

```bash
GEMINI_API_KEY=your-api-key-here
```

- Frontend

```bash
VITE_API_BASE_URL=http://localhost:8000
```

---

### Screenshots

<h2>📸 Screenshots</h2>
<div align="center">
<table>
  <tr>
    <td><img src="link_to_image1" alt="Home Page" width="300"/></td>
    <td><img src="link_to_image2" alt="Feedback Panel" width="300"/></td>
    <td><img src="link_to_image3" alt="Sample Answer List" width="300"/></td>
  </tr>
  <tr>
    <td align="center"><strong>Submit Code Page</strong></td>
    <td align="center"><strong>AI Feedback Panel</strong></td>
    <td align="center"><strong>Sample Answers</strong></td>
  </tr>
  <tr>
    <td><img src="link_to_image4" alt="Add Sample" width="300"/></td>
    <td><img src="link_to_image5" alt="History" width="300"/></td>
    <td><img src="link_to_image6" alt="Mobile View" width="300"/></td>
  </tr>
  <tr>
    <td align="center"><strong>Add Sample Answer</strong></td>
    <td align="center"><strong>Submission History</strong></td>
    <td align="center"><strong>Mobile View</strong></td>
  </tr>
</table>
</div>

---
### 📝 License

## MIT License © 2025 Vashu Singh

### Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Chart.js](https://www.chartjs.org/)
- [Lucide Icons](https://lucide.dev/)
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
