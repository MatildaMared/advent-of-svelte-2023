// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load({ fetch }) {
	const response = await fetch(
		"https://advent.sveltesociety.dev/data/2023/day-one.json"
	);
	const data = await response.json();
	console.log(data);

	return { data };
}
