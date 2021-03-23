import './btn.css'
import { useHistory } from 'react-router-dom';
export default function WithAI(){
    let history=useHistory();

    const redirect=()=>{
        history.push('/Select')
    }
    return(<div>
        <button onClick={redirect} className="btn"><b>With AI</b></button>
    </div>)
}