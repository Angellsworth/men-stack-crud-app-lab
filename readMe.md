
# 📚 The Full Stack Bookshelf

Welcome to **The Full Stack Bookshelf**—a simple and fun way to keep track of books! Whether you're a book lover, a developer, or a little bit of both, this app helps you **add, browse, update, and remove** books with ease.

![The Full Stack Bookshelf](public/imgs/homePageImg.png)

---

## ✨ Features

- 📝 **Add** books to the collection.
- 🔍 **View** a list of all books.
- ✏️ **Edit** book details.
- ❌ **Delete** books when needed.
- ✅ **Mark books as read** or unread.
- 🎨 **Clean and playful design** with warm colors.

---

## 🛠 Built With

- **Node.js** and **Express.js** for the back-end.
- **MongoDB** and **Mongoose** for database management.
- **EJS (Embedded JavaScript)** for dynamic views.
- **CSS** for styling (because cute and functional matters).

---

## 🚀 Getting Started

### 1️⃣ Clone the Project

```sh
git clone https://github.com/Angellsworth/full-stack-bookshelf.git
cd full-stack-bookshelf

2️⃣ Install Dependencies

npm install

3️⃣ Set Up a Database

You’ll need MongoDB running locally or use MongoDB Atlas (cloud database).
	1.	Create a .env file in the root directory.
	2.	Add the following:

MONGO_URI=your-mongodb-connection-string
PORT=3000

4️⃣ Run the App

npm start

Once running, visit http://localhost:3000 in your browser.

⸻

📌 Routes Overview

Route	Method	Description
/	GET	Landing Page
/books	GET	View all books
/books/new	GET	Add a new book form
/books	POST	Submit a new book
/books/:id	GET	View a specific book
/books/:id/edit	GET	Edit an existing book
/books/:id	PUT	Update book details
/books/:id	DELETE	Remove a book



⸻

🏗 Project Structure

full-stack-bookshelf/
│── public/                  # Static assets (CSS, images)
│── views/                   # EJS templates
│   ├── books/               # Book-related views
│   │   ├── index.ejs        # Book list page
│   │   ├── show.ejs         # Single book page
│   │   ├── new.ejs          # Add book form
│   │   ├── edit.ejs         # Edit book form
│   ├── partials/            # Navbar, footer, head
│── routes/                  # Express routes
│── models/                  # Mongoose schema
│── app.js                   # Main application file
│── package.json             # Dependencies & scripts
│── .env                     # Environment variables
│── README.md                # Project info



⸻

🎨 Design & Styling

The app has a simple, cute, and warm design:
	•	🍑 Soft peach & pink color accents.
	•	📦 Books are displayed as aesthetic cards.
	•	✨ Smooth hover effects.
	•	🎀 A polished navbar & footer for consistency.

⸻

💡 Ideas for Future Features
	•	🔍 Search functionality to find books quickly.
	•	⭐ User ratings and reviews for books.
	•	📚 User-Authentication for personal book collections.
	•	📌 Categories and filters for better organization.

⸻


📜 License

This project is open-source and free to use. Feel free to modify, improve, and make it your own!

⸻

🎉 Thanks for checking out The Full Stack Bookshelf!

📖 Happy coding & happy reading! ✨

