<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc green-color">
                        <div class="post-thumb">
                            <img style="height: 450px; object-fit: fill; width: 100%;"
                                src="../../assets/images/blog/github-actions-iam-roles.gif" alt="blog-details">
                        </div>
                        <div class="post-meta">
                            <ul>
                                <li>
                                    <i class="ph-tag"></i>
                                    <router-link to="/blog-categories/identity">IDENTITY</router-link>
                                </li>
                                <li>
                                    <i class="ph-calendar-check"></i>
                                    02 Jun, 2024
                                </li>
                            </ul>
                        </div>

                        <!-- TITLE -->
                        <h2 style="margin-bottom: 25px;">
                            {{ title }}</h2>

                        <!-- Summary -->
                        <BlogSummary :anchorTags="summary" />

                        <hr style="margin-bottom: 25px;">
                        <!-- Content -->
                        <div>
                            <h4 id="introduction" style="margin-bottom: 25px;">Introduction</h4>

                            <p>Managing AWS deployments <strong>securely and efficiently</strong> can be challenging,
                                especially when relying
                                on static IAM user access keys. However, by integrating GitHub Actions with AWS using
                                <strong>OpenID
                                    Connect (OIDC) and IAM roles</strong>, you can enhance security and streamline your
                                CI/CD workflows.
                                This method leverages short-term credentials, eliminating the need for long-term access
                                keys.
                            </p>

                            <p>In this blog post, we'll explore how to configure a GitHub repository to assume an IAM
                                role
                                in your AWS account, enabling automated deployments and updates triggered by your GitHub
                                workflows. We'll guide you through the process of setting up an OIDC-trusted connection
                                between GitHub and AWS, detailing how to map your repository to an IAM role.
                            </p>

                            <p>By the end of this post, you'll understand how to create a secure and scalable deployment
                                pipeline that uses IAM OIDC identity providers, allowing you to control access from
                                specific
                                branches and repositories. This approach not only enhances security but also simplifies
                                the
                                management of credentials, making your AWS operations more robust and efficient.
                            </p>
                        </div>


                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="environment" style="margin-bottom: 25px;">Setting up the environment</h4>

                            <ol>
                                <li>
                                    <p><strong>Install AWS CDK:</strong></p>
                                    <p>Ensure you have the AWS CDK installed. If not, install it using npm:</p>
                                    <VCodeBlock :code="installNpmCode" highlightjs lang="bash" theme="atom-one-dark" />
                                </li>
                                <li>
                                    <p><strong>Initialize a New CDK Project:</strong></p>
                                    <p>Create a new directory for your CDK project and initialize it:</p>
                                    <VCodeBlock :code="initProjectCode" highlightjs lang="bash" theme="atom-one-dark" />
                                </li>
                                <li>
                                    <p><strong>Install Dependencies</strong></p>
                                    <p>Navigate to your project directory and install the necessary dependencies:</p>
                                    <VCodeBlock :code="installDependenciesCode" highlightjs lang="bash"
                                        theme="atom-one-dark" />
                                </li>
                                <li>
                                    <p><strong>Create some resources to test the workflow:</strong></p>
                                    <p>For example, you can create an S3 bucket:</p>
                                    <VCodeBlock :code="s3BucketCode" highlightjs lang="typescript"
                                        theme="atom-one-dark" />
                                </li>
                                <li>
                                    <p><strong>Push your code to your Github Repo</strong></p>
                                </li>
                            </ol>
                        </div>


                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 style="margin-bottom: 25px;">Create an OIDC provider in your account</h4>

                            <ol>
                                <li>
                                    <p>Open IAM console and choose <strong>Identity providers</strong></p>
                                </li>
                                <li>
                                    <p>Choose <strong>Add provider</strong> and choose <strong>OpenID Connect</strong>
                                        for
                                        <strong>Provider type</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>For <strong>Provider URL</strong> enter the URL of the GitHub OIDC IdP: <a
                                            disabled>https://token.actions.githubusercontent.com</a></p>
                                </li>
                                <li>
                                    <p>For <strong>Audience</strong> enter: <a disabled>sts.amazonaws.com</a></p>
                                </li>
                                <li>
                                    <p>Select your newly created <strong>provider</strong> and note its
                                        <strong>ARN</strong>.
                                    </p>
                                </li>
                            </ol>

                            <p>To create an OIDC provider for GitHub (AWS CLI):</p>

                            <VCodeBlock :code="oidcCliCode" highlightjs lang="bash" theme="atom-one-dark" />



                            <div class="post-thumb">
                                <img style="height: 450px; object-fit: fill; width: 100%;"
                                    src="../../assets/images/blog/github-actions-iam-roles/1.png" alt="blog-details">
                            </div>
                        </div>


                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="iam-role" style="margin-bottom: 25px;">Create an IAM role and scope the trust policy
                            </h4>
                            <ol>
                                <li>Select <strong>the newly created IDP </strong>and click on <strong>Assign
                                        role</strong>.
                                </li>
                                <li>
                                    <p>Create or choose an existing role.</p>
                                    <p><Strong>Note:</Strong> The role must have enough permissions to create the
                                        resources
                                        you need.</p>
                                </li>
                                <li>
                                    <p>To scope the trust policy (IAM console), select the IAM Role and choose
                                        <strong>Edit trust relationship.</strong>
                                    </p>
                                    <VCodeBlock :code="trustPolicyCode" highlightjs lang="json" theme="atom-one-dark" />

                                </li>
                            </ol>
                        </div>



                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="github-action" style="margin-bottom: 25px;">Create a GitHub action to invoke the AWS
                                CLI</h4>

                            <ol>
                                <li>
                                    <p>Go to your GitHub repository and select <strong>Settings</strong> then
                                        <strong>Secrets and variables </strong>then <strong>Actions.</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>Add a new <strong>Repository secret</strong> with name:
                                        <strong>ACTIONS_ROLE_GITHUB</strong> and secret value: <strong>the role ARN you
                                            created</strong>.
                                    </p>
                                </li>
                                <li>
                                    <p>Add a <strong>deploy.yml </strong> file in <strong>./github/workflows/</strong>
                                    </p>
                                </li>
                                <li>
                                    <p>Copy and paste then adapt the following code with your AWS_REGION...etc</p>
                                    <VCodeBlock :code="githubActionsCode" highlightjs lang="yaml"
                                        theme="atom-one-dark" />
                                </li>
                                <li>
                                    <p>Commit and push your code to Github</p>
                                </li>
                            </ol>

                            <div class="post-thumb">
                                <img style="height: 450px; object-fit: fill; width: 100%;"
                                    src="../../assets/images/blog/github-actions-iam-roles/2.png" alt="blog-details">
                            </div>
                        </div>


                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="references" style="margin-bottom: 25px;">References</h4>
                            <ul>
                                <li><a
                                        href="https://aws.amazon.com/blogs/security/use-iam-roles-to-connect-github-actions-to-actions-in-aws/">AWS
                                        Security Blog</a></li>
                                <li><a
                                        href="https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services">Github
                                        Docs</a></li>
                            </ul>
                        </div>

                        <Tags
                            :tags="['aws', 'aim', 'security', 'permissions', 'roles', 'policies', 'github-actions', 'integration', 'oidc']" />
                    </div>

                    <hr style="margin-bottom: 25px;">

                    <!-- ShareThis BEGIN -->
                    <div class="sharethis-inline-share-buttons"></div><!-- ShareThis END -->

                    <!-- Comments -->
                    <Comments :article="'github-actions-iam-role'" />

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
import Comments from '../Comments/Comments.vue';
import BlogSummary from '../BlogSummary/BlogSummary.vue';
import Tags from '../Tags/Tags.vue';

