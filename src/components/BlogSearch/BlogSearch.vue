<template>
    <div class="blog-area pt-100 pb-75">
        <div class="container">
            <div class="row justify-content-center">
                <div v-for="(article, index) in paginatedArticles" :key="index" class="col-xl-4 col-lg-6 col-md-6"
                    data-aos="fade-up" data-aos-duration="1200">
                    <div class="single-blog-post">
                        <div class="image">
                            <router-link :to="article.path" class="d-block">
                                <img :src="getImagePath(article.picture_path)" alt="blog-image" />
                            </router-link>
                        </div>
                        <div class="content">
                            <ul class="meta">
                                <li>
                                    <i class="ph-tag"></i>
                                    <router-link :to="`/blog-categories/${article.categories[0]}`">{{
                    article.categories[0]
                }}</router-link>
                                </li>
                                <li>
                                    <i class="ph-calendar-check"></i>
                                    {{ new Date(article.publication_date).toLocaleDateString() }}
                                </li>
                            </ul>
                            <h3><router-link :to="article.path">{{ article.title }}</router-link>
                            </h3>
                        </div>
                    </div>
                </div>

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
</template>

<script>
import images from '../../assets/images/images.js';
import image from '../../assets/images/blog/blog1.jpg';

export default {
    name: 'BlogSearch',
    props: {
        articles: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentPage: 1,
            totalPages: 1,
            pageSize: 8,
        };
    },
    mounted() {
        this.totalPages = Math.ceil(this.articles.length / this.pageSize);
    },
    computed: {
        paginatedArticles() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.articles.slice(start, end);
        },
    },
    methods: {
        getImagePath(imageName) {
            return images[imageName] || image;
        },
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
    }
}
</script>
