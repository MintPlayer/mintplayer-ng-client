import { ELoginStatus } from '../../enums/login-status';
import { User } from './user';

export interface LoginResult {
    status: ELoginStatus;
    medium: string;
    platform: string;
    user: User;
    error: string;
    errorDescription: string;
}
