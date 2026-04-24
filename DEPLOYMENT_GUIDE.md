# Full-Stack Project Deployment Guide

## 📋 Overview

- **Frontend**: React + Vite → Deploy to Vercel
- **Backend**: Node.js/Express → Deploy to Vercel Serverless or Railway/Render

---

## 🚀 Step 1: Push Your Project to GitHub

### 1.1 Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **"New"** to create a new repository
3. Name it: `Task_Board_DevChallange`
4. Choose **Public** or **Private**
5. Click **Create repository**

### 1.2 Initialize Git & Push Code

Run these commands in your project root folder:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Full-stack task board application"

# Add remote repository (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/Task_Board_DevChallange.git

# Push to GitHub (main branch)
git branch -M main
git push -u origin main
```

---

## 🌐 Step 2: Deploy Frontend to Vercel

### 2.1 Connect Frontend to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New"** → **"Project"**
4. Select your GitHub repository
5. Configure:
   - **Framework Preset**: Select **Vite**
   - **Root Directory**: `frontend/vite-project`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 2.2 Environment Variables (if needed)

If your frontend needs backend URL, add:

```
VITE_API_URL=https://your-backend-url.com
```

### 2.3 Deploy

Click **Deploy** button. Vercel will:

- Build your frontend
- Generate a URL like: `https://task-board-devchallange.vercel.app`

---

## 🔧 Step 3: Deploy Backend

### Option A: Vercel Serverless (Recommended)

**Convert your Express app to Vercel functions:**

1. Create `/api` folder in root
2. Create `/api/index.js`:

```javascript
import express from "express";
// Import your app setup

export default app;
```

3. Add `vercel.json` in root:

```json
{
  "builds": [
    {
      "src": "backend/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "backend/server.js"
    }
  ]
}
```

4. Deploy using Vercel CLI:

```bash
npm i -g vercel
vercel
```

Backend URL: `https://your-project.vercel.app/api`

---

### Option B: Railway.app (Easiest for Express)

1. Go to [railway.app](https://railway.app)
2. Click **New Project** → **Deploy from GitHub**
3. Select your repository
4. Railway auto-detects Node.js project
5. Add environment variables (if needed)
6. Deploy
7. Backend URL will be provided automatically

---

### Option C: Render.com

1. Go to [render.com](https://render.com)
2. Create **New** → **Web Service**
3. Connect GitHub repository
4. Set:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `npm start`
5. Deploy

---

## 🔗 Step 4: Connect Frontend to Backend

Update your frontend API client:

**File: `frontend/vite-project/src/api/apiClient.js`**

```javascript
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});
```

Update your services to use the API URL:

**File: `frontend/vite-project/src/services/board.api.js`**

```javascript
import { apiClient } from "../api/apiClient";

export const boardApi = {
  getBoards: () => apiClient.get("/boards"),
  createBoard: (data) => apiClient.post("/boards", data),
  // ... rest of your API calls
};
```

---

## 📝 Environment Setup

### Backend .env (for local development)

Create `backend/.env`:

```
PORT=5000
MONGODB_URI=your_mongodb_uri
NODE_ENV=development
```

### Frontend .env (for Vercel)

In Vercel dashboard, set:

```
VITE_API_URL=https://your-backend-url.com
```

---

## ✅ Final Checklist

- [ ] Code pushed to GitHub
- [ ] Frontend deployed on Vercel (get frontend URL)
- [ ] Backend deployed (Railway/Render/Vercel) (get backend URL)
- [ ] Frontend updated with backend URL
- [ ] Environment variables configured
- [ ] Test API calls from frontend
- [ ] Enable CORS in backend if needed

---

## 🐛 Common Issues & Fixes

### CORS Error

Add to your backend `app.js`:

```javascript
app.use(
  cors({
    origin: "https://your-frontend-url.vercel.app",
    credentials: true,
  }),
);
```

### API Calls Failing

- Check backend URL in frontend env variables
- Verify backend is running and accessible
- Check browser console for actual error message

### Build Failing on Vercel

- Check `package.json` has all dependencies
- Verify build commands are correct
- Check `node_modules` is in `.gitignore`

---

## 🎉 Result

Once deployed:

- **Frontend URL**: `https://your-project.vercel.app`
- **Backend URL**: `https://your-backend.railway.app` (or similar)
- **GitHub**: `https://github.com/YOUR_USERNAME/Task_Board_DevChallange`

Your full-stack app is now live! 🚀
