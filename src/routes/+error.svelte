<script>
// @ts-nocheck
    import { page } from "$app/stores";
</script>

<div>
    <h1>{$page.status}: {$page.error.message}</h1>
    <p> Aliquam vel ante nisl. Aliquam semper erat eu purus tristique elementum. Integer malesuada hendrerit mauris sit amet tincidunt. Nam vel lacus vel nulla porttitor volutpat. Nulla euismod ipsum neque, ac eleifend nibh molestie sit amet. In hac habitasse platea dictumst. Nam fermentum vulputate semper. </p>

    <a href="/" class="btn btn-outline-dark">Go to Home</a>
</div>

<style>
    div {
        height: 80vh;
        background-image: url('$lib/img/cover/ErrorPage.jpg');
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;
        padding: 5em;
    }

    p{
        margin-left: 20%;
        margin-right: 20%;
        padding: 2em 2em;
        background-color: rgba(255, 255, 255, 0.4);
    }

    h1 {
        font-size: 4em;
    }

    h1,p, a{
        text-shadow: 3px 3px 7px rgb(244, 215, 215);
        font-family: 'Times New Roman', Times, serif;
    }

    a {
        color: black;
        background-color: rgba(255, 255, 255, 0.4);
    }
</style>
