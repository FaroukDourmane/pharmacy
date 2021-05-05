<script>
    import { Link } from 'svelte-navigator';
    import '../../public/assets/css/header.css';
    import QualityBox from '../components/QualityBox.svelte';
    export let qualityBox = true;

    import { getCategories } from '../api/Categories';

    let categories = getCategories();
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
            <li class="active"> <Link to="/"> <img src="/assets/svg/home.svg" alt="" /> Home</Link> </li>
            
            <li>
                <a href="#"> <img src="/assets/svg/products.svg" alt="" /> Products</a>

                <ul>
                    {#await categories}
                        <li>Loading...</li>    
                    {:then component} 
                        {#each component as category }
                            <li> <Link to="category/{category._id}">{category.name}</Link> </li>
                        {/each}
                    {/await}

                    <!-- {#each categories as category } -->
                        <!-- <li> <Link to="category/{category.id}">{category.name}</Link> </li> -->
                    <!-- {/each} -->
                </ul>
            </li>

            <li> <Link to="quality"> <img src="/assets/svg/quality.svg" alt="" /> Quality</Link> </li>
            <li> <Link to="about"> <img src="/assets/svg/about.svg" alt="" /> About us</Link> </li>
            <li> <Link to="contact"> <img src="/assets/svg/contact.svg" alt="" /> Contact us</Link> </li>
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
    {#if qualityBox}
        <QualityBox />
    {/if}
</div>