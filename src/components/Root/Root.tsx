import { FC, useRef } from "react";

import Comment from "../Comment/Comment";

import { CommentProps } from "../../utils/props";

import "./Root.scss";
import { getCommentReplies } from "../../utils/helpers";
import { CommentDto } from "../../utils/dto";

const Root: FC<CommentProps> = ({ comment }) => {
    const replies = useRef<CommentDto[]>(getCommentReplies(+comment.id));

    return (
        <div className="Root">
            <Comment comment={comment} />
            {replies.current.length > 0 && (
                <div className="replies-container">
                    <div className="handle">
                        <span id="height" />
                        <span id="width" />
                    </div>
                    <div className="replies">
                        {replies.current.map((comment) => (
                            <Root comment={comment} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Root;
