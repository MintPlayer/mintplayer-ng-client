import { Subject } from './subject';
import { Artist } from './artist';
import { Lyrics } from './lyrics';
import { PlayerInfo } from './player-info';

export interface Song extends Subject {
    title: string;
    released: Date;
    lyrics: Lyrics;

    text: string;
    youtubeId: string;
    dailymotionId: string;
    vimeoId: string;
    soundCloudUrl: string;
    playerInfos: PlayerInfo[];
    description: string;

    artists: Artist[];
    uncreditedArtists: Artist[];
}
