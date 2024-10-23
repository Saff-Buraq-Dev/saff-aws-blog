<template>
    <div>
        <Navbar />

        <div class="container">
            <iframe src="https://b6qbphhn.chat.qbusiness.us-east-1.on.aws/" frameborder="0"
                class="centered-iframe"></iframe>
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
    justify-content: center;
    /* Center horizontally */
    align-items: center;
    /* Center vertically */
    height: 100vh;
    /* Viewport height */
    margin: 0;
}

.centered-iframe {
    width: 80%;
    /* Adjust the width as needed */
    height: 80%;
    /* Adjust the height as needed */
    border: none;
}
</style>
