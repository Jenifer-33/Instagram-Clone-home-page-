import { useEffect, useState } from "react";
import { useParams,Link,useNavigate } from "react-router-dom"

function StoryView() {
    const {id} = useParams();
    
const navigate=useNavigate()

    const [story,setStory]=useState(null);
     useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/stories/${id}`)
      .then(data => data.json())
      .then(data => {     
          data.image = "/" + data.image;
          setStory(data);
        }
      )
      .catch((err) => {console.error(err);
        navigate("/");                                  
      });
  }, [id, navigate]);   
  
  return (
    <div className="story-view-container">
      {story ?
       <div className=" d-flex justify-content-center align-items-center ">
            <button onClick={()=>navigate('/')} type="button" className="close btn-close" aria-label="Close"></button>
      <Link to={`/story/${Number(id)-1}`} ><i className="  bi bi-caret-left-square "></i></Link>
      <img className=" storyies" src={story.image} alt="story" />
      <Link  className="" to={`/story/${Number(id)+1}`}><i className="bi bi-caret-right-square "></i></Link >
    </div>
        :
        <p>loading</p>
        }
    </div>
  )
}

export default StoryView