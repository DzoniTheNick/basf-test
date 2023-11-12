import { useEffect, useState } from "react";
import "./Input.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setInputParameters } from "../../store/feature/inputParameters";
import { defaultComment } from "../../utils/consts";
import { saveComment } from "../../utils/helpers";

const Input = () => {
    const dispatch = useAppDispatch();
    const selectedComment = useAppSelector(
        (state) => state.inputParameters.selectedComment
    );

    const [placeholder, setPlaceholder] = useState<string>("...type something");
    const [text, setText] = useState<string>("");

    useEffect(() => {
        if (selectedComment != defaultComment) {
            setPlaceholder(`Reply to ${selectedComment.author.name}`);
        }
    }, [selectedComment]);

    return (
        <div className="Input">
            <input
                type="text"
                placeholder={placeholder}
                id={text.length > 0 ? "not-empty" : "empty"}
                value={text}
                onKeyDown={(e) => {
                    if (e.key === "Backspace") {
                        dispatch(setInputParameters(defaultComment));
                        setPlaceholder(`...type something`);
                    }
                }}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <div
                className="btn"
                id={text.length > 0 ? "active" : "inactive"}
                onClick={() => {
                    saveComment({ ...selectedComment, text: text });
                }}
            >
                Send
            </div>
        </div>
    );
};

export default Input;
