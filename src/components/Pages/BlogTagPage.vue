<template>
    <div>
        <Navbar />
        <div class="page-title-area">
            <div class="container">
                <div class="page-title-content">
                    <h1>Tag: {{ tag }}</h1>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li>{{ tag }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <BlogTag :tag="tag" />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar.vue'
import BlogTag from '../BlogTag/BlogTag.vue'
import Footer from '../Layouts/Footer.vue'

export default {
    name: 'BlogTagPage',
    components: {
        Navbar,
        BlogTag,
        Footer,
    },
    data() {
        return {
            tag: this.$route.params.id,
        }
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler(newTag) {
                this.tag = newTag
            }
        }
    },
}
</script>