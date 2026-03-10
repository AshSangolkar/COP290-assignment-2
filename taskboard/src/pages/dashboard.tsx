import {useState} from "react";
import "./dashboard.css";
function Dashboard(){

    const [open, setOpen] = useState(true);
  return(
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-body">
        <div className={open ? "sidebar open" : "sidebar"}>

          <div className="arrow-btn" onClick={() => setOpen(!open)}>
            {open ? "◀" : "▶"}
          </div>
          {open && (
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Tasks</li>
              <li>Notifications</li>
              <li>Logout</li>
            </ul>
          )}
        </div>

        <div className="main-content">
          <h2>My Projects</h2>
          <p>No projects yet</p>
          <button className="create-btn">+ Create Project</button>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;