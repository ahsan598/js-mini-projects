# 🎓 Student Details Management App (Java + Swing + JDBC)

A basic desktop application for managing student data using **Java Swing for GUI**, **JDBC for database connectivity**, and **MySQL** for persistent storage. It allows you to perform **CRUD operations** like Add, Update, and Delete student records.

### 🧰 Tech Stack
- Java
- Java Swing
- JDBC
- MySQL

### 🎯 Features
- Add new student details (Name, Roll No, etc.)
- Edit/update existing student data
- Delete student records from the database
- Clear and reset form fields

### 🗂️ Database Requirements

**MySQL Table Example:**
```sql
CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  roll_no VARCHAR(50),
  email VARCHAR(100),
  course VARCHAR(100)
);
```

### 📸 Screenshot
![student-mang-system](https://github.com/ahsan598/js-mini-projects/blob/master/student-management-system/screenshots/student-management-system.png)

### 🚀 How to Run

1. Set up a MySQL database and update JDBC connection string in the code.
2. Open the project in your Java IDE.
3. Run the main class.

```bash
javac StudentDetailsApp.java
java StudentDetailsApp
```

### 📌 Notes
- Ensure MySQL server is running and credentials are correct
- Demonstrates Java database connectivity and GUI-based CRUD operations
