<script>
    import '../../public/assets/css/qualityBox.css';
    // Api integration
    import { checkCode } from '../api/Products';

    let productCode = null;
    let boxLoading  = false;
    let resp = null;
    let isSuccess = false;

    const handleCheckCode = async () => {
        boxLoading = true;
        resp = await checkCode(productCode);        
        boxLoading = false;

        if ( resp.status == 200 )
            isSuccess = true;
    };

    const resetBox = () => {
        productCode = null;
        resp = null;
        isSuccess = false;
    }
</script>

<div class="qualityBox { boxLoading ? 'loading' : '' }">
    {#if boxLoading}
        <img src="/assets/svg/rings.svg" class="loader" alt="" />
    {/if}
        <div class="qualityPic {isSuccess ? 'full' : ''}">
            <img src="/assets/svg/guarantee.svg" alt="" />
            {#if isSuccess}
                <h1>Congratulations!</h1>
                <p>the code is correct.</p>
                <button class="reset" on:click={() => resetBox()}>Check again</button>
            {/if}
        </div>

        {#if !isSuccess}
            <div class="qualityTest">
                <div>
                    <h1>QUALITY GUARANTEE</h1>
                    <p>To ensure quality we make sure you have the right products in hand.</p>

                    {#if resp}
                        {#await resp then res}
                            {#if res.status == 204}
                                <p style="color:red;">Code was not found !</p>                                
                            {/if}
                        {/await}
                    {/if}                    

                    <form action="" on:submit|preventDefault={ () => handleCheckCode()}>
                        <input type="text" bind:value={productCode} placeholder="Write product code" required />
                        <button type="submit">
                            {#if boxLoading}
                                Checking...
                            {:else}
                                Check
                            {/if}
                        </button>
                    </form>
                </div>
            </div>
        {/if}
</div>