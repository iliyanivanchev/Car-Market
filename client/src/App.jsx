import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Catalog from "./components/catalog/Catalog"
import CarCreate from "./components/car-create/CarCreate"
import CarEdit from "./components/car-edit/CarEdit"
import CarDetails from "./components/car-details/CarDetails"
import Footer from "./components/footer/Footer"
import { Route, Routes } from "react-router-dom"

function App() {

    return (
        <div id="container">
            <Header />

            <main id="site-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/car-create" element={<CarCreate />} />
                    <Route path="/car-edit" element={<CarEdit />} />
                    <Route path="/car-details" element={<CarDetails />} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}

export default App
