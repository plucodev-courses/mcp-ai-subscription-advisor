# 🧠 Build an AI-Powered Subscription Advisor with MCP, React & Node.js

**A complete hands-on course** teaching how to connect AI models to your own data using the **Model Context Protocol (MCP)** — while building a real-world web app from scratch.

---

## 🚀 What You’ll Build

By the end of this course, you’ll have a working **AI assistant** that can:
- Understand your **subscriptions, renewal dates, and spending**
- Suggest how to **save money or cancel unused services**
- Search where to stream major events (sports, shows, etc.)
- Generate **actionable outputs**, like cancellation emails  
- Run entirely on your **own backend**, powered by MCP  

**Tech stack:**
- 🖥️ **Frontend:** React 19 + Vite + Material UI  
- ⚙️ **Backend:** Node.js + Express + SQLite  
- 🤖 **AI Layer:** Model Context Protocol (MCP)  
- 🗄️ **Persistence:** SQLite (DB, later Postgres in bonus)  

---

## 🧩 Course Outline

Each section of the Udemy course corresponds to a tagged version in this repo:

| Tag | Section | Description |
|------|-----------|-------------|
| `v0.1-setup` | Project Setup | Folder structure, dev environment |
| `v0.2-backend-api` | Backend API | CRUD routes & SQLite DB |
| `v0.3-react-dashboard` | Frontend | Subscription dashboard (React + MUI) |
| `v0.4-mcp-tools` | MCP Integration | Define & expose tools to AI |
| `v0.5-ai-assistant` | Chat Assistant | Full AI chat connected to MCP |
| `v1.0-course-complete` | Final Project | Deployed, working AI subscription advisor |

👉 You can switch between these checkpoints using:
```bash
git checkout v0.3-react-dashboard
```
## 🛠️ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/plucodev-academy/mcp-ai-subscription-advisor.git
cd mcp-ai-subscription-advisor
```

### 2️⃣ Install dependencies
```bash
npm install
```

> _(The root \`package.json\` will use workspaces to install client, server, and mcp dependencies in one shot.)_

### 3️⃣ Run the app
```bash
# start backend API
npm run dev:server

# in another terminal, start the React app
npm run dev:client

# optional: run MCP server
npm run dev:mcp
```

Open your browser at 👉 **http://localhost:5173**

---

## 📚 Learning Objectives

By completing the course, you’ll:
- Understand how **AI tools connect** to your backend safely using MCP.
- Build your own **multi-service web app** (frontend + backend + AI layer).
- Learn how to define and expose **custom MCP tools**.
- Integrate an AI chat interface into any React app.
- Deploy your project to production (Render, Railway, etc.).

---

## 🧠 What Is MCP?

> **Model Context Protocol (MCP)** is a standard that lets AI models access your own data and functions safely.
> Instead of just prompting an LLM, you let it call structured tools like:

```js
getSubscriptions()
getUpcomingRenewals()
suggestSavings()
```

This turns a static chatbot into a **real assistant** that uses *your* logic and data.

---

## 📦 Project Structure

```bash
mcp-ai-subscription-advisor/
├── client/       # React 19 + Vite frontend
├── server/       # Node.js + Express backend
├── mcp/          # MCP server with tools
├── shared/       # Shared utilities & constants
└── README.md
```

---

## 🔑 Environment Variables

Create a \`.env\` file in the project root:

```bash
# Example
PORT=4000
DB_PATH=./server/src/db/subscriptions.db
LLM_API_KEY=your_key_here
```

You’ll get this file and key setup guide in **Section 2** of the course.

---

## 🧭 Checkpoints & Support

Each lecture includes:
- A **checkpoint tag** to jump to the correct code state.
- A **discussion link** where you can ask questions.
- (Bonus) A **PDF cheat sheet** for commands and MCP concepts.

---

## 🧑‍🏫 Instructor

**Paolo “PluCodev” Lucano**  
Full-stack developer & homelab enthusiast.  
Building micro-SaaS, Chrome extensions, and AI-powered apps using the latest developer tools.

📺 **[Join the Course on Udemy →](#)**  
🌐 **[Follow on GitHub →](https://github.com/plucodev)**

---

## ❤️ Contribute / Feedback

If you spot an issue or typo in course materials:
1. Open an [Issue](../../issues)
2. Or submit a Pull Request — contributions are welcome!

---

## 🪄 License

This project is licensed under the **MIT License**.  
You are free to use and modify it for learning or portfolio purposes.
