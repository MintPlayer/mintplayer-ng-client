import { Medium } from '../media/medium';
import { Tag } from '../tags/tag';

export interface Subject {
    id: number;
    text: string;
    dateUpdate: Date;

    media: Medium[];
    tags: Tag[];
}
