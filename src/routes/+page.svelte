<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ Product } = data);
</script>

{JSON.stringify($Product.data)}
