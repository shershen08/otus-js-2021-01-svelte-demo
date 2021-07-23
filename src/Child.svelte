<script>
    import {onMount, afterUpdate} from 'svelte'
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    export let id = 'Unknown'
    export let name = 'Unknown'

    const sayHello = () => {
        name  = '12345678'
        dispatch('hello', {
            id
        })
    }

    onMount(() => {
        fetch(`/api/${id}`)
    })

    afterUpdate(() => {
        console.log(name)
    })
</script>

<div on:click={sayHello}>
    <p>{id}: {name}</p>
</div>