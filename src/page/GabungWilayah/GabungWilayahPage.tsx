import FormGabungWilayah from "../../layouts/GabungWilayah/FormGabungWilayah"
import Footer from "../../layouts/Nav,Foot/Footer"
import Navbar from "../../layouts/Nav,Foot/Navbar"
function GabungWilayahPage() {
    return (
        <>
            <section className="mx-8">
                <Navbar></Navbar>
                <FormGabungWilayah></FormGabungWilayah>
                <Footer></Footer>
            </section>
        </>
    )
}

export default GabungWilayahPage