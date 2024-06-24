import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { View_User } from '../Redux/Action/UserAction';

const View = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(View_User())
    },[])

    const Users = useSelector(state => state.user.UserList);
    console.log(Users);
  return (
    <div>
          <div className='text-center '>
     <h1>View User</h1>
      <Link to={"/"}>
      <button className='btn bg-success text-white'>ADD</button>
      </Link>

     </div>

     <div className='w-50 mx-auto rounded mt-5'>
     <table class="table table-primary borderd shadow w-100">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
 <tbody>
    {
        Users.map((u) =>{
                return(
                    <tr key={u.id}>
                        <th scope="row">{u.id}</th>
                        <td>{u.name}</td>
                        <td>{u.phone}</td>

                    </tr>
                )
        })
    }
 </tbody>
</table>
     </div>
     
    </div>
  )
}

export default View
