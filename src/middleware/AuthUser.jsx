 import Cookies from "universal-cookie";
 const cookies = new Cookies();
 const AuthUser = ({ children }) => {
   const user = cookies.get("user");
   console.log(user);
   if (user && user.email) {
     return (window.location.href = "/");
   }
   return !user || !user.email ? children : null;
 };
 export default AuthUser;















