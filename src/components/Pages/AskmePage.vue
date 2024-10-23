<template>
    <div>
        <Navbar />

        <div class="container">
            <iframe src="https://b6qbphhn.chat.qbusiness.us-east-1.on.aws/" frameborder="0"
                class="full-page-iframe"></iframe>
        </div>

        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar.vue';
import Footer from '../Layouts/Footer.vue';

export default {
    name: 'BlogSearchPage',
    components: {
        Navbar,
        Footer,
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    /* Viewport height */
    margin: 0;
}

.full-page-iframe {
    flex-grow: 1;
    /* Make iframe take all available space */
    width: 100%;
    height: 100%;
    border: none;
}
</style>
