<template>
    <div :class="['navbar-area navbar-style-two', { 'is-sticky': isSticky }]">
        <div class="vumy-nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/images/gharbidev-blog.png" alt="logo" width="150">
                    </router-link>

                    <div class="navbar-toggler" @click="show = !show" :aria-pressed="show ? 'true' : 'false'"
                        v-bind:class="{ show: button_show_state }" v-on:click="button_show_state = !button_show_state">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </div>

                    <div class="others-option d-flex align-items-center">

                        <div class="others-option" v-if="authIsReady && user">
                            <button @click="logout" class="btn-style-one red-light-color">
                                Logout
                                <i class="ph-caret-right"></i>
                            </button>
                        </div>
                        <div class="others-option" v-else-if="authIsReady">
                            <router-link to="/login" class="btn-style-one red-light-color">
                                Login / Register
                                <i class="ph-caret-right"></i>
                            </router-link>
                        </div>




                        <div class="info d-flex align-items-center">
                            <div class="search-icon" @click="search = !search" :aria-pressed="search ? 'true' : 'false'"
                                v-bind:class="{ search: button_search_state }"
                                v-on:click="button_search_state = !button_search_state">
                                <i class='flaticon-search-interface-symbol'></i>
                            </div>
                            <div>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#sidebarModal">
                                    <i class="flaticon-menu"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    </div>

    <!-- Search Overlay -->
    <div class="search-overlay" :class="{ search: search }">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="search-overlay-layer"></div>
                <div class="search-overlay-layer"></div>
                <div class="search-overlay-layer"></div>
                <div class="search-overlay-close" @click="search = !search">
                    <span class="search-overlay-close-line"></span>
                    <span class="search-overlay-close-line"></span>
                </div>
                <div class="search-overlay-form">
                    <form @submit.prevent="handleSearch">
                        <input type="text" class="input-search" placeholder="Enter your keywords..."
                            v-model="searchQuery">
                        <button type="submit"><i class='flaticon-search-interface-symbol'></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- End Search Overlay -->

    <!-- Sidebar Modal -->
    <div class="sidebarModal modal right fade" id="sidebarModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-bs-dismiss="modal"><i class='flaticon-cancel'></i></button>
                <div class="modal-body">
                    <div class="logo">
                        <router-link to="/" class="d-inline-block"><img src="../../assets/images/gharbidev-blog.png"
                                alt="image"></router-link>
                    </div>
                    <ul class="sidebar-contact-info">
                        <li>
                            <i class="ph-phone-call"></i>
                            <span>Mon to Fri : 08:00AM - 06:00PM</span>
                            <a href="tel:+15147130322">+1(514)713-0322</a>
                        </li>
                        <li>
                            <i class="ph-envelope-simple-open"></i>
                            <span>Do You Have a Question?</span>
                            <a href="mailto:sgharbi@gharbidev.com">sgharbi@gharbidev.com</a>
                        </li>
                        <li>
                            <i class="ph-map-pin"></i>
                            <span>Montréal, Canada</span>
                            <a href="https://maps.app.goo.gl/KM62ykNwqha43kVQ7" target="_blank">Find Us on Map</a>
                        </li>
                    </ul>
                    <div class="box">
                        <p>Latest resources, sent to your inbox weekly</p>
                        <form class="newsletter-form" @submit.prevent="submitNewsletter">
                            <input type="text" class="input-newsletter" placeholder="Enter your email address"
                                v-model="email">
                            <button type="submit" class="btn-style-one green-color"><span
                                    v-if="isLoading">Loading...</span>
                                <span v-else>Subscribe Now</span> <i class="ph-caret-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Sidebar Modal -->
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
    position: "bottom",
    duration: 3000,
});

export default {
    name: 'Navbar',
    data() {
        return {
            isSticky: false,
            show: false,
            button_show_state: false,
            search: false,
            button_search_state: false,
            searchQuery: '',
            email: '',
            isLoading: false,
        };
    },
    mounted() {
        const that = this;
        window.addEventListener("scroll", () => {
            let scrollPos = window.scrollY;
            if (scrollPos >= 100) {
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        });
    },
    setup() {
        const store = useStore();
        const user = computed(() => store.getters.user);
        const authIsReady = computed(() => store.getters.authIsReady);

        return {
            user,
            authIsReady,
        };
    },
    methods: {
        handleSearch() {
            this.$router.push({
                name: 'BlogSearchPage',
                query: {
                    query: this.searchQuery
                }
            });
            this.search = false;
        },
        logout() {
            this.$store.dispatch('logout');
        },
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
                        if (data === 'Email already exists') {
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
        },
    }
}
</script>