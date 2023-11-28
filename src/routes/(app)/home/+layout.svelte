<script lang="ts">
    import "./app.css";
    import cat from "$lib/assets/cat.png";
    import header from "$lib/assets/header.png";
    import miloFern from "$lib/assets/milofern.png";

    const routes = ["", "about", "diary", "art", "hobby", "links"];
</script>

<!-- Main panel -->
<div class="w-full h-screen overflow-x-clip flex flex-col place-items-center">
    <header class="grid-stack">
        <img src={header} alt="header" class="grid-stack-element header" />
    </header>
    <main class="relative w-full max-w-4xl py-4">
        <img
            src={miloFern}
            alt="miloFern"
            class="absolute -bottom-8 right-0 lg:-right-16 w-[128px] z-10"
        />

        <div
            class="rounded-2xl mb-4 outline-dashed outline-fuchsia-400 outline-2 outline-offset-2 w-full h-full flex flex-col gap-1"
        >
            <div
                class="gap-4 p-2 content-bg2 relative place-items-center flex rounded-2xl"
            >
                <div class="content-bg2" />
                <img
                    src={cat}
                    alt="cat"
                    class="rounded-xl not-pixelated w-8 aspect-square"
                />
                {#each routes as route}
                    <a
                        href={`/${route ? `home/${route}` : `home`}`}
                        class=" text-center text-2xl font-medium w-[75%] bg-purple-300 rounded hover:bg-purple-200"
                    >
                        {route || "home"}
                    </a>
                {/each}
            </div>
            <div class="flex relative overflow-clip">
                <div class="content-bg" />

                <div
                    class="flex flex-1 place-content-center m-1 rounded-2xl p-1"
                    id="content"
                >
                    <slot />
                </div>
            </div>
        </div>
    </main>
</div>

<style>
    .content-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: url("/picnic.png") repeat;
        background-size: 128px 128px;
        filter: hue-rotate(-20deg) saturate(0.8);
    }

    .content-bg2 {
        background: url("/picnic.png") repeat;
        background-size: 256px 256px;
        filter: hue-rotate(-20deg) saturate(0.8);
    }

    .grid-stack {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    .grid-stack-element {
        grid-area: 1 / 1 / 2 / 2;
    }

    .header {
        filter: drop-shadow(16px 16px 20px white);
    }
</style>
