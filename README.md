---

## 📚 Book Finder App

### 🔗 **Live Demo**

👉 [Visit Book Finder App on Vercel](https://books-finder-two.vercel.app/)

---

### 👤 **User Persona: Alex**

* **Occupation:** College Student
* **Need:** Alex wants to quickly search for books to read, explore details like authors, publication year, and subjects, and save favorites for later.

---

## 🧠 **Project Overview**

The **Book Finder App** is a React-based web application that allows users to search for books using the **Open Library API**.
It provides a clean, responsive, and user-friendly interface where users can:

* Search for books by title.
* View book details (author, cover, publish date, subjects, description).
* Add or remove books from favorites.
* View a personalized list of favorite books.
* Get instant feedback using **toast notifications**.
* See online/offline status notifications.

---

## ⚙️ **Tech Stack**

| Category               | Technologies            |
| ---------------------- | ----------------------- |
| **Frontend Framework** | React (Vite)            |
| **Styling**            | Tailwind CSS            |
| **State Management**   | Redux Toolkit           |
| **Notifications**      | react-hot-toast         |
| **Routing**            | React Router DOM        |
| **API**                | Open Library Search API |
| **Deployment**         | Vercel                  |

---

## 📦 **Features**

### 🔍 Book Search

Search books by title using the Open Library API.

### 💖 Favorites

Add or remove books from your favorites list.
Favorites are stored persistently using Redux state.

### 🌐 Network Status

* Detects when the user goes **offline or comes back online**.
* Shows appropriate toast messages (e.g., “🚫 You’re offline”).

### ⚠️ Error Handling

Includes a global **Error Boundary** to gracefully handle runtime errors.

### 💫 Loader

Displays a smooth loading spinner when data is being fetched.

### 📱 Responsive UI

Fully responsive layout optimized for both desktop and mobile users.

---

## 🗂️ **Project Structure**

```
📁 src
├── 📂 api
│   ├── useBookapi.js
│   └── useNetworkStatus.js
├── 📂 components
│   ├── BookCard.jsx
│   ├── ErrorBoundary.jsx
│   ├── Loader.jsx
│   └── Navbar.jsx
├── 📂 pages
│   ├── Home.jsx
│   ├── BookDetails.jsx
│   └── Favorites.jsx
├── 📂 redux
│   ├── bookSlice.js
│   └── favoriteSlice.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 **Setup Instructions**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/durgasahu24/BooksFinder.git
cd BooksFinder
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

### 4️⃣ Build for Production

```bash
npm run build
```

---

## 🌍 **API Reference**

**Open Library Search API**

```bash
https://openlibrary.org/search.json?title={bookTitle}
```

Example:

```
https://openlibrary.org/search.json?title=harry+potter
```

---

## 💡 **Additional Enhancements**

* 🔄 Persistent favorites using localStorage (optional future improvement).
* 🌙 Dark/Light Mode toggle.
* 📖 Pagination for large search results.
* 🧭 Search suggestions or auto-complete.

---

## 🧑‍💻 **Developed By**

**Durga Sahu**
*Web Developer*
[GitHub Profile](https://github.com/durgasahu24)

---

