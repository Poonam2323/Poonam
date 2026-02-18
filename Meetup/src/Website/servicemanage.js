// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function ServiceManage() {

//   const [services, setServices] = useState([])
//   const [editData, setEditData] = useState(null)

//   // 📌 Fetch Data (VIEW)
//   useEffect(() => {
//     fetchData()
//   }, [])

//   const fetchData = async () => {
//     const res = await axios.get("http://localhost:3000/services")
//     setServices(res.data)
//   }

//   // 🗑️ DELETE
//   const deleteService = async (id) => {
//     await axios.delete(`http://localhost:3000/services/${id}`)
//     fetchData()
//   }

//   // ✏️ EDIT (Load Data in Form)
//   const editService = (service) => {
//     setEditData(service)
//   }

//   // ✅ UPDATE
//   const updateService = async (e) => {
//     e.preventDefault()
//     await axios.put(`http://localhost:3000/services/${editData.id}`, editData)
//     setEditData(null)
//     fetchData()
//   }

//   return (
//     <div>
//       <h2>Service Manage</h2>

//       {/* Edit Form */}
//       {editData && (
//         <form onSubmit={updateService}>
//           <input 
//             type="text"
//             value={editData.name}
//             onChange={(e)=>setEditData({...editData, name:e.target.value})}
//           />
//           <button type="submit">Update</button>
//         </form>
//       )}

//       {/* View Table */}
//       <table border="1" width="500">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {services.map((item)=>(
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>
//                 <button onClick={()=>editService(item)}>Edit</button>
//                 <button onClick={()=>deleteService(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   )
// }

// export default ServiceManage
