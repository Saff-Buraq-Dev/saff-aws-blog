<template>
    <div 
        @click="scrollToTop()"
        :class="['progress-wrap', {'active-progress': isTop}]"
    >
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
        </svg>
    </div>
    <div 
        @click="scrollToTop()"
        :class="['back-to-top-btn', {'go-top': isTop}]"
    >
        <i class='bx bx-chevron-up'></i>
    </div>  
</template>

<script>
export default {
    name: 'BackToTop',
    data (){
        return {
            isTop: false
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isTop = true
            } else {
                that.isTop = false
            }
        })
    }
}
</script>