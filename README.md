# 🗨️ Comment Form App (Next.js + Neon + Vercel)

A minimal full-stack app that lets users submit and view comments in real time using:

- **Next.js App Router**
- **Neon (PostgreSQL)**
- **Vercel Serverless Deployment**
- **Built-in Server Actions (no separate API route needed)**

---

## 🚀 Live Demo

👉 [https://your-vercel-deployment-url.vercel.app/comments](#)

---

## 🧠 Features

- Serverless database connection via [@neondatabase/serverless](https://github.com/neondatabase/serverless)
- Uses [`use server`] server actions to handle form submissions securely
- Revalidates the page automatically with `revalidatePath()` for instant updates
- Fully compatible with Vercel deployments

---

## 🗂️ File Structure

```bash
.
├── app/
│   └── comments/
│       └── page.tsx      # Main comment form UI
├── lib/
│   └── db.ts             # Neon database client
├── .env.local            # Contains DATABASE_URL
└── README.md             # You’re reading this
```

---

## 🔧 Setup Instructions

1. Clone this repository
    ```bash
    git clone https://github.com/iamkingdes98/Comment-Form-App
    cd Comment-Form-App
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Set up environment variable

    Create a `.env.local` file:
    ```
    DATABASE_URL=your_neon_postgres_url_here
    ```

    > 💡 Get your connection string from the Neon dashboard.

---

## 🧱 Database Schema

Run this SQL in your Neon SQL Editor to create the comments table:

```sql
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  comment TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 💻 Run Locally

```bash
npm run dev
```

Visit: [http://localhost:3000/comments](http://localhost:3000/comments)

---

## ☁️ Deploy to Vercel

1. Connect this repo to Vercel.

2. Add the environment variable:

    ```
    DATABASE_URL → Neon Postgres URL
    ```

3. Deploy!

---

## 📋 Example Screenshot

> (Add a screenshot here once deployed)

---

## ✅ To-Do / Future Features

- ✅ Basic comment submission
- ✅ Display recent comments
- 🔲 User authentication
- 🔲 Rate-limiting or spam prevention
- 🔲 Pagination for large comment sets

---

## 🧠 Credits

Built with ❤️ by [@iamkingdes98](https://github.com/iamkingdes98)

---

## 🛡️ License

MIT
