import { useState } from "react";
import "./Input.scss";

const Input = () => {
    const [text, setText] = useState<string>("");

    return (
        <div className="Input">
            <input
                type="text"
                placeholder="...type something"
                id={text.length > 0 ? "not-empty" : "empty"}
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <div className="btn">Send</div>
        </div>
    );
};

export default Input;
