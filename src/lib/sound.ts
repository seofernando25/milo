import picnic_s from "$lib/assets/game/audio/the_picnic_bop.mp3";
import runway_v from "$lib/assets/game/audio/Runaway Five The Daily Show.webm";
import escargo_express from "$lib/assets/game/audio/Escargo Express at Your Service!.webm";

import { Howl } from "howler";
import { get, writable } from "svelte/store";
import { persisted } from "./persisted";
import { expoOut } from "svelte/easing";

export const currentHowl = writable<Howl | null>(null);
export const currentSong = writable<SongName | null>(null);

export async function fadeOut(duration = 500) {
	const howl = get(currentHowl);
	if (howl) {
		howl.fade(howl.volume(), 0, duration);
		await new Promise((resolve) => {
			howl.once("fade", resolve);
		});
		howl.unload();
	}
}

export async function playSong(song: SongName) {
	const howl = get(currentHowl);
	if (howl) {
		// If not playing, just unload
		if (!howl.playing()) {
			howl.unload();
		} else {
			// Otherwise, fade out
			howl.fade(howl.volume(), 0, 500);
			await new Promise((resolve) => {
				howl.once("fade", resolve);
			});
			howl.unload();
		}
	}
	const song_info = sound_track.find((s) => s.name === song);

	if (!song_info) {
		throw new Error("Song not found");
	}

	currentSong.set(song);

	const new_howl = new Howl({
		src: [song_info.url],
		loop: true,
		onplay: () => {
			isPlaying.set(true);
		},
		onend: () => {
			isPlaying.set(false);
		},
		onfade: () => {
			isPlaying.set(false);
		},
		onpause: () => {
			isPlaying.set(false);
		},
	});

	currentHowl.set(new_howl);
	new_howl.play();
}

export type Song = {
	name: string;
	url: string;
};

export const sound_track = [
	{
		name: "The Picnic Bop",
		url: picnic_s,
	},
	{
		name: "Runaway Five The Daily Show",
		url: runway_v,
	},
	{
		name: "Escargo Express at Your Service!",
		url: escargo_express,
	},
] as const satisfies Song[];

export type SongName = (typeof sound_track)[number]["name"];

export const audioVolume = persisted("audio_volume", 0.5);

audioVolume.subscribe((val) => {
	Howler.volume(val);
});

// Erm... I don't really care tho
export const isPlaying = writable(false);

export const currentSeek = writable(0, (set) => {
	let id: number;
	const interval = setInterval(() => {
		const howl = get(currentHowl);
		if (howl) {
			set(howl.seek());
		}
	}, 100);
	return () => {
		clearInterval(interval);
	};
});

export const songDuration = writable(0, (set) => {
	let id: number;
	const interval = setInterval(() => {
		const howl = get(currentHowl);
		if (howl) {
			set(howl.duration());
		}
	}, 100);
	return () => {
		clearInterval(interval);
	};
});

export const play_lock = writable(false);
