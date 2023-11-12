interface AuthorDto {
    name: string;
    picture: string;
}

interface CommentDto {
    id: string;
    parent_id?: string;
    author: AuthorDto;
    text: string;
    timestamp: number;
}

export { type CommentDto };
