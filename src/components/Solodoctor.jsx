import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import user from "../App.css"
import Calendar from 'react-calendar'


const Solodoctor=()=>{
  const [input,setInput] = useState([]);
    const [data,setData]=useState({})
    const {id}=useParams();
   // console.log(id)
  
 
    const fetchDataFromAPI = async () => {
        let response = await fetch(`http://localhost:2233/appo/${id}`);
        response = await response.json();
        setData(response)
        setInput(response.slot)
      
      
        
      };
    
      useEffect(() => {
        fetchDataFromAPI();
      }, []);
      const [dateState, setDateState] = useState(new Date())
       const [time,setTime]=useState()
       const [year,setYear]=useState("")
       const [day,setDay]=useState("")
       const [m,setM]=useState("")
       const [d,setD]=useState("")
      

  
      
  const changeDate = (e) => {
    setDateState(e)
    setDay(e.getDate())
    setYear(e.getMonth())
    setM(e.getFullYear())
   
  }
//setYear(data.slot.join(" "))
function handledate(e){
  var flag=0
  console.log(Number(e.target.value[3]))
  input.map((el)=>{
   
    if(e.target.value==el&&(Number(e.target.value[3])===Number(el[3]))&&(Number(e.target.value[3])+1===Number(el[3]))){
      setD("notaval")
      flag=1
    }
   
  })
  if(flag==0){
    setD("avalable")
  }

}



 

  


  //console.log(dateState)
 
    return(<>
    <div className="soloDoctor">
          <div className="container" key={data._id}>
                   <img src={data.image} alt="" />
                 
                   <p>Name : {data.Name}</p>
                   <p>Rating : {data.rating}</p>
                   <p>Specaltion : {data.specaltion}</p>
                   <p>age:{data.age}</p>
                   <p>Cost :{data.cost}</p>
                   <p>designation:{data.designation}</p>
                   <p>avaliable time:{data.time}</p>
                  
                 
              
                   
                
              </div>
              <div className="calendder">
                   <Calendar value={dateState} onKeyPress ={changeDate}/>
                  
                   </div>
                   
               <div className="today"><p>
               {day}:{year+1}:{m}</p>
               
            
        
             
            
               </div>
               
                   </div>
                   <div className="slot">
                   {input.map((e,i)=>(<div className="notav"key={i} >Not avaliable thse times{e}</div>))}

                    <input type="time" onClick={(e)=>{handledate(e)}} ></input>
                    {d.length>1 ? <p>{d}</p>:<p>Not booked </p>}
                   </div>
                  
                   </>)

}
export {Solodoctor}