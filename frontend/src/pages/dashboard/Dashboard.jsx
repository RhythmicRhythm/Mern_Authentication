import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");

  return (
    <div>

      welcome
    </div>
  );
};

export default Dashboard;