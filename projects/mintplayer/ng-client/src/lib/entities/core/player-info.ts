import { PlayerType } from "../../enums";

export interface PlayerInfo {
    type: PlayerType;
    id: string;
    url: string;
    imageUrl: string;
}
