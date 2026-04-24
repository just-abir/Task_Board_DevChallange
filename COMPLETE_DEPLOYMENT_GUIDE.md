# 🚀 Complete Deployment Guide - Step by Step

---

## 📌 Overview

This guide will help you deploy:

- ✅ **Frontend** → Vercel
- ✅ **Backend** → Railway
- ✅ Connect them together
- ✅ Live URL

---

# PART 1️⃣: GITHUB SETUP (Very Important!)

## Step 1.1: Create GitHub Account

1. Go to [github.com](https://github.com)
2. Click **"Sign Up"**
3. Fill in username, email, password
4. Verify your email

## Step 1.2: Create New Repository on GitHub

1. Go to [github.com](https://github.com)
2. Click **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `Task_Board_DevChallange`
   - **Description**: Full Stack Task Board Application
   - **Public** or **Private** (choose one)
   - DO NOT check "Initialize with README"
4. Click **"Create repository"**

## Step 1.3: Push Your Code to GitHub

### A) Install Git (if not installed)

Go to [git-scm.com](https://git-scm.com) and download Git

### B) Open PowerShell in Your Project Root

Navigate to your project folder:

```powershell
cd e:\Backend_2026\April_26\Task_Board_DevChallange
```

### C) Initialize Git & Push Code

Run these commands ONE BY ONE:

```powershell
# 1. Initialize git repository
git init

# 2. Add all files to git
git add .

# 3. Create first commit
git commit -m "Initial commit: Full stack task board application"

# 4. Rename branch to main (GitHub default)
git branch -M main

# 5. Add remote URL (REPLACE YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/Task_Board_DevChallange.git

# 6. Push code to GitHub
git push -u origin main
```

**Expected Output:**

```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
...
To https://github.com/YOUR_USERNAME/Task_Board_DevChallange.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

### ✅ Verify on GitHub

1. Go to `https://github.com/YOUR_USERNAME/Task_Board_DevChallange`
2. You should see all your files there!

---

# PART 2️⃣: DEPLOY BACKEND TO RAILWAY

## Step 2.1: Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Click **"Start Project"**
3. Click **"GitHub"** (Connect with GitHub)
4. Authorize Railway to access your GitHub

## Step 2.2: Create New Project

1. In Railway Dashboard, click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Find your repository: `Task_Board_DevChallange`
4. Click to select it
5. Railway will ask "Which service to deploy?" → Select **backend** folder

## Step 2.3: Configure Environment Variables

1. In Railway Dashboard, go to **Variables**
2. Add these environment variables:

## Step 2.4: Deploy Backend

1. Click **"Deploy"** button
2. Wait for deployment to complete (5-10 minutes)
3. Look for **"Deployment Successful"** message

## Step 2.5: Get Backend URL

1. In Railway Dashboard, find your project
2. Click on your service
3. Look for **URL** or **Domain** section
4. Copy the backend URL (looks like: `https://your-backend-xxxxx.railway.app`)
5. **Save this URL** - you'll need it next!

---

# PART 3️⃣: DEPLOY FRONTEND TO VERCEL

## Step 3.1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

## Step 3.2: Import Your Project

1. In Vercel Dashboard, click **"Add New"** → **"Project"**
2. Click **"Import Git Repository"**
3. Find and select: `Task_Board_DevChallange`
4. Click **"Import"**

## Step 3.3: Configure Frontend Settings

1. You'll see "Configure Project" screen
2. Under **Root Directory**, click and select: `frontend/vite-project`
3. Under **Build Command**, make sure it's: `npm run build`
4. Under **Output Directory**, it should be: `dist`
5. Click **"Environment Variables"**

## Step 3.4: Add Environment Variables for Frontend

1. Click **"Add"**
2. Add this variable:
   - **Name**: `VITE_API_URL`
   - **Value**: Paste your backend URL from Railway (e.g., `https://your-backend-xxxxx.railway.app`)
   - Click **"Add"**

3. Click **"Deploy"** button
4. Wait for deployment (3-5 minutes)

## Step 3.5: Get Frontend URL

1. Wait for Vercel to finish deployment
2. You'll see message: **"Congratulations! Your project has been successfully deployed"**
3. Copy your **Frontend URL** (looks like: `https://task-board-xxxxx.vercel.app`)
4. **Save this URL** - this is your live app!

---

# PART 4️⃣: CONNECT FRONTEND & BACKEND

## Step 4.1: Update Frontend Environment

1. In your local project, open: `frontend/vite-project/.env`
2. Update it:

```env
VITE_API_URL=https://your-backend-xxxxx.railway.app
```

(Use the backend URL you got from Railway)

3. Save the file

## Step 4.2: Update Backend Environment

1. Open: `backend/.env`
2. Update it:

(Use the frontend URL you got from Vercel)

3. Save the file

## Step 4.3: Update CORS in Backend

1. Open: `backend/src/app.js`
2. Make sure CORS is configured:

```javascript
const cors = require("cors");

app.use(
  cors({
    origin: "https://task-board-xxxxx.vercel.app", // Your Vercel URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  }),
);
```

3. Save the file

## Step 4.4: Push Updated Code to GitHub

```powershell
cd e:\Backend_2026\April_26\Task_Board_DevChallange

git add .
git commit -m "Update environment variables for production"
git push
```

## Step 4.5: Redeploy Both Services

### Railway (Backend):

1. Go to Railway Dashboard
2. Your backend will auto-redeploy with new `.env`
3. Wait for "Deployment Successful"

### Vercel (Frontend):

1. Go to Vercel Dashboard
2. Your frontend will auto-redeploy
3. Wait for "Deployment Successful"

---

# PART 5️⃣: TEST YOUR DEPLOYMENT

## Step 5.1: Visit Your Frontend URL

1. Open your frontend URL in browser: `https://task-board-xxxxx.vercel.app`
2. You should see your app loaded!

## Step 5.2: Test API Calls

1. Open the app
2. Try these actions:
   - Create a new board
   - Add a task
   - Edit a task
   - Delete a task
3. Open **Developer Tools** (F12) → **Console** tab
4. Check if there are any errors

## Step 5.3: If API Calls Fail

**Common Issues & Fixes:**

### Issue 1: CORS Error

- **Error**: `Access to XMLHttpRequest has been blocked by CORS policy`
- **Fix**: Go to Railway backend settings, make sure `FRONTEND_URL` is correct

### Issue 2: Backend URL Not Found

- **Error**: `Failed to fetch`
- **Fix**:
  1. Check `VITE_API_URL` in Vercel environment variables
  2. Make sure Railway backend is deployed and running

### Issue 3: Database Connection Error

- **Error**: `MongoDB connection failed`
- **Fix**: Check `MONGO_URI` in Railway environment variables

---

# SUMMARY 📊

## Your Deployment URLs:

| Component             | URL                                                      | Status       |
| --------------------- | -------------------------------------------------------- | ------------ |
| **GitHub Repo**       | https://github.com/YOUR_USERNAME/Task_Board_DevChallange | ✅ Public    |
| **Frontend (Vercel)** | https://task-board-xxxxx.vercel.app                      | ✅ Live      |
| **Backend (Railway)** | https://your-backend-xxxxx.railway.app                   | ✅ Live      |
| **Database**          | MongoDB Atlas                                            | ✅ Connected |

---

# ✅ FINAL CHECKLIST

Before considering deployment complete, verify:

- [ ] Code pushed to GitHub
- [ ] Backend deployed on Railway (got backend URL)
- [ ] Frontend deployed on Vercel (got frontend URL)
- [ ] `.env` files updated with production URLs
- [ ] CORS configured in backend
- [ ] Environment variables set in both Railway and Vercel
- [ ] Frontend loads without errors
- [ ] API calls work (create, read, update, delete boards/tasks)
- [ ] No console errors in browser
- [ ] Database connection successful

---

# 🎉 SUCCESS!

Your full-stack app is now **LIVE** on the internet!

Anyone can access it using:

### 👉 `https://task-board-xxxxx.vercel.app`

---

# 📞 Need Help?

### Common Commands:

**Check git status:**

```powershell
git status
```

**See deployment logs (Railway):**
Go to Railway Dashboard → Select service → Deployments tab

**See deployment logs (Vercel):**
Go to Vercel Dashboard → Select project → Deployments tab

**Redeploy manually (Railway):**
Railway Dashboard → Right-click service → "Redeploy"

**Redeploy manually (Vercel):**
Vercel Dashboard → Project → Deployments → Redeploy

---

Happy Deployment! 🚀
