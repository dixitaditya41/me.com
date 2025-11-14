# Deployment Guide for Portfolio

## 🚀 How to View Locally

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

The portfolio will be available at `http://localhost:4321` (or another port if 4321 is busy).

### Step 3: Preview Production Build (Optional)
```bash
npm run build
npm run preview
```

---

## 📦 Deploy to GitHub

### Step 1: Initialize Git (if not already done)
```bash
git init
```

### Step 2: Create .gitignore (if not exists)
Make sure you have a `.gitignore` file with:
```
node_modules/
dist/
.astro/
.env
```

### Step 3: Add and Commit Files
```bash
git add .
git commit -m "Initial commit: Portfolio website"
```

### Step 4: Create GitHub Repository
1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `portfolio` or `aditya-dixit-portfolio`)
3. **Don't** initialize with README, .gitignore, or license

### Step 5: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

---

## 🌐 Deploy to Vercel

Vercel is the easiest way to deploy Astro projects!

### Method 1: Deploy via Vercel Website (Recommended)

1. **Go to [Vercel](https://vercel.com)**
   - Sign up or log in with your GitHub account

2. **Import Your Repository**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect it's an Astro project

3. **Configure Project**
   - Framework Preset: **Astro** (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default)
   - Install Command: `npm install` (default)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 1-2 minutes)

5. **Your Site is Live!**
   - Vercel will give you a URL like: `https://your-project.vercel.app`
   - Every push to GitHub will auto-deploy!

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new
   - Deploy to production

### Method 3: Connect GitHub Repo to Vercel

1. **Install Vercel GitHub App**
   - Go to Vercel Dashboard
   - Go to Settings → Git
   - Connect your GitHub account
   - Select the repository

2. **Auto-Deploy**
   - Every push to `main` branch will auto-deploy
   - Preview deployments for pull requests

---

## ⚙️ Update Site URL (After Deployment)

After deploying to Vercel, update `astro.config.mjs`:

```javascript
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://your-project.vercel.app'
})
```

Then commit and push:
```bash
git add astro.config.mjs
git commit -m "Update site URL"
git push
```

---

## 🎯 Custom Domain (Optional)

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

---

## 📝 Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Git
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Push to GitHub

# Vercel
vercel               # Deploy to Vercel
vercel --prod        # Deploy to production
```

---

## ✅ Checklist Before Deploying

- [ ] All images are in `/public` folder
- [ ] Profile image (`/public/me.png`) is added
- [ ] Project images are in `/public/projects/` folder
- [ ] All links are working
- [ ] Test locally with `npm run dev`
- [ ] Build successfully with `npm run build`
- [ ] Update `astro.config.mjs` with your site URL after first deployment

---

## 🆘 Troubleshooting

### Build Fails on Vercel
- Check Node.js version (Vercel uses Node 18+ by default)
- Ensure all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### Images Not Showing
- Make sure images are in `/public` folder
- Use absolute paths starting with `/` (e.g., `/me.png`)
- Clear browser cache

### 404 Errors
- Check that `dist` folder is generated after build
- Verify `output` in `astro.config.mjs` (should be `'static'` or `'server'`)

---

## 🎉 You're Done!

Your portfolio is now live on Vercel and will auto-deploy on every GitHub push!

