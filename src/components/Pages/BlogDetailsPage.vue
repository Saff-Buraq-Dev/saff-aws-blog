<template>
    <div>
        <Navbar />
        <component v-if="blogComponent" :is="blogComponent" />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar.vue'
import PageTitle from '../Common/PageTitle.vue'
import Footer from '../Layouts/Footer.vue'

import { markRaw } from 'vue'

export default {
    name: 'BlogDetailsPage',
    components: {
        Navbar,
        PageTitle,
        Footer,
    },
    data() {
        return {
            blogId: this.$route.params.id,
            blogComponent: null
        }
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler(newId) {
                this.loadBlogComponent(newId)
            }
        }
    },
    methods: {
        async loadBlogComponent(id) {
            try {
                const component = await import(`../BlogDetails/${id}.vue`)
                this.blogComponent = markRaw(component.default || component)
            } catch (e) {
                this.blogComponent = null
            }
        }
    }

}
</script>