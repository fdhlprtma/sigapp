import FormAjukan from "../../layouts/AjukanWilayahLayouts/FormAjukan"
import Footer from "../../layouts/Nav,Foot/Footer"
import Navbar from "../../layouts/Nav,Foot/Navbar"

function AjukanWilayahPage() {
    return (
        <>
            <section className="mx-8">
                <Navbar></Navbar>
                <FormAjukan></FormAjukan>
                <Footer></Footer>
            </section>
        </>
    )
}

export default AjukanWilayahPage