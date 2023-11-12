interface Author {
    name: string;
    picture: string;
}

interface Comment {
    id: number;
    parent_id?: number;
    author: Author;
    text: string;
    timestamp: number;
}

export { type Comment };
