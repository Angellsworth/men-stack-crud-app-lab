📂 project-folder
│-- 📂 models   
│   ├── book.js         # Defines the Book schema for MongoDB (title, author, genre, etc.)
│
│-- 📂 views            # Holds all frontend EJS templates
│   ├── 📂 books        # Keeping all book-related views in one folder for organization
│   │   ├── index.ejs   # Displays a list of all books (READ in CRUD)
│   │   ├── new.ejs     # Form page to add a new book (CREATE in CRUD)
│   │   ├── show.ejs    # (Optional) Shows details of one book
│   │   ├── edit.ejs    # (Optional) Form page to edit a book (UPDATE in CRUD)
│
│-- 📂 public           # (Optional) Stores static files like CSS, images, etc.
│
│-- server.js           # Main entry point, sets up Express, connects to MongoDB, handles routes          
│
│-- .env                # Stores environment variables like MongoDB connection string
│
│-- package.json        # Project metadata & dependencies