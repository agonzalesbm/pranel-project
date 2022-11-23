<script>
    import Pagination from "../../components/Pagination.svelte";
    import Navigator from "../../components/Navigator.svelte";
    import { isInCategory } from "../../services/store";
    import { onDestroy } from "svelte";

    isInCategory.update((value) => (value = true));

    onDestroy(() => {
        isInCategory.update((value) => (value = false));
    });
</script>

<Navigator />
<slot />
<Pagination />
