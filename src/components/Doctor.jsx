// const Doctor=()=>{
// return (
//     <div>jaswant</div>
// )
// }

// export {Doctor}
import { useState, useEffect } from "react";
import { Route } from "react-router";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import user from "../App.css"
import { Solodoctor } from "./Solodoctor";





 function Doctor() {
  const [input,setInput] = useState([]);
  const [data,setData]=useState();
  

  const fetchDataFromAPI = async () => {
    let response = await fetch(`http://localhost:2233/appo`);
    response = await response.json();
    console.log(response)
    //setComments(response);
    setData(response)
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);
  function handleinput(e){
    var arr=[]
    for(var i=0;i<data.length;i++){
  
      if(e.target.value[0]===data[i].Name[0]){
        arr.push(data[i])
        
    
        
      }
    
    }
   
    setInput(arr)
    

  }
  function handledata(el){
    console.log(el)
    
  }


  return (
    <>

    <div className="user">
      <input className="input" placeholder="Enter DoctorName or Specialization " type="text" onChange={(e)=>handleinput(e)}></input>
      {input.length>=1?
            <div className="scroll">{input.map((item)=>(
              <div className="container" key={item._id}>
                   <img src={item.image} alt="" />
                   <div className="details">
                   <p>Name : {item.Name}</p>
                   <p>Rating : {item.rating}</p>
                   <p>Specaltion : {item.specaltion}</p>
                  
                   <Link to={`/doctor/${item._id}`} ><button>Book A Slot</button> With {item.Name}</Link>
                 
                   
                   
                 
                   
           
      
                 
                 
                  
                   </div>
                
              </div>
               ))}
           
              
          
              </div>  
        :<p>data is</p>  
        }
    </div>
 
  
    </>
   

  );
}
export { Doctor}