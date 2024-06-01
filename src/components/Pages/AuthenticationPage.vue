<template>
    <div>
        <Navbar />
        <Authentication />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar.vue'
import Authentication from '../Authentication/Authentication.vue'
import Footer from '../Layouts/Footer.vue'

export default {
    name: 'AuthenticationPage',
    components: {
        Navbar,
        Authentication,
        Footer,
    }
}
</script>