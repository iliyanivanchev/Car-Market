import styles from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContexts";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import Catalog from "./components/catalog/Catalog";
import CarCreate from "./components/car-create/CarCreate";
import CarEdit from "./components/car-edit/CarEdit";
import CarDetails from "./components/car-details/CarDetails";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
import ContactUs from "./components/contact-us/ContactUs";
import About from "./components/about/About";
import CarDelete from "./components/car-delete/CarDelete";

function App() {

    return (
        <AuthContextProvider>
            <div className={styles["container"]}>
                <Header />

                <main className={styles["site-content"]}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/car-create" element={<CarCreate />} />
                        <Route path="/car-edit/:carId" element={<CarEdit />} />
                        <Route path="/car-delete/:carId" element={<CarDelete />} />
                        <Route path="/car-details/:carId" element={<CarDetails />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthContextProvider>
    )
}

export default App
