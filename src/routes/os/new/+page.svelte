<script>
	import { Button, Flex, TextInput, Title } from '@svelteuidev/core';
</script>

<Title order={3}>Ajouter OS</Title>

<form method="post">
	<Flex direction="column" gap="lg">
		<TextInput label="Nom" required name="nom" />
		<Button type="submit">Ajouter</Button>
	</Flex>
</form>
