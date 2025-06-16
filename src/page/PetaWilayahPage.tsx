import PetaWilayah from "../layouts/PetaWilayah/PetaWilayah"
import Footer from "../layouts/Nav,Foot/Footer"
import Navbar from "../layouts/Nav,Foot/Navbar"

function PetaWilayahPage() {
    return (
        <>
            <div className="mx-8">
                <Navbar></Navbar>
                <div className="mx-14 mb-8">
                    <PetaWilayah></PetaWilayah>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default PetaWilayahPage