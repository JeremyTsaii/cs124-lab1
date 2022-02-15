import {useState} from "react";
import {FaWindowClose} from 'react-icons/fa';
import {FaSave} from 'react-icons/fa';
import './Modal.css'
import Icon from "./Icon";


function Modal(props) {
    const [text, setText] = useState(props.textInputValue);

    return (
        <div className="modal">
            <div className="content">
                <div className="header">
                    <h4 className="title">{props.title}</h4>
                </div>
                <div className="body">
                    <p>Item Name</p>
                    <input type="text" name="text" placeholder={props.textInputValue} onChange={(event) => {
                        setText(event.target.value);
                    }}/>
                </div>
                <div className="footer">
                    <Icon text="Close" onClick={() => {
                        props.onClose();
                    }}>
                        <FaWindowClose/>
                    </Icon>
                    <Icon text="Save" onClick={() => {
                        props.onSave(text);
                    }}>
                        <FaSave/>
                    </Icon>
                </div>
            </div>
        </div>
    );
}

export default Modal;