import styles from "./App.module.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Catalog from "./components/catalog/Catalog";
import CarCreate from "./components/car-create/CarCreate";
import CarEdit from "./components/car-edit/CarEdit";
import CarDetails from "./components/car-details/CarDetails";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
import ContactUs from "./components/contact-us/ContactUs";
import About from "./components/about/About";

function App() {

    return (
        <div className={styles["container"]}>
            <Header />

            <main className={styles["site-content"]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/car-create" element={<CarCreate />} />
                    <Route path="/car-edit/:carId" element={<CarEdit />} />
                    <Route path="/car-details/:carId" element={<CarDetails />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}

export default App
