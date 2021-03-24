import "./btn.css";
import { useHistory } from "react-router-dom";

function WithAiBtn(){
    let history=useHistory();
    const redirect=()=>{
        history.push('/withai')
    }

    return(
    <div>
        <button onClick={redirect} className="continue-btn"><b>Continue</b></button>
    </div>
    )
}

export default WithAiBtn;