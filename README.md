🛒 ShopKart

A full-stack e-commerce web app built with the MERN stack. Users can register, browse and search products, save items to a wishlist, manage a cart, and pay through Razorpay (test mode).

🔗 Live demo: shop-kart-mern.vercel.app ⚙️ API: shopkart-mern.onrender.com

⏳ The backend runs on a free hosting plan, so it sleeps when idle. The first request can take 50 seconds or more while it wakes up. After that it's fast.

✨ Features
🔐 Authentication – register and login with bcrypt-hashed passwords and JWT sessions stored in an httpOnly cookie
🛍️ Product catalog – browse products, search by name, filter by category and sort
📄 Product details – dedicated page for each product
❤️ Wishlist – add and remove items, with a live item count
🧺 Cart – add items, change quantities and remove items
💳 Checkout and payments – Razorpay order creation with server-side payment verification
📦 Orders – order history, order details and status tracking (PENDING_PAYMENT → PLACED → CONFIRMED → SHIPPED → DELIVERED)
🔒 Protected routes – API endpoints are guarded by auth middleware
🧰 Tech Stack
Layer	Technologies
Frontend	React 19, Vite, React Router, Axios, Tailwind CSS
Backend	Node.js, Express 5, Mongoose
Database	MongoDB Atlas
Auth	JSON Web Tokens, bcrypt, cookie-parser
Payments	Razorpay
Deployment	Vercel (frontend), Render (backend)
📁 Project Structure
ShopKart---MERN-/
└── Engeenering-Labs/
    ├── backend/
    │   ├── config/
    │   ├── controllers/      # cart, customer, order, product, wishlist
    │   ├── middlewares/      # auth middleware
    │   ├── models/           # Customer, Product, Order
    │   ├── routes/
    │   ├── utils/
    │   ├── index.js          # server entry point
    │   └── seed.js           # seed script
    └── frontend/
        └── src/
            └── services/     # Axios API layer
