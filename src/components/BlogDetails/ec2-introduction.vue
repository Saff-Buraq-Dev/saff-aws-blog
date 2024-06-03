<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc green-color">
                        <div class="post-thumb">
                            <img style="height: 450px; object-fit: fill; width: 100%;"
                                src="../../assets/images/blog/ec2-introduction.webp" alt="blog-details">
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
                        <h2 style="margin-bottom: 25px;">Discovering EC2: Your Gateway to Cloud Computing with AWS</h2>

                        <h4 style="margin-bottom: 25px;">Introduction</h4>

                        <p>Welcome to the world of <a href="https://aws.amazon.com/pm/ec2" target="_blank"
                                rel="noopener noreferrer">AWS
                                EC2</a>, a universe where IT infrastructure meets the agility and
                            innovation of the cloud. EC2 revolutionizes how we <strong>deploy, manage, and
                                scale</strong> applications.
                            With its promise of flexibility and control, EC2 provides a robust platform to build
                            scalable solutions without the burden of traditional hardware. Whether you are just starting
                            out or looking to enhance your cloud skills, this post will serve as a launchpad for you to
                            explore the limitless possibilities of EC2.</p>

                        <h4 style="margin-bottom: 25px;">Advantages of EC2</h4>

                        <p>EC2 stands out for its ability to simplify the scaling of IT resources. With
                            its exceptional flexibility, users can select <strong>instance configurations</strong> that
                            suit their specific needs, with the freedom to adjust capacity in minutes. Not only does
                            EC2 significantly <strong>reduce time to market</strong>, but it also
                            offers a <strong>variable cost structure</strong> that transforms <strong>capital
                                expenditures</strong> into <strong>operating expenses</strong>. This allows
                            businesses of all sizes to access computing power <strong>without
                                heavy initial investment</strong>, making <strong>innovation</strong> more agile and
                            less costly.

                        </p>

                        <h4 style="margin-bottom: 25px;">EC2 instances</h4>

                        <p>EC2 instances are the foundation of AWS flexibility, designed to adapt to a variety of use
                            cases through a wide range of options. Here are some of the main categories:</p>
                        <ol>
                            <li><strong>General Purpose Instances:</strong> Ideal for balanced workloads with a
                                combination of compute,
                                memory, and networking. Perfect for web servers, enterprise applications, and databases.
                            </li>
                            <li><strong>Compute Optimized Instances:</strong> Provide high compute performance at a
                                lower cost
                                per
                                compute unit, suitable for scientific tasks, engineering, batch processing, and
                                gaming
                                applications.</li>
                            <li><strong>Memory Optimized Instances:</strong> Designed for workloads that process large
                                databases,
                                in-memory caches, and real-time analytics, offering fast access to memory with
                                greater
                                capacity.</li>
                            <li><strong>Storage Optimized Instances:</strong> Offer high I/O and local SSD storage for
                                applications that
                                require frequent access to large and detailed datasets.</li>
                            <li><strong>GPU Accelerated Instances:</strong> Designed for graphics-intensive tasks such
                                as 3D
                                rendering,
                                video encoding, and machine learning applications that require graphics processors.
                            </li>
                            <li><strong>High Network Performance Instances:</strong> Offer high bandwidth and low
                                latency for
                                network-intensive applications, ideal for data-intensive transfers, high-performance
                                computing (HPC), and distributed database applications.</li>
                        </ol>

                        <p>Each instance type is also available in multiple sizes, allowing users to precisely scale
                            their resources according to the workload, ensuring efficiency and cost optimization. Here
                            is an overview of some instance types:</p>


                        <div class="post-thumb">
                            <img src="../../assets/images/blog/ec2-instances-1.webp" alt="blog-details">
                        </div>

                        <hr>

                        <h4 style="margin-bottom: 25px;">Pricing</h4>
                        <p>EC2 pricing is flexible and designed to accommodate different needs and budgets, offering
                            several models that can significantly reduce costs:</p>

                        <ol>
                            <li><strong>On-Demand Payment:</strong> You pay for compute instances by the hour or second
                                (depending on the
                                instance type), with no long-term commitment. This is ideal for applications with
                                irregular or intermittent workloads that cannot be interrupted.</li>
                            <li><strong>Reserved Instances:</strong> By committing to use EC2 for a period of 1 or 3
                                years, you
                                receive a
                                substantial discount on the hourly rate, which is perfect for applications with a
                                steady
                                state or predictable usage.</li>
                            <li><strong>Spot Instances:</strong> Allow you to take advantage of unused compute capacity
                                in the
                                AWS cloud
                                at prices that can be up to 90% lower than On-Demand rates. Spot Instances are a
                                cost-effective option for flexible workloads that can tolerate interruptions.</li>
                            <li><strong>Reserved Instances for Dedicated Capacity:</strong> Provide a dedicated server
                                space for
                                your
                                use, useful for regulatory or compliance requirements that necessitate isolated
                                physical
                                resources.</li>
                            <li><strong>Savings Plans:</strong> A flexible pricing offering that allows you to obtain
                                discounts
                                in
                                exchange for a one- or three-year consumption commitment.</li>
                        </ol>

                        <p>
                            The combination of these pricing options offers great flexibility, allowing users to
                            optimize their costs based on their specific needs. Additionally, AWS also provides an EC2
                            pricing calculator to help users estimate costs before committing.
                        </p>

                        <hr>

                        <!-- TUTO -->

                        <h4 style="margin-bottom: 25px;"></h4>

                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="../../assets/images/blog/ec2-introduction/1.webp"
                                        class="d-block w-100 carousel-image" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="../../assets/images/blog/ec2-introduction/2.webp"
                                        class="d-block w-100 carousel-image" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="../../assets/images/blog/ec2-introduction/3.webp"
                                        class="d-block w-100 carousel-image" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="../../assets/images/blog/ec2-introduction/4.webp"
                                        class="d-block w-100 carousel-image" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="../../assets/images/blog/ec2-introduction/5.webp"
                                        class="d-block w-100 carousel-image" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="../../assets/images/blog/ec2-introduction/6.png"
                                        class="d-block w-100 carousel-image" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="../../assets/images/blog/ec2-introduction/7.webp"
                                        class="d-block w-100 carousel-image" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="../../assets/images/blog/ec2-introduction/8.webp"
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

                        <div>
                            <p>Launching an EC2 instance on AWS is a straightforward process that can be accomplished in
                                a few key steps:</p>

                            <ol>
                                <li><strong>Select the Image:</strong> Start by choosing an Amazon Machine Image (AMI).
                                    For this example, we will use Amazon Linux, which provides a stable, secure, and
                                    high-performance environment for applications.</li>
                                <li><strong>Instance Configuration:</strong> Select the required instance type. For a
                                    simple web application, a small instance like t2.micro may suffice.</li>
                                <li><strong>Configure Key Pair:</strong> A key pair is necessary to securely connect to
                                    your instance. If you do not have a key pair, AWS allows you to create one that you
                                    can download.</li>
                                <li><strong>Set Up Security Groups:</strong> Configure a security group that defines the
                                    inbound and outbound traffic rules. For this case, open port 22 for SSH and ensure
                                    traffic is allowed from any IP address (0.0.0.0/0), although for enhanced security,
                                    you should limit the allowed IPs.</li>
                                <li><strong>Configure UserData</strong> Use the UserData field to automate the
                                    deployment
                                    of your web server. Here is a simple script that installs and starts httpd (Apache
                                    Web Server) and creates an index.html page with "Hello World":</li>
                            </ol>
                        </div>

                        <VCodeBlock :code="userDataCode" highlightjs lang="bash" theme="atom-one-dark" />

                        <!-- DEBUG -->
                        <hr style="margin-bottom: 25px;">
                        <h4>Troubleshooting EC2 Web Server: Why is my instance not responding on port 80?</h4>

                        <ol>
                            <li>
                                <p><strong>Verification of the Issue:</strong>After deploying your EC2 instance and
                                    launching your web server, you might encounter a scenario where your browser cannot
                                    reach the server on port 80. This is a common situation that can often be attributed
                                    to
                                    an incorrect security group configuration associated with your instance. You must
                                    wait
                                    for the instance to transition to the Running state and for both checks to pass
                                    before
                                    trying.</p>

                                <div id="carouselExampleControls-1" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="../../assets/images/blog/ec2-introduction/10.webp"
                                                class="d-block w-100 carousel-image" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../../assets/images/blog/ec2-introduction/11.webp"
                                                class="d-block w-100 carousel-image" alt="...">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleControls-1" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleControls-1" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </li>

                            <li>
                                <p><strong>Correcting the Configuration:</strong>Modify the inbound rules of your
                                    security group to allow traffic on port 80. Add a rule that specifies the type of
                                    traffic (HTTP), the port (80), the source (which can be your IP address or 0.0.0.0/0
                                    for public access), and a description.
                                </p>

                                <div id="carouselExampleControls-2" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="../../assets/images/blog/ec2-introduction/12.webp"
                                                class="d-block w-100 carousel-image" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../../assets/images/blog/ec2-introduction/13.webp"
                                                class="d-block w-100 carousel-image" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../../assets/images/blog/ec2-introduction/14.webp"
                                                class="d-block w-100 carousel-image" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../../assets/images/blog/ec2-introduction/15.webp"
                                                class="d-block w-100 carousel-image" alt="...">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleControls-2" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleControls-2" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <p>After applying the modification, refresh the page in your browser. You should now see
                                    the web page displaying the "Hello World" message.</p>
                            </li>

                            <li>
                                <p><strong>Security Groups: </strong>Security groups in AWS EC2 act as virtual
                                    firewalls, controlling inbound and outbound traffic for one or more instances. They
                                    are essential for ensuring that only desired communications are allowed to and from
                                    your EC2 instances. Here are some key points to understand:</p>
                                <ul>
                                    <li><strong>Incoming Rules (Inbound):</strong> These rules define the traffic
                                        allowed to access the instance. For example, for a web server, you would
                                        typically allow HTTP and HTTPS traffic on ports 80 and 443, respectively.</li>
                                    <li><strong>Outgoing Rules (Outbound):</strong> These rules determine how the
                                        instance can communicate outward. By default, AWS allows all outgoing traffic,
                                        but this can be restricted as needed.</li>
                                    <li><strong>Specificity:</strong> Rules can be specific in terms of protocol type
                                        (e.g., TCP, UDP, ICMP), port number, and source or destination IP addresses. For
                                        SSH, you specify TCP protocol on port 22.</li>
                                    <li><strong>Statefulness:</strong> Security groups are stateful. If you allow
                                        incoming traffic, corresponding outgoing traffic is automatically allowed,
                                        regardless of outbound traffic rules.</li>
                                    <li><strong>On-the-Fly Modification:</strong> You can modify security group rules at
                                        any time; the changes are applied immediately to associated instances.</li>
                                    <li><strong>Security:</strong> It is recommended to allow only necessary IP
                                        addresses, especially for sensitive ports like SSH (port 22). Instead of
                                        0.0.0.0/0, which allows anyone on the internet to attempt a connection, it is
                                        better to specify your own IP address or a range of trusted IP addresses.</li>
                                </ul>
                            </li>

                        </ol>

                        <hr style="margin-bottom: 25px;">

                        <h4 style="margin-bottom: 25px;">Connecting to the Instance</h4>

                        <ol>
                            <li>
                                <p><strong>SSH: </strong></p>
                                <ul>
                                    <li>Locate the key pair you configured earlier.</li>
                                    <li>Change the permissions of the key file so that it is not writable by other
                                        users. In a Linux or MacOS terminal, use the command:
                                        <VCodeBlock :code="chmodCode" highlightjs lang="bash" theme="atom-one-dark" />
                                    </li>
                                    <li>Utilisez la commande suivante pour initier une connexion SSH :
                                        <VCodeBlock :code="sshCode" highlightjs lang="bash" theme="atom-one-dark" />
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p><strong>Instance connect: </strong></p>
                                <div id="carouselExampleControls-3" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="../../assets/images/blog/ec2-introduction/16.webp"
                                                class="d-block w-100 carousel-image" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="../../assets/images/blog/ec2-introduction/17.webp"
                                                class="d-block w-100 carousel-image" alt="...">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleControls-3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleControls-3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <p>AWS Instance Connect provides a <strong>secure way</strong> to connect to your EC2
                                    instances directly
                                    from the AWS console. Here are the steps to use this feature:</p>
                                <ul>
                                    <li>Log in to the AWS console and navigate to the EC2 section.</li>
                                    <li>Select the instance you want to connect to.</li>
                                    <li>Click the "Connect" button at the top of the screen.</li>
                                    <li>In the dialog box that appears, choose the "EC2 Instance Connect" tab.</li>
                                    <li>Enter the username you want to use for the connection. By default, this is
                                        ec2-user for Amazon Linux instances.</li>
                                    <li>Click "Connect" to open a terminal session in your web browser.</li>
                                    <li>You will be connected directly to your instance without needing to use an SSH
                                        key.</li>
                                </ul>
                            </li>
                        </ol>

                        <hr style="margin-bottom: 25px;">

                        <blockquote class="wp-block-quote">
                            <p><strong>Security Warning </strong></p>
                            <p>Please note that the configurations and methods presented in this article are intended
                                for demonstration and learning purposes. They do not necessarily follow the best
                                security practices recommended by AWS. In a production environment, it is crucial to
                                implement stricter security measures, such as restricting SSH access to specific IP
                                addresses, using more restrictive security groups, and rigorously managing access keys.
                                This guide aims to simplify concepts for new users and should not be used as a template
                                for secure production architectures. For your actual deployments, be sure to consult AWS
                                security documentation and follow expert advice to protect your cloud resources.</p>
                        </blockquote>

                        <hr style="margin-bottom: 25px;">
                        <h4 style="margin-bottom: 25px;">References</h4>
                        <ul>
                            <li><a href="https://aws.amazon.com/ec2/">Official documentation</a></li>
                            <li><a href="https://aws.amazon.com/ec2/pricing/">Amazon EC2 Pricing</a></li>
                            <li><a href="https://aws.amazon.com/fr/ec2/instance-explorer/">Instance Type Explorer</a>
                            </li>
                            <li><a href="https://www.youtube.com/watch?v=8bIW7qlldLg">Digital Cloud – AWS Tutorial on
                                    Amazon EC2</a></li>
                        </ul>

                        <div class="post-footer">
                            <div class="post-tags">
                                <span class="sub">Tags:</span>
                                <ul>
                                    <li><a href="/blog-tags/aws" rel="tag">aws</a></li>
                                    <li><a href="/blog-tags/ec2" rel="tag">ec2</a></li>
                                    <li><a href="/blog-tags/iaas" rel="tag">iaas</a></li>
                                    <li><a href="/blog-tags/linux" rel="tag">linux</a></li>
                                    <li><a href="/blog-tags/security-groups" rel="tag">security-groups</a></li>
                                    <li><a href="/blog-tags/ssh" rel="tag">ssh</a></li>
                                    <li><a href="/blog-tags/access-keys" rel="tag">access-keys</a></li>
                                    <li><a href="/blog-tags/vpc" rel="tag">vpc</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- ShareThis BEGIN -->
                    <div class="sharethis-inline-share-buttons"></div><!-- ShareThis END -->

                    <!-- Comments -->
                    <Comments :article="'ec2-introduction'" />


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
import imageUrl from '../../assets/images/blog/ec2-introduction.webp';

