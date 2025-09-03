<template>
  <!-- This component doesn't render anything visible -->
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  name: 'SEOHead',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    keywords: {
      type: String,
      default: 'AWS, Cloud Computing, DevOps, Technology Blog'
    },
    author: {
      type: String,
      default: 'Safouene Gharbi'
    },
    image: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'article'
    },
    publishedTime: {
      type: String,
      default: null
    },
    modifiedTime: {
      type: String,
      default: null
    },
    section: {
      type: String,
      default: 'Technology'
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    // Ensure the image URL is absolute
    const getAbsoluteImageUrl = (imageUrl) => {
      if (imageUrl.startsWith('http')) {
        return imageUrl;
      }
      // For local images, we need to construct the full URL
      return `https://blog.gharbidev.com${imageUrl}`;
    };

    const absoluteImageUrl = getAbsoluteImageUrl(props.image);

    // Build meta tags
    const metaTags = [
      // Basic meta tags
      { name: 'description', content: props.description },
      { name: 'keywords', content: props.keywords },
      { name: 'author', content: props.author },
      
      // Open Graph tags for Facebook, LinkedIn, etc.
      { property: 'og:title', content: props.title },
      { property: 'og:description', content: props.description },
      { property: 'og:image', content: absoluteImageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:url', content: props.url },
      { property: 'og:type', content: props.type },
      { property: 'og:site_name', content: 'GharbiDev Blog' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: props.title },
      { name: 'twitter:description', content: props.description },
      { name: 'twitter:image', content: absoluteImageUrl },
      { name: 'twitter:site', content: '@gharbidev' },
      { name: 'twitter:creator', content: '@gharbidev' },
      
      // Additional SEO meta tags
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'theme-color', content: '#1a73e8' }
    ];

    // Add article-specific meta tags if it's an article
    if (props.type === 'article') {
      metaTags.push(
        { property: 'article:author', content: props.author },
        { property: 'article:section', content: props.section }
      );

      if (props.publishedTime) {
        metaTags.push({ property: 'article:published_time', content: props.publishedTime });
      }

      if (props.modifiedTime) {
        metaTags.push({ property: 'article:modified_time', content: props.modifiedTime });
      }

      // Add article tags
      props.tags.forEach(tag => {
        metaTags.push({ property: 'article:tag', content: tag });
      });
    }

    // Build link tags
    const linkTags = [
      { rel: 'canonical', href: props.url }
    ];

    useHead({
      title: props.title,
      meta: metaTags,
      link: linkTags
    });
  }
};
</script>
