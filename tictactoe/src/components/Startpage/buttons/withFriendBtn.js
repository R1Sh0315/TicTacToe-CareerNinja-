import "./btn.css";
import { useHistory } from "react-router-dom";

function WithFriendBtn(){
    let history=useHistory();
    const redirect=()=>{
        history.push('/withfriends')
    }

    return(
    <div>
        <button onClick={redirect} className="continue-btn"><b>Continue</b></button>
    </div>
    )
}

export default WithFriendBtn;