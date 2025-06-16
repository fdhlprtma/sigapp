import FormAddLaporan from "@/layouts/Laporan/FormAddLaporan"
import Footer from "@/layouts/Nav,Foot/Footer"
import Navbar from "@/layouts/Nav,Foot/Navbar"

function AddLaporan() {
    return (
        <>
            <section className="mx-8">
                <Navbar></Navbar>
                <FormAddLaporan></FormAddLaporan>
                <Footer></Footer>
            </section>
        </>
    )
}

export default AddLaporan