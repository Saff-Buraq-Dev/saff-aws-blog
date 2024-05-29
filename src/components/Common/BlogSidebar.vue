<template>
    <div class="widget-area">
        <div class="widget widget_search">
            <h3 class="widget-title"><span>Search</span></h3>
            <form class="search-form" @submit.prevent="handleSearch">
                <input type="search" class="search-field" v-model="searchQuery" placeholder="Search...">
                <button type="submit"><i class="ph-magnifying-glass"></i></button>
            </form>
        </div>
        <div class="widget widget_categories">
            <h3 class="widget-title"><span>Categories</span></h3>
            <ul>
                <li v-for="category in popularCategories" :key="category">
                    <router-link :to="`/blog-categories/${category.category}`">{{ category.category }} <span
                            class="count">({{ category.occurrence }})</span></router-link>

                </li>
            </ul>
        </div>
        <div class="widget widget_vumy_posts_thumb">
            <h3 class="widget-title"><span>Popular Posts</span></h3>
            <div v-for="post in popularArticles" :key="post.id" class="item">
                <router-link :to="post.path" class="thumb">
                    <img :src="getImagePath(post.picture_path)" alt="blog-image" />
                </router-link>
                <div class="info">
                    <h4 class="title"><router-link :to="`/blog-details/${post.path}`">{{ post.title }}</router-link>
                    </h4>
                    <span class="date">{{ new Date(post.publication_date).toLocaleDateString() }}</span>
                </div>
            </div>
        </div>
        <!--
        <div class="widget widget_follow_us">
            <h3 class="widget-title"><span>Follow Us</span></h3>
            <ul>
                <li><a href="#" target="_blank">Facebook</a></li>
                <li><a href="#" target="_blank">Twitter</a></li>
                <li><a href="#" target="_blank">Instagram</a></li>
                <li><a href="#" target="_blank">Pinterest</a></li>
                <li><a href="#" target="_blank">Linkedin</a></li>
            </ul>
        </div>
        -->
        <div class="widget widget_tag_cloud">
            <h3 class="widget-title"><span>Tags</span></h3>
            <div class="tagcloud">
                <router-link v-for="tag in popularTags" :key="tag" :to="`/blog-tags/${tag}`">{{ tag
                    }}</router-link>
            </div>
        </div>

    </div>
</template>

<script>
import images from '../../assets/images/images.js';
import image from '../../assets/images/blog/blog1.jpg';

export default {
    name: 'BlogSidebar',
    props: {
        popularCategories: {
            type: Array,
            required: true
        },
        popularArticles: {
            type: Array,
            required: true
        },
        popularTags: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            searchQuery: ''
        };
    },
    methods: {
        getImagePath(imageName) {
            return images[imageName] || image;
        },
        handleSearch() {
            if (this.searchQuery) {
                this.$router.push({ name: 'BlogSearchPage', query: { query: this.searchQuery } });
            }
        }
    }
}
</script>