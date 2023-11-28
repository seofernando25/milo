import { beach, fields, park } from "$lib/assets/game/bg";

export type Place = {
	name: string;
	image: string;
};

export const places: Place[] = [
	{
		name: "The Park",
		image: park,
	},
	{
		name: "The Beach",
		image: beach,
	},
	{
		name: "The Movies",
		image: park,
	},
	{
		name: "The Arcade",
		image: fields,
	},
];

export function placeFromName(name: string) {
	return places.find((place) => place.name === name);
}
