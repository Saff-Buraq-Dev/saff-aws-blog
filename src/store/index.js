import { createStore } from 'vuex';
import router from '../router';

import { createToaster } from "@meforma/vue-toaster";

// firebase imports
import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithRedirect,
    GoogleAuthProvider,
    GithubAuthProvider,
    getRedirectResult
} from 'firebase/auth';

const toaster = createToaster({
    position: "bottom",
    duration: 3000,
});

const store = createStore({
    state: {
        user: null,
        authIsReady: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
            console.log('user state changed:', state.user);
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload;
        }
    },
    actions: {
        async signup(context, { email, password }) {
            console.log('signup action');

            const res = await createUserWithEmailAndPassword(auth, email, password);
            if (res) {
                context.commit('setUser', res.user);
                router.push('/');
            } else {
                toaster.error('could not complete signup');
            }
        },
        async login(context, { email, password }) {
            console.log('login action');

            const res = await signInWithEmailAndPassword(auth, email, password);
            if (res) {
                context.commit('setUser', res.user);
                router.push('/');
            } else {
                toaster.error('could not complete login');
            }
        },
        async logout(context) {
            console.log('logout action');

            await signOut(auth);
            context.commit('setUser', null);
        },
        async loginGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider)
                .catch((error) => {
                    toaster.error("An error occurred during Google login!");
                });
        },
        async loginGithub() {
            const provider = new GithubAuthProvider();
            signInWithRedirect(auth, provider)
                .catch((error) => {
                    toaster.error("An error occurred during GitHub login!");
                });
        },
        async handleRedirect({ commit }) {
            console.log('handle redirect');
            try {
                const result = await getRedirectResult(auth);
                if (result) {
                    commit('setUser', result.user);
                }
            } catch (error) {
                toaster.error(error.message);
            }
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        authIsReady(state) {
            return state.authIsReady;
        }
    }
});

// wait until auth is ready
const unsub = onAuthStateChanged(auth, (user) => {
    store.commit('setAuthIsReady', true);
    store.commit('setUser', user);
    unsub();
});

// export the store
export default store;
