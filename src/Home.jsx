import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../src/App.css";

const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      
      navigate('/data');
    };
    const handleButtonClick1 = () => {
        
        navigate('/upload');
      };
  return (
    <div>
      <div className="ocr">
        <p>OCR - RECOGNITION APP</p>
        <button type="button" className='filterButton' onClick={handleButtonClick}>Click to see data</button>
        <button type="button" className='outputButton' onClick={handleButtonClick1}>click to upload data</button>
      </div>
    </div>
  );
};

export default Home;