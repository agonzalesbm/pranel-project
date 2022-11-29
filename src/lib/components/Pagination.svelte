<script>
    import 'bootswatch/dist/lux/bootstrap.min.css'
    import {isInProduct} from '../services/store'
    let isHere = false;
    isInProduct.subscribe( value => isHere = value);
</script>
<nav class="container {isHere? 'visually-hidden': ''} ​​">
    <ul class="pagination justify-content-center">
        <li class="page-item ">
            <a class="page-link" href="#" >1</a>
        </li>
        <li class="page-item active">
            <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
        </li>
    </ul>
</nav>
