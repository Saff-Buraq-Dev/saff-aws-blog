<template>
    <div class="template-footer-two pt-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-footer-widget">
                        <router-link to="/" class="logo">
                            <img src="../../assets/images/gharbidev-blog.png" alt="logo">
                        </router-link>
                        <p>Discover the latest insights on our blog.</p>
                        <ul class="footer-contact-info">
                            <li>
                                <i class="ph-phone-call"></i>
                                <a href="tel:+1-514-713-0322">+1-514-713-0322</a>
                            </li>
                            <li>
                                <i class="ph-envelope-simple"></i>
                                <a href="mailto:sgharbi@gharbidev.com">sgharbi@gharbidev.com</a>
                            </li>
                            <li>
                                <i class="ph-map-pin"></i>
                                Montreal, Canada.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-footer-widget pl-3">
                        <h3>Quick links</h3>
                        <ul class="quick-links">
                            <li><a href="https://gharbidev.com" target="_blank">Portfolio</a></li>
                            <li><a href="https://www.linkedin.com/in/safouene-gharbi/" target="_blank">Linkedin</a></li>
                            <li><a href="https://github.com/Saff-Buraq-Dev" target="_blank">Github</a></li>
                            <li><a href="https://docs.aws.amazon.com/" target="_blank">AWS Documentation</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-footer-widget">
                        <h3>Newsletter</h3>
                        <div class="box">
                            <p>Latest resources, sent to your inbox weekly</p>
                            <form class="newsletter-form" @submit.prevent="submitNewsletter">
                                <input type="text" class="input-newsletter" placeholder="Enter your email address"
                                    name="EMAIL" v-model="email">
                                <button type="submit" class="btn-style-one red-light-color">
                                    <span v-if="isLoading">Loading...</span>
                                    <span v-else>Subscribe Now</span>
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
                            Copyright @{{ currentYear }} Gharbidev. All Rights Reserved by
                            <a href="https://gharbidev.com/" target="_blank">Gharbidev</a>
                        </p>
                    </div>


                    <div class="col-lg-6 col-md-5">
                        <!--
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

                        -->
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
    position: "bottom",
    duration: 3000,
});
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear(),
            email: '',
            isLoading: false,
        };
    },
    methods: {
        submitNewsletter() {
            this.isLoading = true;
            const payload = {
                email: this.email,
            };

            // Envoyer le payload à votre endpoint
            fetch('https://f0574d5dfe.execute-api.ca-central-1.amazonaws.com/dev/newsletter/users', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.status === 200) {
                    toaster.success('Subscribed successfully!');
                    // Réinitialiser le champ email après la soumission réussie
                    this.email = '';
                } else if (response.status === 400) {
                    response.json().then(data => {
                        if (data.message === 'Email already exists') {
                            toaster.warning('Email already exists');
                        } else {
                            toaster.error('Something went wrong!');
                        }
                    });
                } else {
                    toaster.error('Something went wrong!');
                }
            }).catch(error => {
                toaster.error('Something went wrong!');
            }).finally(() => {
                this.isLoading = false;
            });
            SENDGRID_TEMPLATE_ID = os.environ['SENDGRID_TEMPLATE_ID']
            SENDGRID_SENDER_EMAIL = os.environ['SENDGRID_SENDER_EMAIL']
            UNSUBSCRIBE_URL = os.environ['UNSUBSCRIBE_URL']
        },
    }
}
</script>