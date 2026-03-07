# 📚 CaliberPath Git + Local Management Manual

*(Full Master Version for Word, Docs, or Repo Use)*

---

## 🛠 Purpose
This manual explains how to manage the CaliberPath repository, clone it, update it, and operate Git workflows like a professional system-builder.
---
## 💻 About Your Environment

CaliberPath supports development in both:
- **Local Machines** (Windows/Mac/Linux)
- **GitHub Codespaces** (Cloud-hosted VSCode)

If using Codespaces:
- Your development happens remotely
- Always remember to `git commit` and `git push` to sync back to GitHub
- Otherwise, workflow is identical

---

---

# 🧠 How to Clone Your GitHub Repo (Local Control)

---

## 📍 1. Install Git (if not already)

- **Windows**: [Download Git here](https://git-scm.com/download/win)
- **Mac**: [Download Git here](https://git-scm.com/download/mac)
- **Linux**: `sudo apt install git`

✅ Once installed, you can use Git from your terminal.

---

## 📍 2. Get Your GitHub Repo URL

- Open your GitHub repository.
- Click the green **Code** button → Copy the **HTTPS URL** (e.g., `https://github.com/yourusername/caliberpath.git`).

---

## 📍 3. Open Terminal or Git Bash

- Navigate to the folder where you want to save your repo:
```bash
cd Documents/Projects/
```

---

## 📍 4. Clone Your Repository

```bash
git clone https://github.com/yourusername/caliberpath.git
```

✅ This saves a full local copy of your work.

---

## 📍 5. Access and Edit Locally

- Open the folder in VSCode, Sublime, or Notepad++
- Edit, save, export PDFs, create ZIPs, modify anything — totally free control.

---

# 🧠 Ultimate Git Cheat Sheet

---

## 📥 Working With Your Repo (Locally)

### 1. Clone (First Time)
```bash
git clone https://github.com/yourusername/caliberpath.git
```

---

### 2. Pull Latest Changes
```bash
git pull
```
> 🧠 *Always pull before starting new edits!*

---

### 3. Check Status
```bash
git status
```

---

### 4. Stage Changes
```bash
git add .
```
(Adds all current changes.)

or for a specific file:
```bash
git add path/to/filename.md
```

---

### 5. Commit Changes
```bash
git commit -m "Meaningful description of what changed"
```

---

### 6. Push Changes to GitHub
```bash
git push
```

✅ Files updated live on GitHub.

---

# ⚙️ Useful Extra Git Commands

| Action | Command | Notes |
|:------|:--------|:------|
| Create new branch | `git checkout -b new-branch-name` | Good for testing features separately |
| Switch branches | `git checkout branch-name` | Move between branches |
| View commit history | `git log` | See past commits |
| Cancel local changes | `git checkout -- .` | Resets unsaved edits |

---

# 🎯 Daily Git Workflow

**Always follow this simple cycle:**
1. `git pull`
2. Edit your files
3. `git add .`
4. `git commit -m "Clear update message"`
5. `git push`

✅ Keeps everything clean, synced, and safe.

---

# 📦 Backup and Stability Tips

- Regularly clone or copy your entire repo to a cloud drive.
- Monthly full-folder backups = pure safety.

---

# 🚀 Scaling Prep Tips

- Create a new branch when building features:
```bash
git checkout -b feature-new-dashboard
```
- Use pull requests if collaborating.
- Set up GitHub Actions later for automation if needed.

---

# 📜 .gitignore Template (Recommended)

Add a `.gitignore` file at your project root with:

```
node_modules/
dist/
*.log
.DS_Store
.env
output.css
```

✅ This keeps your repo clean and lightweight.

---

# 🏆 Final Reminder

You now control:
- Your full project files
- Your Git history
- Your infrastructure
- Your ability to scale like a real founder

No more getting stuck behind platform walls.  
You operate like a digital builder now. 🛠️🚀

---

# 📜 Official CaliberPath Git Project Manual

This manual is ready to paste into:
- Word (.docx)
- Google Docs
- GitHub `/docs` folder as `caliberpath-git-manual.md`
- Or printed out if you want to flex at Starbucks (optional but hilarious).

---

# 💬 End of Manual
