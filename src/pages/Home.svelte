<script>
    import '../../public/assets/css/home.css';
    import OverviewTabs from '../components/OverviewTabs.svelte';
    import CommonQuestions from '../components/CommonQuestions.svelte';
    import CustomerReviews from '../components/CustomerReviews.svelte';
</script>

<main>
    <div class="workingTime">
        <div class="boxTitle">
            <span> <img src="/assets/svg/working-time.svg" alt="" /> Our working time</span>
        </div>

        <div class="workingTimeContent">
            <div class="timeWrapper">
                <div class="timeContainer">
                    <!-- Day -->
                    <div class="dayWrapper">
                        <h4>07:00 <span>to</span> 18:00</h4>
                        <h5>All week</h5>
                    </div>

                    <!-- Day -->
                    <div class="dayWrapper">
                        <h4>07:00 <span>to</span> 16:00</h4>
                        <h5>Friday</h5>
                    </div>

                    <!-- Day -->
                    <div class="dayWrapper">
                        <h4 class="red">Closed</h4>
                        <h5>Saturday</h5>
                    </div>
                </div>
                <div class="mapContainer">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96338.75934193071!2d28.7768576!3d41.012428799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2str!4v1617257154618!5m2!1sfr!2str" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div class="contactWrapper">
                <div class="callUs">
                    <h5>Call us now</h5>
                    <p>We will answer your inquiries as soon as possible</p>
                    <a href="https://wa.me/972503381039"> <img src="/assets/svg/whatsapp.svg" alt="" /> +972 50-338-1039⁩</a>
                </div>

                <div class="mapLink">
                    <h5>Visit us</h5>
                    <p>We welcome you on our working time</p>
                    <a href="#"> <img src="/assets/svg/maps.svg" alt="" /> Google maps </a>
                </div>
            </div>
        </div>
    </div>

    <div class="welcomeContainer">
        <h1>Welcome to Euro Pharma</h1>
        <div class="aboutWrapper">
            <!-- Our team -->
            <div class="aboutBox">
                <div class="coverPic" style="background-image:url('/assets/img/team.jpg');"></div>
                <div class="aboutContent">
                    <h5>Our team</h5>
                    <p>Learn about our team and their professional roles within the company</p>
                    <a href="#">Learn more</a>
                </div>
            </div>

            <!-- Company facilities -->
            <div class="aboutBox reverse">
                <div class="coverPic" style="background-image:url('/assets/img/company.jpg');"></div>
                <div class="aboutContent">
                    <h5>Company facilities</h5>
                    <p>Learn about the company’s facilities “laboratories, warehouses, offices, and how we work?”</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>

        <h1>Our services</h1>
        <div class="servicesContainer">
            <p class="description">We provide our services with high quality under the slogan in your care always</p>
            <div class="servicesGrid">
                <!-- Service box -->
                <div class="service">
                    <img src="/assets/svg/services/sarms.svg" alt="" />
                    <h2>SARMs</h2>
                    <p>are a novel class of drugs similar to androgenic steroids.</p>
                </div>

                <!-- Service box -->
                <div class="service">
                    <img src="/assets/svg/services/hormone.svg" alt="" />
                    <h2>Growth hormone</h2>
                    <p>known as human growth hormones in its human form, is a peptide hormone that stimulates growth.</p>
                </div>

                <!-- Service box -->
                <div class="service">
                    <img src="/assets/svg/services/steroids.svg" alt="" />
                    <h2>Oral steroids</h2>
                    <p>or corticosteroids such as prednisone taken by mouth, are prescription anti- inflammatory.</p>
                </div>

                <!-- Service box -->
                <div class="service">
                    <img src="/assets/svg/services/anabolic.svg" alt="" />
                    <h2>Anabolic Steroid</h2>
                    <p>This medicine belongs to the group of medicines known as anabolic steroids.</p>
                </div>
            </div>
        </div>

        <div class="statsContainer">
            <div class="statBox a">
                <h2>102</h2>
                <h5>Medical Research</h5>
            </div>

            <div class="statBox b">
                <h2>165</h2>
                <h5>Cardiology</h5>
            </div>

            <div class="statBox c">
                <h2>57%</h2>
                <h5>Team</h5>
            </div>

            <div class="statBox d">
                <h2>77</h2>
                <h5>Primary Cate</h5>
            </div>
            
            <div class="statBox f">
                <h2>132</h2>
                <h5>Travel Medicine</h5>
            </div>
        </div>
    </div>

    <div class="overviewContainer">
       <h1 class="title">Overview of Euro Pharma</h1> 
       <p class="description">What do we offer for your care?</p>

       <div class="overviewWrapper">
            <div class="overviewContent">
                <OverviewTabs />
            </div>

           <div class="commonQuestions">
               <h5>Common questions</h5>               
               <CommonQuestions />
           </div>           
       </div>
    </div>

    <div class="reviewsContainer">
        <div class="titleBox"> <img src="/assets/svg/reviews.svg" alt="" /> </div>
        <h1 class="title">Our customers’ reviews</h1>
        <CustomerReviews />
    </div>
</main>