export interface CommentApiStructure {
  id: string;
  _idGame: string;
  token: string;
  comment: string;
  response: string[];
  username: string;
}

export type AddCommentApiStructure = Omit<CommentApiStructure, "id">;
