# 💀 Digital Graveyard 

Digital Graveyard is a full-stack MERN application where users can store, manage, and analyze their failed ideas.  
This repository contains the frontend built with React and deployed on Vercel.

🌐 Live Demo: https://digitalgraveyardfrontend.vercel.app/login
🔗 Backend Repository:https://github.com/VISHAL29OCT/digitalgraveyardbackend

---

## 🚀 Features

- 🔐 Secure JWT Authentication
- 🔑 bcrypt Password Hashing (Backend)
- 🛡 Protected Dashboard Routes
- 📊 Analytics Dashboard with Pie Chart
- 📁 Full CRUD Operations (Create, Read, Update, Delete Ideas)
- 🎨 Cinematic UI with Tailwind CSS
- 🌍 Deployed on Vercel

---

## 📊 Analytics Features

- Category Distribution Donut Chart
- Top Failure Reasons
- Total Ideas Overview
- Category Breakdown (Tech, Business, Personal)

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Recharts
- React Router
- react-hot-toast

### Backend (Separate Repository)
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- bcrypt Password Hashing
- Render Deployment

---

## 🔐 Authentication Flow

1. User registers with email & password
2. Password is securely hashed using bcrypt
3. Login generates a JWT token
4. Token is stored in localStorage
5. Protected routes require valid token

---

## ⚙️ Run Locally

Clone the repository:

```bash
git clone https://github.com/VISHAL29OCT/digitalgraveyardfrontend.git

