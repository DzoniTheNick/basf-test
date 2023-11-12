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

interface InputParameters {
    active: boolean;
    selectedId: number;
}

export { type CommentDto, type InputParameters };
