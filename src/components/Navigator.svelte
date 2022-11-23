<script>
    import "bootswatch/dist/lux/bootstrap.min.css";
    import {isInProduct} from '../services/store'
    let isHere = false;
    isInProduct.subscribe( value => isHere = value);
</script>

<nav class="container-fluid  {isHere ? 'visually-hidden':' '}">
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/shoes">Shoes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bags">Bags</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/rings">Rings</a>
        </li>
      </ul>
      <form class="d-flex">
        <button type="button" class="btn-filter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="23"
            fill="currentColor"
            class="bi bi-sliders"
            viewBox="0 2 19 19"
          >
            <path
              fill-rule="evenodd"
              d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
            />
          </svg>
          Filter
        </button>
      </form>
    </div>
  </nav>
</nav>

<style>
  .btn-filter {
    background: #ffded7;
    background-image: -webkit-linear-gradient(top, #ffded7, #ffded7);
    background-image: -moz-linear-gradient(top, #ffded7, #ffded7);
    background-image: -ms-linear-gradient(top, #ffded7, #ffded7);
    background-image: -o-linear-gradient(top, #ffded7, #ffded7);
    background-image: linear-gradient(to bottom, #ffded7, #ffded7);
    -webkit-border-radius: 27;
    -moz-border-radius: 27;
    border-radius: 27px;
    color: black;
    font-size: 20px;
    padding: 2px 15px 2px 15px;
    text-decoration: none;
  }

  .btn-filter:hover {
    background: #000000;
    text-decoration: none;
    color: white;
  }
</style>
