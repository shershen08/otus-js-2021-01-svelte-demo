<script>
	// import Child from './Child.svelte'
	import Header from './Header.svelte'
    // import {timeSince} from './store/time'
    // import {countStore} from './store/counter'

	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];

	export let counter = 0;
	let src = 'https://picsum.photos/536/354'
	let biggerThan50 = false;

	$: counterx10 = counter * 10;

	$: if(counterx10 > 50) {
		biggerThan50 = true;
	}

	// const name = '';
	// const lastname = '';
	// $: fullName = `${name} ${lastname}`

	const changeName = () => {
		counter += 1
		//imgSrc = ''
	}

	const user = {
		text: 'Hello', name: 'Misha'
	}

	const str = '<h1>asdfgh</h1>'

	let color = '#ffcc00', size = 16, x = 1, y = 1;

	const resizeMehtod = () =>  {console.log('resize')}


	// const compsFromArray = [1,2,3,4].map((el) => Child);

	window.myVar = 4;

	const reactMM = (e) => {
		x = e.offsetX
		y = e.offsetY
	}

	// const change = (value) => {
	// 	console.log(value)
	// 	if(value !== 1 && value !== -1) {
	// 		countStore.setToZero()
	// 	} else {
	// 		countStore.setToValue(value)
	// 	}
	// }
	
	// let counterValue = 0
	// countStore.subscribe((data) => {
	// 	counterValue = data
	// })

	function foo(node) {

		console.log('div added', node)
		
		return {
			destroy() {
				// the node has been removed
			}
		};
	}
</script>

<svelte:window on:resize={resizeMehtod}/>
<svelte:body on:mousemove={reactMM}/>

<svelte:head>
	<script defer src='googleanalytions/counter.js'></script>
</svelte:head>

<main>
	<Header/>

	<!-- {countStore.valueX2} -->
	<!-- {@html compsFromArray} -->
	<!-- {@debug counter} -->

	<!-- {#each Array(10) as cat, index}
		<svelte:component this={Child}/>
	{/each}

	{#each cats as cat, index}
		<Child bind:name={counter} id={cat.id} on:hello={(e) => {console.log(e.detail)}}/>
	{/each} -->

	<br>
	<!-- <h1 style="color:{color};font-size:{size}px;top:{y}px;left:{x}px;position:absolute;"> {counter}!</h1> -->
	<button use:foo on:click={changeName} data-id="42">change name</button>
<br>
	x10: {counterx10}


	{#if biggerThan50}
		<p>counterx10 > 50</p>
	{/if}

	<hr>

	<!-- {$timeSince} -->

	<!-- {#each cats as {id, name}, index}
		<section on:click={() => console.log(index)}>
			{id} / {name}<br>
		</section>
	{/each} -->

	<hr>

	<!-- counter from external store: {countStore.value} -->

	<button on:click={() => change(1)}>+</button>
	<button on:click={() => change(-1)}>-</button>
	<button on:click={() => change()}>0</button>


		<!-- <img {src}
			width="500"
			class="my-main-image"
			class:biggerThan50
			alt='foo'/>

	<input bind:value={counter} type=number placeholder="enter number"/> -->

<!-- <br>
<br>


	<input bind:value={color} placeholder="enter color"/>
	<input bind:value={size} type=number placeholder="enter color"/> -->
	<!-- <textarea bind:value={counter} type=number placeholder="enter number"></textarea> -->

	<!-- {$store} -->

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>