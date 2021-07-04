import { TagCategory } from './tag-category';
import { Subject } from '../core';

export interface Tag {
    id: number;
    description: string;
    category: TagCategory;
    subjects: Subject[];

    parent: Tag;
    children: Tag[];
}
