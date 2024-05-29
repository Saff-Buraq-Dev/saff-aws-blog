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
                            <!--
                            <div class="article-share">
                                <ul class="social">
                                    <li><span>Share:</span></li>
                                    <li><a href="https://www.facebook.com/" class="facebook" target="_blank"><i
                                                class="ph-facebook-logo"></i></a></li>
                                    <li><a href="https://www.twitter.com/" class="twitter" target="_blank"><i
                                                class="ph-twitter-logo"></i></a></li>
                                    <li><a href="https://www.linkedin.com/" class="linkedin" target="_blank"><i
                                                class="ph-linkedin-logo"></i></a></li>
                                    <li><a href="https://www.instagram.com/" class="instagram" target="_blank"><i
                                                class="ph-instagram-logo"></i></a></li>
                                </ul>
                            </div>
                            -->
                        </div>
                    </div>

                    <!--
                    <div class="comments-area green-color">
                        <h3 class="comments-title">2 Comments:</h3>
                        <ol class="comment-list">
                            <li class="comment">
                                <div class="comment-body">
                                    <footer class="comment-meta">
                                        <div class="comment-author vcard">
                                            <img src="../../assets/images/user/user1.jpg" class="avatar" alt="user">
                                            <b class="fn">John Jones</b>
                                        </div>
                                        <div class="comment-metadata">
                                            <span>August 01, 2021 at 10:59 am</span>
                                        </div>
                                    </footer>
                                    <div class="comment-content">
                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a
                                            type specimen.</p>
                                    </div>
                                    <div class="reply">
                                        <a href="#" class="comment-reply-link">Reply</a>
                                    </div>
                                </div>
                                <ol class="children">
                                    <li class="comment">
                                        <div class="comment-body">
                                            <footer class="comment-meta">
                                                <div class="comment-author vcard">
                                                    <img src="../../assets/images/user/user2.jpg" class="avatar"
                                                        alt="user">
                                                    <b class="fn">Steven Smith</b>
                                                </div>
                                                <div class="comment-metadata">
                                                    <span>August 02, 2021 at 21:59 am</span>
                                                </div>
                                            </footer>
                                            <div class="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since
                                                    the 1500s, when an unknown printer took a galley of type and
                                                    scrambled it to make a type specimen.</p>
                                            </div>
                                            <div class="reply">
                                                <a href="#" class="comment-reply-link">Reply</a>
                                            </div>
                                        </div>
                                        <ol class="children">
                                            <li class="comment">
                                                <div class="comment-body">
                                                    <footer class="comment-meta">
                                                        <div class="comment-author vcard">
                                                            <img src="../../assets/images/user/user3.jpg" class="avatar"
                                                                alt="user">
                                                            <b class="fn">Sarah Taylor</b>
                                                        </div>
                                                        <div class="comment-metadata">
                                                            <span>August 03, 2021 at 05:59 am</span>
                                                        </div>
                                                    </footer>
                                                    <div class="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever
                                                            since the 1500s, when an unknown printer took a galley of
                                                            type and scrambled it to make a type specimen.</p>
                                                    </div>
                                                    <div class="reply">
                                                        <a href="#" class="comment-reply-link">Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li class="comment">
                                <div class="comment-body">
                                    <footer class="comment-meta">
                                        <div class="comment-author vcard">
                                            <img src="../../assets/images/user/user4.jpg" class="avatar" alt="user">
                                            <b class="fn">John Doe</b>
                                        </div>
                                        <div class="comment-metadata">
                                            <span>August 04, 2021 at 05:59 am</span>
                                        </div>
                                    </footer>
                                    <div class="comment-content">
                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a
                                            type specimen.</p>
                                    </div>
                                    <div class="reply">
                                        <a href="#" class="comment-reply-link">Reply</a>
                                    </div>
                                </div>
                                <ol class="children">
                                    <li class="comment">
                                        <div class="comment-body">
                                            <footer class="comment-meta">
                                                <div class="comment-author vcard">
                                                    <img src="../../assets/images/user/user1.jpg" class="avatar"
                                                        alt="user">
                                                    <b class="fn">James Anderson</b>
                                                </div>
                                                <div class="comment-metadata">
                                                    <span>August 05, 2021 at 04:59 am</span>
                                                </div>
                                            </footer>
                                            <div class="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since
                                                    the 1500s, when an unknown printer took a galley of type and
                                                    scrambled it to make a type specimen.</p>
                                            </div>
                                            <div class="reply">
                                                <a href="#" class="comment-reply-link">Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                        <div class="comment-respond">
                            <h3 class="comment-reply-title">Leave A Reply</h3>
                            <p class="comment-notes"><span id="email-notes">Your email address will not be
                                    published.</span> Required fields are marked <span class="required">*</span></p>
                            <form class="comment-form" @submit.prevent>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Your Name">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Your Email">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Website">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <textarea class="form-control" cols="30" rows="5"
                                                placeholder="Your Comment..."></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="checkme">
                                            <label class="form-check-label" for="checkme">
                                                Save my name, email, and website in this browser for the next time I
                                                comment.
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <button type="submit" class="submit-btn">Post A Comment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                -->


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

}
</script>