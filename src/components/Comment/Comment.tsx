import { FC, useRef, useState } from "react";
import "./Comment.scss";
import { CommentProps } from "../../utils/props";
import {
    getCommentRepliesCount,
    getCommentTime,
    getErrorImage,
} from "../../utils/helpers";
import Linkify from "linkify-react";

const Comment: FC<CommentProps> = ({ comment }) => {
    const [imageSrc, setImageSrc] = useState<string>(comment.author.picture);
    const commentRepliesCount = useRef<number>(
        getCommentRepliesCount(+comment.id)
    );

    return (
        <div className="Comment">
            <img
                src={imageSrc}
                onError={() => {
                    setImageSrc(getErrorImage(+comment.id));
                }}
                alt="Author image"
            />
            <div className="comment-content">
                <div className="text-container">
                    <p id="author">{comment.author.name}</p>
                    <p id="comment">
                        <Linkify options={{ target: "_blank" }}>
                            {comment.text}
                        </Linkify>
                    </p>
                </div>
                <div className="comment-footer">
                    <p id="time">{getCommentTime(comment.timestamp)}</p>
                    <p id="reply">
                        {commentRepliesCount.current > 0
                            ? `Reply (${commentRepliesCount.current})`
                            : "Reply"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comment;