import imageUrl from '../../assets/images/blog/github-actions-iam-roles.gif';

export default {

    name: 'BlogDetailsGithubActionsIAMRoles',
    components: {
        Comments,
        BlogSummary,
        Tags
    },
    data() {
        return {
            title: 'Seamless Integration: Configuring GitHub Actions with OIDC and IAM Roles for Secure, Keyless Access',
            image: '../../assets/images/blog/iam-introduction.png',
            installNpmCode: `npm install -g aws-cdk`,
            initProjectCode: `mkdir my-cdk-project
cd my-cdk-project
cdk init app --language typescript`,
            installDependenciesCode: `npm install`,
            s3BucketCode: `import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { v4 as uuidv4 } from 'uuid';

export class GithubOidcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Generate a UUID
    const uuid = uuidv4();

    const bucket = new Bucket(this, 'MyFirstBucket', {
      bucketName: \`my-dummy-bucket-\${ uuid }\`, // Globally unique Bucket name with UUID
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
`,
            oidcCliCode: `aws iam create-open-id-connect-provider \\
--url "https://token.actions.githubusercontent.com" \\
--thumbprint-list "6938fd4d98bab03faadb97b34396831e3780aea1" \\
--client-id-list 'sts.amazonaws.com'`,
            trustPolicyCode: `{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "<arn:aws:iam::111122223333:oidc-provider/token.actions.githubusercontent.com>"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringEquals": {
                    "token.actions.githubusercontent.com:sub": "repo: <your-github/EXAMPLEREPO>:ref:refs/heads/<ExampleBranch>",
                    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
                }
            }
        }
    ]
}`,
            githubActionsCode: `name: Deploy CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

env:
  AWS_REGION : 'ca-central-1' # change this to your region

permissions:
      id-token: write   # This is required for requesting the JWT
      contents: read    # This is required for actions/checkout

jobs:
  AssumeRoleAndDeployBucket:
    runs-on: ubuntu-latest
    steps:
    - name: Set up Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'

    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Install cdk dependencies
      run: npm install --frozen-lockfile

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        role-to-assume: \${{ secrets.ACTIONS_ROLE_GITHUB }}
        role-session-name: GitHub_to_AWS_via_FederatedOIDC
        aws-region: \${{ env.AWS_REGION }}

    - name: Install AWS CDK
      run: npm install -g aws-cdk

    - name: Bootstrap and deploy CDK app
      run: cdk bootstrap && cdk deploy --require-approval never
      env:
        AWS_REGION: \${{ env.AWS_REGION }}`,
            summary: [
                { id: 'introduction', title: 'Introduction' },
                { id: 'environment', title: 'Setting up the environment' },
                { id: 'oidc-provider', title: 'Create an OIDC provider in your account' },
                { id: 'iam-role', title: 'Create an IAM role and scope the trust policy' },
                { id: 'github-action', title: 'Create a GitHub action to invoke the AWS CLI' },
                { id: 'references', title: 'References' }
            ]
        }
    },
    setup() {
        useHead({
            title: 'Seamless Integration: Configuring GitHub Actions with OIDC and IAM Roles for Secure, Keyless Access',
            meta: [
                { name: 'description', content: 'Discover how to integrate AWS and GitHub using OIDC to automate resource deployment, eliminating the need for long-term IAM user access keys.' },
                { name: 'keywords', content: 'AWS, IAM, Identity and Access Management, Security, Cloud, AWS Security, IAM Roles, IAM Policies, Github, OIDC, Github Actions' },
                { name: 'author', content: 'Safouene Gharbi' },
                { property: 'og:title', content: 'Seamless Integration: Configuring GitHub Actions with OIDC and IAM Roles for Secure, Keyless Access' },
                { property: 'og:description', content: 'Discover how to integrate AWS and GitHub using OIDC to automate resource deployment, eliminating the need for long-term IAM user access keys.' },
                { property: 'og:image', content: imageUrl },
                { property: 'og:image:width', content: "1200" },
                { property: 'og:image:height', content: "627" },
                { property: 'og:url', content: 'https://blog.gharbidev.com/blog-details/github-actions-iam-roles' },
                { property: 'og:type', content: 'article' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Seamless Integration: Configuring GitHub Actions with OIDC and IAM Roles for Secure, Keyless Access' },
                { name: 'twitter:description', content: 'Discover how to integrate AWS and GitHub using OIDC to automate resource deployment, eliminating the need for long-term IAM user access keys.' },
                { name: 'twitter:image', content: imageUrl },
            ]
        });
    }


}
</script>