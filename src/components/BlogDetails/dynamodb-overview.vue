<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc green-color">
                        <div class="post-thumb">
                            <img style="height: 450px; object-fit: fill; width: 100%;"
                                src="../../assets/images/blog/dynamodb-overview.png" alt="blog-details">
                        </div>
                        <div class="post-meta">
                            <ul>
                                <li>
                                    <i class="ph-tag"></i>
                                    <router-link to="/blog-categories/serverless">SERVERLESS</router-link>
                                </li>
                                <li>
                                    <i class="ph-calendar-check"></i>
                                    12 Jun, 2024
                                </li>
                            </ul>
                        </div>

                        <!-- TITLE -->
                        <h2 style="margin-bottom: 25px;">
                            {{ title }}</h2>

                        <!-- SUMMARY -->
                        <BlogSummary :anchorTags="summary" />

                        <!-- CONTENT -->
                        <div>
                            <h4 id="introduction" style="margin-bottom: 25px;">Introduction</h4>

                            <p>Amazon DynamoDB is a fully <strong>managed NoSQL</strong> database service provided by
                                AWS.
                                It is designed to
                                deliver <strong>high performance, scalability, and reliability</strong> for a wide range
                                of
                                applications.
                            </p>

                            <p>In
                                this article, we will cover everything you need to know about DynamoDB, including its
                                key
                                features, data model, pricing, use cases, and best practices.
                            </p>
                        </div>

                        <hr style="margin-bottom: 25px;">

                        <div>
                            <h4 id="sql-comparison" style="margin-bottom: 25px;">Comparison with SQL</h4>

                            <table class="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">SQL / RDBMS</th>
                                        <th scope="col">DynamoDB</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tables</td>
                                        <td>Tables</td>
                                    </tr>
                                    <tr>
                                        <td>Rows</td>
                                        <td>Items</td>
                                    </tr>
                                    <tr>
                                        <td>Columns</td>
                                        <td>Attributes</td>
                                    </tr>
                                    <tr>
                                        <td>Primary Keys</td>
                                        <td>Primary Keys</td>
                                    </tr>
                                    <tr>
                                        <td>Indexes</td>
                                        <td>Local Secondary Indexes</td>
                                    </tr>
                                    <tr>
                                        <td>Views</td>
                                        <td>Global Secondary Indexes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Data Types -->
                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="data-types" style="margin-bottom: 25px;">Data Types in DynamoDB</h4>

                            <div class="faq-accordion style-two">
                                <div class="accordion" id="faqAccordion">
                                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="false" aria-controls="collapseOne">
                                            Scalar Types
                                        </button>
                                        <div id="collapseOne" class="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div class="accordion-body">
                                                <ul>
                                                    <li>
                                                        <p><strong>String:</strong></p>
                                                        <ul>
                                                            <li>Stores text data</li>
                                                            <li>Doesn't support empty values</li>
                                                            <li>e.g. "John Doe", "Finance Department", ...etc</li>
                                                        </ul>
                                                        <p><strong>NB: </strong>If used as a partition key it has a size
                                                            limit
                                                            of 2KB, and if used as a sort key it has a limit of 1KB.</p>
                                                    </li>

                                                    <li>
                                                        <p><strong>Number:</strong></p>
                                                        <ul>
                                                            <li>Stores all numeric types</li>
                                                            <li>e.g. 9, -10, 5.55</li>
                                                        </ul>
                                                    </li>

                                                    <li>
                                                        <p><strong>Binary:</strong></p>
                                                        <ul>
                                                            <li>Blobs of binary data</li>
                                                            <li>compressed text or encrypted data or base64 image
                                                                ...etc.
                                                            </li>
                                                            <li>Doesn't support empty values</li>
                                                            <li>e.g. "kdsaNKNnjDsaf90AMvapKkds="</li>
                                                        </ul>
                                                    </li>

                                                    <li>
                                                        <p><strong>Boolean:</strong></p>
                                                        <ul>
                                                            <li>true or false</li>
                                                        </ul>
                                                    </li>

                                                    <li>
                                                        <p><strong>Null:</strong></p>
                                                        <ul>
                                                            <li>Unknown or undefined</li>
                                                        </ul>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="100">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            Set Types
                                        </button>
                                        <div id="collapseTwo" class="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div class="accordion-body">
                                                <ul>
                                                    <li>Unordered collection of a scalar type</li>
                                                    <li>No duplicates allowed</li>
                                                    <li>No empty sets allowed</li>
                                                    <li>All values must be of same scalar type</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            Document Types
                                        </button>
                                        <div id="collapseThree" class="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div class="accordion-body">
                                                <ul>
                                                    <li>
                                                        <p><strong>Lists:</strong></p>
                                                        <ul>
                                                            <li>Ordered collection of values</li>
                                                            <li>Can have multiple data types</li>
                                                            <li>e.g. ["GharbiDev", "is number", 1.0]</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <p><strong>Maps:</strong></p>
                                                        <ul>
                                                            <li>Unordered collection of Key-Value pairs</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <p>These can be nested complex structures with nesting up to 32 levels
                                                    deep.
                                                </p>
                                                <p>Empty lists and maps are allowed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="dynamodb-consistency-model" style="margin-bottom: 25px;">DynamoDB Consistency Model
                            </h4>

                            <p>Amazon DynamoDB's consistency model is designed to ensure high availability and fault
                                tolerance by replicating data across multiple Availability Zones (AZs) within an AWS
                                region.
                                When data is written to DynamoDB, it is automatically replicated (near real time) to
                                multiple
                                storage
                                locations, providing redundancy and protecting against data loss in case of an AZ
                                failure.
                            </p>
                            <p>
                                However, this replication process can lead to eventual consistency, where read
                                operations
                                might return stale data if a recently completed write has not yet propagated to all
                                replicas. <strong>DynamoDB offers two types of read consistency</strong>: eventual
                                consistency, which returns
                                data from any storage location and might be slightly out of date, and strong
                                consistency,
                                which ensures that the most recent data is returned by waiting for all replicas to be
                                updated before responding to a read request. This trade-off between availability and
                                consistency allows applications to choose the level of consistency that best fits their
                                needs.</p>

                            <p>Eventual consistency is the <strong>default</strong> mode for all operations and is 50%
                                cheaper than Strong consistency which has to be requested explicitly if we want the most
                                up-to-date data.
                            </p>

                        </div>



                        <div>
                            <hr style="margin-bottom: 25px;">
                            <h4 id="dynamodb-capacity-units" style="margin-bottom: 25px;">DynamoDB Capacity Units</h4>

                            <p>
                                Tables in DynamoDB are top-level entities that operate independently from one another.
                                Unlike traditional relational databases, DynamoDB does not support foreign keys or
                                inter-table relationships. Instead, it mandates the use of <strong>primary keys</strong>
                                for
                                all query operations, ensuring <strong>efficient queries</strong>. This design allows
                                for
                                precise control over table performance, as each table's throughput capacity can be
                                independently provisioned and adjusted. Throughput capacity, measured in <strong>Read
                                    Capacity Units (RCUs)</strong> and <strong>Write Capacity Units (WCUs)</strong>,
                                determines the performance and cost of DynamoDB tables. Pricing is based on the
                                provisioned
                                RCUs and WCUs and the storage volume, following a <strong>pay-as-you-go model</strong>,
                                making DynamoDB <strong>cost-effective</strong> when provisioned efficiently.
                            </p>


                            <p>A <strong>Read Capacity Unit (RCU)</strong> represents one strongly consistent
                                read per second, or two eventually consistent reads per second, for items up to 4 KB in
                                size.</p>
                            <p>A <strong>Write Capacity Unit (WCU)</strong> represents one write per second for items
                                up to 1 KB in size. It's crucial to provision adequate RCUs and WCUs based on your
                                application's requirements to ensure optimal performance.</p>
                            <p>DynamoDB also offers
                                <strong>on-demand capacity mode</strong>, allowing you to pay for the actual read and
                                write
                                requests you make, which is ideal for applications with unpredictable or variable
                                traffic
                                patterns. Monitoring and adjusting your capacity units can help manage costs and
                                maintain
                                performance levels.
                            </p>
                        </div>




                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h6 id="calculating-read-capacity-units-rcus" style="margin-bottom: 25px;">Calculating Read
                                Capacity Units (RCUs)</h6>

                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                                    <div class="single-what-we-do-box purple-color" style="padding:20px">
                                        <h6><a disabled>Example 1: Strongly Consistent Reads</a></h6>
                                        <p>Suppose you need to read items from your DynamoDB table, and each item is 2
                                            KB in
                                            size. You expect to perform 100 strongly consistent reads per second.</p>
                                        <ul>
                                            <li><strong>Item size: </strong> 2 KB</li>
                                            <li><strong>Number of reads per second: </strong>100</li>
                                            <li>
                                                <p><strong>Read consistency: </strong>Strongly consistent</p>
                                                <p>Each strongly consistent read of up to 4 KB requires 1 RCU. Since our
                                                    item size
                                                    is 2 KBm each read will require 1 RCU.</p>
                                            </li>
                                            <li><strong>RCUs required: </strong>100 reads per second * 1 RCU per read =
                                                100
                                                RCUs</li>
                                        </ul>
                                        <br><br>

                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200"
                                    data-aos-delay="100">
                                    <div class="single-what-we-do-box purple-color" style="padding:20px">
                                        <h6><a disabled>Example 2: Eventually Consistent Reads
                                            </a></h6>
                                        <p>Suppose you need to read items from your DynamoDB table, and each item is 8
                                            KB in
                                            size. You expect to perform 200 eventually consistent reads per second.</p>
                                        <ul>
                                            <li><strong>Item size: </strong> 8 KB</li>
                                            <li><strong>Number of reads per second: </strong>200</li>
                                            <li>
                                                <p><strong>Read consistency: </strong>Eventually consistent</p>
                                                <p>Each eventually consistent read of up to 4 KB requires 0.5 RCU. Since
                                                    our
                                                    item size is 8 KB, each read will require 2 RCUs (8 KB / 4 KB = 2).
                                                </p>
                                            </li>
                                            <li><strong>RCUs required: </strong>200 reads per second * 2 RCUs per read *
                                                0.5
                                                (for eventually consistent) = 200 RCUs</li>
                                        </ul>
                                    </div>
                                    <p></p>
                                </div>
                            </div>
                        </div>


                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h6 id="calculating-read-capacity-units-wcus" style="margin-bottom: 25px;">Calculating Write
                                Capacity Units (WCUs)</h6>

                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                                    <div class="single-what-we-do-box purple-color" style="padding:20px">
                                        <h6><a disabled>Example 1: Simple Write Operation</a></h6>
                                        <p>Suppose you need to write items to your DynamoDB table, and each item is 1 KB
                                            in
                                            size. You expect to perform 50 writes per second.</p>
                                        <ul>
                                            <li><strong>Item size: </strong> 1 KB</li>
                                            <li>
                                                <p><strong>Number of writes per second: </strong>50</p>
                                                <p>Each write of up to 1 KB requires 1 WCU. Since our item size is 1 KB,
                                                    each write will require 1 WCU.</p>
                                            </li>
                                            <li><strong>WCUs required: </strong>50 writes per second * 1 WCU per write =
                                                50
                                                WCUs</li>
                                        </ul>

                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200"
                                    data-aos-delay="100">
                                    <div class="single-what-we-do-box purple-color" style="padding:20px">
                                        <h6><a disabled>Example 2: Larger Write Operation
                                            </a></h6>
                                        <p>Suppose you need to write items to your DynamoDB table, and each item is 3 KB
                                            in
                                            size. You expect to perform 30 writes per second.</p>
                                        <ul>
                                            <li><strong>Item size: </strong> 3 KB</li>
                                            <li>
                                                <p><strong>Number of writes per second: </strong>30</p>
                                                <p>Each write of up to 1 KB requires 1 WCU. Since our item size is 3 KB,
                                                    each write will require 3 WCUs (3 KB / 1 KB = 3).</p>
                                            </li>
                                            <li><strong>WCUs required: </strong>30 writes per second * 3 WCUs per write
                                                = 90
                                                WCUs</li>
                                        </ul>
                                    </div>
                                    <p></p>
                                </div>
                            </div>
                        </div>


                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="dynamodb-partitions" style="margin-bottom: 25px;">DynamoDB Partitions</h4>

                            <p>
                                To design our DynamoDB tables effectively for efficient and cost-effective performance,
                                we
                                must have a certain understanding of how DynamoDB works internally. And the concept of
                                partitions is crucial to understanding how DynamoDB operates under the hood.
                            </p>
                            <p>
                                DynamoDB stores data in partitions. A partition is simply a block of memory allocated by
                                DynamoDB for storage. A table can have one or more partitions depending on its size and
                                allocated throughput. These are the two attributes that control the number of partitions
                                a
                                table will have. Partitions are managed internally by DynamoDB, and as a client or
                                database
                                administrator, we do not have to manage these partitions directly. However, we can
                                certainly
                                influence partition behavior indirectly by paying attention to the provisioned
                                throughput
                                and table size.
                            </p>
                            <p>
                                Each partition in DynamoDB can hold a maximum of 10 GB of data and can provide up to
                                1000
                                WCU or 3000 RCU of throughput. If our demand exceeds one or more of these limits,
                                DynamoDB
                                will allocate additional partitions. This happens in the background without any
                                downtime.
                            </p>
                            <p>
                                Let's understand this with an example. When we create a new table, the initial number of
                                partitions is determined by the provisioned capacity. Suppose we created a table with
                                500
                                RCU and 500 WCU. DynamoDB will calculate the number of required partitions as follows:
                            </p>
                            <p>
                                <vue-mathjax :formula="formula1"></vue-mathjax>
                            </p>
                            <p>
                                This amounts to 0.67, and when rounded is equal to 1. So, DynamoDB will allocate 1
                                partition
                                in this case. Let's call this partition P. Later, if this partition reaches the 10 GB
                                memory
                                limit, DynamoDB will allocate additional partitions.
                            </p>
                            <p>
                                Similarly, if we increase the provisioned capacity, DynamoDB will allocate more
                                partitions
                                as necessary. For example, if we increase the throughput to 1000 RCU and 1000 WCU,
                                DynamoDB
                                will recalculate the number of required partitions as follows:
                            </p>
                            <p>
                                <vue-mathjax :formula="formula2"></vue-mathjax>
                            </p>
                            <p>
                                This amounts to 1.33, and when rounded is equal to 2. So, DynamoDB will now allocate two
                                new
                                partitions, let's call them P1 and P2. DynamoDB will then distribute the data from our
                                existing partition P evenly across the new partitions P1 and P2, and then deallocate the
                                old
                                partition P. The throughput capacity is also evenly divided among all partitions. So, in
                                our
                                case, each of the new partitions will receive half of the provisioned capacity units,
                                with
                                P1 and P2 each receiving 500 RCU and 500 WCU.
                            </p>
                        </div>


                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="dynamodb-local-secondary-indexes" style="margin-bottom: 25px;">DynamoDB Local
                                Secondary
                                Indexes</h4>

                            <p>In DynamoDB, every query operation requires you to specify the <strong>partition
                                    key</strong>. This
                                requirement ensures fast query performance, as DynamoDB internally creates an index
                                based on
                                the <strong>primary key</strong>.
                            </p>
                            <p>
                                Let's consider a products table with attributes like Category, Product ID, Name, Price,
                                Date Added, and Location. Suppose our <strong>partition key</strong> is the Category,
                                and
                                the
                                <strong>sort key</strong> is the Product ID.
                            </p>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Product ID</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Date Added</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Electronics</td>
                                        <td>1</td>
                                        <td>Smartphone</td>
                                        <td>699</td>
                                        <td>2024-01-15</td>
                                        <td>Aisle 3</td>
                                    </tr>
                                    <tr>
                                        <td>Electronics</td>
                                        <td>2</td>
                                        <td>Laptop</td>
                                        <td>999</td>
                                        <td>2024-02-20</td>
                                        <td>Aisle 4</td>
                                    </tr>
                                    <tr>
                                        <td>Furniture</td>
                                        <td>1</td>
                                        <td>Desk</td>
                                        <td>199</td>
                                        <td>2024-03-05</td>
                                        <td>Aisle 10</td>
                                    </tr>
                                    <tr>
                                        <td>Furniture</td>
                                        <td>2</td>
                                        <td>Chair</td>
                                        <td>89</td>
                                        <td>2024-04-12</td>
                                        <td>Aisle 10</td>
                                    </tr>
                                    <tr>
                                        <td>Furniture</td>
                                        <td>3</td>
                                        <td>Sofa</td>
                                        <td>499</td>
                                        <td>2024-05-22</td>
                                        <td>Aisle 11</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                For example, if we want to retrieve the product with ID 1 in the Electronics category,
                                we
                                query with Category set to Electronics and Product ID set to 1, and DynamoDB returns the
                                record for the product. Similarly, to get a list of all products in the Furniture
                                category
                                sorted by
                                Product ID, we query with Category set to Furniture and sort by Product ID.
                            </p>
                            <p>
                                But what if we want to list all products in the Furniture category sorted by their date
                                added?
                                In this case, we need to query all products in the Furniture category and then sort them
                                by
                                the
                                date added within our application. This method is inefficient.
                            </p>
                            <p>

                                A better solution is to define another index on this table, with Category as the
                                partition
                                key and Date Added as the sort key. By creating an index on these attributes, DynamoDB
                                allows us to query data using the Category as the partition key and Date Added as the
                                sort key.
                            </p>
                            <p>

                                This new index has the same partition key as our primary key, which makes it a
                                <strong>Local
                                    Secondary Index (LSI)</strong>. An important point about LSIs is that they must be
                                created
                                when the
                                table is created; you cannot add an LSI to an existing table later. You can create up to
                                <strong>five LSIs per table</strong>.
                            </p>
                            <p>
                                The <strong>Read and Write Capacity Units (RCUs and WCUs)</strong> you provision for
                                your
                                table
                                are shared
                                with the LSIs. Additionally, you can perform both eventually consistent and strongly
                                consistent reads using these LSIs.
                            </p>
                        </div>


                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="dynamodb-global-secondary-indexes" style="margin-bottom: 25px;">DynamoDB Global
                                Secondary Indexes</h4>

                            <p>Let's say we want to list all employees based in New York, sorted by their date of
                                joining.
                                How would we do that?
                                DynamoDB requires us to specify the <strong>partition keys</strong>, but our data
                                doesn't
                                necessarily depend on the
                                main partition key.
                                So, we can't define <strong>Local Secondary Indexes (LSIs)</strong> to retrieve this
                                data.
                                Therefore, DynamoDB provides another type of index called the <strong>Global Secondary
                                    Index
                                    (GSI)</strong>.
                                This is an index where the partition key can be different from the primary key.
                                So, if we define an index with <strong>Location</strong> as the partition key and
                                <strong>Date of Joining</strong> as the sort key, we can now easily query this data.
                            </p>
                            <p>
                                Similar to LSIs, DynamoDB allows you to create up to <strong>five GSIs per
                                    table</strong>.
                                Unlike LSIs, <strong>GSIs can be created at any time</strong>.
                                This is because GSIs are stored separately in their own partitions.
                                And since they have their own partitions, they also have their own <strong>provisioned
                                    throughput capacity</strong> settings.
                                You can set the <strong>RCUs and WCUs</strong> for the GSIs separately, and these are
                                not
                                shared with the base table's capacity units.
                            </p>
                            <p>
                                The only thing to keep in mind here is that you can perform <strong>eventually
                                    consistent
                                    reads</strong> only with GSIs.
                                Strongly consistent reads are not supported.
                                When an item is written to the table, the GSI is updated <strong>asynchronously in the
                                    background</strong>.
                            </p>
                            <p>
                                Also, unlike the table's primary key, where each item must be unique (meaning you can't
                                have
                                more than one item with the same primary key), there's no such restriction on GSIs.
                                You can have duplicate items in your GSIs.
                            </p>
                        </div>



                        <hr style="margin-bottom: 25px;">
                        <div>
                            <h4 id="dynamodb-streams" style="margin-bottom: 25px;">DynamoDB Streams</h4>


                            <p><strong>DynamoDB Streams</strong> provide a time-ordered sequence of item-level changes
                                in a
                                DynamoDB table. Each stream record represents a single data modification in the table
                                and
                                can be used to track these changes over time.
                            </p>
                            <p>
                                DynamoDB Streams capture four types of data modifications: <strong>insert, modify,
                                    remove</strong>, and they can be enabled on a per-table basis. When a stream is
                                enabled
                                on a table, DynamoDB captures information about every write operation (put, update,
                                delete)
                                in near-real-time.
                            </p>
                            <p>
                                A stream record contains information such as the primary key of the modified item, the
                                type
                                of modification, and before and after images of the item. This makes it possible to
                                react to
                                changes in a table, such as triggering AWS Lambda functions to process these changes in
                                real-time.
                            </p>
                            <p>
                                <strong>Enabling DynamoDB Streams</strong> allows for powerful use cases, including:
                            <ul>
                                <li>Real-time data replication between tables.</li>
                                <li>Triggering workflows or notifications based on item changes.</li>
                                <li>Maintaining materialized views of data.</li>
                                <li>Performing audits and logging changes over time.</li>
                            </ul>
                            </p>
                            <p>
                                DynamoDB Streams operate with <strong>exactly-once semantics</strong>, ensuring that
                                each
                                change is captured and processed only once. You can configure the stream to retain this
                                data
                                for 24 hours, allowing for batch processing or real-time consumption by applications or
                                services.
                            </p>
                            <p>
                                To enable a stream on a DynamoDB table, you specify the stream view type, which
                                determines
                                the information written to the stream for each table modification. The four available
                                view
                                types are:
                            <ul>
                                <li><strong>KEYS_ONLY</strong>: Only the primary key attributes of the modified item.
                                </li>
                                <li><strong>NEW_IMAGE</strong>: The entire item as it appears after it was modified.
                                </li>
                                <li><strong>OLD_IMAGE</strong>: The entire item as it appeared before it was modified.
                                </li>
                                <li><strong>NEW_AND_OLD_IMAGES</strong>: Both the new and the old images of the item.
                                </li>
                            </ul>
                            </p>
                            <p>
                                By integrating DynamoDB Streams with other AWS services such as Lambda, you can build
                                <strong>serverless architectures</strong> that react to data changes instantly and
                                efficiently.
                            </p>
                        </div>

                        <Tags
                            :tags="['aws', 'dynamodb', 'nosql', 'database', 'serverless', 'scalability', 'performance']">
                        </Tags>
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

