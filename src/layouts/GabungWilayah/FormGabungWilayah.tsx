import { useState } from "react"
import { Button } from "../../components/ui/button"
import Title from "../../components/ui/Title"
import { InputLabel } from "../Input"
import { PopUp } from "../PopUp"
import { useNavigate } from "react-router-dom"

function FormGabungWilayah() {
    const [showPopUp, setShowPopUp] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = () => {
        setShowPopUp(true)
    }

    const handleConfirm = () => {
        setShowPopUp(false)
        navigate("/")
    }
    return (
        <>
            <section className="mx-14 mb-8">
                <Title>Gabung Wilayah</Title>
                <div className="mt-8 flex flex-wrap justify-center gap-5">
                    <InputLabel
                        className="border border-[#5e5e5e]"
                        classname="w-[239px]"
                        id="Nama"
                        labelFor="Nama"
                        label="Nama"
                        type="text"
                        placeholder="john"
                    />
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
                        id="rt"
                        labelFor="rt"
                        label="Rt"
                        type="text"
                        placeholder="002"
                    />
                    <InputLabel
                        className="border border-[#5e5e5e]"
                        classname="w-[239px]"
                        id="rw"
                        labelFor="rw"
                        label="Rw"
                        type="text"
                        placeholder="007"
                    />

                    <Button variant="default" onClick={handleSubmit}>
                        Daftar
                    </Button>
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

export default FormGabungWilayah