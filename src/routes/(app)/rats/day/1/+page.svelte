<script lang="ts">
    import reggie from "$lib/assets/game/reggie.png";

    function clickDate() {
        location.href = "/rats/day/1/reggie";
    }
</script>

<article class="bg relative flex-1 flex flex-col justify-around">
    <h2
        class="text-center hover:scale-125 transition-all self-center mt-4 w-64 bg-blue-300 text-2xl rounded-2xl hover:bg-blue-200"
    >
        Day 1: Pick your rat
    </h2>
    <button class="self-center transition-all hover-shake" on:click={clickDate}>
        <img src={reggie} alt="reggie" class="w-64 self-center" />
        <span class="self-center">Reggie the Rat</span>
    </button>
    <span class="flex-1" />
</article>

<style>
    .bg {
        background: url("/game/bg.png") no-repeat center;
        background-size: cover;
    }

    .hover-shake:hover {
        animation: shake 0.5s;
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
