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
            <Link to="/components/unitManagement">Unit Management</Link>
          </li>
          <li>
            <Link to="/components/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/components/assessments">Assessments</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Dashboard;