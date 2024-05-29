<template>
    <div>
        <Navbar />
        <PageTitle subTitle="Get in Touch" heding="Connecting People With Knowledge" />
        <Contact />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar.vue'
import PageTitle from '../Common/PageTitle.vue'
import Contact from '../Contact/Contact.vue'
import Footer from '../Layouts/Footer.vue'

export default {
    name: 'ContactPage',
    components: {
        Navbar,
        PageTitle,
        Contact,
        Footer,
    }
}
</script>