import React, { useEffect, useState } from 'react'
import AdminHeader from '../comon/AdminHeader'
import axios from 'axios'
// import axios from 'axios'

function ServiceManage() {

  const [Service, SetService] = useState([])

    

const FetchServices = async () => {
  const res = await axios.get("http://localhost:3000/services")
  console.log(res.data);
  SetService(res.data)
  
}
useEffect(() => {
  FetchServices();
}, [])

//single api get

const [Single, setSingle] = useState({
    id : "",
    name : "",
    desc : "",
    img : ""
})
const SingleData = async (id)=>{
  const res = await axios.get(`http://localhost:3000/services/${id}`)
  console.log(res.data);
  setSingle(res.data)
}


const DeleteData = async (id) =>{
  const res = await axios.delete(`http://localhost:3000/services/${id}`)
  console.log(res.data);
  FetchServices()
}

const [edit, setedit] = useState(null)

    const [edited, setedited] = useState({
        id: "",
        name: "",
        desc: "",
        img: ""
    })

    const getdata = (data) => {
        console.log(data);
        setedit(data)
        setedited(data)
    }
    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }

    const submitdata = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/services/${edited.id}`, edited)
            console.log(res.data);
            setedited({
                id: "",
                name: "",
                desc: "",
                img: ""
            })
            setedit(null)
            FetchServices()

        } catch (error) {
            console.log("Api data is not show");

        }
    }


 
  return (
    <div>
        <AdminHeader />
        <h1>hello</h1>
        <div className="container">
          <h1 className='text-center'>ServiceManage</h1>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">IMG</th>
      <th scope="col">NAME</th>
      <th scope="col">DESC</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>
    {
      Service && Service.map((data,index)=>{
        console.log(data);

          return(
            <tr key={index}>
      <th scope="row">{data.id}</th>
      <td>
        <img src={data.img} style={{width : "100px"}} alt="" />
      </td>
      <td>{data.name}</td>
      <td>{data.desc}</td>
      <td>
        <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=> SingleData(data.id)}>View</button>
        <button className='btn btn-primary mx-2'onClick={()=>getdata(data)}>Edit</button>
        <button className='btn btn-danger' onClick={()=>DeleteData(data.id)}>Delete</button>
      </td>
    </tr>
          )
        
      })
    }
  </tbody>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="col-lg-12 col-md-6 wow fadeInUp mx-auto" data-wow-delay="0.1s">
                                    <div className="service-item">
                                        <div className="service-inner pb-5">
                                            <img className="img-fluid w-100" src={Single.img} alt />
                                            <div className="service-text px-5 pt-4">
                                                <h5 className="text-uppercase">{Single.name}</h5>
                                                <p>{Single.desc}
                                                </p>
                                            </div>
                                            <a className="btn btn-light px-3" href>Read More<i className="bi bi-chevron-double-right ms-1" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        {
                edit && (
                      <form action="">
                    <div className="col-lg-6 mb-n5 wow fadeIn mx-auto" data-wow-delay="0.7s">
                        <div className="bg-white p-5">
                            <h2 className="text-uppercase mb-4">Contact Us</h2>
                            <div className="row g-3">
                                <div className="col-sm-12">
                                    <div className="form-floating">
                                        <input value={edited.name} onChange={getchange} type="text" className="form-control border-0 bg-light" name="name" id="name" placeholder="Your Name" />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-floating">
                                        <input value={edited.desc} onChange={getchange} type="text" className="form-control border-0 bg-light" name="desc" id="subject" placeholder="Description" />
                                        <label htmlFor="subject">Description</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input value={edited.img} onChange={getchange} type="url" className="form-control border-0 bg-light" name="img" id="img" placeholder="Enter img" />
                                        <label htmlFor="message">Enter Your img</label>
                                    </div>
                                </div>
                                <div className="col-6 text-center">
                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={submitdata}>Submit Now</button>
                                </div>
                                  <div className="col-6 text-center">
                                    <button className="btn btn-primary w-100 py-3" onClick={()=> setedit(null)} type="submit">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                )
              }
    </div>
  )
}

export default ServiceManage;