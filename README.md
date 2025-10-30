Perfect 🔥 — here’s a **professional, complete, and visually appealing `README.md`** file for your **Book Finder App** project:

---

```md
# 📚 Book Finder App

A modern, responsive **Book Search Application** built using **React**, **Redux Toolkit**, and **Tailwind CSS**, powered by the **Open Library API**.  
Search, explore, and favorite your favorite books — all in one place!

---

## 🚀 Features

✅ **Search Books**
- Find books by title using the [Open Library API](https://openlibrary.org/dev/docs/api/search).  
- Displays key details such as author, cover, and publication year.

✅ **Favorites System**
- Add or remove books from your favorites list with a ❤️ click.
- Favorites persist using **localStorage**, so they stay even after refreshing.

✅ **Book Details Page**
- View detailed information about each book, including author(s), subjects, and description.

✅ **Recent Searches**
- Automatically saves your last 3–5 search terms locally.
- Quickly re-search books with a single click.

✅ **Offline Detection**
- Shows a smart toast or banner if the user goes offline.
- Prevents fetching data while offline.

✅ **Loading & Error Handling**
- Smooth loader animation while fetching.
- Graceful error boundary for handling unexpected UI crashes.

✅ **Responsive Design**
- Beautiful and mobile-friendly layout built with **Tailwind CSS**.
- Works perfectly in both light and dark modes.

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React (Vite), Redux Toolkit |
| **Styling** | Tailwind CSS, Lucide React Icons |
| **Notifications** | react-hot-toast |
| **API** | Open Library Search API |
| **State Management** | Redux + LocalStorage Persistence |

---

## 📂 Folder Structure

```

📦 BooksFinder
┣ 📁 src
┃ ┣ 📁 api
┃ ┃ ┣ 📜 fetchBooks.js
┃ ┃ ┣ 📜 useNetworkStatus.js
┃ ┣ 📁 components
┃ ┃ ┣ 📜 BookCard.jsx
┃ ┃ ┣ 📜 BookDetails.jsx
┃ ┃ ┣ 📜 Favorites.jsx
┃ ┃ ┣ 📜 Loader.jsx
┃ ┃ ┣ 📜 NavBar.jsx
┃ ┣ 📁 hooks
┃ ┃ ┗ 📜 useDarkMode.js
┃ ┣ 📁 redux
┃ ┃ ┣ 📜 bookSlice.js
┃ ┃ ┣ 📜 favoriteSlice.js
┃ ┣ 📁 pages
┃ ┃ ┗ 📜 Home.jsx
┃ ┣ 📜 App.jsx
┃ ┣ 📜 main.jsx
┣ 📜 package.json
┣ 📜 tailwind.config.js
┗ 📜 README.md

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone this repository
```bash
git clone https://github.com/durgasahu24/BooksFinder.git
cd BooksFinder
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

### 4️⃣ Open in your browser

Visit 👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🔑 Environment Variables (Optional)

If you later integrate APIs that require keys (like Google Books),
you can create a `.env` file:

```bash
VITE_API_KEY=your_api_key_here
```

---

## 🧠 Learnings

* Implemented **Redux Toolkit** for predictable state management.
* Used **React hooks** (`useEffect`, `useState`, `useSelector`, `useDispatch`).
* Designed UI with **Tailwind CSS** and dark mode support.
* Integrated **real-world API** (Open Library) for dynamic data.
* Added **offline detection** and **persistent favorites** using localStorage.

---

## 📸 Screenshots

| Home Page                                                          | Book Details                                                           | Favorites                                                             |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------- |
| ![Home](https://via.placeholder.com/400x250?text=Book+Finder+Home) | ![Details](https://via.placeholder.com/400x250?text=Book+Details+Page) | ![Favorites](https://via.placeholder.com/400x250?text=Favorites+Page) |

*(Replace placeholder images with your actual screenshots later)*

---

## 🧩 Future Enhancements

* [ ] Add pagination for large search results
* [ ] Add user login & personalized favorites
* [ ] Integrate Google Books API for more data
* [ ] Implement dark mode toggle
* [ ] Add “Recently Viewed” section

---

## 👨‍💻 Author

**👋 Durga Sahu**
📧 [Your Email or LinkedIn]
💻 [GitHub Profile](https://github.com/durgasahu24)

If you like this project, ⭐ it on GitHub — it helps a lot!

---

## 📝 License

This project is licensed under the **MIT License** — feel free to use and modify it.

```

---

Would you like me to include **screenshots** automatically using your current app (e.g., by describing what to capture and how to name them for the README)?
```
