<script>
    import '../../public/assets/css/contact.css';
    export const qualityBox = false;

    let name,
        email,
        message,
        loading=false,
        success=false,
        error=false;

    import { sendEmail } from './../api/Contact';

    const emailAction = async () => {
        loading=true;

        const emailSender = await sendEmail({
            name,
            email,
            message
        });

        if ( emailSender == 200 )
        {
            name=email=message="";
            error=false;
            success=true;
        }else{
            success=false;
            error=true;            
        }

        loading=false;
    }
</script>

<div class="contactPage">
    <!-- map wrapper -->
    <div class="mapWrapper"> <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96338.75934193071!2d28.7768576!3d41.012428799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2str!4v1617257154618!5m2!1sfr!2str" style="border:0;" allowfullscreen="" loading="lazy"></iframe> </div>

    <!-- form wrapper -->
    <div class="formWrapper">
        {#if success }
            <h3 style="font-size: 16px;line-height: 40px;padding: 0 10px;border: 1px #32a541 solid;margin-bottom: 10px;border-radius: 10px;color: #32a541;">Your message was sent successfully !</h3>
            {:else if error}
            <h3 style="font-size: 16px;line-height: 40px;padding: 0 10px;border: 1px #DDD solid;margin-bottom: 10px;border-radius: 10px;color: #555;">There was an error while sending your message</h3>
        {/if}        
        <form class:loading action="" on:submit|preventDefault={ () => emailAction() }>
            <div class="label">
                <input type="text" name="" placeholder="You name" bind:value={name} required />
                <input type="email" name="" placeholder="You email" bind:value={email} required />
            </div>

            <textarea name="" placeholder="Your message" bind:value={message}></textarea>
            <button type="submit">
                {#if loading}
                    Please wait...
                    {:else}
                    Send message
                {/if}
            </button>
        </form>

        <div class="contactInfos">
            <p> <img src="/assets/svg/email.svg" alt="" /> info@pharma-euro.net</p>
            <p> <img src="/assets/svg/pin.svg" alt="" /> Bourne Business Park, 300 Dashwood Lang Rd, Addlestone KT15 2NX, United Kingdom</p>

            <div class="socialMedia">
                <a href="https://www.facebook.com/PharmaEuros" target="_blank"> <img src="/assets/svg/fb.svg" alt="" /> </a>
                <a href="https://www.twitter.com/EuroPharma2" target="_blank"> <img src="/assets/svg/tt.svg" alt="" /> </a>
            </div>
        </div>
    </div>
</div>