<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc green-color">
                        <div class="post-thumb">
                            <img style="height: 450px; object-fit: fill; width: 100%;"
                                src="../../assets/images/blog/native-iac-tools.png" alt="blog-details">
                        </div>
                        <div class="post-meta">
                            <ul>
                                <li>
                                    <i class="ph-tag"></i>
                                    <router-link to="/blog-categories/infrastructure-as-code">IaC</router-link>
                                </li>
                                <li>
                                    <i class="ph-calendar-check"></i>
                                    1 Jan, 2025
                                </li>
                            </ul>
                        </div>

                        <!-- TITLE -->
                        <h2 style="margin-bottom: 25px;">Native IaC Tools on AWS: CloudFormation and CDK</h2>

                        <!-- SUMMARY -->
                        <BlogSummary :anchorTags="summary" />

                        <hr style="margin-bottom: 25px;">
                        <!-- CONTENT -->
                        <div>
                            <h4 id="introduction" style="margin-bottom: 25px;">Introduction</h4>
                            <p>
                                Infrastructure as Code (IaC) has revolutionized how cloud resources are managed. AWS
                                provides
                                two powerful native IaC tools: <strong>CloudFormation</strong> and the <strong>Cloud
                                    Development Kit (CDK)</strong>.
                                These tools allow users to define, provision, and manage infrastructure using
                                declarative
                                templates or programming languages, streamlining deployments and minimizing manual
                                errors.
                            </p>
                        </div>

                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="cloudformation" style="margin-bottom: 25px;">What is CloudFormation?</h4>
                            <p>
                                AWS CloudFormation is a declarative IaC tool that enables users to describe their cloud
                                resources in JSON or YAML.
                                It acts as an orchestration service, ensuring that the infrastructure is deployed and
                                updated in a safe and consistent manner.
                            </p>
                            <ul>
                                <li><strong>Advantages:</strong> Simplifies resource management, supports rollback on
                                    failure, and integrates with most AWS services.</li>
                                <li><strong>Limitations:</strong> Verbose templates and limited flexibility for complex
                                    logic.</li>
                            </ul>
                        </div>

                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="cdk" style="margin-bottom: 25px;">What is the AWS Cloud Development Kit (CDK)?</h4>
                            <p>
                                The CDK takes a programmatic approach to IaC, enabling developers to use familiar
                                programming languages
                                such as TypeScript, Python, and Java to define their infrastructure. It translates these
                                definitions into
                                CloudFormation templates, combining flexibility and abstraction.
                            </p>
                            <ul>
                                <li><strong>Advantages:</strong> Encourages reuse of code, integrates seamlessly with
                                    IDEs, and supports testing.</li>
                                <li><strong>Limitations:</strong> Dependency on programming skills and larger initial
                                    learning curve.</li>
                            </ul>
                        </div>

                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="demo" style="margin-bottom: 25px;">Deploying an S3 Bucket: CloudFormation vs. CDK
                            </h4>
                            <p>
                                Let’s deploy an S3 bucket using both CloudFormation and CDK to highlight their
                                respective approaches.
                            </p>

                            <h5>CloudFormation YAML Template:</h5>
                            <VCodeBlock :code="cloudFormationTemplate" highlightjs lang="yaml" theme="atom-one-dark" />

                            <h5>CDK TypeScript Code:</h5>
                            <VCodeBlock :code="cdkCode" highlightjs lang="typescript" theme="atom-one-dark" />
                        </div>

                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="choosing-tool" style="margin-bottom: 25px;">Which Tool Should You Choose?</h4>
                            <p>
                                The choice between CloudFormation and CDK depends on your team's expertise and project
                                requirements:
                            </p>
                            <ul>
                                <li><strong>CloudFormation:</strong> Ideal for teams seeking simplicity and a
                                    declarative approach.</li>
                                <li><strong>CDK:</strong> Best for developers who prefer programmatic control and
                                    abstraction.</li>
                            </ul>
                        </div>

                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="references" style="margin-bottom: 25px;">References</h4>
                            <ul>
                                <li><a href="https://aws.amazon.com/cloudformation/">AWS CloudFormation</a></li>
                                <li><a href="https://aws.amazon.com/cdk/">AWS CDK</a></li>
                                <li><a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation
                                        Documentation</a></li>
                                <li><a href="https://docs.aws.amazon.com/cdk/latest/guide/home.html">CDK
                                        Documentation</a></li>
                            </ul>
                        </div>

                        <Tags :tags="['aws', 'cloudformation', 'cdk', 'iac', 'automation']" />
                    </div>

                    <!-- ShareThis BEGIN -->
                    <div class="sharethis-inline-share-buttons"></div><!-- ShareThis END -->

                    <!-- Comments -->
                    <Comments :article="'cloudformation-cdk'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head';
import imageUrl from '../../assets/images/blog/native-iac-tools.png';

import Comments from '../Comments/Comments.vue';
import BlogSummary from '../BlogSummary/BlogSummary.vue';
import Tags from '../Tags/Tags.vue';

export default {
    name: 'BlogDetailsCloudFormationCDK',
    components: {
        Comments,
        BlogSummary,
        Tags,
    },
    data: () => ({
        cloudFormationTemplate: `Resources:
  S3Bucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: my-cf-bucket`,
        cdkCode: `import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class MyCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Bucket(this, 'MyCdkBucket', {
      bucketName: 'my-cdk-bucket',
    });
  }
}`,
        summary: [
            { id: 'introduction', title: 'Introduction' },
            { id: 'cloudformation', title: 'AWS CloudFormation' },
            { id: 'cdk', title: 'What is the AWS Cloud Development Kit (CDK)?' },
            { id: 'demo', title: 'Deploying an S3 Bucket: CloudFormation vs. CDK' },
            { id: 'choosing-tool', title: 'Which Tool Should You Choose?' },
            { id: 'references', title: 'References' },
        ]
    }),
};
</script>
