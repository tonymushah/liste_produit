<script lang="ts">
	import LayoutHeader from '$lib/componnents/LayoutHeader.svelte';
	import { AppShell, Header, Navbar, SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider>
	<AppShell>
		<Header slot="header" height={2}>
			<LayoutHeader />
		</Header>
		<slot>This is the main content</slot>
	</AppShell>
</SvelteUIProvider>
