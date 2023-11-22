<script lang="ts">
    import { writable } from "svelte/store";
    import { SvelteFlow, Background, Controls } from "@xyflow/svelte";
    import ColorPickerNode from "$lib/nodes/ColorPickerNode.svelte";

    const nodeTypes = {
        "color-picker": ColorPickerNode,
    };

    import "@xyflow/svelte/dist/style.css";

    const nodes = writable([
        {
            id: "node-1",
            // this type needs to match the newly defined node type
            type: "color-picker",
            position: { x: 0, y: 0 },
            // data is used to store the current color value
            data: { color: writable("#ff4000") },
        },
        {
            id: "1", // required and needs to be a string
            position: { x: 0, y: 0 }, // required
            data: { label: "hey" }, // required
        },
        {
            id: "2",
            position: { x: 100, y: 100 },
            data: { label: "world" },
        },
    ]);

    const edges = writable([]);

    edges.subscribe((edges) => {
        console.log(edges);
    });
</script>

<main>
    <SvelteFlow {nodes} {edges} {nodeTypes}>
        <Background />
        <Controls />
    </SvelteFlow>
</main>

<style>
    main {
        height: 100vh;
    }
</style>
