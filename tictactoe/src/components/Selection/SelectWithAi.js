import "./Select.css";
import IconO from "../icons/iconO";
import IconX from "../icons/iconX";
import WithAiBtn from "../Startpage/buttons/withAiBtn";

function SelectionForAi(){
    return (
    <div className="continer">
        <div className="heading">
            <b>Pick your Side</b>
        </div>
        <div className="option-container">
            <div className="icons">
                <input className="icon-left" type="radio" id="contactChoice1" name="contact" value="email" />
                <label for="contactChoice1">< IconX /></label>
            </div>
            <div className="icons">
                <input className="icon-right" type="radio" id="contactChoice1" name="contact" value="email" />
                <label for="contactChoice1">< IconO /></label>
            </div>
        </div>
        <div className="continue-btn-container">
            <WithAiBtn />
        </div>
    </div>
    )
}

export default SelectionForAi;