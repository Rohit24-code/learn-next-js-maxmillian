# 🚦 Next.js Advanced Routing — Complete Revision Guide

This project is a **master-level Next.js routing playground** designed to learn advanced routing concepts including:

- Parallel Routes
- Intercepting Routes
- Route Groups
- Dynamic Segments
- Catch-all Segments
- Modals using Parallel Slots
- Segment-based layouts
- Default & Error routes
- API routes
- Middleware
- Absolute/relative routing behavior

This README is a **complete revision document**, so I can revisit concepts anytime.

---

# 📁 Folder Structure Overview (Part 1)

```
app
├── (content)
│   ├── archive
│   │   ├── @archive
│   │   │   └── [[...filter]]
│   │   │       ├── error.js
│   │   │       └── page.js
│   │   ├── @latest
│   │   │   └── default.js
│   │   └── layout.js
│   ├── layout.js
│   ├── news
│   │   ├── [slug]
│   │   │   ├── @modal
│   │   │   │   ├── (.)image
│   │   │   │   │   └── page.js
│   │   │   │   └── default.js
│   │   │   ├── image/page.js
│   │   │   ├── layout.js
│   │   │   ├── not-found.js
│   │   │   └── page.js
│   │   └── page.js
│   └── not-found.js
```

---

# 🚀 Route Grouping — Deep Explanation

## Route Groups: `(content)` & `(marketing)`

Route groups allow you to organize large projects **without changing the actual URL**.

Example:

```
/app/(content)/news → /news
/app/(marketing)/page → /
```

Why use route groups?

✔ Separate UI sections  
✔ Different layouts  
✔ Cleaner architecture  
✔ Avoid nested messy folders

---

---

# 🧩 Parallel Routes — Full Explanation

Parallel routes allow multiple sections of the UI to update independently.

Example:

```
archive/
├── @archive
└── @latest
```

In `archive/layout.js`:

```jsx
export default function Layout({ archive, latest }) {
  return (
    <div>
      <section>{archive}</section>
      <aside>{latest}</aside>
    </div>
  );
}
```

### ✔️ What this teaches:

- Multiple pieces of UI render at the same time.
- Slots update independently.
- URL does NOT change when switching content in parallel routes.

---

# 🧠 Catch-all Segments — `[[...filter]]`

Matches:

- `/archive`
- `/archive/sports`
- `/archive/sports/2024`
- `/archive/sports/2024/india`

Perfect for dynamic filtering.

---

# 🎨 Intercepting Routes — `(.)image`

Intercepts navigation to load a modal **without leaving the current page**.

Example:

```
@modal/(.)image/page.js
```

Use case:

- Instagram-style image preview
- Modals
- Side-panels

---

# 📦 Default Routes — `default.js`

Used when no matching parallel route exists.

Example:

```
@modal/default.js
```

---

# 🧠 Dynamic Segments — `[slug]`

```
news/[slug]/page.js
```

Used for:

- Articles
- Profiles
- Product pages

Supports layouts, not-found, intercepting, parallel routes.

---

# 🔥 Error Boundaries

```
@archive/[[...filter]]/error.js
```

Scoped to a specific slot.

---

# 🛠 Middleware — `middleware.js`

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

This project demonstrates **EVERY advanced routing technique** in Next.js App Router.

Use this README as a **complete revision guide**.
