<script lang="ts">
	import type { PageData } from './$types';
	import {
		Button,
		Checkbox,
		Flex,
		NativeSelect,
		NumberInput,
		TextInput,
		Title
	} from '@svelteuidev/core';
	export let data: PageData;
</script>

<Title order={3}>Ajouter Telephone</Title>

<form method="post">
	<Flex direction="column" gap="lg">
		<TextInput label="Nom" required name="nom" />
		<NativeSelect
			data={data.marque.map((v) => ({
				label: v.nom,
				value: v.id
			}))}
			label={'Marque'}
			name="marque"
			required
		/>
		<NativeSelect
			data={data.types.map((v) => ({
				label: v.nom,
				value: v.id
			}))}
			label={'Type de telephone'}
			name="typeTelephone"
			required
		/>
		<NumberInput name="camRes" required label="Resolution Camera" />
		<NumberInput name="ram" required label="Ram" />
		<Checkbox checked name="audio" label="Support audio" />
		<Checkbox checked name="geolocalisation" label="Support de geolocalisation" />
		<NativeSelect
			data={data.os.map((v) => ({
				label: v.nom,
				value: v.id
			}))}
			label={"Systeme d'exploitation"}
			name="os"
			required
		/>
		<NumberInput name="osVersion" required label="Version du systeme" />
		<NativeSelect
			data={data.ghd.map((v) => ({
				label: v.nom,
				value: v.id
			}))}
			label={'Generateur Haut Debit'}
			name="ghd"
			required
		/>
		<Checkbox name="foldable" label="Pliable" />
		<Checkbox checked name="wifi" label="Support aux connection Wi-fi" />
		<Checkbox checked name="audio" label="Support audio" />
		<Checkbox checked name="supportSD" label="Support SD" />
		<Checkbox checked name="extensionSD" label="Extension SD" />
		<NumberInput name="tailleEcran" required label="Taille Ecran" />
		<NumberInput name="prix" required label="Prix" />
		<NumberInput name="memoire" required label="Stockage interne" />
		<NumberInput name="cpuCoeur" required label="Coeur CPU" />
		<Button type="submit">Ajouter</Button>
	</Flex>
</form>
