# 🚀 দ্রুত ডিপ্লয়মেন্ট গাইড (Quick Deployment)

## 1️⃣ GitHub এ Push করুন

PowerShell এ এই কমান্ড গুলো চালান:

```powershell
# Repository initialize করুন (প্রথমবার)
git init

# সকল ফাইল add করুন
git add .

# Commit করুন
git commit -m "Initial commit"

# GitHub repository link যোগ করুন (YOUR_USERNAME পরিবর্তন করুন)
git remote add origin https://github.com/YOUR_USERNAME/Task_Board_DevChallange.git

# Main branch এ push করুন
git branch -M main
git push -u origin main
```

### GitHub এ Repository তৈরি করুন:

1. `github.com` এ যান
2. **"New"** ক্লিক করুন
3. Repository name: `Task_Board_DevChallange`
4. **Create Repository** ক্লিক করুন

---

## 2️⃣ Frontend Deploy করুন (Vercel এ)

### সবচেয়ে সহজ উপায়:

1. **[vercel.com](https://vercel.com)** এ যান
2. GitHub দিয়ে Sign in করুন
3. **"Add New" → "Project"** ক্লিক করুন
4. আপনার GitHub repository সিলেক্ট করুন
5. এই সেটিংস ব্যবহার করুন:
   - **Framework**: Vite
   - **Root Directory**: `frontend/vite-project`
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install`

6. **Deploy** বাটন ক্লিক করুন
7. ✅ আপনার Frontend URL পাবেন! (যেমন: `https://task-board-xxx.vercel.app`)

---

## 3️⃣ Backend Deploy করুন

### অপশন A: Railway.app (সবচেয়ে সহজ)

1. **[railway.app](https://railway.app)** এ যান
2. **"New Project"** ক্লিক করুন
3. **"Deploy from GitHub"** সিলেক্ট করুন
4. আপনার repository সিলেক্ট করুন
5. Railway স্বয়ংক্রিয়ভাবে Node.js detect করবে
6. Environment variables add করুন (যদি প্রয়োজন হয়):
   - `PORT`: 3000 (বা আপনার পছন্দের পোর্ট)
7. **Deploy** করুন
8. ✅ Backend URL পাবেন!

### অপশন B: Render.com

1. [render.com](https://render.com) এ যান
2. **"New Web Service"** ক্লিক করুন
3. আপনার GitHub repo connect করুন
4. এই সেটিংস করুন:
   - **Build Command**: `cd backend && npm install && npm start`
   - **Runtime**: Node
5. Deploy করুন

---

## 4️⃣ Environment Variables সেট করুন

### Backend এ (.env ফাইল)

**File: `backend/.env`** তৈরি করুন:

```
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

### Frontend এ (Vercel Dashboard)

Vercel dashboard এ যান → Settings → Environment Variables:

```
VITE_API_URL=https://your-backend.railway.app
```

---

## 5️⃣ Frontend থেকে Backend কল করুন

### `frontend/vite-project/src/api/apiClient.js` আপডেট করুন:

```javascript
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
```

### সব API কল এ apiClient ব্যবহার করুন:

```javascript
export const boardApi = {
  getBoards: () => apiClient.get("/boards"),
  createBoard: (data) => apiClient.post("/boards", data),
  updateBoard: (id, data) => apiClient.put(`/boards/${id}`, data),
  deleteBoard: (id) => apiClient.delete(`/boards/${id}`),
};
```

---

## 6️⃣ Backend এ CORS Setup করুন

**File: `backend/src/app.js`** এ যোগ করুন:

```javascript
const cors = require("cors");

app.use(
  cors({
    origin: "https://your-frontend.vercel.app", // আপনার frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
```

---

## ✅ চেকলিস্ট

- [ ] GitHub এ push করেছেন
- [ ] Frontend URL পেয়েছেন (Vercel থেকে)
- [ ] Backend URL পেয়েছেন (Railway/Render থেকে)
- [ ] Environment variables সেট করেছেন
- [ ] CORS configure করেছেন
- [ ] API calls test করেছেন

---

## 🎉 শেষ ফলাফল

```
📱 Frontend: https://your-project.vercel.app
🔧 Backend: https://your-backend.railway.app
📝 GitHub: https://github.com/YOUR_USERNAME/Task_Board_DevChallange
```

### আপনার সম্পূর্ণ অ্যাপ এখন Live! 🎊

---

## 🆘 সমস্যা হলে?

### সমস্যা: API calls কাজ করছে না

- ✅ Backend URL যাচাই করুন environment variables এ
- ✅ Browser console খুলুন এবং error দেখুন
- ✅ Backend server running আছে কিনা চেক করুন

### সমস্যা: CORS Error

- ✅ Frontend URL যাচাই করুন CORS সেটিংসে
- ✅ Credentials: true সেট করুন (যদি authentication হয়)

### সমস্যা: Vercel build ফেইল হচ্ছে

- ✅ `npm install` run করুন locally
- ✅ `package.json` এ সব dependencies আছে কিনা চেক করুন
- ✅ Build command যাচাই করুন

---

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://railway.app/docs)
- [Render Documentation](https://render.com/docs)
- [Express CORS](https://www.npmjs.com/package/cors)

Happy Deployment! 🚀
