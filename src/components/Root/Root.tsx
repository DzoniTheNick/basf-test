import { FC, useEffect, useState } from "react";

import Comment from "../Comment/Comment";

import { CommentDto } from "../../utils/dto";
import { CommentProps } from "../../utils/props";
import { getCommentReplies } from "../../utils/helpers";
import { useAppSelector } from "../../store/store";

import "./Root.scss";

const Root: FC<CommentProps> = ({ comment }) => {
    const comments = useAppSelector((state) => state.comments.comments);

    const [replies, setReplies] = useState<CommentDto[]>(
        getCommentReplies(+comment.id)
    );

    useEffect(() => {
        setReplies(getCommentReplies(+comment.id));
    }, [comments]);

    return (
        <div className="Root">
            <Comment comment={comment} />
            {replies.length > 0 && (
                <div className="replies-container">
                    <div className="handle">
                        <span id="height" />
                        <span id="width" />
                    </div>
                    <div className="replies">
                        {replies.map((comment) => (
                            <Root comment={comment} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Root;
