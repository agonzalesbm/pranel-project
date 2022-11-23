<script>
// @ts-nocheck
    import { page } from "$app/stores";
    import {onDestroy} from 'svelte';
    import {isAnError} from '../services/store'
	isAnError.update( value => value = true);
    onDestroy(() => {
		isAnError.update( value => value = false);
    })
</script>

<div class="cover">
    <div class="message">
        <h1>{$page.status}</h1>
        <h2>{$page.error.message}</h2>
        <p> 
        It may have been removed, changed or is temporarily unavailable. Please return to our home page to continue browsing our site.</p>
        <a href="/" class="btn btn-outline-light">Go to Home</a>
    </div>
</div>

<style>
    .cover{
        height: 100vh;
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
    }

    h1 {
        font-size: 10em;
        color: white;
    }

    h2 {
        font-size: 3em;
        color: white;
    }

    .message {
        text-shadow: 3px 3px 7px rgb(7, 7, 7);
        font-family: 'Times New Roman', Times, serif;
        color: white;
        background-color: rgba(0, 0, 0, 0.735);
        padding: 2em 2em;
        border-radius: 10px;
    }

    .message:hover {
        background-color: rgb(0, 0, 0);
    }

    a{
        border-radius: 10px;
        text-shadow: 3px 3px 7px rgb(7, 7, 7);
    }

    a:hover{
        text-shadow: 3px 3px 7px rgb(225, 222, 222);
    }
</style>
