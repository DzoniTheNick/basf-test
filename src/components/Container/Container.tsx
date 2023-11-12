import "./Container.scss";

import { useAppSelector } from "../../store/store";
import Root from "../Root/Root";
import { useEffect, useState } from "react";
import { CommentDto } from "../../utils/dto";

const Container = () => {
    const comments = useAppSelector((state) => state.comments.comments);

    const [rootComments, setRootComments] = useState<CommentDto[]>([]);

    useEffect(() => {
        setRootComments(
            comments.filter(
                (comment) => !comment.parent_id || comment.parent_id === "0"
            )
        );
    }, [comments]);

    return (
        <div className="Container">
            {rootComments.map((comment) => (
                <Root comment={comment} />
            ))}
        </div>
    );
};

export default Container;
