<template>
  <!-- JSON-LD structured data is injected into the head -->
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  name: 'StructuredData',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
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
    publishedTime: {
      type: String,
      required: true
    },
    modifiedTime: {
      type: String,
      default: null
    },
    keywords: {
      type: Array,
      default: () => []
    },
    category: {
      type: String,
      default: 'Technology'
    },
    readingTime: {
      type: Number,
      default: 5 // minutes
    }
  },
  setup(props) {
    // Ensure the image URL is absolute
    const getAbsoluteImageUrl = (imageUrl) => {
      if (imageUrl.startsWith('http')) {
        return imageUrl;
      }
      return `https://blog.gharbidev.com${imageUrl}`;
    };

    const absoluteImageUrl = getAbsoluteImageUrl(props.image);

    // Create Article structured data
    const articleStructuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": props.title,
      "description": props.description,
      "image": {
        "@type": "ImageObject",
        "url": absoluteImageUrl,
        "width": 1200,
        "height": 630
      },
      "author": {
        "@type": "Person",
        "name": props.author,
        "url": "https://blog.gharbidev.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GharbiDev",
        "logo": {
          "@type": "ImageObject",
          "url": "https://blog.gharbidev.com/assets/gharbidev-blog-CfQT9umP.png",
          "width": 600,
          "height": 314
        }
      },
      "datePublished": props.publishedTime,
      "dateModified": props.modifiedTime || props.publishedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": props.url
      },
      "url": props.url,
      "keywords": props.keywords.join(', '),
      "articleSection": props.category,
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "timeRequired": `PT${props.readingTime}M`
    };

    // Create BreadcrumbList structured data
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://blog.gharbidev.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://blog.gharbidev.com"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": props.title,
          "item": props.url
        }
      ]
    };

    // Create WebSite structured data (for homepage)
    const websiteStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "GharbiDev Blog",
      "description": "Leading provider of cloud and innovative IT consulting services. Visit our blog for the latest industry insights.",
      "url": "https://blog.gharbidev.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://blog.gharbidev.com/blog-search-result?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };

    // Combine all structured data
    const structuredDataScript = `
      ${JSON.stringify(articleStructuredData, null, 2)}
    `;

    const breadcrumbScript = `
      ${JSON.stringify(breadcrumbStructuredData, null, 2)}
    `;

    const websiteScript = `
      ${JSON.stringify(websiteStructuredData, null, 2)}
    `;

    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: structuredDataScript
        },
        {
          type: 'application/ld+json',
          innerHTML: breadcrumbScript
        },
        {
          type: 'application/ld+json',
          innerHTML: websiteScript
        }
      ]
    });
  }
};
</script>
