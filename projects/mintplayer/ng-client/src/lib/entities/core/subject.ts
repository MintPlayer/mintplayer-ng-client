import { Medium } from '../media';
import { Tag } from '../tags';

export interface Subject {
    id: number;
    text: string;
    dateUpdate: Date;

    media: Medium[];
    tags: Tag[];
}
