<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-12">
                    <BlogSidebar class="left-sidebar" :popular-categories="popularCategories"
                        :popular-articles="popularArticles" :popular-tags="popularTags" />
                </div>
                <div class="col-xl-8 col-lg-7 col-md-12">
                    <div class="row">
                        <Card v-for="article in paginatedArticles" :key="article.path" :article="article" />
                        <div class="col-xl-12 col-lg-12 col-md-12" data-aos="fade-up" data-aos-duration="1200"
                            data-aos-delay="200">
                            <div class="pagination-area">
                                <div class="nav-links">
                                    <a href="#" class="prev page-numbers" @click.prevent="changePage(currentPage - 1)"
                                        :class="{ disabled: currentPage === 1 }">prev</a>
                                    <span v-for="page in totalPages" :key="page" class="page-numbers"
                                        :class="{ current: page === currentPage }" @click="changePage(page)">
                                        {{ page }}
                                    </span>
                                    <a href="#" class="next page-numbers" @click.prevent="changePage(currentPage + 1)"
                                        :class="{ disabled: currentPage === totalPages }">next</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import images from '../../assets/images/images.js';
import BlogSidebar from '../Common/BlogSidebar.vue';
import { articleService } from '../../services/apiServices.js';

import image from '../../assets/images/blog/blog1.jpg';
import Card from '../Card/Card.vue';

export default {
    name: 'BlogLeftSidebar',
    components: {
        BlogSidebar,
        Card
    },
    data() {
        return {
            articles: [],
            currentPage: 1,
            totalPages: 1,
            pageSize: 4,
            popularCategories: [],
            popularArticles: [],
            popularTags: [],
        };
    },
    created() {
        this.loadArticles();
        this.calculatePopularItems();
    },
    computed: {
        paginatedArticles() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.articles.slice(start, end);
        },
    },
    methods: {
        loadArticles() {
            // Fetch articles using the service function
            this.articles = articleService.filterAndSortArticles();
            this.totalPages = Math.ceil(this.articles.length / this.pageSize);
        },
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        calculatePopularItems() {
            // Fetch popular categories, articles, and tags using the service functions
            this.popularCategories = articleService.getPopularCategories();
            this.popularArticles = articleService.getPopularArticles(4);
            this.popularTags = articleService.getPopularTags(8);
        },
        getImagePath(imageName) {
            return images[imageName] || image;
        }
    },
};
</script>
