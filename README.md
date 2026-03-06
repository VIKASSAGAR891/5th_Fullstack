# SkillBoost UI – Experiment 5

This project is an extension of Experiment 4. It enhances the existing multi-page React application by implementing Redux Toolkit for structured state management while continuing to use Context API for global state and useMemo for performance optimization.

------------------------------------------------------------

Project Objective

- Implement scalable state management using Redux Toolkit
- Use Context API for global application state such as theme
- Optimize derived calculations using useMemo
- Extend the existing multi-page React Router application
- Maintain consistent UI and responsive design across all pages

------------------------------------------------------------

Tech Stack

- React (Vite)
- React Router DOM
- Redux Toolkit
- React Redux
- Bootstrap
- Context API
- useMemo

------------------------------------------------------------

Folder Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── CardComponent.jsx
│   ├── ThemeToggle.jsx
│   └── FilterBar.jsx
│
├── context/
│   └── AppContext.jsx
│
├── redux/
│   ├── store.js
│   └── slices/
│       └── cartSlice.js
│
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── Cart.jsx
│   └── Reports.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

------------------------------------------------------------

Features Implemented

1. React Router

- Multi-page navigation implemented
- Pages include Home, Projects, Cart, and Reports
- Client-side routing without page reload
- Navbar links allow navigation between pages

------------------------------------------------------------

2. Context API (useContext)

- Global theme state management
- Theme toggle implemented
- Context provider wraps the entire application
- Context used in multiple components

------------------------------------------------------------

3. Redux Toolkit

Redux Toolkit replaces the previous useReducer implementation.

Redux Setup:

- Store configured using configureStore
- Slice created using createSlice
- Redux state connected to UI components

Actions implemented in slice:

- addItem
- removeItem
- clearCart

Redux usage:

- useDispatch used to trigger actions
- useSelector used to read global state
- Redux used in multiple components including CardComponent and Cart page

------------------------------------------------------------

4. useMemo

useMemo is used to optimize derived calculations from Redux state.

Examples implemented:

- Total cart price calculation
- Reports analytics summary

This ensures calculations only recompute when dependent state changes.

------------------------------------------------------------

New Page Added in Experiment 5

Reports Page

The Reports page demonstrates:

- Redux state access
- useMemo derived analytics
- Context API usage for theme display

The page displays:

- Current theme
- Total courses added to cart
- Total revenue calculated from cart items

------------------------------------------------------------

Installation and Setup

1. Install dependencies

npm install

2. Run development server

npm run dev

3. Build for production

npm run build

------------------------------------------------------------

Experiment 5 Summary

This experiment extends the previous React project by introducing Redux Toolkit for scalable state management while maintaining Context API for global application concerns and useMemo for optimized computations. The application maintains a clean folder structure, consistent user interface, and responsive layout across multiple pages.
