import React, { useState, ChangeEvent } from "react";
import axios, { Axios } from 'axios';

type UploadStatus = 'idle' | 'uploading' | 'sucess'| 'error';

function FileLoader() {
  const [file, setFile] = useState<File | null >(null);
  const [status, setStatus] = useState<UploadStatus> ('idle');
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

 async function handleFileUpload(){
    if(!file) return; 

    setStatus('uploading');

    const formData = new FormData(); 
    formData.append('file', file);

    try {
      await axios.post("https://httpbin.org/post", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
       
      setStatus('sucess');
    }catch{
      setStatus('error');
    }
  }
  return (
    <div className="space-y-2">
      <label 
        htmlFor="paySlip"
        className="block text-sm/6 font-medium text-gray-900"
      >
        <span className="text-red-700 p-2">*</span>
        Upload Pay Slip
      </label>
      <input type="file" onChange={handleFileChange} className="border border-gray-300 rounded p-2 m-2"/>
      {file && (
        <div> 
          <p>File Name: {file.name}</p>
          <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
          <p>Type: {file.type}</p>
        </div>
      )}
      {file && status !==  'uploading' && <button className="text-xl bg-gray-100" onClick={handleFileUpload}>Upload</button>}

      {status === 'sucess' && (
        <p className="text-sm text-green-600">File uploaded sucessfully!</p>
      )}

      {status === 'error' && (
        <p className="text-sm text-red-600">Upload failed. Please try again</p>
      )}
    </div>
  );
}

export default FileLoader;
