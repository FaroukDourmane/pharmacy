<script>
    import '../../public/assets/css/category.css';
    import { getArticle } from '../api/Articles';
    export const qualityBox=false;
    export let id;

    let articleReq = getArticle(id);
</script>

<div class="categoryPage">
    {#await articleReq}
    <h4>Loading...</h4>
    {:then article}
    <div class="categoryTitle">    
            {article.title}
    </div>

    <div style="font-family: 'CaviarDreams_Bold';color: #333;padding: 50px;text-align: center;">
        {@html article.content}
    </div>        
    {/await}
</div>