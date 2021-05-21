<script>
    import { Link } from 'svelte-navigator';
    import '../../public/assets/css/header.css';
    import QualityBox from '../components/QualityBox.svelte';
    export let qualityBox = true;

    import { getCategories } from '../api/Categories';

    let categories = getCategories();
    let toggledMenu = false;
</script>

<div class="header">
    <!-- Navbar -->
    <nav>
        <!-- Mobile menu toggler -->
        <ul class="menuToggler">
            <li> <a href="#" on:click|preventDefault={() => toggledMenu = !toggledMenu }> <img src="/assets/svg/toggler.svg" /> </a> </li>
        </ul>

        <!-- Menu -->
        <ul class="bigMenu" class:toggledMenu>
            <li class="active"> <Link on:click={ () => toggledMenu=false } to="/"> <img src="/assets/svg/home.svg" alt="" /> Home</Link> </li>
            
            <li>
                <a href="#"> <img src="/assets/svg/products.svg" alt="" /> Products</a>

                <ul>
                    {#await categories}
                        <li>Loading...</li>    
                    {:then component} 
                        {#each component as category }
                            <li> <Link on:click={ () => toggledMenu=false } to="/category/{category.url}">{category.name}</Link> </li>
                        {/each}
                    {/await}

                    <!-- {#each categories as category } -->
                        <!-- <li> <Link to="category/{category.id}">{category.name}</Link> </li> -->
                    <!-- {/each} -->
                </ul>
            </li>

            <li> <Link on:click={ () => toggledMenu=false } to="quality"> <img src="/assets/svg/quality.svg" alt="" /> Quality</Link> </li>
            <li> <Link on:click={ () => toggledMenu=false } to="about"> <img src="/assets/svg/about.svg" alt="" /> About us</Link> </li>
            <li> <Link on:click={ () => toggledMenu=false } to="contact"> <img src="/assets/svg/contact.svg" alt="" /> Contact us</Link> </li>
        </ul>

        <!-- Social -->
        <div class="social">
            <a href="https://www.twitter.com/EuroPharma2" target="_blank"> <img src="/assets/svg/twitter.svg" alt="" /> </a>
            <a href="https://www.facebook.com/PharmaEuros" target="_blank"> <img src="/assets/svg/facebook.svg" alt="" /> </a>
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