import Cookies from "universal-cookie";
const cookies = new Cookies();

const GuestUser = ({ children }) => {
  const user = cookies.get("user");

  if (user && user.email) {
    return (window.location.href = "/");
  }

  return children;
};

export default GuestUser;
