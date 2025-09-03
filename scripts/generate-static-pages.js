#!/usr/bin/env node

/**
 * Static Page Generator for Social Media Crawlers
 *
 * This script generates static HTML files for each blog article
 * with proper meta tags for social media sharing.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Article metadata - this should match your actual articles
const articles = [
  {
    id: 'aws-overview',
    title: 'AWS Overview - Complete Guide to Amazon Web Services',
    description: 'Comprehensive overview of Amazon Web Services (AWS), covering key features, core services, global infrastructure, and everything you need to know about AWS cloud computing platform.',
    keywords: 'AWS, Amazon Web Services, Cloud Computing, EC2, S3, RDS, VPC, CloudFront, AWS Services, Cloud Infrastructure',
    image: '/src/assets/images/blog/aws-overview.webp',
    publishedTime: '2023-11-09T00:00:00Z',
    modifiedTime: '2023-11-09T00:00:00Z',
    category: 'Cloud Computing',
    readingTime: 8
  },
  {
    id: 'ec2-introduction',
    title: 'Discovering EC2: Your Gateway to Cloud Computing with AWS',
    description: 'Complete guide to Amazon EC2 - learn how to launch, configure, and manage virtual servers in the cloud. Includes practical examples, pricing models, and troubleshooting tips.',
    keywords: 'AWS EC2, Amazon EC2, Cloud Computing, Virtual Servers, AWS Compute, EC2 Instances, Cloud Infrastructure',
    image: '/src/assets/images/blog/ec2-introduction.webp',
    publishedTime: '2023-10-21T00:00:00Z',
    modifiedTime: '2023-10-21T00:00:00Z',
    category: 'Cloud Computing',
    readingTime: 12
  },
  {
    id: 'cloud-computing-introduction',
    title: 'Introduction to Cloud Computing - Complete Beginner\'s Guide',
    description: 'Learn the fundamentals of cloud computing, including service models (IaaS, PaaS, SaaS), deployment models, benefits, and key concepts for beginners.',
    keywords: 'Cloud Computing, IaaS, PaaS, SaaS, Cloud Services, Cloud Infrastructure, AWS, Azure, Google Cloud',
    image: '/src/assets/images/blog/cloud-computing-introduction.webp',
    publishedTime: '2023-10-15T00:00:00Z',
    modifiedTime: '2023-10-15T00:00:00Z',
    category: 'Cloud Computing',
    readingTime: 10
  },
  {
    id: 'iam-introduction',
    title: 'AWS IAM Introduction - Identity and Access Management Guide',
    description: 'Complete guide to AWS Identity and Access Management (IAM). Learn about users, groups, roles, policies, and security best practices.',
    keywords: 'AWS IAM, Identity Access Management, AWS Security, IAM Policies, IAM Roles, AWS Users, Cloud Security',
    image: '/src/assets/images/blog/iam-introduction.png',
    publishedTime: '2023-10-10T00:00:00Z',
    modifiedTime: '2023-10-10T00:00:00Z',
    category: 'Security',
    readingTime: 15
  },
  {
    id: 'dynamodb-overview',
    title: 'Amazon DynamoDB Overview - NoSQL Database Guide',
    description: 'Comprehensive guide to Amazon DynamoDB, AWS\'s fully managed NoSQL database service. Learn about features, use cases, and best practices.',
    keywords: 'AWS DynamoDB, NoSQL Database, Amazon DynamoDB, Database, AWS Database Services, Serverless Database',
    image: '/src/assets/images/blog/dynamodb-overview.png',
    publishedTime: '2023-10-05T00:00:00Z',
    modifiedTime: '2023-10-05T00:00:00Z',
    category: 'Database',
    readingTime: 12
  },
  {
    id: 'github-actions-iam-roles',
    title: 'GitHub Actions with AWS IAM Roles - Secure CI/CD Guide',
    description: 'Learn how to securely integrate GitHub Actions with AWS using IAM roles. Step-by-step guide for setting up OIDC and secure deployments.',
    keywords: 'GitHub Actions, AWS IAM Roles, CI/CD, DevOps, AWS OIDC, Secure Deployment, GitHub AWS Integration',
    image: '/src/assets/images/blog/github-actions-iam-roles.gif',
    publishedTime: '2023-09-30T00:00:00Z',
    modifiedTime: '2023-09-30T00:00:00Z',
    category: 'DevOps',
    readingTime: 18
  },
  {
    id: 'learning-resources',
    title: 'AWS Learning Resources - Complete Study Guide',
    description: 'Comprehensive collection of AWS learning resources including official documentation, courses, certifications, and hands-on labs.',
    keywords: 'AWS Learning, AWS Certification, AWS Training, Cloud Learning Resources, AWS Study Guide, AWS Documentation',
    image: '/src/assets/images/blog/learning-resources.webp',
    publishedTime: '2023-09-25T00:00:00Z',
    modifiedTime: '2023-09-25T00:00:00Z',
    category: 'Education',
    readingTime: 8
  },
  {
    id: 'native-iac-tools',
    title: 'Native Infrastructure as Code Tools - AWS CloudFormation Guide',
    description: 'Explore native Infrastructure as Code tools including AWS CloudFormation, CDK, and best practices for managing cloud infrastructure.',
    keywords: 'Infrastructure as Code, AWS CloudFormation, AWS CDK, IaC, Cloud Infrastructure, DevOps, Infrastructure Management',
    image: '/src/assets/images/blog/native-iac-tools.png',
    publishedTime: '2023-09-20T00:00:00Z',
    modifiedTime: '2023-09-20T00:00:00Z',
    category: 'Infrastructure',
    readingTime: 14
  }
];

// Base HTML template
function generateHTMLTemplate(article) {
  const baseUrl = 'https://blog.gharbidev.com';
  const articleUrl = `${baseUrl}/blog-details/${article.id}`;
  const imageUrl = article.image.startsWith('http') ? article.image : `${baseUrl}${article.image}`;

  return `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/favicon.ico">
    
    <!-- Primary Meta Tags -->
    <title>${article.title}</title>
    <meta name="title" content="${article.title}">
    <meta name="description" content="${article.description}">
    <meta name="keywords" content="${article.keywords}">
    <meta name="author" content="Safouene Gharbi">
    <meta name="robots" content="index, follow">
    <meta name="language" content="English">
    <meta name="theme-color" content="#1a73e8">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="${articleUrl}">
    <meta property="og:title" content="${article.title}">
    <meta property="og:description" content="${article.description}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="GharbiDev Blog">
    <meta property="article:author" content="Safouene Gharbi">
    <meta property="article:published_time" content="${article.publishedTime}">
    <meta property="article:modified_time" content="${article.modifiedTime}">
    <meta property="article:section" content="${article.category}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${articleUrl}">
    <meta property="twitter:title" content="${article.title}">
    <meta property="twitter:description" content="${article.description}">
    <meta property="twitter:image" content="${imageUrl}">
    <meta name="twitter:site" content="@gharbidev">
    <meta name="twitter:creator" content="@gharbidev">

    <!-- Canonical URL -->
    <link rel="canonical" href="${articleUrl}">

    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${article.title}",
        "description": "${article.description}",
        "image": {
            "@type": "ImageObject",
            "url": "${imageUrl}",
            "width": 1200,
            "height": 630
        },
        "author": {
            "@type": "Person",
            "name": "Safouene Gharbi",
            "url": "${baseUrl}"
        },
        "publisher": {
            "@type": "Organization",
            "name": "GharbiDev",
            "logo": {
                "@type": "ImageObject",
                "url": "${baseUrl}/assets/gharbidev-blog-CfQT9umP.png",
                "width": 600,
                "height": 314
            }
        },
        "datePublished": "${article.publishedTime}",
        "dateModified": "${article.modifiedTime}",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${articleUrl}"
        },
        "url": "${articleUrl}",
        "keywords": "${article.keywords}",
        "articleSection": "${article.category}",
        "inLanguage": "en-US",
        "isAccessibleForFree": true,
        "timeRequired": "PT${article.readingTime}M"
    }
    </script>

    <!-- Redirect to SPA -->
    <script>
        // Redirect to the main SPA after a short delay to allow crawlers to read meta tags
        setTimeout(function() {
            if (typeof window !== 'undefined' && window.location) {
                window.location.href = '/#/blog-details/${article.id}';
            }
        }, 100);
    </script>
</head>
<body>
    <noscript>
        <h1>${article.title}</h1>
        <p>${article.description}</p>
        <p>Please enable JavaScript to view the full article.</p>
        <a href="/">Return to homepage</a>
    </noscript>
    
    <!-- Loading message for users -->
    <div id="loading" style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
        <h1>Loading...</h1>
        <p>Redirecting to the full article...</p>
        <p>If you are not redirected automatically, <a href="/#/blog-details/${article.id}">click here</a>.</p>
    </div>
</body>
</html>`;
}

// Generate static pages
function generateStaticPages() {
  console.log('🚀 Generating static pages for social media crawlers...\n');

  // Create dist directory if it doesn't exist
  const distDir = path.join(__dirname, '../dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Create blog-details directory
  const blogDetailsDir = path.join(distDir, 'blog-details');
  if (!fs.existsSync(blogDetailsDir)) {
    fs.mkdirSync(blogDetailsDir, { recursive: true });
  }

  let generatedCount = 0;

  articles.forEach(article => {
    const articleDir = path.join(blogDetailsDir, article.id);
    if (!fs.existsSync(articleDir)) {
      fs.mkdirSync(articleDir, { recursive: true });
    }

    const htmlContent = generateHTMLTemplate(article);
    const filePath = path.join(articleDir, 'index.html');
    
    fs.writeFileSync(filePath, htmlContent);
    console.log(`✅ Generated: /blog-details/${article.id}/index.html`);
    generatedCount++;
  });

  console.log(`\n🎉 Successfully generated ${generatedCount} static pages!`);
  console.log('\n📋 Next steps:');
  console.log('1. Deploy these files to your web server');
  console.log('2. Configure your server to serve these static files for social media crawlers');
  console.log('3. Test with Facebook Debugger and Twitter Card Validator');
  console.log('\n💡 Server configuration needed:');
  console.log('- Detect social media crawlers (Facebook, Twitter, LinkedIn bots)');
  console.log('- Serve static HTML files for crawlers');
  console.log('- Serve the SPA for regular users');
}

// Run the generator
if (import.meta.url === `file://${process.argv[1]}`) {
  generateStaticPages();
}

export { generateStaticPages, articles };
