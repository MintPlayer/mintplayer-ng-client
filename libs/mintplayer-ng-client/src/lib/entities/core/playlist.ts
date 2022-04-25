import { EPlaylistAccessibility } from '../../enums/playlist-accessibility';
import { User } from '../auth/user';
import { Song } from './song';

export interface Playlist {
    id: number;
    user: User;
    description: string;
    accessibility: EPlaylistAccessibility;
    tracks: Song[];
}
