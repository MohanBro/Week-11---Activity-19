# CSC220 Week 11 - Full-Stack Student Manager

React + Express + MongoDB + CORS + JWT (Activity 19).

## Setup

### 1. Server (http://localhost:3000)
```
cd server
npm install
```
Copy `.env.example` to `.env` and put in your MongoDB Atlas connection string:
```
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@YOUR_CLUSTER.mongodb.net/csc220
JWT_SECRET=csc220_week11_secret
PORT=3000
```
Then run:
```
npm run dev
```

### 2. Register a test user (once, in Postman)
POST http://localhost:3000/api/auth/register
```json
{ "email": "student1@example.com", "password": "password123" }
```

### 3. Client (http://localhost:5173)
```
cd client
npm install
npm run dev
```

## Notes
- `.env` and `node_modules/` are not uploaded to GitHub.
- GET /api/students is public. POST and DELETE need a JWT token.
