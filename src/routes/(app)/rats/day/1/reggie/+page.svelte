<script lang="ts">
    import blush from "$lib/assets/game/blush.png";
    import reggie from "$lib/assets/game/reggie.png";
    import { datePlaces } from "../../../../../../lib/rats/game_data";

    // const interpreter = interpret(reggiePark1);

    // function getDialogues(state: any) {
    //     const paths = getShortestPaths(reggiePark1);
    //     console.log(path);
    //     const thisPaths = Object.values(paths).filter((path) => {
    //         return path.paths[0].segments.length === 1;
    //     });
    //     const events = Object.values(thisPaths).map((path) => {
    //         return path.state.event.type;
    //     });

    //     return events;
    // }
    // onMount(() => {
    //     interpreter.onEvent((event) => {
    //         console.log(event);
    //     });

    //     const s = interpreter.start();
    //     let events = getShortestPaths(reggiePark1);
    //     console.log(events);
    //     // s.send(events[1]);
    //     // events = getDialogues(s);
    //     // console.log(events);
    // });
</script>

<article
    class="text-2xl p-4 bg relative flex-1 flex flex-col place-content-around"
>
    <!-- color: rgb(241, 241, 241); -->
    <h2
        class="text-center text-4xl
            text-[#f1f1f1] hover:scale-125 transition-all self-center mt-4 rounded-2xl"
    >
        Day 1: Where are we taking Reggie?
    </h2>
    <div class="self-center reggie">
        <img src={reggie} alt="reggie" />
        <img
            src={blush}
            alt="blush"
            class="not-pixelated absolute w-[45%] top-10 left-2 right-0 m-auto"
        />
    </div>
    <!-- Date place select slist -->
    <div class=" grid grid-cols-4 gap-8 self-center">
        {#each datePlaces as datePlace}
            <button
                class="flex flex-col hover:scale-110 transition-all shadow-2xl"
            >
                <img
                    src={datePlace.image}
                    alt="date place"
                    class="w-36 h-36 self-center"
                />
                <span class="self-center">{datePlace.name}</span>
            </button>
        {/each}
    </div>
</article>

<style>
    .bg {
        background: url("/game/bg.png") no-repeat center;
        background-size: cover;
    }

    .reggie {
        animation: shake 2s;
        animation-iteration-count: infinite;
    }

    @keyframes shake {
        0% {
            transform: translate(1px, 1px) rotate(0deg);
        }
        10% {
            transform: translate(-1px, -2px) rotate(-1deg);
        }
        20% {
            transform: translate(-3px, 0px) rotate(1deg);
        }
        30% {
            transform: translate(3px, 2px) rotate(0deg);
        }
        40% {
            transform: translate(1px, -1px) rotate(1deg);
        }
        50% {
            transform: translate(-1px, 2px) rotate(-1deg);
        }
        60% {
            transform: translate(-3px, 1px) rotate(0deg);
        }
        70% {
            transform: translate(3px, 1px) rotate(-1deg);
        }
        80% {
            transform: translate(-1px, -1px) rotate(1deg);
        }
        90% {
            transform: translate(1px, 2px) rotate(0deg);
        }
        100% {
            transform: translate(1px, -2px) rotate(-1deg);
        }
    }
</style>
