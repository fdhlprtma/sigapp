import Title from "@/components/ui/Title"
import { InputLabel } from "../Input"
import { TextareaLabel } from "../TextArea"
import { Button } from "@/components/ui/button"

function FormAddLaporan() {
    return (
        <>
            <section className="mx-56 mb-7">
                <Title>Tambah Laporan</Title>
                <div className="grid grid-cols-2 gap-3">
                    <InputLabel
                        className="border border-[5e5e5e]"
                        id="judul"
                        labelFor="judul"
                        label="Judul"
                        placeholder="Judul...."
                        type="text"
                    />
                    <InputLabel
                        className="border border-[5e5e5e]"
                        id="gambar"
                        labelFor="gambar"
                        label="Gambar"
                        placeholder="Gambar"
                        type="file"
                    />
                </div>
                <div className="grid grid-cols-1 mt-3">
                    <TextareaLabel
                        id="komentar"
                        forlabel="komentar"
                        label="Komentar"
                        placeholder="Komentar ...."
                    />
                </div>
                <div className="my-5">
                    <Button>Kirim</Button>
                </div>
            </section>
        </>
    )
}

export default FormAddLaporan