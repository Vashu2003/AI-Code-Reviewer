# 🤖 AI Code Reviewer

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

---
### 📝 License

MIT License © 2025 Vashu Singh
---
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

