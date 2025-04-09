<h1 align="center">Collaborative Task Management Hub</h1>

<div align="center">

<!-- [Live Demo](https://your-live-demo-link.com)   -->

A modern fullstack task management application built with **React 19**, **Vite**, **Tailwind CSS**, and **Express.js**, designed for teams to collaborate, manage tasks, and streamline productivity.

</div>

---

## Admin Pages

|                 Dashboard                  |                 Manage Tasks                  |
| :----------------------------------------: | :-------------------------------------------: |
| ![](./images/project-preview.png?raw=true) | ![](./images/admin_manage_tasks.png?raw=true) |

|              Create a New Task               |                 View Team Members                 |
| :------------------------------------------: | :-----------------------------------------------: |
| ![](./images/admin_create_task.png?raw=true) | ![](./images/admin_view_teamMembers.png?raw=true) |

## User Pages

|                Dashboard                |                Manage Tasks                 |
| :-------------------------------------: | :-----------------------------------------: |
| ![](./images/user_my_task.png?raw=true) | ![](./images/user_manage_task.png?raw=true) |

---

## About The Project

This is a full-featured **task management hub** built with a **React + Vite frontend** and an **Express + MongoDB backend**. The app offers real-time collaborative features, an intuitive UI for tracking progress, and secure authentication to manage and assign tasks efficiently.

The backend exposes RESTful API endpoints secured with JWT authentication and supports file uploads and task data export using `exceljs`.

---

## Features

### 🌐 Frontend

- ✅ **Task Creation and Assignment**
- 📅 **Deadline Tracking with Moment.js**
- 📊 **Visual Analytics** using Recharts
- 🧭 **Routing** with React Router 7
- 💅 **Tailwind CSS 4** for modern styling
- 🔥 **Toasts** with react-hot-toast
- 🚀 Built with **Vite 6** for lightning-fast development

### 🛠 Backend

- 🔐 **JWT Authentication**
- 🧾 **Excel Export** with ExcelJS
- 📤 **File Upload Support** with Multer
- 🛡️ Secure API with CORS and Express middleware
- 🗃️ **MongoDB + Mongoose** for data modeling

---

## Built With

### Frontend

- [React 19](https://reactjs.org/)
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Moment.js](https://momentjs.com/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express 5](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [ExcelJS](https://github.com/exceljs/exceljs)
- [Multer](https://github.com/expressjs/multer)

---

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB running locally or through a cloud provider (e.g., MongoDB Atlas)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/wiseweb-works/mern-collabtask-hub.git
cd mern-collabtask-hub
```

#### 2. Backend setup

```bash
cd backend
npm install
cp .env.example .env
# Update .env with your Mongo URI and JWT secret
npm run dev
```

#### 3. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

## What I Learned

This project taught me how to:

- Build a **real-world task collaboration system** with user roles and secure APIs.
- Implement **Excel exporting** and file handling with Multer.
- Create responsive UI components using **Tailwind CSS** and integrate **React Toasts** for notifications.
- Model complex task relationships in **MongoDB** using Mongoose.
- Improve **frontend performance** and developer experience using Vite.

---

## Useful Resources

1. [JWT Authentication in Express](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)
2. [Recharts Documentation](https://recharts.org/en-US/)
3. [Tailwind CSS Docs](https://tailwindcss.com/docs)
4. [Multer File Upload Guide](https://www.npmjs.com/package/multer)
5. [ExcelJS GitHub Repo](https://github.com/exceljs/exceljs)

---

## Acknowledgments

Thanks to the open-source community for the tools and inspiration. This collaborative task hub is a personal project aimed at improving productivity through intuitive design and reliable backend infrastructure.

---

Feel free to fork this project, contribute, or reach out with feedback!
