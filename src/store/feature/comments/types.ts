export interface CommentApiStructure {
  id: string;
  _idGame: string;
  token: string;
  comment: string;
  response: string[];
  userName: string;
}

export type AddCommentApiStructure = Omit<CommentApiStructure, "id">;
