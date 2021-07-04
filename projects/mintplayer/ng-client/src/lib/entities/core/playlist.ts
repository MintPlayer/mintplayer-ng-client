import { PlaylistAccessibility } from '../../enums';
import { User } from '../auth';
import { Song } from './song';

export interface Playlist {
    id: number;
    user: User;
    description: string;
    accessibility: PlaylistAccessibility;
    tracks: Song[];
}
