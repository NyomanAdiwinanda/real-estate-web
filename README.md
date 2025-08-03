# Real Estate Web - Next.js, Sanity, TailwindCSS

## Project Overview

This is a modern real estate listing web application built with Next.js, TypeScript, TailwindCSS, and Sanity CMS. The project demonstrates full-stack skills including API integration, dynamic routing, rich content rendering, and responsive UI design.

### Features

- **Homepage:** Lists all published properties with title, price, location (with icon), and thumbnail image.
- **Property Detail Page:** Displays full property details including rich text description, price, location, and image. Includes a back button for navigation.
- **Sanity CMS Integration:** All property data is managed in Sanity and fetched via GROQ queries using the official client.
- **Styling:** Styled with TailwindCSS, featuring a colorful, readable, and responsive design.

### Technologies Used

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Sanity CMS
- @portabletext/react

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd real-estate-web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local` and add your Sanity project ID.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

- `src/app/` - Next.js pages and components
- `src/lib/sanity/` - Sanity client and property queries
- `public/` - Static assets and icons

## Customization

- Update property schema in Sanity to add more fields or validation.
- Tweak TailwindCSS classes for custom branding.
- Extend the UI with search, filters, or authentication as needed.

## Demo

![Homepage Screenshot](public/demo-homepage.png)
![Property Detail Screenshot](public/demo-detail.png)

## Author

Nyoman Adiwinanda

---

For questions or feedback, feel free to contact me via GitHub or email.
