import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="./components/unitManagement/page">Unit Management</Link>
          </li>
          <li>
            <Link to="./components/calendar/page">Calendar</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Dashboard;