"use client";

import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    coachName: "",
    coachNumber: "",
    official1Name: "",
    official1Number: "",
    teamPhoto: null,
  });
  const [warning, setWarning] = useState(""); // State for warning message
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, teamPhoto: e.target.files[0] });
    setWarning(""); // Clear the warning if an image is uploaded
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.teamPhoto) {
      // Show warning if no image is uploaded
      setWarning("Harap unggah foto tim sekolah sebelum melanjutkan.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");

    // Redirect to Success Page
    router.push("/success");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <div className="mb-4">
        <div className="flex items-center space-x-4">
          <p className="text-gray-500 text-sm font-medium">Data Pemain Piala by.U</p>
          <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-lg">Kategori SMA</span>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Masukan Informasi Tim</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nama Pelatih */}
        <div>
          <label className="block text-gray-medium font-medium mb-1">Nama Pelatih</label>
          <input
            type="text"
            name="coachName"
            value={formData.coachName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukin nama pelatih tim"
            required
          />
        </div>

        {/* Nomor Pelatih */}
        <div>
          <label className="block text-gray-medium font-medium mb-1">Nomor Pelatih</label>
          <input
            type="text"
            name="coachNumber"
            value={formData.coachNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukin nomor pelatih"
            required
          />
        </div>

        {/* Nama Official 1 */}
        <div>
          <label className="block text-gray-medium font-medium mb-1">Nama Official 1</label>
          <input
            type="text"
            name="official1Name"
            value={formData.official1Name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukin nama official 1"
            required
          />
        </div>

        {/* Nomor Official 1 */}
        <div>
          <label className="block text-gray-medium font-medium mb-1">Nomor Official 1</label>
          <input
            type="text"
            name="official1Number"
            value={formData.official1Number}
            onChange={handleChange}
            className="w-full p-2 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukin nomor official 1"
            required
          />
        </div>

        {/* Upload Foto Tim Sekolah */}
        <div>
          <label className="block text-gray-medium font-medium mb-2">Upload Foto Tim Sekolah</label>
          <p className="text-sm text-gray-500 mb-4">Upload foto tim futsal sekolah dengan resolusi file besar (High Resolution)</p>

          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500">
            {formData.teamPhoto ? (
              // Display preview image
              <img src={URL.createObjectURL(formData.teamPhoto)} alt="Preview" className="w-full h-48 object-cover rounded-lg mb-4" />
            ) : (
              // Show upload icon if no file is selected
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V19a2.5 2.5 0 002.5 2.5h13a2.5 2.5 0 002.5-2.5v-2.5m-18-9V7a2.5 2.5 0 012.5-2.5h13A2.5 2.5 0 0119 7v.5m-6 3V17m-4-4l4-4m4 4l-4-4" />
                </svg>
              </div>
            )}

            {/* Upload Button */}
            <label
              htmlFor="teamPhoto"
              className="mt-4 cursor-pointer inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
            >
              <input id="teamPhoto" name="teamPhoto" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7v14" />
              </svg>
              Upload
            </label>
          </div>

          {/* Warning Message */}
          {warning && <p className="text-red-500 text-sm mt-2">{warning}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700">
          Lanjut
        </button>
      </form>
    </div>
  );
};

export default Form;
