export enum EResultApiSuccess {
  SUCCESS = 'SUCCESS'
}

export type ResponseType<T> = {
  status: number;
  data: {
    result: string | EResultApiSuccess;
    data: T;
  };
};
