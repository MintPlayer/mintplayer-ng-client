import { LoginStatus } from '../../enums/login-status';
import { User } from './user';

export interface LoginResult {
    status: LoginStatus;
    medium: string;
    platform: string;
    user: User;
    error: string;
    errorDescription: string;
}
