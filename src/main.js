import RootComponent from './RootComponent.svelte';

const app = new RootComponent({
	target: document.getElementById('app'),
	// props: {
	// 	name: 'world'
	// }
});

export default app;