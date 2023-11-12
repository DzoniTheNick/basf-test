import { useEffect, useState } from "react";

import Root from "../Root/Root";

import { CommentDto } from "../../utils/dto";
import { useAppSelector } from "../../store/store";

import "./Container.scss";

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
