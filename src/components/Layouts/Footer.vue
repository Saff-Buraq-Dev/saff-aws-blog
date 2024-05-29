
<template>
    <div class="template-footer-two pt-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-footer-widget">
                        <router-link to="/" class="logo">
                            <img src="../../assets/images/white-logo.png" alt="logo">
                        </router-link>
                        <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut.</p>
                        <ul class="footer-contact-info">
                            <li>
                                <i class="ph-phone-call"></i>
                                <a href="tel:+1-485-456-0102">+1-485-456-0102</a>
                            </li>
                            <li>
                                <i class="ph-envelope-simple"></i>
                                <a href="mailto:hello@vumy.com">hello@vumy.com</a>
                            </li>
                            <li>
                                <i class="ph-map-pin"></i>
                                2750 Quadra Street Victoria, Canada.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-footer-widget pl-3">
                        <h3>Quick links</h3>
                        <ul class="quick-links">
                            <li><router-link to="/">IT Startup</router-link></li>
                            <li><router-link to="/business">Business</router-link></li>
                            <li><router-link to="/app">Vumy App</router-link></li>
                            <li><router-link to="/insurance">Insurance</router-link></li>
                            <li><router-link to="/property">Property</router-link></li>
                            <li><router-link to="/big-data">Big Data</router-link></li>
                            <li><router-link to="/distance-learning">Distance Learning</router-link></li>
                            <li><router-link to="/chat-bot">Chat Bot</router-link></li>
                            <li><router-link to="/software">Software</router-link></li>
                            <li><router-link to="/medical">Medical</router-link></li>
                            <li><router-link to="/contact">Contact Us</router-link></li>
                            <li><router-link to="/about-us">About Us</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-footer-widget">
                        <h3>Newsletter</h3>
                        <div class="box">
                            <p>Latest resources, sent to your inbox weekly</p>
                            <form class="newsletter-form" @submit.prevent>
                                <input type="text" class="input-newsletter" placeholder="Enter your email address" name="EMAIL">
                                <button type="submit" class="btn-style-one red-light-color">
                                    Subscribe Now 
                                    <i class="ph-caret-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-7">
                        <p>
                            Copyright @{{currentYear}} Vumy. All Rights Reserved by 
                            <a href="https://envytheme.com/" target="_blank">EnvyTheme</a>
                        </p>
                    </div>
                    <div class="col-lg-6 col-md-5">
                        <ul class="social-links">
                            <li>
                                <a href="https://www.https://www.linkedin.com/.com/" target="_blank">
                                    <i class="flaticon-facebook-app-symbol"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/" target="_blank">
                                    <i class="flaticon-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i class="flaticon-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="flaticon-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterStyleTwo',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>