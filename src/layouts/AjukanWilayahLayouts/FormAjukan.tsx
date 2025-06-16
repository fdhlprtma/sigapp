import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { InputLabel } from "../Input"
import { PopUp } from "../PopUp"

function FormAjukan() {
    const [showPopUp, setShowPopUp] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = () => {
        setShowPopUp(true)
    }

    const handleConfirm = () => {
        setShowPopUp(false)
        navigate("/beranda")
    }

    return (
        <>
            <section className="mx-14 my-8 flex justify-center">
                <div className="w-[851px] pb-5 bg-[#5A827E] text-white rounded-md">
                    <div className="text-center my-5">
                        <h1 className="font-bold mb-2">Ajukan Wilayah Saya</h1>
                        <span>
                            Ingin menggunakan Sigap di RT anda? Isi formulir ini untuk mengajukan wilayah baru
                        </span>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-5">
                        <InputLabel
                            className="border border-[#5e5e5e]"
                            classname="w-[239px]"
                            id="provinsi"
                            labelFor="provinsi"
                            label="Provinsi"
                            type="text"
                            placeholder="Contoh Provinsi"
                        />
                        <InputLabel
                            className="border border-[#5e5e5e]"
                            classname="w-[239px]"
                            id="kabupaten"
                            labelFor="kabupaten"
                            label="Kabupaten"
                            type="text"
                            placeholder="Contoh Kabupaten"
                        />
                        <InputLabel
                            className="border border-[#5e5e5e]"
                            classname="w-[239px]"
                            id="kecamatan"
                            labelFor="kecamatan"
                            label="Kecamatan"
                            type="text"
                            placeholder=" Kecamatan"
                        />
                        <InputLabel
                            className="border border-[#5e5e5e]"
                            classname="w-[239px]"
                            id="Kelurahan"
                            labelFor="Kelurahan"
                            label="Kelurahan"
                            type="text"
                            placeholder="Kelurahan"
                        />
                        <InputLabel
                            className="border border-[#5e5e5e]"
                            classname="w-[239px]"
                            id="desa"
                            labelFor="desa"
                            label="Desa / kampung"
                            type="text"
                            placeholder="Nama Lengkap"
                        />
                        <InputLabel
                            className="border border-[#5e5e5e]"
                            classname="w-[239px]"
                            id="rt/rw"
                            labelFor="rt/rw"
                            label="Rt/Rw"
                            type="text"
                            placeholder="002/007"
                        />
                        <Button variant="dua" onClick={handleSubmit}>
                            Daftar
                        </Button>
                    </div>
                </div>
            </section>

            <PopUp
                open={showPopUp}
                setOpen={setShowPopUp}
                title="Pengajuan Terkirim"
                description="Akun anda akan di cek oleh admin apakah data yang anda input betul - betul Real. Tunggu beberapa menit, lalu refresh browser anda."
                footer={
                    <Button onClick={handleConfirm}>
                        Konfirmasi
                    </Button>
                }
            >
                <p className="text-center text-[#5A827E] border border-[#5A827E] p-2 rounded">
                    Kami akan segera memverifikasi
                </p>
            </PopUp>
        </>
    )
}

export default FormAjukan
