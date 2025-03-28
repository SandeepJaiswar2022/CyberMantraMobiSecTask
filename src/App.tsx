import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CybersecurityAudit from './pages/CybersecurityAudit';
import VAPTServices from './pages/VAPTServices';
import CybersecurityConsultancy from './pages/CybersecurityConsultancy';
import TrainingCourses from './pages/TrainingCourses';
import CourseDetail from './pages/CourseDetail';
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cyber-security-audit" element={<CybersecurityAudit />} />
        <Route path="vapt-services" element={<VAPTServices />} />
        <Route path="cybersecurity-consultancy" element={<CybersecurityConsultancy />} />
        <Route path="training-courses" element={<TrainingCourses />} />
        <Route path="course/:id" element={<CourseDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
