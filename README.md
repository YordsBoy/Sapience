# 🌱 Sapience

**Sapience** is a modular self-reflection and growth platform that evolves with its users.  
This is not just a journaling app—it's a cognitive architecture for insight synthesis, emotional alignment, and intentional transformation.

---

## ✨ Features
- 📥 Adaptive Onboarding with Tone Calibration  
- 🔁 Reflection Loop Engine with Insight Tagging  
- 📈 AI-Driven Narrative Briefings & Emotional Patterning  
- 🔐 Premium Unlocks (Narrative Export, Dossier Sync, Advanced Forecasting)  
- 💾 Persistent Insight Memory & User Tier Awareness  
- 🎯 Built for individuals, small orgs, and future multi-user deployment  

---

## 🧠 Philosophy
> **Reflection without integration is memory.**  
> **Reflection with intention becomes wisdom.**

---

## 🛠 Tech Stack
| Layer | Choice |
|-------|--------|
| Front-end | React + Next.js 13 |
| Styling  | Tailwind CSS v4, shadcn/ui components |
| Payments | Stripe (client + server elements) |
| Data     | Local Storage (MVP) → SQLModel/Postgres (road-map) |
| Export   | `html2pdf.js` for offline dossiers |

---

## 🚀 Getting Started

1. **Clone**
   ```bash
   git clone https://github.com/YordsBoy/Sapience.git && cd Sapience

2. Install:
   ```bash
   npm install

3. Set up env:
# .env.local
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PREMIUM_PRICE_ID=price_xxx

4. Run the appdev serv:

🧩 Folder Structure

components/        UI primitives & domain widgets
pages/             API routes & legacy pages (if any)
app/               Next-13 App Router (main entry)
public/            Static assets
styles/            Tailwind config & globals
utils/             Helper functions


🛡 Licensing & Use
This project is in active development and currently UNLICENSED.
Forks for personal experimentation are welcome. Commercial use requires written consent.

📬 Contact
Open an Issue or reach the author via GitHub discussions.