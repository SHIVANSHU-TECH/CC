"use client"
import React, { useState } from "react"
import "../form/efom.css"
import axios from "axios"
import { createEvent } from "@/actions/event-actions"
export default function Eform() {
  const [event, setEvent] = useState("")
  const [date, setDate] = useState("")
  const [desc, setDesc] = useState("")
  const [event_category, setEvent_category] = useState("")
  const [eimg, setEimg] = useState({})
  const [elink, setElink] = useState("")
  // console.log(event, date, desc, event_category, eimg, elink)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      const token = localStorage.getItem("token")
      console.log(token)
      console.log("eimg", eimg)

      const formData = new FormData()
      formData.append("event", event)
      formData.append("date", date)
      formData.append("desc", desc)
      formData.append("eimg", eimg)
      formData.append("elink", elink)
      createEvent(formData)
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
      // const response = await axios.post(
      //   "http://localhost:5000/api/v1/event/",

      //   formData,

      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       authorization: `Bearer ${token}`,
      //     },
      //   }
      // )

      // console.log(response.data)
      // alert(data.message)
      // location.href = "/events"
    } catch (err) {
      console.log(err)
    }
  }
  const handleCategory = (e) => {
    set_category(e.target.value)
  }
  const handleFileChange = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      const binaryStr = reader.result

      setEimg(e.target.files[0])
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <div>
      {/* <div className="containerForm"> */}
      <form
        className='EForm'
        onSubmit={handleSubmit}
        encType='multipart/form-data'>
        Event Submission Form
        {/* <label for="event">EVENT NAME</label> */}
        <input
          type='text'
          id='ename'
          name='event'
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder='Event name'
        />
        {/* <label for="date">DATE</label> */}
        <input
          type='date'
          id='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder='date'
        />
        {/* <label for="desc">event description</label> */}
        <input
          type='text'
          id='text'
          name='desc'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder='description'
        />
        {/* <label for="event_category">Category</label> */}
        <select
          id='event_category'
          name='event_category'
          value={event_category}
          placeholder='event_category'
          onChange={(e) => setEvent_category(e.target.value)}>
          <option value='cultural'>Cultural</option>
          <option value='technical'>Technical</option>
          <option value='sports'>Sports</option>
        </select>
        {/* <label>event image</label> */}
        <input
          type='file'
          name='eimg'
          placeholder='event_image'
          onChange={handleFileChange}
        />
        {/* <label>event Link</label> */}
        <input
          type='url'
          placeholder='event_Link'
          name='elink'
          // value={elink}
          onChange={(e) => setElink(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
      {/* </div> */}
    </div>
  )
}
