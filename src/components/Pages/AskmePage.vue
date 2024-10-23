<template>
    <div>
        <Navbar />
        <iframe src="https://b6qbphhn.chat.qbusiness.us-east-1.on.aws/" frameborder="0" width="100%"></iframe>
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
