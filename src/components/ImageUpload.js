// src/components/ImageUpload.js
import '../styles/ImageUpload.css'
import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Implement your upload logic here (e.g., send the file to a server).
    // You can use Axios or any other HTTP library for this.
    console.log('Uploading file:', selectedFile);
  };

  return (
    <div className="image-upload-container">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload</button>
      {selectedFile && (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Preview"
          className="image-preview"
        />
      )}
    </div>
  );
};

export default ImageUpload;
