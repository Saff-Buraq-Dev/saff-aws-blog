<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc green-color">
                        <div class="post-thumb">
                            <img style="height: 450px; object-fit: fill; width: 100%;"
                                src="../../assets/images/blog/cloud-computing-introduction.webp" alt="blog-details">
                        </div>
                        <div class="post-meta">
                            <ul>
                                <li>
                                    <i class="ph-tag"></i>
                                    <router-link to="/blog-categories/introduction">INTRODUCTION</router-link>
                                </li>
                                <li>
                                    <i class="ph-calendar-check"></i>
                                    21 Oct, 2023
                                </li>
                            </ul>
                        </div>

                        <!-- TITLE -->

                        <h2 style="margin-bottom: 25px;">Unlocking cloud mastery: an introductory course to Cloud
                            Computing</h2>

                        <p>Cloud computing is a transformative computing paradigm that delivers computing services like
                            servers, storage, databases, networking, software, and analytics over the Cloud (internet),
                            offering faster innovation, flexible resources, and economies of scale. This technology
                            allows users to rent access to computing resources instead of owning and maintaining them
                            locally.</p>

                        <h4 style="margin-bottom: 25px;">Benefits of cloud computing:</h4>

                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                                <div class="single-help-desk-box">
                                    <div class="icon">
                                        <img src="../../assets/images/icon/icon1.png" alt="icon">
                                    </div>
                                    <h3>Cost Efficiency</h3>
                                    <p>- Cloud computing eliminates the expense of setting up and running on-site
                                        datacenters, which often have added costs such as infrastructure, power, and
                                        cooling.</p>
                                    <p>- Pay-as-you-go pricing models allow for cost savings and operational
                                        efficiency.</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200"
                                data-aos-delay="100">
                                <div class="single-help-desk-box">
                                    <div class="icon">
                                        <img src="../../assets/images/icon/icon3.png" alt="icon">
                                    </div>
                                    <h3>Scalability</h3>
                                    <p>- It offers the ability to quickly upscale or downscale your IT requirements
                                        as and when necessary.</p>
                                    <p>- Resources are available in real-time as per the demand, ensuring that the
                                        capacity matches the current demand without the need to invest in physical
                                        infrastructure.</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200"
                                data-aos-delay="200">
                                <div class="single-help-desk-box">
                                    <div class="icon">
                                        <img src="../../assets/images/icon/icon2.png" alt="icon">
                                    </div>
                                    <h3>Flexibility and mobility</h3>
                                    <p>- Access to data and applications is available anywhere, anytime, facilitating
                                        remote working environments and global collaboration.</p>
                                    <p>- It provides a platform for businesses to be responsive to market changes.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200"
                                data-aos-delay="300">
                                <div class="single-help-desk-box">
                                    <div class="icon">
                                        <img src="../../assets/images/icon/icon4.png" alt="icon">
                                    </div>
                                    <h3>Disaster Recovery</h3>
                                    <p>- Cloud computing can enhance data recovery for its users by backing up data
                                        off-site, reducing potential data losses.</p>
                                    <p>- It also provides built-in disaster recovery and business continuity
                                        solutions, ensuring the availability and safety of data.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Cloud service models -->
                        <h4 style="margin-bottom: 25px;">Cloud service models:</h4>
                        <div class="post-thumb">
                            <img src="../../assets/images/blog/cloud-service-models.webp" alt="blog-details">
                        </div>
                        <ol>
                            <li>Infrastructure as a Service (IaaS):</li>
                            <ul>
                                <li>Provides virtualized computing resources over the internet.</li>
                                <li>Example: Amazon Web Services (AWS) EC2, Microsoft Azure Virtual Machines.</li>
                            </ul>
                            <li>Platform as a Service (PaaS):</li>
                            <ul>
                                <li>Delivers platform and environment for developers to build applications and services.
                                </li>
                                <li>Example: Google App Engine, AWS Elastic Beanstalk.</li>
                            </ul>
                            <li>Software as a Service (SaaS):</li>
                            <ul>
                                <li>Delivers software applications over the internet on a subscription basis.</li>
                                <li>Example: Google Workspace, Microsoft 365.</li>
                            </ul>
                        </ol>
                        <blockquote class="wp-block-quote">
                            <p>Cloud computing is empowering, as anyone in any part of world with internet connection
                                and a credit card can run and manage applications in the state of the art global
                                datacenters; companies leveraging cloud will be able to innovate cheaper and faster.</p>
                        </blockquote>

                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/KBrAY7hUTuI?si=kmWZ8b2-OQFJ7Gal"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                            style="margin: auto;"></iframe>

                        <div class="post-footer">
                            <div class="post-tags">
                                <span class="sub">Tags:</span>
                                <ul>
                                    <li><a href="/blog-tags/intro" rel="tag">intro</a></li>
                                    <li><a href="/blog-tags/aws" rel="tag">aws</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <!-- ShareThis BEGIN -->
                    <div class="sharethis-inline-share-buttons"></div><!-- ShareThis END -->

                    <!-- Comments -->
                    <Comments :article="'cloud-computing-introduction'" />


                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head';
import imageUrl from '../../assets/images/blog/cloud-computing-introduction.webp';

import Comments from '../Comments/Comments.vue';

export default {
    name: 'BlogDetailsCloudComputingIntroduction',
    components: {
        Comments
    },
    setup() {
        useHead({
            title: 'Unlocking Cloud Mastery: An Introductory Course to Cloud Computing',
            meta: [
                { name: 'description', content: 'An introductory course to Cloud Computing, exploring its benefits, service models, and empowering capabilities.' },
                { name: 'keywords', content: 'Cloud Computing, Cloud Mastery, IaaS, PaaS, SaaS' },
                { name: 'author', content: 'Safouene Gharbi' },
                { property: 'og:title', content: 'Unlocking Cloud Mastery: An Introductory Course to Cloud Computing' },
                { property: 'og:description', content: 'An introductory course to Cloud Computing, exploring its benefits, service models, and empowering capabilities.' },
                { property: 'og:image', content: imageUrl },
                { property: 'og:image:width', content: "1200" },
                { property: 'og:image:height', content: "627" },
                { property: 'og:url', content: 'https://blog.gharbidev.com/blog-details/cloud-computing-introduction' },
                { property: 'og:type', content: 'article' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Unlocking Cloud Mastery: An Introductory Course to Cloud Computing' },
                { name: 'twitter:description', content: 'An introductory course to Cloud Computing, exploring its benefits, service models, and empowering capabilities.' },
                { name: 'twitter:image', content: imageUrl },
            ]
        });
    },

}
</script>