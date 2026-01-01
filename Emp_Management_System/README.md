# 🧑‍💼 Employee Management System (EMS)

A modern **Employee Management System** built with **React**, **Context API**, **Tailwind CSS**, and **LocalStorage**.  
This project supports **Admin & Employee roles**, task assignment, task tracking, and status management with a clean UI.

---

## 🚀 Features

### 🔐 Authentication

- Admin & Employee login
- Role-based access
- Remember Me option
- Session handling using LocalStorage

### 👨‍💻 Admin Panel

- Create new tasks
- Assign tasks to employees
- Set priority, start date, due date
- Track task status (New, Active, Completed, Failed)
- View all employees & their tasks

### 👷 Employee Panel

- View assigned tasks
- Accept or deny tasks
- Track progress percentage
- Task state updates in real-time

### 📊 Task Status Management

- **New Task**
- **Active Task**
- **Completed Task**
- **Failed Task**

### 🎨 UI & UX

- Responsive design
- Tailwind CSS styling
- Gradient cards
- Clean dashboard layout

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **State Management:** Context API
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Storage:** LocalStorage

---

## 🔑 Demo Login Credentials

### 👨‍💼 Admin

Email: admin@example.com
Password: 123

### 👷 Employees

Email: emp1@example.com
Password: 123

➡️ You can login as **emp1, emp2, emp3... emp10**

---

🎥 Live Demo (Screen Recording)

A quick walkthrough of the application showing:

Admin login

Task creation

Employee task acceptance

Task status updates

📹 Project Demo Video:

🔗 Watch the demo video:  
[Employee Management System – Screen Recording](Website_Recording/EmployeeManagementWebsite.mp4)

📸 Application Screenshots
🔐 Login Page

User authentication screen for both Admin and Employees.

![Login Page](ScreenShots/LogingPage.png)

👨‍💼 Admin Dashboard

Admin panel where tasks are created and assigned to employees.

![Admin Dashboard](ScreenShots/AdminPage.png)

👨‍💻 Employee Dashboard

Employee view showing assigned tasks with options to Accept / Deny / Track progress.

![Employee Dashboard](ScreenShots/EmployeePage.png)

📊 Employees Overview

Overview table showing all employees and their task statistics.

![Employees Overview](ScreenShots/EmployeesOverview.png)

📂 Screenshot Folder Structure
ScreenShots/
├── LogingPage.png
├── AdminPage.png
├── EmployeePage.png
└── EmployeesOverview.png

## 📂 Project Structure

src/
├── components/
│ ├── TaskList/
│ │ ├── ActiveTask.jsx
│ │ ├── NewTask.jsx
│ │ ├── CompleteTask.jsx
│ │ └── FailedTask.jsx
├── context/
│ └── AuthProvider.jsx
├── pages/
│ ├── Login.jsx
│ ├── AdminDashboard.jsx
│ └── EmployeeDashboard.jsx
├── Others/
│ └── AllTasks.jsx
└── App.jsx
