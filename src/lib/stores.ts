import { writable, type Writable } from "svelte/store";
import { persisted } from "./persisted";
import type { Place } from "./places";

export const activeDate = persisted("activeDate", "");
export const activePlace: Writable<string> = persisted("activePlace", "");
export const playerName = persisted("playerName", "");
export const currentDay = persisted("currentDay", 1);

export const currentText = writable("");
