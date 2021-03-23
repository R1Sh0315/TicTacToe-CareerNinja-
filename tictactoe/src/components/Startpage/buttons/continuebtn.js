import "./btn.css";
import { useHistory } from "react-router-dom";

function Continue(){
    let history=useHistory();
    const redirect=()=>{
        history.push('/Game')
    }

    return(<div>
        <button onClick={redirect} className="continue-btn"><b>Continue</b></button>
    </div>
    )
}

export default Continue;