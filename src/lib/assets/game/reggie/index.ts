import type { SpriteSet } from "../../../character";
import normal from "./normal.webp";
import angry from "./angry.webp";
import blush from "./blush.webp";
import gift from "./gift.webp";
import type { DateInfo, DateManager } from "$lib/dateState";
import { playSong } from "$lib/sound";

export const reggieSprites: SpriteSet = {
	normal,
	angry,
	blush,
	gift,
};

export const reggieDateInfo: DateInfo = {
	1: {
		"The Park": async (gameSequence: DateManager) => {
			// Play audio
			playSong("The Picnic Bop");

			gameSequence.dateOpacity.set(0);
			await gameSequence.sleep(1000);

			// await gameSequence.dateFadeIn();
			await gameSequence.dialog("You're walking through the park");
			await gameSequence.dialog("a sunny summer day");
			await gameSequence.dialog("when suddenly you see a rat");
			await gameSequence.dialog("and rats make you crazy");
			await gameSequence.dialog("...", { speed: 500 });

			let answer = await gameSequence.question("Will you approach him?", [
				"Yes",
				"No",
			]);
			if (answer === 0) {
				await gameSequence.dialog("You approach the rat");
			}
			if (answer === 1) {
				await gameSequence.dialog("You ignore the rat");
				await gameSequence.dialog("...", { speed: 500 });
				await gameSequence.dialog("The rat approaches you", { speed: 10 });
			}

			await gameSequence.sleep(500);

			gameSequence.currentSpeaker.set("Reggie");
			playSong("Runaway Five The Daily Show");
			await gameSequence.dateFadeIn(100, {
				block: false,
			});
			await gameSequence.dialog("Oh hi there!");
			await gameSequence.dialog("My name is Reggie");
			await gameSequence.dialog("Reggie the rat!!!", {
				speed: 10,
			});

			answer = await gameSequence.question("It looks over at you and smiles.", [
				"Smile back, and compliment the rat!",
				"Call the rat stinky",
				"Say Hello to the Rat",
			]);

			if (answer === 0) {
				gameSequence.dateSprite.set("blush");

				gameSequence.currentSpeaker.set("");
				await gameSequence.dialog(
					"Reggie blushes, and tells you how you smell strongly of cheese! <3",
				);
			} else if (answer === 1) {
				playSong("Escargo Express at Your Service!");
				gameSequence.dateSprite.set("angry");
				gameSequence.currentSpeaker.set("");
				await gameSequence.dialog(
					"Reggie frowns, and tells you that you're stinky too! >:(",
				);
				await gameSequence.dialog(
					"In fact, Reggie is so angry that he bites you!",
				);
				gameSequence.dateFadeOut(1000);
				await gameSequence.dialog("and scampers away...");
				await gameSequence.dialog("...", { speed: 500 });
				await gameSequence.dialog("You will never see him again");

				return;
			} else {
				gameSequence.currentSpeaker.set("");
				await gameSequence.dialog("Reggie waves at you, he's not impressed.");
			}
			await gameSequence.dialog(
				"I used to come to the park all the time! I'm so glad you brought me here!",
				{
					name: "Reggie",
				},
			);
		},
		"The Beach": async (gameSequence: DateManager) => {
			await gameSequence.dialog("Omg we are in the beach!!!");
		},
	},
};
