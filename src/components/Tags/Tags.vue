<template>
    <div class="post-footer">
        <div class="post-tags">
            <span class="sub">Tags:</span>
            <ul>
                <li v-for="tag in tags" :key="tag"><a :href="'/blog-tags/' + tag" rel="tag">{{ tag }}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tags',
    props: {
        tags: {
            type: Array,
            required: true
        }
    }
}
</script>