# 📝 Quick Blog – MERN Stack CRUD + Google Gemini AI

A full-stack blog application demonstrating **CRUD operations** (Create, Read, Update, Delete) with an **admin dashboard and analytics**, powered by **Google Gemini AI** for content generation. Built with the **MERN stack** (MongoDB, Express, React, Node.js).

---

## 🚀 Features

### ✍️ CRUD Blog
- **Create:** Add new blog posts manually or generate content automatically with Google Gemini AI.
- **Read:** View all blog posts with full details.
- **Update:** Edit existing posts or improve AI-generated content.
- **Delete:** Remove posts easily when no longer needed.

### 🖥️ Admin Dashboard
- Overview of posts, users, and analytics.
- Admin authentication and control.

### 🤖 AI Integration
- Google Gemini API for smart blog content generation.

### 📊 Analytics
- Simple dashboard showing post stats, views, and activity.

---

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas)  
- **Authentication:** JWT-based  
- **AI:** Google Gemini API  
- **Image Hosting:** ImageKit  

---

## 📂 Project Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/quick-blog.git
cd quick-blog

Install dependencies: npm install

## Create a .env file
PORT=3000
MONGODB_URI="your_mongodb_uri_here"

ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="your_admin_password"

JWT_SECRET="your_jwt_secret"

IMAGEKIT_PUBLIC_KEY="your_imagekit_public_key"
IMAGEKIT_PRIVATE_KEY="your_imagekit_private_key"
IMAGEKIT_URL_ENDPOINT="your_imagekit_url_endpoint"

GEMINI_API_KEY="your_google_gemini_api_key"

npm run dev














