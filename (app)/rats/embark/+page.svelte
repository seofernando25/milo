<script lang="ts">
    let name: string = "";
    let error: string = "";

    function onEmbark() {
        if (name === "") {
            error = "You must enter a name!";
            return;
        }
        error = "";

        // Set name to local storage
        localStorage.setItem("name", name);

        // Navigate to the next page
        location.href = "/rats/day/1";
    }
</script>

<article class="bg relative flex-1 flex flex-col justify-around">
    <h2
        class="text-center hover:scale-125 transition-all self-center mt-4 w-64 bg-blue-300 text-2xl rounded-2xl hover:bg-blue-200"
    >
        What is your name?
    </h2>
    <form class="flex flex-col place-items-center gap-2">
        <input
            on:submit={onEmbark}
            autocomplete="off"
            name="name"
            bind:value={name}
            class="text-center w-64 bg-blue-300 text-2xl rounded-2xl"
        />
        <button
            on:click={onEmbark}
            class="text-center hover:scale-125 transition-all self-center mb-4 w-32 bg-blue-300 text-2xl rounded-2xl hover:bg-blue-200"
        >
            Embark
        </button>
        {error}
    </form>
</article>

<style>
    .bg {
        background: url("/game/bg.png") no-repeat center;
        background-size: cover;
    }
</style>
