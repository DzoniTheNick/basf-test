import { FC, useEffect, useState } from "react";
import "./Comment.scss";
import { CommentProps } from "../../utils/props";
import {
    getCommentRepliesCount,
    getCommentTime,
    getErrorImage,
} from "../../utils/helpers";
import Linkify from "linkify-react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setInputParameters } from "../../store/feature/inputParameters";

const Comment: FC<CommentProps> = ({ comment }) => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.comments.comments);

    const [imageSrc, setImageSrc] = useState<string>(comment.author.picture);
    const [repliesCount, setRepliesCount] = useState<number>(
        getCommentRepliesCount(+comment.id)
    );

    useEffect(() => {
        setRepliesCount(getCommentRepliesCount(+comment.id));
    }, [comments]);

    useEffect(() => {
        console.log(repliesCount);
    }, [repliesCount]);

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
                    <p
                        id="reply"
                        onClick={() => {
                            dispatch(setInputParameters(comment));
                        }}
                    >
                        {repliesCount > 0 ? `Reply (${repliesCount})` : "Reply"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comment;
