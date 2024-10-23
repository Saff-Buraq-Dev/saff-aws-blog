<template>
    <div>
        <Navbar />
        <div class="page-title-area">
            <div class="container">
                <div class="page-title-content">
                    <iframe src="https://b6qbphhn.chat.qbusiness.us-east-1.on.aws/" frameborder="0"></iframe>
                </div>
            </div>
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
