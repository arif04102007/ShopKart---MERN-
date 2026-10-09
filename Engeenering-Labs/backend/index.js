import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import customerRoutes from "./routes/customer.routes.js";
import cookieParser from "cookie-parser";
import productsRouter from './routes/product.routes.js';
import wishlistRouter from './routes/wishlist.routes.js';
import cartRouter from './routes/cart.routes.js';
import orderRouter from './routes/order.routes.js';

// Load env before anything reads process.env (the CORS allowlist below,
// MONGODB_URI, PORT).
dotenv.config();

const app = express();

// Vite's default port is 5173, but it silently falls back to 5174 when 5173 is
// already taken, so allow both instead of hardcoding one.
const allowedOrigins = (
  process.env.CORS_ORIGINS || "http://localhost:5173,http://localhost:5174"
)
  .split(",")
  .map((origin) => origin.trim());

app.use(cors({
  origin: (origin, callback) => {
    // No origin header: curl, Postman, same-origin server calls.
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error(`Origin ${origin} is not allowed by CORS`));
  },
  credentials: true,
}));
app.use(cookieParser());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error.message);
  });
app.use(express.json());



app.use("/customers", customerRoutes);
app.use("/products",productsRouter);
app.use("/wishlist",wishlistRouter);
app.use("/cart",cartRouter);
app.use("/orders", orderRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});