<script>
    import { isAnError} from '../services/store';
</script>
<footer class:visually-hidden={$isAnError} class="footer" role="navigation">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <div class="footerCont">
        <h1>PRANEL</h1>
        <div class="row">
            <div class="footer-col">
                <h4>Information</h4>
                <ul>
                    <li><a href="">about us</a></li>
                    <li><a href="">privacy polices</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>contact us</h4>
                <p>Direction : NY, Bleecker Street. <br>
                    Telephone: 992663
                </p>
            </div>

            <div class="footer-col">
                <h4>Help</h4>
                <ul>
                    <li><a href="">shipping</a></li>
                    <li><a href="">order status</a></li>
                    <li><a href="">payment options</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>online shopping subpages</h4>
                <ul>
                    <li><a href="">bags</a></li>
                    <li><a href="">shoes</a></li>
                    <li><a href="">rings</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>social media</h4>
                <div class="social-links">
                    <a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/home"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>

    .footerCont h1{
        color:#ffded7;
        text-align: center;
        position: static;
    }

    .footerCont{
            color:#ffded7;
            text-align: left;
            position: static;
            width: 100%;
            background-color: black;
    }

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    .row{
        display: flex;
        flex-wrap: wrap;
    }

    ul{
        list-style: none;
    }

    .footerCont{
        display: inline-block;
        max-width: 2000px;
         position:absolute;
    }

    .footer{
        display: inline-block;
        padding: 5px 0;
        bottom:0;
        width:100%;
        margin: 0;
    }


    .footer-col{
       width: 25%;
       padding: 0 15px;
    }


    .footer-col h4{
        font-size: 18px;
        color: #ffffff;
        text-transform: capitalize;
        margin-bottom: 15px;
        font-weight: 500;
        position: relative;
    }

    .footer-col h4::before{
        content: '';
        position: absolute;
        left:0;
        bottom: -10px;
        background-color: #ffded7;
        height: 4px;
        box-sizing: border-box;
        width: 50px;
    }

    .footer-col ul li:not(:last-child){
        margin-bottom: 10px;
    }

    .footer-col ul li a{
        font-size: 16px;
        text-transform: capitalize;
        color: #ffffff;
        text-decoration: none;
        font-weight: 300;
        color: #bbbbbb;
        display: block;
        transition: all 0.3s ease;
    }
    .footer-col p{
    color:white;
    }

    .footer-col ul li a:hover{
        color: #ffffff;
        padding-left: 3px;
    }

    .footer-col .social-links a{
        display: inline-block;
        height: 40px;
        width: 40px;
        background-color: rgba(255,255,255,0.02);
        margin:0 10px 10px 0;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: #ffffff;
        transition: all 0.5s ease;
    }
    .footer-col .social-links a:hover{
        color: #24262b;
        background-color: #ffffff;
    }

    @media(max-width: 767px){
      .footer-col{
        width: 50%;
        margin-bottom: 30px;
      }
    }
    @media(max-width: 574px){
      .footer-col{
        width: 100%;
    }
    }

</style>