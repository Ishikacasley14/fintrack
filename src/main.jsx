import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./index.css"; // Assuming Tailwind CSS is applied here

// Import your pages
import LoginPage from "./Pages/login"; // The login page component
import SignupPage from "./Pages/signup"; // The signup page component
import PhoneNumberPage from "./Pages/PhoneNumber"; // Updated page for phone number
import Dashboard from "./Pages/Dashboard"; // Import the Dashboard component
import Expenses from "./Pages/ExpensePage"; // Import the Expenses component
import Insights from "./Pages/InsightsPage"; // Import the Insights component
import Chatbot from "./Pages/ChatbotPage"; // Import the Chatbot component
import Income from "./Pages/IncomePage";
import SettingsPage from "./Pages/SettingsPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage"; // The forget password component
// Main component that holds the routes
import ProtectedRoute from "./components/components/ProtectedRoute";
import AuthRoute from "./components/components/AuthRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthRoute><LoginPage /></AuthRoute>} /> {/* Route for LoginPage */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* Route for forgetpassword page*/}
        <Route path="/signup" element={<AuthRoute><SignupPage /></AuthRoute>} /> {/* Route for SignupPage */}
        <Route path="/phone-number" element={<PhoneNumberPage />} /> {/* Route for PhoneNumberPage */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> {/* Route for Dashboard */}
        <Route path="/expense" element={<Expenses />} /> {/* Route for Expense */}
        <Route path="/insights" element={<Insights />} /> {/* Route for Insights */}
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/income" element={<Income />} />
        <Route path="/settings" element={<SettingsPage />} />
        {/* Redirect default route to signup */}
        <Route path="/" element={<Navigate to="/signup" />} /> {/* Redirect to SignupPage if no path is specified */}
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
