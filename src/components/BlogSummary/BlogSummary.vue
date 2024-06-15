<template>
    <div class="get-started-area pb-100">
        <div class="container">
            <div class="get-started-inner-area" data-aos="fade-up" data-aos-duration="1200">
                <div class="row align-items-center">
                    <ul class="col-lg-12 col-md-12">
                        <li v-for="tag in anchorTags" :key="tag.id"><a :href="'#' + tag.id">{{ tag.title }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.get-started-inner-area {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
}

a {
    color: #fff;
}

a:hover {
    color: #5174fe;
}
</style>

<script>
export default {
    name: 'BlogSummary',
    props: {
        anchorTags: {
            type: Array,
            required: true
        }
    }
}
</script>