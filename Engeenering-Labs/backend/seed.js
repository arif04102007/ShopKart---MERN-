import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.model.js";

dotenv.config();

// Swap this for any real image URL — the model stores the image as a string.
// `grayscale` keeps the photos in step with the monochrome storefront theme.
const image = (slug) =>
  `https://picsum.photos/seed/${slug}/800/800?grayscale`;

// 32 products across 8 categories. The storefront dropdown reads its options
// from GET /products/categories, so adding a category here is enough for it to
// show up in the filter.
const products = [
  // ---------------------------------------------------------------- Electronics
  {
    name: "Wireless Bluetooth Headphones",
    description:
      "Over-ear wireless headphones with active noise cancellation, 30-hour battery life and a padded headband for long listening sessions.",
    price: 2499,
    category: "Electronics",
    image: image("shopkart-headphones"),
    stock: 25,
  },
  {
    name: "Smart Fitness Band",
    description:
      "Slim fitness tracker with heart-rate monitoring, step counting, sleep tracking and a 7-day battery. Water resistant to 50 metres.",
    price: 1799,
    category: "Electronics",
    image: image("shopkart-fitness-band"),
    stock: 40,
  },
  {
    name: "Portable Bluetooth Speaker",
    description:
      "Pocket-sized speaker with 360-degree sound, 12-hour playtime and IPX7 waterproofing. Pairs with a second unit for stereo output.",
    price: 3299,
    category: "Electronics",
    image: image("shopkart-speaker"),
    stock: 18,
  },
  {
    name: "USB-C Fast Charger 65W",
    description:
      "Compact 65W GaN wall charger with two USB-C ports and one USB-A port. Charges a laptop and a phone at the same time.",
    price: 1499,
    category: "Electronics",
    image: image("shopkart-charger"),
    stock: 60,
  },

  // -------------------------------------------------------------------- Fashion
  {
    name: "Classic Denim Jacket",
    description:
      "Mid-wash denim jacket in heavyweight cotton with a button front, twin chest pockets and adjustable waist tabs.",
    price: 2999,
    category: "Fashion",
    image: image("shopkart-denim-jacket"),
    stock: 15,
  },
  {
    name: "Cotton Crew Neck T-Shirt",
    description:
      "Everyday 100% combed cotton t-shirt with a ribbed crew neck and a regular fit that holds its shape after washing.",
    price: 799,
    category: "Fashion",
    image: image("shopkart-tshirt"),
    stock: 80,
  },
  {
    name: "Leather Wrist Watch",
    description:
      "Minimal analogue watch with a stainless steel case, sapphire-coated glass and a genuine leather strap.",
    price: 4499,
    category: "Fashion",
    image: image("shopkart-watch"),
    stock: 12,
  },
  {
    name: "Canvas Tote Bag",
    description:
      "Roomy 16oz canvas tote with reinforced stitching and an internal slip pocket. Carries a laptop plus a day's worth of essentials.",
    price: 1199,
    category: "Fashion",
    image: image("shopkart-tote-bag"),
    stock: 55,
  },

  // ---------------------------------------------------------------------- Books
  {
    name: "The Pragmatic Programmer",
    description:
      "A practical guide to software craftsmanship, covering everything from personal responsibility to architectural techniques.",
    price: 899,
    category: "Books",
    image: image("shopkart-pragmatic"),
    stock: 30,
  },
  {
    name: "Clean Code",
    description:
      "A handbook of agile software craftsmanship, packed with principles and case studies for writing readable, maintainable code.",
    price: 1050,
    category: "Books",
    image: image("shopkart-clean-code"),
    stock: 22,
  },
  {
    name: "Atomic Habits",
    description:
      "A framework for building good habits and breaking bad ones, built on small, repeatable changes that compound over time.",
    price: 499,
    category: "Books",
    image: image("shopkart-atomic-habits"),
    stock: 50,
  },
  {
    name: "Deep Work",
    description:
      "An argument for focused, distraction-free effort and a set of routines for training your attention in a noisy world.",
    price: 649,
    category: "Books",
    image: image("shopkart-deep-work"),
    stock: 34,
  },

  // ----------------------------------------------------------------------- Home
  {
    name: "Ceramic Coffee Mug Set",
    description:
      "Set of four stoneware mugs with a matte glaze and generous 350ml capacity. Dishwasher and microwave safe.",
    price: 699,
    category: "Home",
    image: image("shopkart-mugs"),
    stock: 45,
  },
  {
    name: "Stainless Steel Water Bottle",
    description:
      "Double-walled insulated bottle that keeps drinks cold for 24 hours or hot for 12. Leak-proof lid with a wide mouth.",
    price: 899,
    category: "Home",
    image: image("shopkart-bottle"),
    stock: 35,
  },
  {
    name: "Scented Soy Candle",
    description:
      "Hand-poured soy wax candle with a cotton wick and a warm sandalwood and vanilla scent. Burns for roughly 40 hours.",
    price: 549,
    category: "Home",
    image: image("shopkart-candle"),
    stock: 28,
  },
  {
    name: "Linen Throw Pillow",
    description:
      "Stonewashed linen cushion cover with a hidden zip and a plush microfibre insert. Adds texture to a sofa or reading chair.",
    price: 1299,
    category: "Home",
    image: image("shopkart-pillow"),
    stock: 40,
  },

  // -------------------------------------------------------------------- Sports
  {
    name: "Non-Slip Yoga Mat",
    description:
      "6mm cushioned mat with a textured non-slip surface and alignment markings. Includes a carry strap for studio or home use.",
    price: 1299,
    category: "Sports",
    image: image("shopkart-yoga-mat"),
    stock: 40,
  },
  {
    name: "Adjustable Dumbbell Set",
    description:
      "Pair of dial-adjustable dumbbells replacing fifteen weight increments each, from 2.5kg up to 24kg per hand.",
    price: 3499,
    category: "Sports",
    image: image("shopkart-dumbbells"),
    stock: 15,
  },
  {
    name: "English Willow Cricket Bat",
    description:
      "Grade 3 English willow bat with a full-size blade, round handle and a thick edge for a forgiving middle.",
    price: 2799,
    category: "Sports",
    image: image("shopkart-cricket-bat"),
    stock: 20,
  },
  {
    name: "Cycling Helmet",
    description:
      "Lightweight in-mould helmet with 22 ventilation ports, an adjustable retention dial and reflective rear detailing.",
    price: 1899,
    category: "Sports",
    image: image("shopkart-helmet"),
    stock: 25,
  },

  // -------------------------------------------------------------------- Beauty
  {
    name: "Vitamin C Face Serum",
    description:
      "10% vitamin C serum with hyaluronic acid to brighten dull skin and even tone. Fragrance-free and suitable for daily use.",
    price: 749,
    category: "Beauty",
    image: image("shopkart-vitamin-c"),
    stock: 50,
  },
  {
    name: "Argan Hair Oil",
    description:
      "Cold-pressed argan oil that tames frizz and adds shine without weighing hair down. Safe for colour-treated hair.",
    price: 549,
    category: "Beauty",
    image: image("shopkart-argan-oil"),
    stock: 60,
  },
  {
    name: "Matte Lipstick Set",
    description:
      "Set of four highly pigmented matte lipsticks in everyday nude and berry shades. Long-wearing and non-drying.",
    price: 999,
    category: "Beauty",
    image: image("shopkart-lipstick"),
    stock: 35,
  },
  {
    name: "Aloe Vera Gel",
    description:
      "99% pure aloe vera gel for soothing and hydrating irritated skin. Multipurpose and gentle enough for daily use.",
    price: 349,
    category: "Beauty",
    image: image("shopkart-aloe-gel"),
    stock: 70,
  },

  // ---------------------------------------------------------------------- Toys
  {
    name: "Building Blocks Set",
    description:
      "250-piece interlocking building block set with wheels and windows. Compatible with leading brick brands.",
    price: 1299,
    category: "Toys",
    image: image("shopkart-blocks"),
    stock: 45,
  },
  {
    name: "Remote Control Car",
    description:
      "1:16 scale off-road RC car with a 2.4GHz controller, all-terrain tyres and a rechargeable battery pack.",
    price: 1899,
    category: "Toys",
    image: image("shopkart-rc-car"),
    stock: 22,
  },
  {
    name: "Wooden Puzzle Board",
    description:
      "Chunky wooden puzzle with smooth, rounded pieces in bright non-toxic paint. Builds shape and colour recognition.",
    price: 649,
    category: "Toys",
    image: image("shopkart-puzzle"),
    stock: 55,
  },
  {
    name: "Plush Teddy Bear",
    description:
      "Super-soft 18-inch teddy bear with stitched features and hypoallergenic filling. Machine washable at low heat.",
    price: 899,
    category: "Toys",
    image: image("shopkart-teddy"),
    stock: 38,
  },

  // ------------------------------------------------------------------- Grocery
  {
    name: "Organic Green Tea",
    description:
      "100g of loose-leaf organic green tea with a light, grassy finish. Packed in a resealable foil pouch to keep it fresh.",
    price: 449,
    category: "Grocery",
    image: image("shopkart-green-tea"),
    stock: 65,
  },
  {
    name: "Raw Forest Honey",
    description:
      "Unprocessed, unfiltered honey with a deep floral aroma. No added sugar or preservatives, straight from the hive.",
    price: 599,
    category: "Grocery",
    image: image("shopkart-honey"),
    stock: 42,
  },
  {
    name: "California Almonds 500g",
    description:
      "Premium whole almonds, naturally sun-dried and sorted by hand. A convenient source of protein and healthy fats.",
    price: 799,
    category: "Grocery",
    image: image("shopkart-almonds"),
    stock: 48,
  },
  {
    name: "Cold Pressed Olive Oil",
    description:
      "One litre of extra virgin olive oil extracted by cold pressing. A fruity, peppery oil for dressings and light cooking.",
    price: 1099,
    category: "Grocery",
    image: image("shopkart-olive-oil"),
    stock: 30,
  },
];

const seed = async () => {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is missing. Add it to backend/.env and retry.");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");

    let created = 0;
    let updated = 0;

    for (const product of products) {
      // Upsert by name so re-running the seed never duplicates rows
      // and never touches products you added yourself.
      const existing = await Product.findOne({ name: product.name });

      if (existing) {
        await Product.updateOne({ _id: existing._id }, { $set: product });
        updated += 1;
      } else {
        await Product.create(product);
        created += 1;
      }
    }

    const categories = [...new Set(products.map((p) => p.category))].sort();

    console.log(
      `Seed complete: ${created} created, ${updated} updated, ${products.length} total`
    );
    console.log(`Categories (${categories.length}): ${categories.join(", ")}`);
  } catch (err) {
    console.error("Seeding failed:", err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seed();
