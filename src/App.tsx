import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ApproachPage } from "./pages/ApproachPage";
import { StrategyPage } from "./pages/StrategyPage";
import { PartnersPage } from "./pages/PartnersPage";
import { KnowledgeHub } from "./pages/KnowledgeHub";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { LoginPage } from "./pages/LoginPage";
import { StudentDashboard } from "./pages/StudentDashboard";
import { FacultyDashboard } from "./pages/FacultyDashboard";
import { InstitutionDashboard } from "./pages/InstitutionDashboard";
import { SecretariatDashboard } from "./pages/SecretariatDashboard";
import { AdminDashboard } from "./pages/AdminDashboard";

export default function App() {
  return (
    <Routes>
      {/* ── Public IPI Consultancy Website ───────────────────────── */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/approach" element={<ApproachPage />} />
      <Route path="/strategy" element={<StrategyPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/knowledge-hub" element={<KnowledgeHub />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* ── Role-based Dashboards / Portal ────────────────────────── */}
      <Route path="/portal/student" element={<StudentDashboard />} />
      <Route path="/portal/faculty" element={<FacultyDashboard />} />
      <Route path="/portal/institution" element={<InstitutionDashboard />} />
      <Route path="/portal/secretariat" element={<SecretariatDashboard />} />
      <Route path="/portal/admin" element={<AdminDashboard />} />
      <Route path="/portal/knowledge-hub" element={<KnowledgeHub />} />

      {/* ── Catch-all → Home ────────────────────────────────────── */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
