# Barandon Inc. — Heritage Menswear E-Commerce

A full-stack e-commerce demo for **Barandon Inc.**, a Philippines-based small business
selling men's shirts, caps, and shoes. The brand theme celebrates Philippine heritage
with a masculine, premium aesthetic (deep navy + Philippine-sun gold).

The project is split into two apps:

- **Backend** — an Express REST API serving products (and a starter users resource).
- **Frontend** — a Next.js + Tailwind CSS storefront with a client-side cart and checkout.

> ⚠️ This is a learning/demo project. Product and user data live **in memory** on the
> backend, so they reset every time the server restarts. Checkout is a stub — no real
> payment is processed.

---

## Tech Stack

| Layer     | Tech                                             |
| --------- | ------------------------------------------------ |
| Backend   | Node.js, Express, CORS, uuid                     |
| Frontend  | Next.js 14 (App Router), React 18, Tailwind CSS  |
| State     | React Context + `localStorage` (cart)            |

---

## Project Structure

```
EXPRESSPROJECTS/
├── index.js                  # Express app entry (port 5000)
├── routes/
│   ├── products.js           # /products routes
│   └── users.js              # /users routes
├── controllers/
│   ├── products.js           # product catalog (seeded, in-memory)
│   └── users.js              # users CRUD (in-memory)
├── assets/                   # source brand SVGs (logo + category icons)
│
└── client/                   # Next.js storefront (port 3000)
    ├── app/
    │   ├── page.jsx          # home (hero + categories + featured)
    │   ├── category/[slug]/  # product listing per category
    │   ├── product/[id]/     # product detail
    │   ├── cart/             # cart
    │   └── checkout/         # checkout stub + order confirmation
    ├── components/           # Navbar, Hero, Footer, ProductCard, icons, …
    ├── context/CartContext.jsx
    └── lib/                  # api.js (fetch helpers), format.js
```

The backend and frontend are **separate apps with separate dependencies**, so each has
its own `package.json`. See [Running the App](#running-the-app) — you install and run
them independently.

---

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (bundled with Node)

---

## Setup

Install dependencies for **both** apps:

```bash
# from the repo root — installs the backend
npm install

# then the frontend
cd client
npm install
cd ..
```

---

## Running the App

You need **two terminals** — one per server. Start the backend first.

**Terminal 1 — backend (http://localhost:5000):**

```bash
npm start
```

**Terminal 2 — frontend (http://localhost:3000):**

```bash
cd client
npm run dev
```

Then open **http://localhost:3000**.

> The frontend fetches products from the backend, so the API must be running or product
> pages will show a "make sure the API is running" message.

### Configuration

The frontend targets `http://localhost:5000` by default. To point it elsewhere, set an
environment variable before starting the frontend:

```bash
# client/.env.local
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## API Reference

Base URL: `http://localhost:5000`

### Products

| Method | Endpoint                     | Description                              |
| ------ | ---------------------------- | ---------------------------------------- |
| GET    | `/products`                  | List all products                        |
| GET    | `/products?category=shirts`  | List products in a category (`shirts` \| `caps` \| `shoes`) |
| GET    | `/products/:id`              | Get a single product                     |
| POST   | `/products`                  | Create a product (`name`, `category`, `price` required) |

### Users (starter resource)

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | `/users`      | List users         |
| POST   | `/users`      | Create a user      |
| GET    | `/users/:id`  | Get a user         |
| PATCH  | `/users/:id`  | Update a user      |
| DELETE | `/users/:id`  | Delete a user      |

---

## What's Stubbed / Not Yet Built

- **No database** — products and users are in memory and reset on restart.
- **No authentication** — the "Sign In" button is a placeholder.
- **Checkout is a demo** — it collects shipping details and generates a mock order
  number, but takes no payment.

## Possible Next Steps

- Persist data with a database (e.g. MongoDB + Mongoose, or PostgreSQL).
- Add user authentication (JWT) and a server-side cart tied to the logged-in user.
- Add real product images and a payment integration (e.g. Stripe).
