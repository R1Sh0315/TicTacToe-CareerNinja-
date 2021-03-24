import { AiOutlineSetting } from 'react-icons/ai';
import "./btn.css";

export default function SettingBtn(){
    return(<div>
        <button className="set-btn">
            <AiOutlineSetting className="set-col" />
        </button>
    </div>)
}