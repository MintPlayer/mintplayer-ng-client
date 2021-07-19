import { Guid } from 'guid-typescript';

export interface User {
    id: Guid;
    userName: string;
    email: string;
    isTwoFactorEnabled: boolean;
    pictureUrl: string;
}
