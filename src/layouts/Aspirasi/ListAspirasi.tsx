import { useState } from 'react'
import Badge from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PopUp } from '@/layouts/PopUp'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type ListAspirasiProps = {
    badge: string
    judul: string
    keterangan: string
}

function ListAspirasi({ badge, judul, keterangan }: ListAspirasiProps) {
    const [showDeletePopup, setShowDeletePopup] = useState(false)
    const [showEditPopup, setShowEditPopup] = useState(false)

    const [editJudul, setEditJudul] = useState(judul)
    const [editKomentar, setEditKomentar] = useState(keterangan)

    const handleDelete = () => {
        console.log(`Menghapus aspirasi: ${judul}`)
        setShowDeletePopup(false)
    }

    const handleEditSubmit = () => {
        console.log("Judul baru:", editJudul)
        console.log("Komentar baru:", editKomentar)
        setShowEditPopup(false)
    }

    return (
        <>
            <section>
                <div className="relative">
                    <Badge className='absolute bg-[#EEF6FF] text-[#3E97FF]'>{badge}</Badge>
                    <div className="border border-[#5e5e5e] rounded-md p-4">
                        <h1 className='font-bold mb-2'>{judul}</h1>
                        <p className='text-[#5e5e5e]'>{keterangan}</p>
                        <div className="flex gap-3 mt-4">
                            <Button variant="edit" onClick={() => setShowEditPopup(true)}>Edit</Button>
                            <Button variant="log" onClick={() => setShowDeletePopup(true)}>Delete</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* PopUp konfirmasi hapus */}
            <PopUp
                open={showDeletePopup}
                setOpen={setShowDeletePopup}
                title="Konfirmasi Hapus"
                description="Apakah Anda yakin ingin menghapus aspirasi ini?"
                footer={
                    <div className="flex gap-2">
                        <Button variant="destructive" onClick={handleDelete}>Ya, Hapus</Button>
                        <Button variant="outline" onClick={() => setShowDeletePopup(false)}>Batal</Button>
                    </div>
                }
            />

            {/* PopUp edit aspirasi */}
            <PopUp
                open={showEditPopup}
                setOpen={setShowEditPopup}
                title="Edit Aspirasi"
                footer={
                    <div className="flex gap-2">
                        <Button onClick={handleEditSubmit}>Simpan</Button>
                        <Button variant="outline" onClick={() => setShowEditPopup(false)}>Batal</Button>
                    </div>
                }
            >
                <div className="flex flex-col gap-3">
                    <div>
                        <label className="text-sm font-medium">Judul</label>
                        <Input
                            value={editJudul}
                            onChange={(e) => setEditJudul(e.target.value)}
                            placeholder="Masukkan judul baru"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Komentar</label>
                        <Textarea
                            value={editKomentar}
                            onChange={(e) => setEditKomentar(e.target.value)}
                            placeholder="Tulis komentar baru..."
                        />
                    </div>
                </div>
            </PopUp>
        </>
    )
}

export default ListAspirasi
