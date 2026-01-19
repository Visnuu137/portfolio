# Push Your Portfolio to GitHub

## Your Repository URL
https://github.com/Visnuu137/portfolio.git

## Quick Push Commands

### If using Personal Access Token:
```bash
git push -u origin main
```
When prompted:
- Username: `Visnuu137`
- Password: [Paste your Personal Access Token]

### If you need to clear cached credentials first:
```bash
# Clear Windows credential manager
cmdkey /list
cmdkey /delete:git:https://github.com

# Then try pushing again
git push -u origin main
```

## After Pushing - Enable GitHub Pages

1. Go to: https://github.com/Visnuu137/portfolio
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes

## Your Live Portfolio URL
Once GitHub Pages is enabled, your portfolio will be live at:
```
https://visnuu137.github.io/portfolio/
```

## Future Updates
Whenever you make changes:
```bash
git add .
git commit -m "Your update message"
git push
```
