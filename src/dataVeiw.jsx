import {useState,React, useEffect} from 'react';
import axios from 'axios';
import "../src/App.css"

const DataView = () => {
    const [res, setres] = useState([]);

    const handleDlt = (id)=>{
      axios.delete(`https://thaiidback.onrender.com/api/users/${id}`)
      .then(response => {
        console.log(`Deleted post with ID ${id}`);
       
        analyse();
      })
      .catch(error => {
        console.error(error);
      });
    }

    const analyse = async () => {
      try {
        const uri = `https://thaiidback.onrender.com/api/users/`;
        const ans = await axios.get(uri);
        console.log(ans.data);
        setres(ans.data);
  
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    useEffect(()=>{
      analyse();
    },[])

  return (
    <div>
 
      <ul>
      <div className='parCard'>
          {res.map((element) => (
              <ul key={element._id}>
              <div className='card'>
              <p>identificationNumber : {element.identificationNumber}</p>
              <p>FirstName : {element.firstName}</p>
              <p>LastName : {element.lastName}</p>
              <p>DateOfBirth : {element.dateOfBirth}</p>
              <p>DateOfExpiry : {element.dateOfExpiry}</p>
              <p>DateOfIssue : {element.dateOfIssue}</p>
              <button type="button" className="deleteBtn" onClick={()=>{handleDlt(element._id)}}>Delete</button>
              <button type="button" className="updateBtn" >Update</button>
              </div>
              </ul>
            ))}
        </div>
      </ul>
    </div>
  );
};

export default DataView;