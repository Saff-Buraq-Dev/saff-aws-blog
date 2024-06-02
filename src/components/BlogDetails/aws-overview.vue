<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc green-color">
                        <div class="post-thumb">
                            <img style="height: 450px; object-fit: fill; width: 100%;"
                                src="../../assets/images/blog/aws-overview.webp" alt="blog-details">
                        </div>
                        <div class="post-meta">
                            <ul>
                                <li>
                                    <i class="ph-tag"></i>
                                    <router-link to="/blog-categories/introduction">INTRODUCTION</router-link>
                                </li>
                                <li>
                                    <i class="ph-calendar-check"></i>
                                    09 Nov, 2023
                                </li>
                            </ul>
                        </div>

                        <!-- TITLE -->
                        <h2 style="margin-bottom: 25px;">
                            AWS Overview</h2>

                        <hr>
                        <blockquote class="wp-block-quote">
                            <p>Amazon Web Services, commonly known as AWS, is a comprehensive, evolving cloud computing
                                platform provided by Amazon. It comprises a mixture of infrastructure as a service
                                (IaaS), platform as a service (PaaS), and packaged software as a service (SaaS)
                                offerings. AWS provides a wide array of services that cover various computing, storage,
                                database, analytics, networking, mobile, developer tools, management tools, IoT,
                                security, and enterprise applications.</p>
                        </blockquote>
                        <hr>

                        <h4 style="margin-bottom: 25px;">Key Features of AWS:</h4>

                        <ol>
                            <li>
                                <p><strong>Broad & Deep Services:</strong></p>
                                <p>AWS provides more than 200 fully featured services from data centers globally,
                                    encompassing various domains like compute, storage, databases, analytics,
                                    networking, and many more.</p>
                            </li>
                            <li>
                                <p><strong>Global Infrastructure:
                                    </strong></p>
                                <p>AWS spans more than 77 Availability Zones within more than 24 geographic regions
                                    globally, with announced
                                    plans for more Availability Zones and regions. This extensive global infrastructure
                                    allows for lower latency, better data sovereignty, and high availability.</p>
                            </li>
                            <li>
                                <p><strong>Security & Compliance:</strong></p>
                                <p>AWS prioritizes security and provides a network architecture built to meet the
                                    requirements of the most security-sensitive organizations. It offers over 230
                                    security, compliance, and governance services and features.</p>
                            </li>
                            <li>
                                <p><strong>Scalability & Flexibility:</strong></p>
                                <p>The scalability and flexibility of AWS make it easy to get started and grow as your
                                    needs grow. You can access as many resources as you need, and only pay for what you
                                    use.</p>
                            </li>
                            <li>
                                <p><strong>Innovative & Rapidly Evolving:</strong></p>
                                <p>AWS is known for its innovation, and the platform is often updated with new services
                                    and features based on customer feedback and needs.</p>
                            </li>

                        </ol>

                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="../../assets/images/blog/aws-overview/1.webp"
                                        class="d-block w-100 carousel-image" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="../../assets/images/blog/aws-overview/2.png"
                                        class="d-block w-100 carousel-image" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        <hr style="margin-bottom: 25px;">
                        <h4 style="margin-bottom: 25px;">Core AWS Services:</h4>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>
                                        <p><strong>Compute</strong></p>
                                        <p>Example: EC2 (Elastic Compute Cloud) allows you to launch virtual servers and
                                            manage computing capacity.</p>
                                    </td>
                                    <td><img src="../../assets/images/blog/aws-overview/3.jpg" alt=""></td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><strong>Storage</strong></p>
                                        <p>Example: S3 (Simple Storage Service) provides scalable object storage for
                                            data backup, archival, and analytics.</p>
                                    </td>
                                    <td><img src="../../assets/images/blog/aws-overview/4.jpg" alt=""></td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><strong>Databases</strong></p>
                                        <p>Example: RDS (Relational Database Service) makes it easier to set up,
                                            operate, and scale a relational database.</p>
                                    </td>
                                    <td><img src="../../assets/images/blog/aws-overview/5.jpg" alt=""></td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><strong>Networking</strong></p>
                                        <p>Example: VPC (Virtual Private Cloud) enables you to provision a logically
                                            isolated section of the AWS cloud.</p>
                                    </td>
                                    <td><img src="../../assets/images/blog/aws-overview/6.jpg" alt=""></td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><strong>Content Delivery & CDN:</strong></p>
                                        <p>Example: CloudFront is a fast content delivery network service that securely
                                            delivers data, videos, applications, and APIs to customers globally.</p>
                                    </td>
                                    <td><img src="../../assets/images/blog/aws-overview/7.jpg" alt=""></td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="post-footer">
                            <div class="post-tags">
                                <span class="sub">Tags:</span>
                                <ul>
                                    <li><a href="/blog-tags/aws" rel="tag">aws</a></li>
                                    <li><a href="/blog-tags/intro" rel="tag">intro</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- ShareThis BEGIN -->
                    <div class="sharethis-inline-share-buttons"></div><!-- ShareThis END -->

                    <!-- Comments -->
                    <Comments :article="'aws-overview'" />


                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

<script>
import { useHead } from '@vueuse/head';
import imageUrl from '../../assets/images/blog/aws-overview.webp';

export default {

    name: 'BlogDetailsContent',

    data: () => ({
        policyCode: `{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::exemple-bucket",
                "arn:aws:s3:::exemple-bucket/*"
            ]
        },
        {
            "Effect": "Deny",
            "Action": "s3:DeleteObject",
            "Resource": "arn:aws:s3:::exemple-bucket/*"
        }
    ]
}`
    }),
    setup() {
        useHead({
            title: 'AWS Overview',
            meta: [
                { name: 'description', content: 'An overview of Amazon Web Services (AWS), covering its key features, core services, and global infrastructure.' },
                { name: 'keywords', content: 'AWS, Amazon Web Services, Cloud Computing' },
                { name: 'author', content: 'Safouene Gharbi' },
                { property: 'og:title', content: 'AWS Overview' },
                { property: 'og:description', content: 'An overview of Amazon Web Services (AWS), covering its key features, core services, and global infrastructure.' },
                { property: 'og:image', content: imageUrl },
                { property: 'og:image:width', content: "1200" },
                { property: 'og:image:height', content: "627" },
                { property: 'og:url', content: 'https://blog.gharbidev.com/blog-details/aws-overview' },
                { property: 'og:type', content: 'article' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'AWS Overview' },
                { name: 'twitter:description', content: 'An overview of Amazon Web Services (AWS), covering its key features, core services, and global infrastructure.' },
                { name: 'twitter:image', content: imageUrl },
            ]
        });
    },


}
</script>