import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import{useDispatch} from 'react-redux'
import { Add_User } from '../Redux/Action/UserAction';

const Add = () => {

    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const dispatch = useDispatch();
    const navigat = useNavigate(); 

    const hendleSubmit =(e) =>{
        e.preventDefault();
        let obj = {
            id : Math.floor(Math.random()*1000),
            name,phone
        }
        dispatch(Add_User(obj));

        alert("Added")
        navigat('/View')
        setName('');
        setPhone('');

    }
  return (
    <div >
     <div className='text-center '>
     <h1>Add User</h1>
      <Link to={"/View"}>
      <button className='btn bg-info text-white'>VIEW</button>
      </Link>

     </div>
      <div className='p-3 bg-success text-white w-50 mx-auto rounded mt-5'>
  <form onSubmit={hendleSubmit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Name : </label>
      <input type="text" class="form-control"  onChange={(e) => setName (e.target.value)} value={name || ""}  />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Phone : </label>
      <input type="phone"  class="form-control"  onChange={(e) => setPhone (e.target.value)} value={phone || ""} />
    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>

    </div>
  )
}

export default Add
