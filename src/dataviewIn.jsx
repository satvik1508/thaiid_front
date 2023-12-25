
import React, { useState } from 'react';

let conditionsArray = [];

const DataViewIn = ({ onFilter }) => {

  const [firstName, setFirstName] = useState('');
  conditionsArray = [{'firstname':firstName}];
  const handleFilter = () => {
  
    onFilter(conditionsArray);
  };

  return (
    <div>

      <label>First Name:</label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      <button onClick={handleFilter}>DataVeiw</button>
    </div>
  );
};


 export default DataViewIn;