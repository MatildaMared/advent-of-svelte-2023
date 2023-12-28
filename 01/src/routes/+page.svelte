<script>
	import CookieCounter from "./CookieCounter.svelte";

	export let data;

	console.log(data.data);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
 <h1>Hello</h1>
 <CookieCounter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
