<template>
    <div>
        <Navbar />
        <div class="page-title-area">
            <div class="container">
                <div class="page-title-content">
                    <h1>Search result for: {{ searchQuery }}</h1>
                </div>
            </div>
        </div>
        <BlogSearch :articles="filteredArticles" />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar.vue';
import BlogSearch from '../BlogSearch/BlogSearch.vue';
import Footer from '../Layouts/Footer.vue';
import { articles } from '../../services/articles.js';

export default {
    name: 'BlogSearchPage',
    components: {
        Navbar,
        BlogSearch,
        Footer,
    },
    data() {
        return {
            articles: articles,
            searchQuery: this.$route.query.query || ''
        };
    },
    computed: {
        filteredArticles() {
            const query = this.searchQuery.toLowerCase();
            return this.articles.filter(article =>
                article.title.toLowerCase().includes(query) ||
                article.tags.some(tag => tag.toLowerCase().includes(query)) ||
                article.categories.some(category => category.toLowerCase().includes(query))
            );
        }
    },
    watch: {
        '$route.query.query'(newQuery) {
            this.searchQuery = newQuery || '';
        }
    }
};
</script>
