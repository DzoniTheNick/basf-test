import "./Container.scss";

import { useAppSelector } from "../../store/store";
import Root from "../Root/Root";

const Container = () => {
    const comments = useAppSelector((state) => state.comments.comments);
    const rootComments = comments.filter((comment) => !comment.parent_id);

    return (
        <div className="Container">
            {rootComments.map((comment) => (
                <Root comment={comment} />
            ))}
        </div>
    );
};

export default Container;
