# Obsidian House - Luxury Fragrance Store

A sophisticated e-commerce website for selling premium Creed Aventus 100ml bottles. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Elegant Design**: Niche fragrance aesthetic with luxury branding
- **Single Product Focus**: Optimized for selling Creed Aventus 100ml bottles ($160 each)
- **Payment Processing**: Stripe integration for secure transactions
- **Shipping Management**: Complete shipping information collection
- **Admin Dashboard**: Order management and inventory tracking
- **Responsive**: Works perfectly on all devices
- **Stock Management**: Track your 9 bottles inventory

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: PostgreSQL with Prisma ORM
- **Payments**: Stripe integration
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database
- Stripe account for payment processing

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   
   Update the `.env` file with your actual credentials:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/cologne_store?schema=public"
   
   # NextAuth (generate a random secret)
   NEXTAUTH_SECRET="your-super-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Stripe (get from your Stripe dashboard)
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_WEBHOOK_SECRET="whsec_..."
   
   # App
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

3. **Set up the database:**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma db push
   
   # Seed the database with your product
   npx ts-node src/lib/seed.ts
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view your store.

## Stripe Setup

1. **Create a Stripe account** at [stripe.com](https://stripe.com)

2. **Get your API keys:**
   - Go to Developers → API keys
   - Copy your Publishable key and Secret key
   - Add them to your `.env` file

3. **Set up webhooks (for production):**
   - Go to Developers → Webhooks
   - Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
   - Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`

## Pages Overview

- **Homepage** (`/`): Elegant landing page showcasing Creed Aventus
- **Product Page** (`/product`): Detailed product view with purchase options
- **Checkout** (`/checkout`): Complete checkout flow with shipping and payment
- **Admin Dashboard** (`/admin`): Order management and inventory tracking

## Order Management

### Processing Orders
1. Visit `/admin` to view new orders
2. Orders start with status "paid" after successful payment
3. Click "Ship Order" and enter tracking number
4. Status updates to "shipped"
5. Customer receives shipping confirmation (when email is set up)

### Inventory Management
- Track remaining stock in admin dashboard
- Update inventory count manually
- System prevents overselling

## Production Deployment

### Recommended: Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Database
- Use a managed PostgreSQL service like Railway, Supabase, or PlanetScale

## Security Notes

- Never commit your `.env` file
- Use Stripe's test keys during development
- Always validate payments on the server side
- Keep your webhook secret secure

---

**Ready to start selling luxury fragrances!** 🍯✨
