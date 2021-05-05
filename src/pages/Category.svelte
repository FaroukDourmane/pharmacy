<script>
    import '../../public/assets/css/category.css';
    export const qualityBox=false;

    let articles = [
        { title: "WINSTROL® 50 mg/ml solution for injection" },
        { title: "Trenbolone Enanthate 200" },
        { title: "TRENBOLONE ACETATE ® 100 mg/ml solution for injection" },
        { title: "Testosterone Enantate Ampoules" },
        { title: "TESTOSTERONE PROPIONATE" },
        { title: "testosterone cypionate injection, USP CIII" },
        { title: "Nandrolone Decanoate Injection IP 250mg (Deca- Duralin) Taj Pharma" },
        { title: "(testosterone esters) Sustanon 250, 250 mg/ml, solution for injection" },
        { title: "MASTERON ® 100 mg/ml solution for injection" },
        { title: "Boldenone Undecylenate® 200 mg/ml solution for injection" }
    ];
</script>

<div class="categoryPage">
    <div class="categoryTitle">Injectable Products</div>
    <div class="categoryArticles">
        {#each articles as article }
            <div class="articleBox">
                <h1>{article.title}</h1>
                <p>Read all of this leaflet carefully before you start using this medicine because it contains important information for...</p>
                <a href="#">Read more</a>
            </div>
        {/each}        
    </div>
</div>