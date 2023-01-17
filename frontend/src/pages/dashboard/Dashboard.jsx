import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");

  return (
    <div>
       Welcome, Thank you for choosing Rhythmic.dev
    </div>
  );
};

export default Dashboard;