import ClientsSection from "../pages/dashboard/ClientsSection"
import FeatureSection from "../pages/dashboard/FeatureSection"
import FooterSection from "../pages/dashboard/FooterSection"
import MainSection from "../pages/dashboard/MainSection"
import Navbar from "../pages/dashboard/Navbar"
import { Routes } from "../routes"

const App = () => {
  return (
    <>
    <Routes />
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <MainSection />
    <FeatureSection />
    <ClientsSection />
    <FooterSection />
    </div>
    </>
  )
}

export default App