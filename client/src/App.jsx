import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Catalog from "./components/catalog/Catalog"
import CarCreate from "./components/car-create/CarCreate"
import CarEdit from "./components/car-edit/CarEdit"
import CarDetails from "./components/car-details/DetailsCar"
import Footer from "./components/footer/Footer"

function App() {
    
    return (
        <div id="container">
            <Header />

            <main id="site-content">
                <Home />
                <Login />
                <Register />
                <Catalog />
                <CarCreate />
                <CarEdit />
                <CarDetails />
            </main>

            <Footer />
        </div>
    )
}

export default App
