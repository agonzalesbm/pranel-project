<script>
    import 'animate.css';
</script>

<header >
    <div class="wrapper">
        <div class="logoHeader"> 
            <a href="#"><img src="src/images/LogoPranel.svg" width="300" height="100"></a>
        </div>
        
        <nav>
            <a href = "#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            </a>
            <a href = "#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            </a>
            <a href = "#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            </svg>
            </a>
            <a href = "#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
                <ul class="animate__animated animate__flash">
                    <li><a href="">shoes</a></li>
                    <li><a href="">brag</a></li>
                    <li><a href="">rings</a></li>
                </ul>
                
            </a>
        </nav>
    </div>
</header>

<style>
    
    *{margin:0;padding:0;}
    header {
        width: 100%;
        overflow: hidden;
        background: #ffded7;
        margin-bottom: 10px;
    }
    .wrapper {
        width: 100%;
        max-width: 100%;
        margin: auto;
        overflow: hidden;
        max-height: 150px;
    }
    header .logoHeader {
        color: white;
        font-size: 50px;
        line-height:200px;
        float: left;
    }

    header nav{
        float: right;
        line-height:150px;
    }

    header nav a{
        display: inline-block;
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        line-height:normal;
        font-size:20px;
        font-weight: bold;
        -o-transition: all 500ms ease;
        -webkit-transition: all 500ms ease;
        transition: all 500ms ease;
    }
    header nav a:hover{
        background: black;
        border-radius: 30px;
    }


    .wrapper a ul {
        display: none;
    }
    .wrapper a ul li{
        background-color: #ffded7;
        color: #ffff;
        display: block;
    }
    .wrapper a:hover > ul {
        display: block;
        right: 1%; 
        position:absolute;
        
    }

</style>
