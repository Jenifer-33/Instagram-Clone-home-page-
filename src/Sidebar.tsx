 function Sidebar() {
     
   return (
    <div className="d-flex m-3 position-fixed">
 <div className="d-flex flex-column gap-4"> 
      <img className ="logo-text" src="src/assets/Instagram_text.png" alt="Logo" /> 
      <div><i className="bi bi-house-door-fill"></i>Home</div>
      <div><i className="bi bi-search"></i>Search</div>
      <div><i className="bi bi-compass"></i>Explore</div>
      <div><i className="bi bi-file-play"></i>Reels</div>
     <div><i className="bi bi-send"></i>Messages</div>
     <div><i className="bi bi-heart"></i>Notifications</div>
     <div><i className="bi bi-plus"></i>Create</div>
     <div> <img className="ba rounded-circle" style={{width:"30px"}} src="src/assets/profile1.jpeg" alt="pro" />Profile</div>
     
</div>
 <div className="d-flex flex-column gap-4 position-fixed bottom-0 mb-4"> 
      <div><i className="bi bi-list"></i>More</div>
      <div><i className="bi bi-meta"></i>Also From Meta</div>
</div>

    
    </div>
    
     ); } 
     export default Sidebar;