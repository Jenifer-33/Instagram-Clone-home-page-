import { useEffect, useState } from "react"

function Posts() {
  const[post,setPost]=useState([]);
   useEffect(()=>{
      fetch("http://localhost:4000/users")
      .then((data)=>data.json())
      .then(data=>setPost(data))
    },[])
      
  return (
    <div className="d-flex justify-content-center ">
      {post.length > 0 ?
      ( 
      <div>
          {post.map((user)=>(
            <div key={user.id}>
              <div className="d-flex" >
              <img className="DP rounded-circle" src={user.profilePicture} alt="Profile Pic" />
              <h5 className="name">{user.username}</h5>  
            </div>
            {user.posts.map((post)=>(
             <div key={post.id}>
              <img className="image" src={post.image} alt="posts" />
              <div>
               <i className="bi bi-heart"></i>
               <i className="bi bi-chat"></i>
               <i className="bi bi-send"></i>
              </div>
              <div>
                <b>{post.likes} likes</b>
               </div>
                 <p> {post.caption}</p>
                </div>
            ))}
           </div>
          ))}
          </div>
        ):
        (
<div>Loading...</div>

        )
 
      }

    </div>
  )
}

export default Posts