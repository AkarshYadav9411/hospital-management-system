# 🏥 Hospital Management System (HMS)

A modern full-stack web application designed for hospitals and healthcare clinics to streamline patient registration, medical record tracking, and patient management. Built with **Spring Boot** on the backend, **React + Vite** on the frontend, and **MySQL** for data persistence.

---

## 📑 Table of Contents

- [Features](#-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Prerequisites](#-prerequisites)
- [Database Setup](#-database-setup)
- [Installation & Running Locally](#-installation--running-locally)
  - [1. Backend Setup (Spring Boot)](#1-backend-setup-spring-boot)
  - [2. Frontend Setup (React + Vite)](#2-frontend-setup-react--vite)
- [API Reference](#-api-reference)
- [Configuration Details](#-configuration-details)
- [Future Enhancements](#-future-enhancements)

---

## ✨ Features

- **Patient Registration**: Capture comprehensive patient details including full name, age, gender, contact number, email address, and diagnosed disease/condition.
- **Patient Directory & List View**: Real-time tabular view displaying all registered patients with their medical records.
- **Record Management (CRUD)**:
  - **Create**: Add new patients via intuitive form inputs.
  - **Read**: Fetch individual patient details or view all patients.
  - **Update**: Modify existing patient information via RESTful endpoints.
  - **Delete**: Remove patient records with confirmation safeguards.
- **CORS Configured**: Seamless integration between the React client (`http://localhost:5173`) and the Spring Boot REST API (`http://localhost:8080`).

---

## 🏗️ System Architecture

```mermaid
graph LR
    User([User / Hospital Staff])
    subgraph Frontend [Frontend - React + Vite]
        UI[App Component]
        Form[PatientForm]
        List[PatientList]
        Service[patientService (Axios)]
    end
    subgraph Backend [Backend - Spring Boot]
        Controller[PatientController]
        BService[PatientService]
        Repo[PatientRepository (JPA)]
    end
    subgraph Database [Database]
        MySQL[(MySQL: hospital_db)]
    end

    User -->|Interacts with UI| UI
    UI --> Form
    UI --> List
    Form --> Service
    List --> Service
    Service -->|HTTP REST / JSON| Controller
    Controller --> BService
    BService --> Repo
    Repo -->|Hibernate / JDBC| MySQL
```

---

## 🛠️ Tech Stack

### Backend
- **Framework**: Spring Boot (v4.x / 3.x Starter)
- **Language**: Java 17+
- **Persistence & ORM**: Spring Data JPA, Hibernate
- **Database Driver**: MySQL Connector/J
- **Boilerplate Reduction**: Project Lombok
- **Build Tool**: Maven / Maven Wrapper (`mvnw`)

### Frontend
- **Framework**: React 19
- **Build Tool / Bundler**: Vite
- **HTTP Client**: Axios
- **Linter**: Oxlint
- **Language**: JavaScript (ES6+ / JSX)

### Database
- **RDBMS**: MySQL 8.x+

---

## 📂 Project Directory Structure

```text
hospital-management-system/
├── hospital-management-system/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/hms/hospital_management_system/
│   │   │   │   ├── controller/
│   │   │   │   │   └── PatientController.java     # REST API Controller (@RequestMapping("/api/patients"))
│   │   │   │   ├── entity/
│   │   │   │   │   └── Patient.java               # JPA Entity for `patients` table
│   │   │   │   ├── repository/
│   │   │   │   │   └── PatientRepository.java     # Spring Data JPA Repository
│   │   │   │   ├── service/
│   │   │   │   │   └── PatientService.java        # Business logic for CRUD operations
│   │   │   │   └── HospitalManagementSystemApplication.java  # Spring Boot Main Entry Point
│   │   │   └── resources/
│   │   │       └── application.properties         # Server port, datasource, JPA configs
│   │   └── test/                                  # Unit and integration tests
│   ├── hospital-frontend/                         # Frontend Application
│   │   ├── src/
│   │   │   ├── App.jsx                            # Root layout and state coordination
│   │   │   ├── PatientForm.jsx                    # Form component for patient creation
│   │   │   ├── PatientList.jsx                    # Table component to view and delete patients
│   │   │   ├── patientService.js                  # Axios HTTP client requests
│   │   │   └── main.jsx                           # React DOM rendering entry point
│   │   ├── package.json                           # Frontend dependencies & scripts
│   │   ├── vite.config.js                         # Vite configuration
│   │   └── index.html                             # Single Page Application HTML host
│   ├── mvnw / mvnw.cmd                            # Maven Wrapper executable scripts
│   ├── pom.xml                                    # Maven dependencies & build definitions
│   └── HELP.md                                    # Spring Boot generated help guide
└── README.md                                      # Project documentation (this file)
```

---

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

1. **Java Development Kit (JDK)**: Version 17 or higher (`java -version`)
2. **Node.js**: Version 18.x or higher (`node -v`) and **npm** (`npm -v`)
3. **MySQL Server**: Version 8.0 or higher
4. **Git**: (Optional, for version control)

---

## 🗄️ Database Setup

1. Open your MySQL client (MySQL Workbench, MySQL Shell, or command line):
   ```sql
   mysql -u root -p
   ```

2. Create the target database:
   ```sql
   CREATE DATABASE hospital_db;
   ```

3. Update your credentials in `hospital-management-system/src/main/resources/application.properties` if they differ from the defaults:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/hospital_db
   spring.datasource.username=root
   spring.datasource.password=YOUR_PASSWORD_HERE
   ```
   > Hibernate is configured with `ddl-auto=update`, which automatically generates and updates the `patients` schema upon backend launch.

---

## 🚀 Installation & Running Locally

### 1. Backend Setup (Spring Boot)

1. Open a terminal and navigate to the backend folder:
   ```bash
   cd hospital-management-system
   ```

2. Build and start the backend service:
   - **Windows (Command Prompt / PowerShell)**:
     ```cmd
     mvnw.cmd spring-boot:run
     ```
   - **Linux / macOS**:
     ```bash
     chmod +x mvnw
     ./mvnw spring-boot:run
     ```
   - *Or if Maven is globally installed:*
     ```bash
     mvn spring-boot:run
     ```

3. The backend server will start on port `8080`:
   - URL: `http://localhost:8080`
   - API Base: `http://localhost:8080/api/patients`

---

### 2. Frontend Setup (React + Vite)

1. Open a new terminal window and navigate to the frontend directory:
   ```bash
   cd hospital-management-system/hospital-frontend
   ```

2. Install the necessary npm packages:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 📡 API Reference

Base Endpoint: `http://localhost:8080/api/patients`

### 1. Create Patient
- **Method**: `POST`
- **Path**: `/api/patients`
- **Request Body (JSON)**:
  ```json
  {
    "name": "John Doe",
    "age": 35,
    "gender": "Male",
    "phone": "+1 555-123-4567",
    "email": "johndoe@example.com",
    "disease": "Hypertension"
  }
  ```
- **Response**: `200 OK` (Returns the persisted Patient entity with generated `id`).

### 2. Get All Patients
- **Method**: `GET`
- **Path**: `/api/patients`
- **Response**: `200 OK`
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "age": 35,
      "gender": "Male",
      "phone": "+1 555-123-4567",
      "email": "johndoe@example.com",
      "disease": "Hypertension"
    }
  ]
  ```

### 3. Get Patient By ID
- **Method**: `GET`
- **Path**: `/api/patients/{id}`
- **Response**:
  - `200 OK`: Patient record found.
  - `404 Not Found`: If ID does not exist.

### 4. Update Patient
- **Method**: `PUT`
- **Path**: `/api/patients/{id}`
- **Request Body (JSON)**:
  ```json
  {
    "name": "John Doe Updated",
    "age": 36,
    "gender": "Male",
    "phone": "+1 555-987-6543",
    "email": "john.updated@example.com",
    "disease": "Recovered"
  }
  ```
- **Response**:
  - `200 OK`: Updated record.
  - `404 Not Found`: If patient ID does not exist.

### 5. Delete Patient
- **Method**: `DELETE`
- **Path**: `/api/patients/{id}`
- **Response**:
  - `204 No Content`: Successful deletion.
  - `404 Not Found`: If patient ID does not exist.

---

## ⚙️ Configuration Details

Located in `src/main/resources/application.properties`:

| Key | Default Value | Description |
| :--- | :--- | :--- |
| `spring.application.name` | `hospital-management-system` | Application identifier |
| `spring.datasource.url` | `jdbc:mysql://localhost:3306/hospital_db` | MySQL JDBC connection string |
| `spring.datasource.username` | `root` | Database username |
| `spring.datasource.password` | `Akarsh@123` | Database password |
| `spring.jpa.hibernate.ddl-auto` | `update` | Automatically updates table schema |
| `spring.jpa.show-sql` | `true` | Outputs SQL queries in backend logs |
| `server.port` | `8080` | Spring Boot HTTP server port |

---

## 🔮 Future Enhancements

- 🩺 **Doctor & Staff Management**: Track physicians, nurses, and staff assignments.
- 📅 **Appointment Scheduling**: Online doctor appointment booking system.
- 💊 **Prescription & Pharmacy Integration**: Medical inventory tracking and digital prescriptions.
- 💳 **Billing & Invoicing**: Automated invoice calculation and payment gateway integration.
- 🔐 **Authentication & Role-Based Access (RBAC)**: Secure access using JWT and Spring Security for Admin, Doctor, and Receptionist roles.
- 🎨 **Modern UI/UX**: Enhance frontend styling with custom TailwindCSS or modern UI libraries.
#   h o s p i t a l - m a n a g e m e n t - s y s t e m  
 