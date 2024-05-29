<template>
    <div class="blog-area with-top-border pb-75 pt-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Latest News</span>
                <h2>Our latest articles & resources</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200">
                    <div class="single-blog-post">
                        <div class="image">
                            <router-link to="/blog-details" class="d-block">
                                <img src="../../assets/images/blog/blog1.jpg" alt="blog-image">
                            </router-link>
                        </div>
                        <div class="content">
                            <ul class="meta">
                                <li>
                                    <i class="ph-tag"></i>
                                    <router-link to="/blog-tag">Technology</router-link>
                                </li>
                                <li>
                                    <i class="ph-calendar-check"></i>
                                    25 Nov, 2021
                                </li>
                            </ul>
                            <h3>
                                <router-link to="/blog-details">How is technology working with new things?</router-link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                    <div class="single-blog-post">
                        <div class="image">
                            <router-link to="/blog-details" class="d-block">
                                <img src="../../assets/images/blog/blog2.jpg" alt="blog-image">
                            </router-link>
                        </div>
                        <div class="content">
                            <ul class="meta">
                                <li>
                                    <i class="ph-tag"></i>
                                    <router-link to="/blog-tag">Design</router-link>
                                </li>
                                <li>
                                    <i class="ph-calendar-check"></i>
                                    24 Nov, 2021
                                </li>
                            </ul>
                            <h3>
                                <router-link to="/blog-details">Top 10 important tips on IT services & design</router-link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                    <div class="single-blog-post">
                        <div class="image">
                            <router-link to="/blog-details" class="d-block">
                                <img src="../../assets/images/blog/blog3.jpg" alt="blog-image">
                            </router-link>
                        </div>
                        <div class="content">
                            <ul class="meta">
                                <li>
                                    <i class="ph-tag"></i>
                                    <router-link to="/blog-tag">Startup</router-link>
                                </li>
                                <li>
                                    <i class="ph-calendar-check"></i>
                                    23 Nov, 2021
                                </li>
                            </ul>
                            <h3>
                                <router-link to="/blog-details">How our company works in different ways</router-link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog'
}
</script>