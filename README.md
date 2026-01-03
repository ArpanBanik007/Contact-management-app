# Contact Management Web App (MERN Stack)

A simple Contact Management Web Application built using the MERN stack.  
This project was created as part of a technical interview task to demonstrate core MERN fundamentals, REST APIs, and database operations.

---

## 🚀 Features

- Create a new contact
- Fetch all contacts
- Update contact name (email & phone remain unchanged)
- Delete contact using phone or email
- Backend validation and error handling
- RESTful API structure
- MongoDB for persistent storage

---

## 🛠️ Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- ES Modules (import/export)

**Tools & Libraries**
- express
- mongoose
- dotenv
- cors
- nodemon

---

## 📁 Project Structure

Backend/
├── controller/
│ └── contact.controller.js
├── models/
│ └── Contact.model.js
├── router/
│ └── contact.routes.js
├── utils/
│ ├── ApiError.js
│ └── ApiResponse.js
├── .env
├── .gitignore
├── app.js
├── index.js
├── package.json

yaml
Copy code

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string

yaml
Copy code

> ⚠️ `.env` is ignored using `.gitignore` for security reasons.

---

## ▶️ Installation & Run (Backend)

```bash
npm install
npm run dev
Server will start on:

arduino
Copy code
http://localhost:5000
📌 API Endpoints
Create Contact
bash
Copy code
POST /api/contacts
Body:

json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Hello"
}
Get All Contacts
bash
Copy code
GET /api/contacts
Update Contact Name (by phone or email)
bash
Copy code
PATCH /api/contacts/:identifier
Body:

json
Copy code
{
  "name": "Updated Name"
}
Delete Contact (by phone or email)
bash
Copy code
DELETE /api/contacts/:identifier
🧪 Validation Rules
Name, Email, Phone are required

Email must be valid

Phone must be unique

Duplicate contacts are prevented

Message field is optional

🎯 Interview Notes
Focused on functionality over UI

Clean API structure

Proper HTTP status codes

Backend & database validation

Interview-ready code practices

👤 Author
Arpan Banik
GitHub: https://github.com/ArpanBanik007
