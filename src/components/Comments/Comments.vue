<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="comments-area green-color">
                    <h3 class="comments-title">Comments:</h3>
                    <ol class="comment-list">
                        <li class="comment" v-for="comment in comments" :key="comment.comment_date">
                            <div class="comment-body">
                                <footer class="comment-meta">
                                    <div class="comment-author vcard">
                                        <img :src="isURL(comment.user_photo_url) ? comment.user_photo_url : anonymous_user"
                                            class="avatar" alt="user">
                                        <b class="fn">{{ comment.user_name }}</b>
                                    </div>
                                    <div class="comment-metadata">
                                        <span>{{ formatDate(comment.comment_date) }}</span>
                                    </div>
                                </footer>
                                <div class="comment-content">
                                    <p>{{ comment.comment_text }}</p>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div class="comment-respond" v-if="authIsReady && user">
                        <h3 class="comment-reply-title">Leave A Comment</h3>
                        <form class="comment-form" @submit.prevent="postMessage">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <textarea class="form-control" cols="30" rows="5" placeholder="Your Comment..."
                                            v-model="commentText"></textarea>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <button type="submit" class="submit-btn">Post A Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="comment-respond" v-else>
                        <router-link to="/login" class="submit-btn">Sign In to Leave A Comment</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { commentsService } from '../../services/apiServices.js';
import anonymous_user from '../../assets/images/anonymous-user.png';

export default {
    name: 'Comments',
    props: {
        article: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const store = useStore();
        const user = computed(() => store.getters.user);
        const authIsReady = computed(() => store.getters.authIsReady);
        const comments = ref([]);
        const commentText = ref('');

        const fetchComments = () => {
            commentsService.getComments(props.article)
                .then(response => {
                    comments.value = response;
                })
                .catch(error => {
                    console.error('Error fetching comments:', error);
                });
        };

        const postMessage = () => {
            if (commentText.value.trim() !== '') {
                const displayName = user.value.displayName;
                const userName = displayName && displayName.trim() !== '' ? displayName : user.value.email;
                const body = {
                    article_id: props.article,
                    comment_text: commentText.value,
                    user_name: userName,
                    user_photo_url: user.value.photoURL
                }
                commentsService.postComment(body).then(response => {
                    console.log('Comment posted:', response);
                    fetchComments();
                    commentText.value = '';
                }).catch(error => {
                    console.error('Error posting comment:', error);
                });
            }
        };

        const formatDate = (dateString) => {
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const date = new Date(dateString);
            const month = months[date.getMonth()];
            const day = date.getDate();
            const year = date.getFullYear();
            let hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const milliseconds = date.getMilliseconds();
            const formattedSeconds = seconds + (milliseconds / 1000);
            const ampm = hours >= 12 ? 'pm' : 'am';

            hours = hours % 12;
            hours = hours ? hours : 12; // 12h format, not 0h

            return `${month} ${day}, ${year} at ${hours}:${minutes < 10 ? '0' + minutes : minutes}:${formattedSeconds.toFixed(3)} ${ampm}`;
        };

        const isURL = (str) => {
            return str != undefined && str.startsWith('http');
        };

        // Fetch comments when the component is mounted
        fetchComments();

        return {
            user,
            authIsReady,
            comments,
            commentText,
            anonymous_user: anonymous_user,
            postMessage,
            formatDate,
            isURL
        };
    },
}
</script>
