import "./btn.css";
import { useHistory } from 'react-router-dom';

export default function WithFriend(){
    let history=useHistory();

    const redirect=()=>{
        history.push('/SelectionForFi')
    }

    return(<div>
        <button onClick={redirect} className="btn"><b>With a Friend</b></button>
    </div>)
}