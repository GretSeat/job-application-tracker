import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobBoard from "./pages/JobBoard";
import ProfilePage from "./pages/ProfilePage";
import ContactsPage from "./pages/ContactsPage";
import DocumentsPage from "./pages/DocumentsPage";
import FeedsPage from "./pages/FeedsPage";

// Components
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobboard" element={<JobBoard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/feeds" element={<FeedsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
