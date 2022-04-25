import { EPlayerType } from "../../enums";

export interface PlayerInfo {
    type: EPlayerType;
    id: string;
    url: string;
    imageUrl: string;
}
