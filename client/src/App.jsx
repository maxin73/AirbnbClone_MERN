import './App.css';
import {Route, Routes} from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PlacesPage from './pages/PlacesPage';
import Layout from './Layout';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import PlacesFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/PlacePage';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/account" element={<ProfilePage />}/>
        <Route path="/account/places" element={<PlacesPage />}/>
        <Route path="/account/places/new" element={<PlacesFormPage />} />
        <Route path="/account/places/:id" element={<PlacesFormPage />} />
        <Route path="/place/:id" element={<PlacePage />} />
      </Route>
    </Routes>
    </UserContextProvider>
  )
}

export default App
