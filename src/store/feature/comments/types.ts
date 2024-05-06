export interface BaseCommentStructure {
  id: string;
  userName: string;
  comment: string;
  response: string[];
}

export interface CommentStateStructure {
  comments: BaseCommentStructure[];
}

export interface AddCommentApiStructure
  extends Omit<BaseCommentStructure, "id"> {
  idGame: string;
  token: string;
}

export type FullCommentApiStructure = Omit<AddCommentApiStructure, "token"> &
  BaseCommentStructure & {
    idUser: string;
  };
