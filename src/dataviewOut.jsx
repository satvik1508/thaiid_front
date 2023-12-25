import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataViewIn from './dataviewIn';


const DataViewOut = () => {
        
      const [records, setRecords] = useState([]);
      
      const handleFilter = async (conditionsArray) => {
        try {

       
          const response = await axios.get('https://thaiidback.onrender.com/api/users',conditionsArray);
     
          console.log(response.data);
          setRecords(response.data);
        } catch (error) {
          console.error('Error fetching filtered records:', error);
        }
      };
    
      /*useEffect(() => {
    
      });*/
    
      return (
        <div>
          <ul>
            {records.map((record) => (
              <li key={record._id}></li>
            ))}
          </ul>
    
        
          <DataViewIn onFilter={handleFilter} />
        </div>
      );
    
    
};

export default DataViewOut;