import React from 'react';
import FileUploader from './components/file_uploader';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Welcome to My React App on AWS!</h1>
      <p>This app is hosted using AWS S3 and CloudFront (Free Tier)</p>

      <div style={{ marginTop: '40px' }}>
        <h1>React + AWS S3 Upload</h1>
        <FileUploader />
      </div>
    </div>
  );
}

export default App;
