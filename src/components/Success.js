const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Bukti Pembayaran Berhasil Diupload</h1>
        <p className="text-gray-600 text-sm md:text-base mb-8">Tim by.U akan segera mengkonfirmasi status pembayaran</p>
        <div className="bg-green-100 rounded-full p-6 mb-8 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-green-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 w-4/5 max-w-lg mb-8">
        <h2 className="text-gray-900 text-lg font-bold mb-2">Bukti Pembayaran Sedang Dikonfirmasi</h2>
        <p className="text-gray-600 text-sm">Konfirmasi status pembayaran dapat dilihat di Dashboard</p>
      </div>
      <button className="bg-blue-500 text-white text-sm md:text-base font-medium px-6 py-3 rounded-lg hover:bg-blue-600">Lihat Dashboard</button>
    </div>
  );
};

export default Success;
