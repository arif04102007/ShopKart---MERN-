# 🛒 ShopKart — Full-Stack E-Commerce Platform

A full-stack e-commerce web application built with the **MERN stack**, featuring secure authentication, product discovery, shopping carts, wishlists, order management, and Razorpay payments in test mode.

🌐 **Live Demo:** [shop-kart-mern.vercel.app](https://shop-kart-mern.vercel.app/)  
⚙️ **Backend API:** [shopkart-mern.onrender.com](https://shopkart-mern.onrender.com)  
📦 **GitHub Repository:** [ShopKart---MERN-](https://github.com/arif04102007/ShopKart---MERN-)

> **Note:** The backend runs on Render's free hosting plan and may spin down after inactivity. The first request after a period of inactivity can take 50 seconds or more while the service wakes up.

---

## ✨ Features

### 🔐 Authentication & Security
- User registration and login.
- Password hashing using bcrypt.
- JWT-based authentication.
- Authentication tokens stored in HTTP-only cookies.
- Protected API endpoints using authentication middleware.

### 🛍️ Product Discovery
- Browse the product catalog.
- Search products by name.
- Filter products by category.
- Sort products based on supported criteria.
- View dedicated product detail pages.

### ❤️ Wishlist
- Add products to your wishlist.
- Remove products from your wishlist.
- View and manage saved items.
- Live wishlist item count.

### 🧺 Shopping Cart
- Add products to the cart.
- Update product quantities.
- Remove items from the cart.
- Manage items before checkout.

### 💳 Checkout & Payments
- Razorpay integration in **test mode**.
- Server-side order creation.
- Server-side payment verification.
- Payment workflow integrated with the backend.

**Important:** Payments are configured for testing. Use Razorpay test credentials and test payment methods; do not use real payment credentials for testing.

### 📦 Order Management
- View order history.
- Access individual order details.
- Track order status through the order lifecycle:

`PENDING_PAYMENT → PLACED → CONFIRMED → SHIPPED → DELIVERED`

### 🔒 API Protection
- Protected routes for authenticated users.
- Server-side authentication checks.
- HTTP-only cookies for session token storage.

---

## 🧰 Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 19, Vite, React Router |
| Styling | Tailwind CSS |
| HTTP Client | Axios |
| Backend | Node.js, Express 5 |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Authentication | JSON Web Tokens (JWT), bcrypt |
| Cookies | cookie-parser |
| Payments | Razorpay |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |

---

## 🏗️ Architecture

```text
                 ┌──────────────────────┐
                 │   User / Web Browser │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │   React Frontend     │
                 │       Vercel         │
                 └──────────┬───────────┘
                            │ HTTPS / API
                            ▼
                 ┌──────────────────────┐
                 │  Express REST API    │
                 │       Render         │
                 └──────┬────────┬──────┘
                        │        │
                        ▼        ▼
              ┌─────────────┐  ┌─────────────┐
              │ MongoDB     │  │  Razorpay   │
              │ Atlas       │  │ Test Mode   │
              └─────────────┘  └─────────────┘
```

---

## 📁 Project Structure

```text
ShopKart---MERN-/
└── Engeenering-Labs/
    ├── backend/
    │   ├── config/          # Application configuration
    │   ├── controllers/     # Business logic
    │   ├── middlewares/     # Authentication and middleware
    │   ├── models/          # Mongoose models
    │   ├── routes/          # API routes
    │   ├── utils/           # Utility functions
    │   ├── index.js          # Backend entry point
    │   ├── seed.js           # Database seeding script
    │   ├── package.json      # Backend dependencies and scripts
    │   └── package-lock.json
    │
    └── frontend/
        ├── src/
        │   └── services/    # Axios API services
        ├── package.json     # Frontend dependencies and scripts
        ├── index.html
        └── vite.config.js
```

---

## 🚀 Getting Started

Follow these steps to run ShopKart locally.

### Prerequisites

Install or create the following:

- [Node.js](https://nodejs.org/) — preferably a version compatible with your dependencies.
- npm, included with Node.js.
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account or another accessible MongoDB database.
- [Razorpay](https://razorpay.com/) test API credentials if you want to test the payment workflow.

### 1. Clone the Repository

```bash
git clone https://github.com/arif04102007/ShopKart---MERN-.git
cd ShopKart---MERN-/Engeenering-Labs
```

### 2. Set Up the Backend

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory.

Example configuration:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
FRONTEND_URL=http://localhost:5173
RAZORPAY_KEY_ID=your_razorpay_test_key_id
RAZORPAY_KEY_SECRET=your_razorpay_test_key_secret
```

**Important:** These are example variable names. Check the backend source code and use the exact environment variable names your application expects. Do not commit the real `.env` file or any secrets to GitHub.

Start the backend:

```bash
npm start
```

For development with automatic Node.js restarts:

```bash
npm run dev
```

The server should listen on the configured port, provided the application is configured correctly.

### 3. Set Up the Frontend

Open another terminal:

```bash
cd ShopKart---MERN-/Engeenering-Labs/frontend
npm install
```

Configure the frontend API base URL using the environment variable expected by your Axios service. For a Vite project, it might look like:

```env
VITE_API_URL=http://localhost:5000
```

Verify the variable name and URL format against the existing frontend source code.

Start the development server:

```bash
npm run dev
```

Vite will display the local URL in your terminal, commonly `http://localhost:5173`.

Open that URL in your browser to use ShopKart.

---

## 🗄️ Database Setup

ShopKart uses MongoDB Atlas for cloud database storage.

1. Create a MongoDB Atlas cluster.
2. Create a database user with only the permissions required by the application.
3. Configure network access so your backend can connect.
4. Copy the database connection string.
5. Add the connection string to your backend environment variables.
6. Confirm that your backend connects successfully before testing database-dependent features.

The database name and collection structure depend on the Mongoose models and connection configuration in the backend source code.

If the project includes a seed script, inspect its implementation before running:

```bash
npm run seed
```

Run the seed script only when you understand which records it creates or modifies.

---

## 💳 Razorpay Test Mode

ShopKart integrates Razorpay for the checkout and payment workflow.

To configure payment testing:

1. Create or access a Razorpay account.
2. Obtain test-mode API credentials.
3. Configure the backend with the test key ID and secret.
4. Configure the frontend with the public test key if required by the checkout implementation.
5. Test order creation and server-side payment verification.

Keep the Razorpay secret on the backend. Never expose secret keys in frontend code or commit them to GitHub.

---

## 🌐 Deployment

### Frontend — Vercel

The frontend is deployed on Vercel.

**Live URL:** [https://shop-kart-mern.vercel.app](https://shop-kart-mern.vercel.app/)

Ensure the frontend's production API URL points to the deployed backend rather than `localhost`.

### Backend — Render

The intended backend deployment URL is:

[https://shopkart-mern.onrender.com](https://shopkart-mern.onrender.com)

Configure the backend's environment variables in the Render dashboard. Keep the build and start commands consistent with the backend's `package.json`:

```bash
npm install
npm start
```

The backend directory in the repository is:

```text
Engeenering-Labs/backend
```

**Deployment status:** Verify the live backend before treating this URL as operational. A configured URL does not guarantee that the service has deployed successfully.

### Production Configuration Checklist

- [ ] Backend deployment succeeds.
- [ ] MongoDB Atlas connection succeeds.
- [ ] Frontend API URL points to the production backend.
- [ ] CORS allows requests from the deployed frontend.
- [ ] Cookie settings support the deployed frontend/backend domains.
- [ ] Razorpay uses test credentials for testing.
- [ ] All secrets are configured through environment variables.
- [ ] Registration, login, cart, wishlist, and order workflows are tested.

---

## 🔒 Security Best Practices

- Never commit `.env` files, API keys, database credentials, or JWT secrets.
- Use a strong, unique database password.
- Give the application database user only the permissions it needs.
- Keep Razorpay secret credentials exclusively on the backend.
- Validate and authenticate protected API requests on the server.
- Verify payments on the server rather than trusting frontend responses.
- Restrict database network access wherever practical.
- Configure CORS for trusted frontend origins.
- Use secure cookie settings appropriate for production HTTPS deployments.

---

## 🧪 Testing

Before submitting or deploying the project, test the following workflows:

- [ ] Register a new user.
- [ ] Log in and log out.
- [ ] Browse, search, filter, and sort products.
- [ ] Open product detail pages.
- [ ] Add and remove wishlist items.
- [ ] Add products to the cart and update quantities.
- [ ] Complete a Razorpay test payment flow.
- [ ] View order history and order details.
- [ ] Verify protected API routes reject unauthenticated requests.
- [ ] Confirm data persists correctly in MongoDB Atlas.

---

## ⚠️ Known Limitations

- The backend's free hosting plan can spin down after inactivity, causing delays on the first request.
- Payment integration is configured for Razorpay test mode.
- Availability of deployed functionality depends on the backend service, database connection, and environment configuration.

---

## 🎓 Project Information

**Project:** ShopKart — Full-Stack E-Commerce Web Application  
**Category:** Full-Stack Web Development  
**Stack:** MERN  
**Purpose:** Demonstration of frontend development, REST API design, authentication, database integration, cart and order workflows, and payment integration.

---

## 👨‍💻 Author

**Arif**

GitHub: [@arif04102007](https://github.com/arif04102007)

---

⭐ If you find this project interesting, feel free to explore the repository and try the live demo.

**Built with React, Node.js, Express, MongoDB, and a lot of learning.** 🚀
