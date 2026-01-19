# Deployment Guide - Portfolio to GitHub Pages

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Repository name: `portfolio` (or any name you prefer)
5. Description: "My Portfolio Website"
6. Set to **Public** (required for free GitHub Pages)
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **"Create repository"**

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

### Option A: Using HTTPS (Recommended for beginners)
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Option B: Using SSH (If you have SSH keys set up)
```bash
git remote add origin git@github.com:YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** (top menu)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **"Save"**
6. Wait 1-2 minutes for GitHub to build your site

## Step 4: Access Your Live Portfolio

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

**Note:** Replace `YOUR_USERNAME` with your GitHub username and `portfolio` with your repository name.

## Step 5: Update Your Portfolio (Future Changes)

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically update your site within 1-2 minutes!

## Troubleshooting

### If you get authentication errors:
- Use GitHub Desktop (GUI) instead
- Or set up a Personal Access Token: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

### If the site doesn't load:
- Check repository is **Public**
- Wait 2-3 minutes after enabling Pages
- Check Settings > Pages to see if there are any errors

### Custom Domain (Optional):
- In Settings > Pages, you can add a custom domain
- Update DNS records as instructed

---

**Need Help?** Check GitHub Docs: https://docs.github.com/en/pages
