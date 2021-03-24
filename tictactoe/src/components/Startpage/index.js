import Logo from '../icons/logoXO';
import WithAI from "./buttons/withAi";
import WithFriend from "./buttons/withFriends"
import SetBtn from './buttons/settingbtn';
import './style.css';

function startPage(){
    return (
    <div className="container">
        <div>
            <Logo />
        </div>
        <div style={{color:'#4d4d4d'}}>
            <p>
                <b>
                    Choose your play mode
                </b>
            </p>
        </div>
        <div className="btn-pos">
            < WithAI />
            < WithFriend />
        </div>
        <div>
            <SetBtn />
        </div>
    </div>
    )
}

export default startPage;