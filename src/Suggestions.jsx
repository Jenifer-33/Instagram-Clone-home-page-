import { useState, useEffect } from "react"

function Suggestions() {
  const [profile, setProfile] = useState(null)
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/profile`)
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err))

    fetch(`${import.meta.env.VITE_API_URL}/suggestions`)
      .then((data) => data.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <div className="suggestions w-75 m-4">
        {profile ? (
          <div className="d-flex">
            <img className="DP rounded-circle" src={profile.profilePicture} alt="pp" />
            <small>{profile.username}</small>
            <small className="ms-auto text-primary">Switch</small>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div className="d-flex mt-3">
          <p className="text">Suggested for you</p>
          <b className="ms-auto">See All</b>
        </div>
        {suggestions.length > 0 ? (
          <div>
            {suggestions.map((Suggestion) => (
              <div className="d-flex" key={Suggestion.id}>
                <img className="DP rounded-circle my-3" src={Suggestion.profilePicture} alt="pp" />
                <small>{Suggestion.username}</small>
                <p className="text-primary ms-auto">Follow</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  )
}

export default Suggestions