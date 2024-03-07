import React,{ useContext } from "react";
import UserContext from "../content/UserContext";

function Profile(){
const {user} = useContext(UserContext);
if(!user) return <div>Please Login</div>
else return <div>Welcome {user.username}</div>

}
export default Profile;  