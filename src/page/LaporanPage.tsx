import { useState } from "react";
import Footer from "../layouts/Nav,Foot/Footer";
import { Input } from "../components/ui/input";
import Title from "../components/ui/Title";
import Navbar from "../layouts/Nav,Foot/Navbar";
import ListLaporan from "../layouts/Laporan/ListLaporan";
import { Drop } from "../components/ui/Drop";

type StatusType = "Selesai" | "Proses" | "Tolak";

type Laporan = {
    status: StatusType;
    className: string;
    badge: string;
    image: string;
    alt: string;
    alamat: string;
    judul: string;
    komentar: string;
};

function LaporanPage() {
    const [statusFilter, setStatusFilter] = useState<string>("Semua Status");

    const laporanList: Laporan[] = [
        {
            status: "Selesai",
            className: "bg-[#E8FFF3] text-[#50CD89]",
            badge: "selesai",
            image: "./jalan-lubang.svg",
            alt: "jalan lubang",
            alamat: "1 Juni 2025  |  Desa Leange, Kel. Mangallekana ...",
            judul: "Jalan berlubang di depan rumah pak budi",
            komentar: "Terdapat lubang cukup besar yang membahayakan pengendara",
        },
        {
            status: "Proses",
            className: "bg-[#FFF8DD] text-[#F6C000]",
            badge: "proses",
            image: "./saluran_tersumbat.svg",
            alt: "saluran tersumbat",
            alamat: "1 Juni 2025  |  Desa Leange, Kel. Mangallekana ...",
            judul: "Saluran Air Tersumbat di Jalan Melati",
            komentar: "Saluran air tersumbat dan menyebabkan genangan.",
        },
        {
            status: "Tolak",
            className: "bg-[#FFF5F8] text-[#F1416C]",
            badge: "tolak",
            image: "./tumpukan-sampah.svg",
            alt: "sampah",
            alamat: "1 Juni 2025  |  Desa Leange, Kel. Mangallekana ...",
            judul: "Tumpukan Sampah di Taman Cempaka",
            komentar: "Sudah beberapa hari menimbulkan bau tidak sedap.",
        },
        {
            status: "Selesai",
            className: "bg-[#E8FFF3] text-[#50CD89]",
            badge: "selesai",
            image: "./jalan-lubang.svg",
            alt: "jalan lubang",
            alamat: "1 Juni 2025  |  Desa Leange, Kel. Mangallekana ...",
            judul: "Jalan berlubang di depan rumah pak budi",
            komentar: "Terdapat lubang cukup besar yang membahayakan pengendara",
        },
        {
            status: "Proses",
            className: "bg-[#FFF8DD] text-[#F6C000]",
            badge: "proses",
            image: "./saluran_tersumbat.svg",
            alt: "saluran tersumbat",
            alamat: "1 Juni 2025  |  Desa Leange, Kel. Mangallekana ...",
            judul: "Saluran Air Tersumbat di Jalan Melati",
            komentar: "Saluran air tersumbat dan menyebabkan genangan.",
        },
        {
            status: "Tolak",
            className: "bg-[#FFF5F8] text-[#F1416C]",
            badge: "tolak",
            image: "./tumpukan-sampah.svg",
            alt: "sampah",
            alamat: "1 Juni 2025  |  Desa Leange, Kel. Mangallekana ...",
            judul: "Tumpukan Sampah di Taman Cempaka",
            komentar: "Sudah beberapa hari menimbulkan bau tidak sedap.",
        },
    ];

    const filteredLaporan = laporanList.filter((lap) =>
        statusFilter === "Semua Status" ? true : lap.status === statusFilter
    );

    return (
        <div className="mx-8">
            <Navbar />
            <Title>Daftar Laporan</Title>
            <div className="mx-14">
                <div className="flex gap-5">
                    <Input
                        type="text"
                        placeholder="Cari laporan..."
                        className="border border-[#5e5e5e]"
                    />
                    <Drop
                        className="w-44"
                        label="Semua Status"
                        items={["Semua Status", "Selesai", "Proses", "Tolak"]}
                        onSelect={(value) => setStatusFilter(value)}
                    />
                </div>
                <div className="flex flex-wrap gap-5 my-7">
                    {filteredLaporan.map((lap, index) => (
                        <ListLaporan
                            key={index}
                            className={lap.className}
                            chilBadge={lap.badge}
                            image={lap.image}
                            alt={lap.alt}
                            alamat={lap.alamat}
                            judul={lap.judul}
                            komentar={lap.komentar}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LaporanPage;
