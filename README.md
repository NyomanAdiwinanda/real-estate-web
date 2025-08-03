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

## Live Recording

<a href="https://www.loom.com/share/9b919bb8f3fe4dd3bb1494d4863c93a5?sid=7f2c1d71-0b4e-4c2d-a032-e9a0410cd15b" target="_blank" rel="noopener noreferrer">Watch the project walkthrough on Loom</a>

## Live Demo

<a href="https://real-estate-web-five-phi.vercel.app/" target="_blank" rel="noopener noreferrer">https://real-estate-web-five-phi.vercel.app/</a>

## CMS (Sanity Studio)

<a href="https://github.com/NyomanAdiwinanda/studio-real-estate" target="_blank" rel="noopener noreferrer">https://github.com/NyomanAdiwinanda/studio-real-estate</a>

## Screenshots

![Homepage Screenshot 1](https://github.com/user-attachments/assets/5b76b0d6-4db7-4d4f-8557-a0619b2b2df7)
![Homepage Screenshot 2](https://github.com/user-attachments/assets/eed965f2-b027-4e32-985f-5a50cdeb956e)
![Property Detail Screenshot 1](https://github.com/user-attachments/assets/09f38d0b-4fc2-44c1-ae8e-66ad4d56cac6)
![Property Detail Screenshot 2](https://github.com/user-attachments/assets/683fdeea-71da-41f9-9412-46b7a5e88dd2)
