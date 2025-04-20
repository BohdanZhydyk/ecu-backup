# ECU Backup

A fast, secure, and professional system for managing ECU file backups.

## 🔥 Features

- 📂 Search and download ECU backup files.
- 🔒 Admin panel with secure login (protected with custom token).
- ☀️🌙 Light and dark mode support.
- 🚗 Clear process visualization with custom graphics.
- 🛡️ Safe data handling (input sanitization, authentication token).

## 🛠️ Technologies Used

- **Frontend:** React, SCSS
- **Backend:** Node.js + Express + MongoDB
- **Storage:** Local file storage (`server/public/uploads`) + Cookies for token management
- **Security:** bcrypt for password hashing, custom `bzToken` authorization
- **Version Control:** Git + GitHub

## ⚙️ How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/YourGitHubUsername/ecu-backup.git
```

2. Navigate into the project:

```bash
cd ecu-backup
```

3. Install dependencies:

```bash
cd client
npm install
cd ../server
npm install
```

4. Start the backend server:

```bash
npm run start
```

5. Start the frontend development server:

```bash
cd ../client
npm run dev
```

6. Open in browser:

```
http://localhost:3000
```

---

## 📢 Important Notes

- You must manually create `server/credentials.js` with your login credentials (example provided inside the code).
- The folder `server/public/uploads/` is ignored in Git (`.gitignore`).
- Intended for professional workshops and automotive electronic specialists.

---

## 👨‍💻 Author

**[bzDrive](https://github.com/BohdanZhydyk)**  
🚗 Automotive Electronics / Diagnostics / Programming

---

> **The project is under active development! 🚀 Stay tuned for more features!**

