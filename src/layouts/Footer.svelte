<script>
    import { Link } from 'svelte-navigator';
    import '../../public/assets/css/footer.css';
</script>

<footer>
    <!-- Footer links -->
    <div class="footerLinks">
        <div class="linkItem">
            <img src="/assets/svg/big-contact.svg" alt="" />
            <h3>Call us</h3>
            <Link to="contact">Contact us</Link>
        </div>

        <div class="linkItem">
            <img src="/assets/svg/big-guarantee.svg" alt="" />
            <h3>Quality guarantee</h3>
            <a href="#">Check product</a>
        </div>

        <div class="linkItem">
            <img src="/assets/svg/big-about.svg" alt="" />
            <h3>About us</h3>
            <Link to="about">More informations</Link>
        </div>
    </div>

    <!-- Copyright bar -->
    <div class="copyrightBar">
        <div class="logo"> <img src="/assets/img/small-logo.png" alt="" /> </div>
        <div class="copyrightText"> All rights reserved to Euro Pharma  ®2021 </div>
    </div>
</footer>