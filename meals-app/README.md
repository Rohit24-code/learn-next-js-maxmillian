# 🍽️ Next.js Learning Project — Complete Revision Guide

This repository contains everything I learned while building a full-featured **Next.js App Router** application, including routing, layouts, server actions, database integration, image uploads, and component architecture.

This README is my **master revision document** so I can quickly revisit all concepts anytime.

---

# 📁 Folder Structure

```
/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── meals/
│   │   ├── page.js
│   │   ├── [id]/
│   │   ├── share/
│   │   ├── error.js
│   │   └── loading-out.js
│   ├── community/
│   ├── not-found.js
│
├── components/
│   ├── main-header/
│   ├── images/
│   └── meals/
│
├── lib/
│   ├── meals.js
│   └── actions.js
│
├── assets/
├── public/images/
├── meals.db
└── initdb.js
```

---

# 🚀 What I Learned (Full Breakdown)

## 1️⃣ App Router Basics

- Routes created via folders in `app/`
- `page.js` = main route
- `layout.js` = shared layout
- Automatic server components (RSC)

---

## 2️⃣ Layouts (`layout.js`)

- Persistent UI across routes
- Used for header, global styles
- Supports nested layouts

---

## 3️⃣ Dynamic Routing (`app/meals/[id]/page.js`)

### Access dynamic params:

```js
export default function Page({ params }) {
  const id = params.id;
}
```

### Trigger 404:

```js
notFound();
```

---

## 4️⃣ Loading UI (`loading-out.js`)

- Instant visual feedback
- Prevents blank screens
- Uses Suspense under the hood

---

## 5️⃣ Error Boundaries (`error.js`)

- Catches route-level errors
- Allows reset using:

```js
reset();
```

---

## 6️⃣ Server vs Client Components

### Server Components (default)

- Fetch DB directly
- No client JS
- No hooks like useState/useEffect

### Client Components

Require:

```js
"use client";
```

Used for:

- Forms
- File inputs
- Interactive elements

---

## 7️⃣ Server Actions

Example:

```jsx
<form action={createMeal}>
```

Defined as:

```js
"use server";
export async function createMeal(formData) { ... }
```

They:

- Replace API routes
- Validate input
- Insert to DB
- Redirect

---

## 8️⃣ Image Upload Handling

Using:

- `image-picker.js`
- `/public/images`

Learned:

- File preview
- Save file in server action
- Render using next/image

---

## 9️⃣ SQLite Database Integration

Files:

- meals.db
- lib/meals.js
- initdb.js

Learned:

- SQL queries in server code
- Insert + fetch meals

---

## 🔟 UI Components Breakdown

Meals:

- meals-grid.js
- meal-item.js
- meals-form-submit.js
- image-picker.js

Header:

- main-header.js
- nav-link.js

---

## 1️⃣1️⃣ Data Fetching

Direct DB calls:

```js
const meals = await getMeals();
```

---

## 1️⃣2️⃣ Custom 404 (`not-found.js`)

Triggered via:

```js
notFound();
```

---

## 1️⃣3️⃣ Styling

- globals.css
- .module.css for scoped styles

---

## 1️⃣4️⃣ Assets

### /assets

Used inside components

### /public/images

Exposed as `/images/...`

---

## 1️⃣5️⃣ Navigation Header

- Active link detection via `usePathname()`
- Styled using CSS modules

---

# 🅰 FULL APP FLOW DIAGRAM

```
┌───────────────────────────┐
│        User Visits        │
│     /meals or /share      │
└──────────────┬────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│         app/layout.js (Root Layout)      │
│  - Header                                │
│  - Global CSS                            │
│  - Shared UI across routes               │
└──────────────────┬───────────────────────┘
                   │
                   ▼
          ROUTING LAYER (app/)
          ├── /page.js
          ├── /community/page.js
          ├── /meals/page.js
          ├── /meals/[id]/page.js
          ├── /meals/share/page.js
          └── /not-found.js
                   │
                   ▼
     SERVER COMPONENT RENDERING
     - Fetch meals from DB
     - Render UI with no client JS
                   │
                   ▼
     CLIENT COMPONENTS
     - image-picker.js
     - meals-form-submit.js
     - nav-link.js
     - image-slideshow.js
                   │
                   ▼
     FORM SUBMISSION (Server Action)
     <form action={addMeal}>
                   │
                   ▼
     lib/actions.js ("use server")
     - Validate input
     - Save image
     - Insert into SQLite DB
     - Redirect
                   │
                   ▼
     SQLite Database (meals.db)
     - Store meals
     - Fetch meals
```

---

# 🅱 NEXT.JS COMPLETE MINDMAP

```
Next.js Mindmap
│
├── App Router
│   ├── page.js
│   ├── layout.js
│   ├── dynamic segments ([id])
│   ├── nested routing
│   └── route groups
│
├── Rendering
│   ├── server components
│   ├── client components
│   └── hydration boundaries
│
├── Data Fetching
│   ├── direct DB access
│   ├── async server components
│   └── no legacy data functions
│
├── Server Actions
│   ├── form submission
│   ├── DB insert
│   ├── redirects
│   └── file upload support
│
├── UI States
│   ├── loading.js
│   ├── error.js
│   └── not-found.js
│
├── Images
│   ├── next/image
│   ├── public/images
│   └── uploads
│
├── Styling
│   ├── CSS Modules
│   └── global CSS
│
└── Component Architecture
    ├── header
    ├── nav-link
    ├── meals-grid
    ├── image-picker
    └── slideshow
```

---

# 🅲 ONE-PAGE NEXT.JS CHEAT SHEET

## Routing Essentials

| File         | Purpose         |
| ------------ | --------------- |
| page.js      | Route component |
| layout.js    | Shared wrapper  |
| [id]/page.js | Dynamic route   |
| error.js     | Error UI        |
| loading.js   | Loading UI      |
| not-found.js | 404 page        |

---

## Server vs Client Components

### Server:

- No hooks
- Can query DB
- No client JS

### Client:

```js
"use client";
```

---

## Server Actions

```jsx
<form action={createMeal}>
```

```js
"use server";
export async function createMeal(formData) { ... }
```

---

## Data Fetching

```js
const meals = await getMeals();
```

---

## Images

```jsx
<Image src="/images/pizza.jpg" width={300} height={200} />
```

---

## SQLite

```js
db.prepare("INSERT ...").run();
db.prepare("SELECT ...").all();
```

---

## Styling

```jsx
import styles from "./file.module.css";
<div className={styles.wrapper} />;
```

---
