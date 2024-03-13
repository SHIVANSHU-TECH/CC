"use client";
import React,  { useState } from 'react';
import "../form/efom.css";

export default function Eform() {
    const [event, setEvent] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [event_category, setEvent_category] = useState('');
    const [eimg, setEimg] = useState('');
    const [elink, setElink] = useState('');
    console.log(event,date,desc,event_category,eimg,elink)

  
    const handleSubmit = async (e) => {
      try {
      e.preventDefault();
  
      console.log(event_category);
  
        const token = localStorage.getItem("token");
      console.log(token);
        const response = await fetch("http://localhost:5000/api/v1/event/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: event,
            description: desc,
            image: eimg,
            category: event_category,
            link: elink,
            DeadlineDate: date,
          }),
        });
  
          const data = await response.json();
          console.log(data);
          alert(data.message);
          location.href="/events"
        } catch (err) {
          console.log(err);
        }
      };
    const handleCategory =(e)=>{
      set_category(e.target.value)
    }
  
  
    
  return (
    <div>
      {/* <div className="containerForm"> */}
    <form className='EForm' onSubmit={handleSubmit}>Event Submission Form
    {/* <label for="event">EVENT NAME</label> */}
    <input type="text"
     id="ename" 
     name="event" 
     value={event}
     onChange={(e) => setEvent(e.target.value)}
     placeholder="Event name" />
     
    {/* <label for="date">DATE</label> */}
    <input type="date" 
    id="date"
    name="date" 
    value={date}
    onChange={(e) => setDate(e.target.value)}
    placeholder="date" />
   
    {/* <label for="desc">event description</label> */}
    <input type="text" 
    id="text" 
    name="desc"
    value={desc}
    onChange={(e) => setDesc(e.target.value)}
    placeholder="description" />
  

    {/* <label for="event_category">Category</label> */}
    <select id="event_category"
     name="event_category"
     value={event_category}
     placeholder ="event_category"
     onChange={(e) => setEvent_category(e.target.value)}>
      <option value="cultural">Cultural</option>
      <option value="technical">Technical</option>
      <option value="sports">Sports</option>
    </select>
    
    {/* <label>event image</label> */}
    <input type="file"
     name="eimg"
     placeholder='event_image'
     value={eimg}
     onChange={(e) => setEimg(e.target.value)}/>
    
    {/* <label>event Link</label> */}
    <input type="url"
    placeholder='event_Link'
    name='elink'
    value={elink}
    onChange={(e) => setElink(e.target.value)}
     />
    
    <input type="submit" value="Submit"/>
  </form>
  {/* </div> */}
    </div>
  ) }