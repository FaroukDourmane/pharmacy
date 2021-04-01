<script>
    import '../../public/assets/css/header.css';
    import QualityBox from '../components/QualityBox.svelte';
</script>

<div class="header">
    <!-- Navbar -->
    <nav>
        <!-- Mobile menu toggler -->
        <ul class="menuToggler">
            <li> <a href="#" on:click|preventDefault={() => console.log() }> <img src="/assets/svg/toggler.svg" /> </a> </li>
        </ul>

        <!-- Menu -->
        <ul class="bigMenu">
            <li class="active"> <a href="#"> <img src="/assets/svg/home.svg" alt="" /> Home</a> </li>
            <li> <a href="#"> <img src="/assets/svg/products.svg" alt="" /> Products</a> </li>
            <li> <a href="#"> <img src="/assets/svg/quality.svg" alt="" /> Quality</a> </li>
            <li> <a href="#"> <img src="/assets/svg/about.svg" alt="" /> About us</a> </li>
            <li> <a href="#"> <img src="/assets/svg/contact.svg" alt="" /> Contact us</a> </li>
        </ul>

        <!-- Social -->
        <div class="social">
            <a href="#"> <img src="/assets/svg/twitter.svg" alt="" /> </a>
            <a href="#"> <img src="/assets/svg/facebook.svg" alt="" /> </a>
        </div>
    </nav>

    <!-- Header BG -->
    <div class="headerBg">
        <!-- Logo side -->
        <div class="logoBox">
            <img src="/assets/img/logo.png" alt="" />
        </div>
    </div>

    <!-- Quality box -->
    <QualityBox />
</div>