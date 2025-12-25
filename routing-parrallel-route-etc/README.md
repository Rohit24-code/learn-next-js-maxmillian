# 🚦 Next.js Advanced Routing — Complete Revision Guide

This project is a **deep-dive learning playground for Next.js App Router routing**.  
It focuses on **advanced routing patterns** such as:

- Route Groups
- Parallel Routes
- Intercepting Routes (Modals)
- Dynamic Routes
- Catch-All & Optional Catch-All Segments
- Scoped Layouts
- Error & Not-Found handling
- Streaming UI with Suspense
- API Routes & Middleware

This README is written as a **revision document** — not just documentation — so I can revisit and re-understand each concept clearly at any time.

---

## 📁 Project Folder Structure (Concept-Driven)

app
├── (content) // Main application content
│ ├── layout.js // Layout for content section
│ ├── news // News module
│ │ ├── page.js // News listing
│ │ ├── [slug] // Dynamic news detail route
│ │ │ ├── layout.js
│ │ │ ├── page.js
│ │ │ ├── not-found.js
│ │ │ ├── image/page.js
│ │ │ └── @modal // Parallel route for modal
│ │ │ ├── (.)image/page.js
│ │ │ └── default.js
│ ├── archive // Archive module
│ │ ├── layout.js
│ │ ├── @archive // Parallel slot (filtered archive)
│ │ │ └── [[...filter]]
│ │ │ ├── page.js
│ │ │ └── error.js
│ │ └── @latest // Parallel slot (latest news)
│ │ └── default.js
│ └── not-found.js
│
├── (marketing) // Marketing / landing section
│ ├── layout.js
│ └── page.js
│
├── api/route.js // App Router API endpoint
├── globals.css

yaml
Copy code

---

## 🧠 Core Concepts Explained

---

## 1️⃣ Route Groups — `(content)` & `(marketing)`

### What they are

Route groups allow you to **organize routes without affecting the URL**.

Example:
app/(content)/news/page.js → /news

yaml
Copy code

### Why they are used

- Clean separation of app sections
- Different layouts for different parts of the app
- Better scalability in large projects

📌 **Key takeaway:**  
Route groups are purely for **architecture**, not navigation.

---

## 2️⃣ Parallel Routes — `@archive` & `@latest`

Parallel routes allow **multiple UI sections to render at the same time**.

Used here in:
archive/
├── @archive
└── @latest

yaml
Copy code

### How it works

- Each `@slot` is rendered independently
- Slots are injected into `archive/layout.js`
- URL does NOT change when slots update

### Real-world use cases

- Dashboard with multiple panels
- Content + sidebar
- Gmail / Slack-style layouts

📌 **Key takeaway:**  
Parallel routes = multiple independent UI trees rendered together.

---

## 3️⃣ Catch-All & Optional Catch-All Routes — `[[...filter]]`

Used in:
@archive/[[...filter]]

markdown
Copy code

### What it matches

- `/archive`
- `/archive/2020`
- `/archive/2020/10`

### Why optional catch-all is powerful

- One route handles multiple URL depths
- Enables URL-driven filtering
- Great for archive, category, or search pages

📌 **Key takeaway:**  
`params.filter` is always an array → URL = state.

---

## 4️⃣ Dynamic Routes — `[slug]`

Used in:
news/[slug]/page.js

markdown
Copy code

### Purpose

- Load individual news articles dynamically
- Enables SEO-friendly URLs
- Supports nested layouts, modals, and 404 handling

### Scoped error handling

Each slug has its own:
not-found.js

yaml
Copy code

📌 **Key takeaway:**  
Dynamic routes are the backbone of content-driven apps.

---

## 5️⃣ Intercepting Routes — `(.)image` (Modals)

Used in:
@modal/(.)image/page.js

yaml
Copy code

### What intercepting routes do

- Render a route **inside another route**
- Do not replace the background page
- Ideal for modals & previews

### UX behavior

- Soft navigation → modal opens
- Page refresh → full page image loads

📌 **Key takeaway:**  
Intercepting routes allow **modal-based navigation without losing context**.

---

## 6️⃣ Default Routes — `default.js`

Used inside parallel slots like:
@modal/default.js
@latest/default.js

yaml
Copy code

### Why they exist

- Required for hard refresh
- Acts as fallback UI when slot is inactive

📌 **Key takeaway:**  
Every parallel route should have a safe fallback.

---

## 7️⃣ Error Boundaries — `error.js`

Used inside:
@archive/[[...filter]]/error.js

### What this demonstrates

Scoped to a specific slot.

---

## 8️⃣ Middleware — `middleware.js`

Used for:

- Auth
- Logging
- Redirects
- Headers rewriting

---

# 🅰 Full Application Flow Diagram

```
USER → /news
         │
         ▼
(content)/layout.js
         │
         ▼
news/page.js → list of articles
         │
Click article
         ▼
news/[slug]/page.js
         │
Open image
         ▼
(.)image/page.js (INTERCEPTED → opens modal)
         │
Close modal → default.js loads
```

---

# 🅱 Routing Mindmap

```
Route Groups
Parallel Routes
Intercepting Routes
Catch-all Segments
Dynamic Routes
Default Routes
Error Boundaries
API Routes
Middleware
Layouts
```

---

# 🅲 One-page Cheat Sheet

| Feature             | Syntax         |
| ------------------- | -------------- |
| Route Group         | `(group)`      |
| Parallel Route Slot | `@slot`        |
| Intercepting Route  | `(.)segment`   |
| Dynamic Route       | `[id]`         |
| Catch-all           | `[[...id]]`    |
| Default Slot        | `default.js`   |
| Error               | `error.js`     |
| 404                 | `not-found.js` |

---

# 🎯 Summary

This project demonstrates **almost every advanced routing feature available in the Next.js App Router**.

If I understand this project well, I understand:

- How modern Next.js apps are architected
- How large-scale routing is managed
- How real production UIs (dashboards, modals, filters) are built

This README exists so I never have to re-learn these concepts from scratch again.