import imageUrl from '../../assets/images/blog/dynamodb-overview.png';

export default {

    name: 'BlogDetailsDynamoDBOverview',
    components: {
        Comments,
        BlogSummary,
        Tags
    },
    data() {
        return {
            formula1: '$$\\text{Number of partitions} = {\\text{500 RCU} \\over \\text{3000 max RCU per partition}} + {\\text{500 WCU} \\over \\text{1000 max WCU per partition}}.$$',
            formula2: '$$\\text{Number of partitions} = {\\text{1000 RCU} \\over \\text{3000 max RCU per partition}} + {\\text{1000 WCU} \\over \\text{1000 max WCU per partition}}.$$',
            title: 'All You Need to Know About Amazon DynamoDB',
            image: '../../assets/images/blog/dynamodb-overview.png',
            summary: [
                { id: 'introduction', title: 'Introduction' },
                { id: 'sql-comparison', title: 'Comparison with SQL' },
                { id: 'data-types', title: 'Data Types in DynamoDB' },
                { id: 'dynamodb-consistency-model', title: 'DynamoDB Consistency Model' },
                { id: 'dynamodb-capacity-units', title: 'DynamoDB Capacity Units' },
                { id: 'calculating-read-capacity-units-rcus', title: 'Calculating Read Capacity Units (RCUs)' },
                { id: 'calculating-write-capacity-units-wcus', title: 'Calculating Write Capacity Units (WCUs)' },
                { id: 'dynamodb-partitions', title: 'DynamoDB Partitions' },
                { id: 'dynamodb-local-secondary-indexes', title: 'DynamoDB Local Secondary Indexes' },
                { id: 'dynamodb-global-secondary-indexes', title: 'DynamoDB Global Secondary Indexes' },
                { id: 'dynamodb-streams', title: 'DynamoDB Streams' }
            ]
        }
    },
    setup() {
        useHead({
            title: 'All You Need to Know About Amazon DynamoDB',
            meta: [
                { name: 'description', content: 'Discover everything you need to know about Amazon DynamoDB, including its features, data model, pricing, use cases, and best practices for optimizing performance and cost.' },
                { name: 'keywords', content: 'dynamodb, aws, nosql, database, serverless, cloud, aws dynamodb, dynamodb pricing, dynamodb use cases, dynamodb best practices' },
                { name: 'author', content: 'Safouene Gharbi' },
                { property: 'og:title', content: 'All You Need to Know About Amazon DynamoDB' },
                { property: 'og:description', content: 'Discover everything you need to know about Amazon DynamoDB, including its features, data model, pricing, use cases, and best practices for optimizing performance and cost.' },
                { property: 'og:image', content: imageUrl },
                { property: 'og:image:width', content: "1200" },
                { property: 'og:image:height', content: "627" },
                { property: 'og:url', content: 'https://blog.gharbidev.com/blog-details/dynamodb-overview' },
                { property: 'og:type', content: 'article' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'All You Need to Know About Amazon DynamoDB' },
                { name: 'twitter:description', content: 'Discover everything you need to know about Amazon DynamoDB, including its features, data model, pricing, use cases, and best practices for optimizing performance and cost.' },
                { name: 'twitter:image', content: imageUrl },
            ]
        });
    }


}
</script>