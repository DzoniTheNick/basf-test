import "./Comment.scss";

const Comment = () => {
    return (
        <div className="Comment">
            <div className="top">
                <img alt="User image" />
                <div className="text-container">
                    <p id="user-name"></p>
                    <p id="comment-text"></p>
                </div>
            </div>
            <div className="bottom"></div>
        </div>
    );
};

export default Comment;
