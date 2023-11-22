<script lang="ts">
    import cats from "$lib/assets/cats.gif";
    import lovemyboy from "$lib/assets/blinkies/lovemyboy.gif";
</script>

<article class="prose-2xl max-w-none p-4 flex flex-col place-items-center">
    <img src={cats} alt="cats" class="w-full rounded-2xl m-0 p-0 aspect-auto" />

    <h2 class="mt-2 text-center">About me</h2>

    <hr class="mb-4" />

    <dl class="grid grid-cols-2 w-full max-w-md">
        <dt class="inline">name:</dt>
        <dd class="inline">Milosky Smith</dd>
        <dt class="inline">status:</dt>
        <dd class="inline">taken ❦</dd>
        <dt class="inline">pronounce:</dt>
        <dd class="inline">they/them</dd>
        <dt class="inline">political alignment:</dt>
        <dd class="inline">extreme</dd>
    </dl>

    <div class="not-prose grid place-items-center">
        <img src={lovemyboy} alt="lovemyboy" class="h-8" />
    </div>
</article>
