import FormAddAspirasi from "@/layouts/Aspirasi/FormAddAspirasi"
import Footer from "@/layouts/Nav,Foot/Footer"
import Navbar from "@/layouts/Nav,Foot/Navbar"

function AddAspirasi() {
    return (
        <section className="mx-8">
            <Navbar></Navbar>
            <FormAddAspirasi></FormAddAspirasi>
            <Footer></Footer>
        </section>
    )
}

export default AddAspirasi