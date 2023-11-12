import { daysOfTheWeek } from "./consts";
import { Comment } from "./dto";

const getFirstCommentDate = (data: any): string => {
    const comments: Comment[] = data.data.comments.sort(
        (a: Comment, b: Comment) => a.id - b.id
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
    const minutesString: string = minutes < 10 ? `0${hours}` : `${hours}`;

    return `${hoursString}:${minutesString}`;
};

export { getFirstCommentDate, getCommentTime };
