import { Routes, Route } from 'react-router-dom';
import HomePage from './page/BerandaPage';
import PetaWilayah from './page/PetaWilayahPage';
import LeaderboardPage from './page/LeaderboardPage';
import LaporanPage from './page/LaporanPage';
import Masuk from './page/Auth/Masuk';
import Daftar from './page/Auth/Daftar';
import GabungWilayahPage from './page/GabungWilayah/GabungWilayahPage';
import AjukanWilayahPage from './page/AjukanWilayah/AjukanWilayahPage';
import BerandaIsLogin from './page/isLogin/BerandaIsLogin';
import AddLaporan from './page/laporan/AddLaporan';
import AddAspirasi from './page/Aspirasi/AddAspirasi';
import NotFound from './page/NotFound';
import DetailLaporan from './page/laporan/DetailLaporanPage';
import Pengajuan from './page/RT/Pengajuan';

function App() {
  return (
    <Routes>
      <Route path="/masuk" element={<Masuk />} />
      <Route path="/daftar" element={<Daftar />} />

      <Route path="/" element={<HomePage />} />
      <Route path="/petawilayah" element={<PetaWilayah />} />
      <Route path="/laporan" element={<LaporanPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />

      <Route path="/ajukan-wilayah" element={<AjukanWilayahPage />} />
      <Route path="/gabung-wilayah" element={<GabungWilayahPage />} />

      <Route path="/beranda" element={<BerandaIsLogin />} />

      <Route path="/form-laporan" element={<AddLaporan />} />
      <Route path="/form-aspirasi" element={<AddAspirasi />} />

      <Route path="/detail-laporan" element={<DetailLaporan />} />

      <Route path="/pengajuan" element={<Pengajuan />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
