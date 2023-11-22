import { createMachine } from "xstate";
export const reggiePark1 = createMachine(
    {
        id: "datingGame",
        initial: "start",
        states: {
            start: {
                description:
                    "You are walking through the park when you see a rat sitting on a bench.",
                entry: {
                    type: "say",
                    params: {
                        text: "You are walking through the park when you see a rat sitting on a bench.",
                    },
                },
                on: {
                    "Keep Walking": {
                        target: "keepWalking",
                    },
                    "Approach the rat": {
                        target: "approachRat",
                    },
                },
            },
            keepWalking: {
                description: "Game Over :(",
                meta: {
                    text: "Game Over :(",
                },
            },
            approachRat: {
                description:
                    "You approach the rat. It looks up at you and smiles.",
                meta: {
                    text: "You approach the rat. It looks up at you and smiles.",
                },
                on: {
                    "Call the rat stinky": {
                        target: "stinky",
                    },
                    "Smile back, and compliment the rat!": {
                        target: "complimented",
                    },
                    "Say Hello to the Rat": {
                        target: "hello",
                    },
                },
            },
            stinky: {
                description:
                    "Reggie is angry and bites you! He scampers away :(",
                meta: {
                    text: "Reggie is angry and bites you! He scampers away :(",
                },
            },
            complimented: {
                description:
                    "Reggie blushes, and tells you how you smell strongly of cheese! &lt;3",
                meta: {
                    text: "Reggie blushes, and tells you how you smell strongly of cheese! &lt;3",
                },
                always: {
                    target: "dayEnd",
                },
            },
            hello: {
                description: "Reggie waves at you, he's not impressed.",
                meta: {
                    text: "Reggie waves at you, he's not impressed.",
                },
                always: {
                    target: "dayEnd",
                },
            },
            dayEnd: {
                description:
                    '"I used to come to the park all the time! I\'m so glad you brought me here!"',
                meta: {
                    text: '"I used to come to the park all the time! I\'m so glad you brought me here!"',
                },
                on: {
                    "Offer Reggie a bouquet of flowers!": {
                        target: "goodEnding",
                    },
                    "Tell Reggie you have to leave early!": {
                        target: "neutralEnding",
                    },
                },
            },
            goodEnding: {
                description: "Good Ending",
                meta: {
                    text: "",
                },
            },
            neutralEnding: {
                description: "Neutral Ending",
                meta: {
                    text: "Neutral Ending",
                },
            },
        },
        schema: {
            events: {} as
                | { type: "Keep Walking" }
                | { type: "Approach the rat" }
                | { type: "Call the rat stinky" }
                | { type: "Smile back, and compliment the rat!" }
                | { type: "Say Hello to the Rat" }
                | { type: "Offer Reggie a bouquet of flowers!" }
                | { type: "Tell Reggie you have to leave early!" },
        },
        predictableActionArguments: true,
        preserveActionOrder: true,
    },
    {
        actions: {
            say: (context, event) => {},
        },
        services: {},
        guards: {},
        delays: {},
    }
);
