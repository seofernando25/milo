<script lang="ts">
    import bobamilo from "$lib/assets/art/bobamilo.png";
    import character from "$lib/assets/art/character.png";
    import girlport from "$lib/assets/art/girlport.png";
    import Miloondp from "$lib/assets/art/Miloondp.png";
    import nekogirlcolored from "$lib/assets/art/nekogirlcolored.png";
    import star from "$lib/assets/art/star.png";
    import pencil from "$lib/assets/art/pencil.png";

    import sammy from "$lib/assets/art/sammy.png";
    import silly from "$lib/assets/blinkies/silly.gif";
    const imgs = [
        star,
        pencil,
        sammy,
        girlport,
        bobamilo,
        Miloondp,
        nekogirlcolored,
        character,
    ];
</script>

<article class="prose-2xl max-w-none p-4">
    <h2>Artsy stuff</h2>

    <h3>Here are some drawings from my best frens</h3>
    <hr class="mb-4" />

    <h4>From me ✨</h4>

    <div class="flex flex-wrap gap-4">
        {#each imgs as img}
            <img src={img} alt={img} class="h-32 aspect-auto" />
        {/each}
    </div>

    <div class="not-prose grid place-items-center">
        <img src={silly} alt="silly" class="h-8" />
    </div>
</article>
