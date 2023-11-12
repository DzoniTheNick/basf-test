import { daysOfTheWeek } from "./consts";
import { CommentDto } from "./dto";

import data from "../assets/data/data.json";

import error_1 from "./../assets/images/error-1.svg";
import error_2 from "./../assets/images/error-2.svg";
import error_3 from "./../assets/images/error-3.svg";
import error_4 from "./../assets/images/error-4.svg";
import { store } from "../store/store";

const getFirstCommentDate = (data: any): string => {
    const comments: CommentDto[] = data.data.comments.sort(
        (a: CommentDto, b: CommentDto) => +a.id - +b.id
    );

    const date: Date = new Date(comments[0].timestamp);

    const dayName: string = daysOfTheWeek[date.getDay()];

    const day: number = date.getDate();
    const dayString: string = day < 10 ? `0${day}` : `${day}`;

    const month: number = date.getMonth() + 1;
    const monthString: string = month < 10 ? `0${month}` : `${month}`;

    const year: number = date.getFullYear();

    return `${dayName}, ${dayString}.${monthString}.${year}`;
};

const getCommentTime = (timestamp: number) => {
    // NOTICE:
    //  Function can be updated to return how much has passed since the comment was made
    //  (i.e. 2 weeks ago)

    const date: Date = new Date(timestamp);

    const hours: number = date.getUTCHours();
    const hoursString: string = hours < 10 ? `0${hours}` : `${hours}`;

    const minutes: number = date.getUTCMinutes();
    const minutesString: string = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${hoursString}:${minutesString}`;
};

const getErrorImage = (id: number): string => {
    switch (id % 4) {
        case 1:
            return error_1;
        case 2:
            return error_2;
        case 3:
            return error_3;
        default:
            return error_4;
    }
};

const getCommentRepliesCount = (id: number): number => {
    const comments = data.data.comments;

    let count = 0;

    comments.forEach((comment) => {
        if (comment.parent_id && +comment.parent_id === id) {
            count++;
        }
    });

    return count;
};

const getCommentReplies = (id: number): CommentDto[] => {
    const replies: CommentDto[] = [];

    const comments = store.getState().comments.comments;

    comments.forEach((comment) => {
        if (comment.parent_id && +comment.parent_id === id) {
            replies.push(comment);
        }
    });

    return replies;
};

export {
    getFirstCommentDate,
    getCommentTime,
    getErrorImage,
    getCommentRepliesCount,
    getCommentReplies,
};
