export interface IUser{
    userName: string;
    userId: string;
    userRole : IuserRole
    userImg: string;
}
export type IuserRole = 'user' | 'admin'