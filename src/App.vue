<template>
    <Preloader v-if="isLoading" />
    <router-view v-slot="{ Component }">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in"
            :duration="500" @after-leave="$root.$emit('triggerScroll')">
            <component :is="Component" />
        </transition>
    </router-view>
    <BackToTop />
</template>

<script>
import Preloader from './components/Layouts/Preloader.vue'
import BackToTop from './components/Layouts/BackToTop.vue'

export default {
    name: 'App',
    components: {
        Preloader,
        BackToTop,
    },
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 1000)
    }
}
</script>