<script>
    export let source = ''
    export let title = 'default'
</script>
<div class="category_container card m-3">
    <a href="#"
        ><img
            src={source}
            class="card-img-top"
            title={title}
            height="275"
        /></a
    >
    <div class="price__label">
        <span>50000$</span>
    </div>
    <button class="btn">+</button>
</div>

<style>
    .btn{
        background-color: #ffded7;
        max-width: 40px;
        margin-left: 40%;
        border-radius: 50%;
    }
</style>