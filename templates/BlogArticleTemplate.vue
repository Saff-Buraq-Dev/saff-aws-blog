<template>
    <!-- SEO Components - Replace with actual article data -->
    <SEOHead 
        title="Your Article Title - Complete Guide | GharbiDev Blog"
        description="Write a compelling description here (150-160 characters). Include main keywords and value proposition."
        keywords="primary keyword, secondary keyword, AWS, Cloud Computing, related terms"
        :image="imageUrl"
        url="https://blog.gharbidev.com/blog-details/your-article-slug"
        published-time="2024-01-01T00:00:00Z"
        modified-time="2024-01-01T00:00:00Z"
        section="Cloud Computing"
        :tags="['AWS', 'Cloud Computing', 'Your Topic', 'Related Tag']"
    />
    
    <StructuredData 
        title="Your Article Title - Complete Guide"
        description="Write a compelling description here (150-160 characters). Include main keywords and value proposition."
        :image="imageUrl"
        url="https://blog.gharbidev.com/blog-details/your-article-slug"
        published-time="2024-01-01T00:00:00Z"
        modified-time="2024-01-01T00:00:00Z"
        :keywords="['Primary Keyword', 'Secondary Keyword', 'AWS', 'Cloud Computing']"
        category="Cloud Computing"
        :reading-time="8"
    />

    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc green-color">
                        <!-- Featured Image -->
                        <div class="post-thumb">
                            <img style="height: 450px; object-fit: fill; width: 100%;"
                                src="../../assets/images/blog/your-article-image.webp" 
                                alt="Descriptive alt text for your article image">
                        </div>

                        <!-- Article Meta Information -->
                        <div class="post-meta">
                            <ul>
                                <li>
                                    <i class="ph-tag"></i>
                                    <router-link to="/blog-categories/your-category">YOUR CATEGORY</router-link>
                                </li>
                                <li>
                                    <i class="ph-calendar-check"></i>
                                    01 Jan, 2024
                                </li>
                            </ul>
                        </div>

                        <!-- Article Title -->
                        <h1 style="margin-bottom: 25px;">
                            Your Article Title - Complete Guide
                        </h1>

                        <!-- Table of Contents -->
                        <BlogSummary :anchorTags="summary" />

                        <hr style="margin-bottom: 25px;">

                        <!-- Article Introduction -->
                        <div>
                            <blockquote class="wp-block-quote">
                                <p>Write an engaging introduction that summarizes what readers will learn. 
                                   This should hook the reader and clearly state the value they'll get from reading the article.</p>
                            </blockquote>
                        </div>

                        <hr style="margin-bottom: 25px;">

                        <!-- Main Content Sections -->
                        <div>
                            <h2 id="section-1" style="margin-bottom: 25px;">First Main Section</h2>
                            
                            <p>Write your content here. Use proper HTML structure with paragraphs, lists, and headings.</p>
                            
                            <h3>Subsection</h3>
                            <p>More detailed content...</p>

                            <ul>
                                <li><strong>Point 1:</strong> Explanation</li>
                                <li><strong>Point 2:</strong> Explanation</li>
                                <li><strong>Point 3:</strong> Explanation</li>
                            </ul>
                        </div>

                        <hr style="margin-bottom: 25px;">

                        <div>
                            <h2 id="section-2" style="margin-bottom: 25px;">Second Main Section</h2>
                            
                            <p>Continue with your content...</p>

                            <!-- Code Example (if applicable) -->
                            <VCodeBlock :code="exampleCode" highlightjs lang="bash" theme="atom-one-dark" />
                        </div>

                        <hr style="margin-bottom: 25px;">

                        <div>
                            <h2 id="conclusion" style="margin-bottom: 25px;">Conclusion</h2>
                            
                            <p>Summarize the key points and provide next steps or additional resources.</p>
                        </div>

                        <hr style="margin-bottom: 25px;">

                        <!-- Article Tags -->
                        <Tags :tags="['your-tag', 'another-tag', 'aws']" />
                    </div>

                    <!-- Social Sharing Buttons -->
                    <div class="sharethis-inline-share-buttons"></div>

                    <!-- Comments Section -->
                    <Comments :article="'your-article-slug'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Import the article's featured image
import imageUrl from '../../assets/images/blog/your-article-image.webp';

// Import required components
import Comments from '../Comments/Comments.vue';
import BlogSummary from '../BlogSummary/BlogSummary.vue';
import Tags from '../Tags/Tags.vue';
import SEOHead from '../Common/SEOHead.vue';
import StructuredData from '../Common/StructuredData.vue';

export default {
    name: 'YourArticleName',
    components: {
        Comments,
        BlogSummary,
        Tags,
        SEOHead,
        StructuredData
    },
    data() {
        return {
            // Example code snippets (if applicable)
            exampleCode: `# Example command or code
echo "Hello World"
aws s3 ls`,
            
            // Table of contents for the article
            summary: [
                { id: 'section-1', title: 'First Main Section' },
                { id: 'section-2', title: 'Second Main Section' },
                { id: 'conclusion', title: 'Conclusion' }
            ]
        }
    }
}
</script>

<style scoped>
/* Add any article-specific styles here */
.carousel-control-prev-icon,
.carousel-control-next-icon {
    background-color: black;
    border-radius: 50%;
}

.carousel-image {
    height: 600px;
    object-fit: contain;
}
</style>

<!--
ARTICLE CREATION CHECKLIST:

□ Replace all placeholder content with actual article content
□ Update the article slug in URLs (your-article-slug)
□ Create and add the featured image (1200x630px WebP format)
□ Update meta tags with actual title, description, and keywords
□ Set correct publication date
□ Update table of contents (summary array)
□ Add proper internal links to related articles
□ Test social media previews
□ Add entry to sitemap.xml
□ Verify all links work correctly
□ Check mobile responsiveness
□ Proofread content for grammar and spelling
□ Optimize images with proper alt text
□ Test page loading speed

SEO OPTIMIZATION NOTES:

1. Title: Keep under 60 characters, include primary keyword
2. Description: 150-160 characters, compelling and keyword-rich
3. Keywords: Include primary and secondary keywords naturally
4. Headings: Use proper H1, H2, H3 hierarchy
5. Images: Optimize for web, include alt text
6. Internal Links: Link to related articles
7. External Links: Link to authoritative sources
8. Content Length: Aim for 1500+ words for better SEO
9. Readability: Use short paragraphs, bullet points, and clear language
10. Mobile: Ensure content displays well on mobile devices

SOCIAL MEDIA OPTIMIZATION:

1. Featured Image: 1200x630px for optimal social sharing
2. Title: Engaging and shareable
3. Description: Compelling preview text
4. Tags: Use relevant hashtags and topics
5. Test: Use Facebook Debugger and Twitter Card Validator

-->
