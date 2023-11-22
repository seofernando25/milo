<script lang="ts">
    import { onMount } from "svelte";

    //  GEt name from local storage
    let name: string = "";

    onMount(() => {
        name = localStorage.getItem("name") || "";
        if (name === "") {
            location.href = "/rats/embark";
        }
    });
</script>

<article class="bg relative flex-1 flex flex-col justify-around">
    <h2
        class="text-center hover:scale-125 transition-all self-center mt-4 w-64 bg-blue-300 text-2xl rounded-2xl hover:bg-blue-200"
    >
        Hello {name}!
    </h2>
</article>

<style>
    .bg {
        background: url("/game/bg.png") no-repeat center;
        background-size: cover;
    }
</style>
