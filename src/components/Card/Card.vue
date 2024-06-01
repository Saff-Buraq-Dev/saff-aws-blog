<template>
    <div class="col-xl-6 col-lg-12 col-md-6" data-aos="fade-up" data-aos-duration="1200">
        <div class="single-blog-post">
            <div class="image">
                <router-link :to="`/blog-details/${article.path}`" class="d-block">
                    <img :src="getImagePath(article.picture_path)" alt="blog-image" />
                </router-link>
            </div>
            <div class="content">
                <ul class="meta">
                    <li>
                        <i class="ph-tag"></i>
                        <router-link :to="`/blog-categories/${article.categories[0]}`">{{
                    article.categories[0] }}</router-link>
                    </li>
                    <li>
                        <i class="ph-calendar-check"></i>
                        {{ new Date(article.publication_date).toLocaleDateString() }}
                    </li>
                </ul>
                <h3>
                    <router-link :to="`/blog-details/${article.path}`">{{ article.title
                        }}</router-link>
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
import images from '../../assets/images/images.js';
import image from '../../assets/images/blog/blog1.jpg';

export default {
    name: 'Card',
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    methods: {
        getImagePath(imageName) {
            return images[imageName] || image;
        }
    }
};
</script>
