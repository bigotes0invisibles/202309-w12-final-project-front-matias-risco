export interface BaseCommentStructure {
  id: string;
  _idGame: string;
  _idUser: string;
  userName: string;
  comment: string;
  response: string[];
}

export interface CommentStateStructure {
  comments: BaseCommentStructure[];
}

export interface CommentApiStructure
  extends Omit<BaseCommentStructure, "_idUser"> {
  token: string;
}

export type AddCommentApiStructure = Omit<CommentApiStructure, "id">;
