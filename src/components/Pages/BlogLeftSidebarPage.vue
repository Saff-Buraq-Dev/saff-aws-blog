<template>
    <div>
        <Navbar />
        <BlogLeftSidebar />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar.vue'
import BlogLeftSidebar from '../BlogLeftSidebar/BlogLeftSidebar.vue'
import Footer from '../Layouts/Footer.vue'

export default {
    name: 'BlogLeftSidebarPage',
    components: {
        Navbar,
        BlogLeftSidebar,
        Footer,
    }
}
</script>
