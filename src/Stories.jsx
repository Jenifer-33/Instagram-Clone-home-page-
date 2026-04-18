import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Stories() {
  const [stories, setStories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/stories`)
      .then((story) => story.json())
      .then(story => setStories(story))
      .catch((err) => console.log(err))
  }, [])

  const handleClick = (id) => {
    navigate(`/story/${id}`)
  }

  return (
    <div className="d-flex justify-content-center m-4">
      {stories.length > 0 ? (
        <div className="d-flex scroll">
          {stories.map((story) =>
            <div key={story.id}>
              <div onClick={() => handleClick(story.id)}
                className={story.storyStatus ? "story-ring mx-2" : "story-no-ring mx-2"}>
                <img className="story-DP rounded-circle" src={story.profilePicture} alt="story" />
              </div>
              <p className="text-story text-truncate d-flex justify-content-center"
                style={{ width: "70px" }}>{story.username}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Stories