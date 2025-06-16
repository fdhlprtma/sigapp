import { useState } from 'react';
import Title from '../components/ui/Title';
import Footer from '../layouts/Nav,Foot/Footer';
import Navbar from '../layouts/Nav,Foot/Navbar';
import ListJumlahLaporan from '../layouts/Leaderboard/ListJumlahLaporan';
import ListLaporanTerselesaikan from '../layouts/Leaderboard/ListLaporanTerselesaikan';
import ListAspirasiTerealisasikan from '../layouts/Leaderboard/ListAspirasiTerealisasikan';
import { Drop } from '../components/ui/Drop';

function LeaderboardPage() {
    const [sortBy, setSortBy] = useState("Jumlah Laporan");

    return (
        <div className="mx-8">
            <Navbar />
            <div>
                <Title>Leaderboard</Title>
                <div className="flex justify-end mb-4">
                    <Drop
                        label={sortBy}
                        items={[
                            "Laporan Terselesaikan",
                            "Jumlah Laporan",
                            "Aspirasi Terealisasikan",
                        ]}
                        onSelect={setSortBy}
                    />
                </div>

                {sortBy === "Laporan Terselesaikan" && <ListLaporanTerselesaikan />}
                {sortBy === "Jumlah Laporan" && <ListJumlahLaporan />}
                {sortBy === "Aspirasi Terealisasikan" && <ListAspirasiTerealisasikan />}
            </div>
            <Footer />
        </div>
    );
}

export default LeaderboardPage;
