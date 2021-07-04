import { Person, Artist, Song } from '../core';

export interface SearchResults {
    people: Person[];
    artists: Artist[];
    songs: Song[];
}
