<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { drawerStore } from '@skeletonlabs/skeleton';
	//
	const menu = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'Import GEXF',
			href: '/gexf'
		},
		{
			label: 'Graph Explorer',
			href: '/explorer'
		},
		{
			label: 'Echo Chambers',
			href: '/echochambers'
		},
		{
			label: 'About',
			href: '/about'
		}
	];
	function drawerClose() {
		drawerStore.close();
	}
	$: classesActive = (href) => (href === $page.url.pathname ? '!bg-primary-500' : '');
</script>

<nav class="list-nav p-4">
	<ul>
		{#each menu as item}
			<li><a class="{classesActive(item.href)}" href="{base}{item.href}" on:click={drawerClose}>{item.label} </a></li>
		{/each}
	</ul>
</nav>
