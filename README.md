# studentPortal
# 📘 Student Management API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage student records—register, update, delete, fetch, and count students.

**FEATURES**

Register a new student

Get all students

Get a student by ID

Update a student

Delete a student

Get total count of students

Pagination support for listing students: ?page=1&limit=10

Filtering by last name: ?lastName=Smith

Combine pagination and filtering: /api/users/students/all?page=2&limit=5&lastName=Smith

---

## 🚀 Setup Instructions

1. **Clone the repository:**

   ```bash

   git clone https://https://github.com/Abelite-cod/studentPortal.git
   cd studentPortal

2. **Install independencies**
   ```bash

   npm install


3. **Set up environment variables:**

   Create a .env file in the root directory and add the following:

   MONGO_URL=your_mongo_uri_here
    PORT=3000


4. **Start the server**
   ```bash

   npm run dev


**API Endpoints**
Method	    Endpoint	                    Description
POST	    /api/users/register	            Register a new student
GET	        /api/users/students/all	        Fetch all students
GET	        /api/users/student/:id	        Get a student by ID
PUT	        /api/users/students/update/:id	Update a student by ID
DELETE	    /api/users/students/delete/:id	Delete a student by ID
GET	        /api/users/students/count	    Get total student count

**How to Import and Run Postman Collection**
Open Postman.

Click the Import button (top left).

Select the .json collection file you exported after testing your endpoints.

Click the "Collections" tab and run individual requests or use Runner to run them all at once.

**Each request includes basic test scripts to verify:**
Status Code (e.g., 200, 201, 404, 409)

Response body contains expected fields (e.g., message, data, json body, etc.)

**Assumptions & Design Decisions**
Email must be unique to avoid duplicate student records.

All endpoints return JSON and require Content-Type: application/json.

Student updates are performed via ID for clarity.

Validation ensures all required fields are present.

The API follows proper REST requests and returns status codes like:

400 – Bad Request (e.g., missing fields)

404 – Not Found (e.g., student not found by ID)

409 – Conflict (e.g., duplicate email)

500 – Internal Server Error (e.g., DB issues)



**PROJECT STRUCTURE**

studentPortal/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controller/
│   │   └── user.controller.js
│   ├── models/
│   │   └── user.schema.js
│   └── routes/
│       └── user.routes.js
│
├── .env
├── index.js
├── package.json
├── README.md
└── postman_collection.json


