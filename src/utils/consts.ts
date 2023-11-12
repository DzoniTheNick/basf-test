import { CommentDto } from "./dto";

const daysOfTheWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const defaultComment: CommentDto = {
    author: { name: "", picture: "" },
    id: "0",
    text: "",
    timestamp: 0,
};

export { daysOfTheWeek, defaultComment };
