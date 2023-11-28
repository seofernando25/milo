import { get } from "svelte/store";
import { binkieSprites } from "./assets/game/binkie";
import { reggieDateInfo, reggieSprites } from "./assets/game/reggie";
import type { DateInfo } from "./dateState";
import { activeDate } from "./stores";

export type SpriteSet = {
	normal: string;
	angry: string;
	gift: string;
	blush: string;
};

export type CharacterDescriptor = {
	name: string;
	sprites: SpriteSet;
	dateInfo: DateInfo;
};

export const characters: CharacterDescriptor[] = [
	{
		name: "reggie",
		sprites: reggieSprites,
		dateInfo: reggieDateInfo,
	},
	{
		name: "binkie",
		sprites: binkieSprites,
		dateInfo: reggieDateInfo,
	},
] as const;

export function getActiveDate() {
	const date = get(activeDate);
	return characters.find((c) => c.name === date);
}
