import Laporan from "../layouts/Beranda/Laporan"
import HeroSection from "../layouts/Beranda/HeroSection"
import Navbar from "../layouts/Nav,Foot/Navbar"
import KenapaSigap from "../layouts/Beranda/KenapaSigap"
import FiturUnggulan from "../layouts/Beranda/FiturUnggulan"
import PetaWilayah from "../layouts/PetaWilayah/PetaWilayah"
import FormAjukan from "../layouts/AjukanWilayahLayouts/FormAjukan"
import Footer from "../layouts/Nav,Foot/Footer"

function BerandaPage() {
    return (
        <>
            <div className="mx-8">
                <Navbar></Navbar>
                <HeroSection></HeroSection>
                <Laporan></Laporan>
                <KenapaSigap></KenapaSigap>
                <FiturUnggulan></FiturUnggulan>
                <PetaWilayah></PetaWilayah>
                <FormAjukan></FormAjukan>
                <Footer></Footer>
            </div>
        </>
    )
}

export default BerandaPage