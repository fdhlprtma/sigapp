import { LeaderboardTable } from '../../layouts/Leaderboard/TableLeaderboard';
import type { Column } from '../../layouts/Leaderboard/TableLeaderboard';

type LeaderboardData = {
    rank: string;
    laporan: string;
    rt: string;
    desa: string;
    kelurahan: string;
    kecamatan: string;
    kabupaten: string;
    provinsi: string;
};

function ListJumlahLaporan() {
    const data: LeaderboardData[] = [
        {
            rank: "1",
            laporan: "23",
            rt: "RT 01/RW 02",
            desa: "Kampung Sawah",
            kelurahan: "Sukamaju",
            kecamatan: "Cibinong",
            kabupaten: "Bogor",
            provinsi: "Jawa Barat",
        },
        {
            rank: "2",
            laporan: "19",
            rt: "RT 03/RW 01",
            desa: "Kampung Baru",
            kelurahan: "Sukaraja",
            kecamatan: "Citeureup",
            kabupaten: "Bogor",
            provinsi: "Jawa Barat",
        },
        {
            rank: "3",
            laporan: "15",
            rt: "RT 02/RW 03",
            desa: "Kampung Tengah",
            kelurahan: "Mekarjaya",
            kecamatan: "Gunung Putri",
            kabupaten: "Bogor",
            provinsi: "Jawa Barat",
        },
        {
            rank: "4",
            laporan: "10",
            rt: "RT 05/RW 06",
            desa: "Kampung Selatan",
            kelurahan: "Sindang Barang",
            kecamatan: "Ciomas",
            kabupaten: "Bogor",
            provinsi: "Jawa Barat",
        },
        {
            rank: "5",
            laporan: "9",
            rt: "RT 05/RW 06",
            desa: "Kampung Selatan",
            kelurahan: "Sindang Barang",
            kecamatan: "Ciomas",
            kabupaten: "Bogor",
            provinsi: "Jawa Barat",
        },
        {
            rank: "6",
            laporan: "8",
            rt: "RT 05/RW 06",
            desa: "Kampung Selatan",
            kelurahan: "Sindang Barang",
            kecamatan: "Ciomas",
            kabupaten: "Bogor",
            provinsi: "Jawa Barat",
        },
    ];

    const columns: Column<LeaderboardData>[] = [
        {
            key: "rank",
            label: "Rank",
            render: (_, row) => {
                switch (row.rank) {
                    case "1":
                        return <img src="./icon/satu.svg" alt="" className='' />;
                    case "2":
                        return <img src="./icon/dua.svg" alt="" />;
                    case "3":
                        return <img src="./icon/tiga.svg" alt="" />;
                    default:
                        return <span className='ms-3'>{row.rank}</span>;
                }
            },
        },
        { key: "laporan", label: "Jumlah Laporan" },
        { key: "rt", label: "RT/RW" },
        { key: "desa", label: "Desa/Kampung" },
        { key: "kelurahan", label: "Kelurahan" },
        { key: "kecamatan", label: "Kecamatan" },
        { key: "kabupaten", label: "Kabupaten" },
        { key: "provinsi", label: "Provinsi" },
    ];

    return (
        <div className="mx-8">
            <div>
                <LeaderboardTable
                    columns={columns}
                    data={data}
                    showFooter
                />
            </div>
        </div>
    );
}

export default ListJumlahLaporan;
