# 🧪 Student-Course Management System API

## 🎯 Objective

Build a **Student-Course Management System API** with authentication and **role-based access control (RBAC)** using NestJS.

---

## 🧰 Tech Stack

* **Backend:** NestJS
* **Database:** MongoDB
* **ODM:** Mongoose
* **Authentication:** JWT (Access Token)
* **Language:** TypeScript

---

## ⏱️ Time Limit

6–8 hours (as per coding round requirement)

---

## 📦 Features

### 🔐 Authentication

* User Registration
* Login (JWT Token generation)
* Protected routes using JWT Auth Guard
* Logout (client-side token removal)

---

### 👥 Role-Based Access Control (RBAC)

| Role  | Permissions                  |
| ----- | ---------------------------- |
| Admin | Create, Read, Update, Delete |
| Agent | Create, Read, Update         |
| User  | Read only                    |

Implemented using:

* Custom `Roles` decorator
* `RolesGuard`
* `JwtAuthGuard`

---

### 🎓 Student Module

#### Schema

```ts
{
  name: string,
  email: string,
  phone: string,
  enrolledCourses: ObjectId[],
  createdAt: Date
}
```

#### APIs

| Method | Endpoint             | Access       |
| ------ | -------------------- | ------------ |
| POST   | /students            | Admin, Agent |
| GET    | /students            | All          |
| GET    | /students/:id        | All          |
| PUT    | /students/:id        | Admin, Agent |
| DELETE | /students/:id        | Admin        |
| POST   | /students/:id/enroll | Admin, Agent |

---

### 📚 Course Module

#### Schema

```ts
{
  title: string,
  description: string,
  duration: number,
  createdAt: Date
}
```

#### APIs

| Method | Endpoint     | Access       |
| ------ | ------------ | ------------ |
| POST   | /courses     | Admin, Agent |
| GET    | /courses     | All          |
| PUT    | /courses/:id | Admin, Agent |
| DELETE | /courses/:id | Admin        |

---

### 🔗 Student-Course Relationship

* One student can enroll in multiple courses
* One course can have multiple students

#### Enrollment API

```http
POST /students/:id/enroll
```

#### Request Body

```json
{
  "courseIds": ["courseId1", "courseId2"]
}
```

---

## ⚙️ Project Setup

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd student-course-api
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Create `.env` file in root:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4. Run Application

```bash
npm run start:dev
```

---

## 🔐 Authentication Flow

### Register

```http
POST /auth/register
```

### Login

```http
POST /auth/login
```

### Use Token

```http
Authorization: Bearer <token>
```

---

## 📌 API Endpoints Summary

### Auth

* `POST /auth/register`
* `POST /auth/login`

---

### Students

* `POST /students`
* `GET /students`
* `GET /students/:id`
* `PUT /students/:id`
* `DELETE /students/:id`
* `POST /students/:id/enroll`

---

### Courses

* `POST /courses`
* `GET /courses`
* `PUT /courses/:id`
* `DELETE /courses/:id`

---

## 🧠 Technical Highlights

* ✅ Mongoose schemas & relations
* ✅ DTO validation using `class-validator`
* ✅ JWT authentication
* ✅ RBAC using Guards & Decorators
* ✅ Clean modular architecture

---

## 📁 Folder Structure

```
src/
 ├── auth/
 ├── users/
 ├── students/
 ├── courses/
 ├── common/
 │    ├── guards/
 │    ├── decorators/
 ├── config/
```

---

## 🧪 Testing

Use:

* Postman
* Thunder Client
* Swagger (if implemented)

---

## 📤 Submission

* GitHub Repository
* README.md (this file)
* Postman Collection / Swagger Docs
* (Optional) Deployed API link

---

## 🚀 Future Improvements

* Swagger API Documentation
* Pagination
* Refresh Tokens
* Global Exception Handling
* Docker Deployment

---

## 👨‍💻 Author

Mukesh Gupta

---

## ✅ Conclusion

This project demonstrates:

* Backend architecture using NestJS
* Secure authentication with JWT
* Role-based access control
* MongoDB relationships with Mongoose

🔥 Built with production-level practices and scalable design.
