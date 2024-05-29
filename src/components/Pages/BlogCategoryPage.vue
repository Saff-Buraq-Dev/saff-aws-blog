<template>
    <div>
        <Navbar />
        <div class="page-title-area">
            <div class="container">
                <div class="page-title-content">
                    <h1>Category: {{ category }}</h1>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li>{{ category }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <BlogCategory :category="category" />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar.vue'
import BlogCategory from '../BlogCategory/BlogCategory.vue'
import Footer from '../Layouts/Footer.vue'

export default {
    name: 'BlogCategoryPage',
    components: {
        Navbar,
        BlogCategory,
        Footer,
    },
    data() {
        return {
            category: this.$route.params.id,
        }
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler(newCategory) {
                this.category = newCategory
            }
        }
    },
}
</script>