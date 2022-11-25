<script>
    import Pagination from "$lib/components/Pagination.svelte";
    import Navigator from "$lib/components/Navigator.svelte";
    import { isInCategory } from "$lib/services/store";
    import { onDestroy } from "svelte";

    isInCategory.update((value) => (value = true));

    onDestroy(() => {
        isInCategory.update((value) => (value = false));
    });
</script>

<Navigator />
<slot />
<Pagination />
