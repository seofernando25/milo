<script lang="ts">
    import { Handle, Position, type NodeProps } from "@xyflow/svelte";
    import type { Writable } from "svelte/store";

    type $$Props = NodeProps;

    export let data: { color: Writable<string> };

    const { color } = data;
</script>

<div class="colorpicker">
    <Handle type="target" position={Position.Left} />
    <div>
        color: <strong>{$color}</strong>
    </div>
    <input
        class="nodrag"
        type="color"
        on:input={(evt) => data.color.set(evt.target?.value)}
        value={$color}
    />
    <Handle
        type="source"
        position={Position.Right}
        on:connect
        on:connectstart
        on:connectend
    />
</div>

<style>
    .colorpicker {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: #fff;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
        /* Monospace */
        font-family: monospace;
    }
</style>
