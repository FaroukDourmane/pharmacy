<script>
    import SwiperCore, { Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';

    SwiperCore.use([Navigation]);
    import 'swiper/swiper.min.css';
    import 'swiper/components/navigation/navigation.min.css';


    const navigations = {
        nextEl: ".nextReview",
        prevEl: ".prevReview"
    }

    import '../../public/assets/css/customerReviews.css';
    let reviews = [
        {
            id: 1,
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
            username: 'username 1'
        },
        {
            id: 2,
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
            username: 'username 2'
        },
        {
            id: 3,
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
            username: 'username 3'
        },
        {
            id: 4,
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
            username: 'username 4'
        },
    ];
</script>

<div class="customerReviewsBox">
    <a href="#" class="reviewControl prevReview"> <img src="/assets/svg/chevron-right.svg" alt="" /> </a>    

    <Swiper
        navigation={navigations}
        slidesPerView={1}
    >
    {#each reviews as obj }
        <SwiperSlide>
            <div class="reviewSlide">
                <p>{obj.content}</p>
                <h5>{obj.username}</h5>
            </div>
        </SwiperSlide>
    {/each}
  </Swiper>

  <a href="#" class="reviewControl nextReview"> <img src="/assets/svg/chevron-right.svg" alt="" /> </a>
</div>