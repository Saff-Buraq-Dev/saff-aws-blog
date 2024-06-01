<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="row justify-content-center" v-if="articles.length">

                <Card v-for="article in paginatedArticles" :key="article.path" :article="article" />

                <div class="row" v-if="articles.length">
                    <div class="col-xl-12 col-lg-12 col-md-12" data-aos="fade-up" data-aos-duration="1200"
                        data-aos-delay="300">
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
            <div v-else>No articles found for this tag.</div>
        </div>
    </div>
</template>

<script>
import images from '../../assets/images/images.js';
import { articleService } from '../../services/apiServices.js';
import image from '../../assets/images/blog/blog1.jpg';

import Card from '../Card/Card.vue';

export default {
    name: 'BlogTag',
    components: {
        Card
    },
    props: {
        tag: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            articles: [],
            currentPage: 1,
            totalPages: 1,
            pageSize: 6
        };
    },
    created() {
        this.loadArticles();
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
            this.articles = articleService.filterAndSortArticles({ tag: this.tag });
            this.totalPages = Math.ceil(this.articles.length / this.pageSize);
        },
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        getImagePath(imageName) {
            return images[imageName] || image;
        }
    }
}
</script>
