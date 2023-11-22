<script lang="ts">
    import discord from "$lib/assets/links/discord.webp";
    import insta from "$lib/assets/links/insta.jpg";
    import pills from "$lib/assets/blinkies/pills.gif";
</script>

<article class="prose-2xl max-w-full p-4">
    <h2>Ma links</h2>

    <div class="flex flex-wrap gap-4">
        <a href="https://discord.gg/q7GySxxn">
            <img
                src={discord}
                alt="discord"
                class="rounded-2xl w-24 aspect-square"
            />
        </a>
        <a href="https://www.instagram.com/cystole">
            <img
                src={insta}
                alt="insta"
                class="rounded-2xl w-24 aspect-square"
            />
        </a>
    </div>
    <p>Erm... I have ddiscord server, join if you want to talk to me.</p>
    <p>I also have instagram, I post all my drawings there ermmm....</p>

    <div class="not-prose grid place-items-center">
        <img src={pills} alt="loveyouguys" class="h-8" />
    </div>
</article>