import Comments from '../Comments/Comments.vue';

export default {

    name: 'BlogDetailsEc2Introduction',
    components: {
        Comments
    },

    data: () => ({
        userDataCode: `#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "Hello World from $(hostname -i)" > /var/www/html/index.html`,
        chmodCode: `chmod 400 /path/to/your-key-pair.pem`,
        sshCode: `ssh -i /path/to/your-key-pair.pem ec2-user@public-ip`
    }),
    setup() {
        useHead({
            title: 'Discovering EC2: Your Gateway to Cloud Computing with AWS',
            meta: [
                { name: 'description', content: 'Discovering EC2: Your Gateway to Cloud Computing with AWS' },
                { name: 'keywords', content: 'AWS, Cloud Computing, EC2, Amazon Web Services' },
                { name: 'author', content: 'Safouene Gharbi' },
                { property: 'og:title', content: 'Discovering EC2: Your Gateway to Cloud Computing with AWS' },
                { property: 'og:description', content: 'An introduction to Amazon EC2, the foundational service that allows you to launch and manage virtual servers in the cloud.' },
                { property: 'og:image', content: imageUrl },
                { property: 'og:image:width', content: "1200" },
                { property: 'og:image:height', content: "627" },
                { property: 'og:url', content: 'https://blog.gharbidev.com/blog-details/ec2-introduction' },
                { property: 'og:type', content: 'article' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Discovering EC2: Your Gateway to Cloud Computing with AWS' },
                { name: 'twitter:description', content: 'An introduction to Amazon EC2, the foundational service that allows you to launch and manage virtual servers in the cloud.' },
                { name: 'twitter:image', content: imageUrl },
            ]
        });
    },


}
</script>