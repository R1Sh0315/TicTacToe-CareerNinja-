import "./Select.css";
import IconO from "../icons/iconO";
import IconX from "../icons/iconX";

function Selection(){
    return (
    <div className="continer">
        <div className="heading">
            <b>Pick your Side</b>
        </div>
        <div className="option-container">
            <div className="icons">
                < IconX />
            </div>
            <div className="icons">
                < IconO />
            </div>
        </div>
    </div>
    )
}

export default Selection;