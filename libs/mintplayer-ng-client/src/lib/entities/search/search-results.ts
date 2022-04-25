import { Person } from '../core/person';
import { Artist } from '../core/artist';
import { Song } from '../core/song';

export interface SearchResults {
    people: Person[];
    artists: Artist[];
    songs: Song[];
}
