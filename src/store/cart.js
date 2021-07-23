import { writable } from 'svelte/store';

export default cart = writable({
    items: []
});
