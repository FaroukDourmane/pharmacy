<script>
    import { Link } from 'svelte-navigator';
    import '../../public/assets/css/category.css';
    import { getArticles } from '../api/Articles';
    import { getCategoryById } from '../api/Categories';
    export const qualityBox=false;
    export let id;

    $: articles = getArticles(id);
    $: category = getCategoryById(id);
</script>

<div class="categoryPage">
    <div class="categoryTitle">
        {#await category}
            <li>Loading...</li>    
        {:then category} 
            {category[0].name}
        {/await}
    </div>
    <div class="categoryArticles">
        {#await articles}
            <li>Loading...</li>    
        {:then component} 
            {#if component.length > 0 }
                
                {#each component as article }
                    <div class="articleBox">
                        <h1>{article.title}</h1>
                        <p>Read all of this leaflet carefully before you start using this medicine because it contains important information for...</p>
                        <Link to="/article/{article._id}">Read more</Link>
                    </div>
                {/each}

                {:else}
                <p>No articles</p>
            {/if}
        {/await}
    </div>
</div>