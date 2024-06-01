<template>
    <div class="profile-authentication-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="login-form">
                        <h2>Login</h2>
                        <form @submit.prevent>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" placeholder="Email" v-model="login_form.email"
                                    @input="clearError('login', 'email')">
                                <span v-if="errors.login.email" class="text-danger">{{ errors.login.email }}</span>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password"
                                    v-model="login_form.password" @input="clearError('login', 'password')">
                                <span v-if="errors.login.password" class="text-danger">{{ errors.login.password
                                    }}</span>
                            </div>
                            <button @click="login">Sign In with Email</button>
                            <hr>
                            <button @click="loginGoogle" class="login-with-google-btn">Sign In with Google</button>
                            <button @click="loginGithub" class="login-with-github-btn">Sign In with Github</button>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="register-form">
                        <h2>Register</h2>
                        <form @submit.prevent="">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" placeholder="Email"
                                    v-model="register_form.email" @input="clearError('register', 'email')">
                                <span v-if="errors.register.email" class="text-danger">{{ errors.register.email
                                    }}</span>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password"
                                    v-model="register_form.password" @input="clearError('register', 'password')">
                                <span v-if="errors.register.password" class="text-danger">{{ errors.register.password
                                    }}</span>
                            </div>
                            <p class="description">The password should be at least eight characters long. To make it
                                stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )
                            </p>
                            <button @click="register">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    name: 'Authentication',
    setup() {
        const login_form = ref({});
        const register_form = ref({});
        const errors = ref({
            login: {},
            register: {}
        });

        const store = useStore();

        const validateEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        };

        const validatePassword = (password) => {
            const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!\"?\$%\^&\)]).{8,}$/;
            return re.test(password);
        };

        const login = () => {
            errors.value.login = {};

            if (!validateEmail(login_form.value.email)) {
                errors.value.login.email = "Invalid email address";
            }
            if (!validatePassword(login_form.value.password)) {
                errors.value.login.password = "Password must be at least 8 characters long, contain upper and lower case letters, numbers, and symbols";
            }

            if (!errors.value.login.email && !errors.value.login.password) {
                store.dispatch("login", login_form.value);
            }
        };

        const loginGoogle = () => {
            store.dispatch("loginGoogle");
        };

        const loginGithub = () => {
            store.dispatch("loginGithub");
        };

        const register = () => {
            errors.value.register = {};

            if (!validateEmail(register_form.value.email)) {
                errors.value.register.email = "Invalid email address";
            }
            if (!validatePassword(register_form.value.password)) {
                errors.value.register.password = "Password must be at least 8 characters long, contain upper and lower case letters, numbers, and symbols";
            }

            if (!errors.value.register.email && !errors.value.register.password) {
                store.dispatch("signup", register_form.value);
            }
        };

        const clearError = (form, field) => {
            errors.value[form][field] = '';
        };

        return {
            login_form,
            register_form,
            login,
            loginGoogle,
            loginGithub,
            register,
            errors,
            clearError
        }
    }
}
</script>

<style scoped>
.text-danger {
    color: red;
}
</style>

<style scoped>
.text-danger {
    color: red;
}
</style>

<style scoped>
.login-with-google-btn {
    transition: background-color .3s, box-shadow .3s;

    padding: 12px 16px 12px 42px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 -1px 0 rgb(0, 0, 0), 0 1px 1px rgb(0, 0, 0);

    color: #000;

    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARRSURBVFiFvZddbFN1GMZ///85XTfolqwDtpWBmywGMj5MNr4kIBeGwQAvDJgQTIw6Y0JiTLxDQqiGmJhwRUS90kj0ghli2JQpQe00ENBBJEgkk+/gWPcpC2vXtef/esE2R3fangHzuWr/z3ue5znn9H3fVOERsmHpTHzDW4G1CMtRVADFV+6l8rUiaSmGbcU1n1JHC5z4x0WRzl4vuiqn8caFldhmD8IOYGY633EvOekajWKGxTmfsRrnRP76/aECyKZqP5YOI7wN5GWqcwswUTzg022J1LyNVZHIsOcAsnFhJZZpBpZkVPcQYAx+rQYLLV1fcvLKmXTOnmS+5alliGkFynMqe0TCSBGYVqA4ndMPmDcsegLhsZqPwa855XY+/gpke00eQ8nfUCzNoRUFjoH6FUxXT8KsMiKVSVGrEo550km7KYBCn24Lnby63k3sv1cQT+3NYR4F9Q5D5YdVJJKacP7t2Ie+TdVFI0n5cMgxOx1zP0g2cxh9AnKJ+Vyd0cLhkEVc10yqEtWGJdtUS4en3u7fsGBxLCVf2oqLZT9ceylb7ViAT4A3EIRI8DTfzVqAUDZa8zNDI/UqcsO1jR4VStqZQQFRIDB+OqJjHClr549AFY6pVa1XeqbD/H6AS7wIHHFlh61XVa3z2XSZA2iEZzNw3YjzxXSaA9go6lwZoVnVkXPMzd19uyRl68MoSqdiLOAg6pANzHOt0Jz1IpTy26vFmIapmI9DSbHGZTyOotObijNp8EwBpdkuzrmqHwP8GhhwpQyh/yHAgAZuZSBXeBSJPUKAThvhHIqVkyjF89LOrlydECX0YymdjQZmufFKtB8l+3BZUqI4n3UQDWO9VlDjfOrpXjJgzt47u1ByyJUU9bL7KIbY10Nl7W/2LKm6q+zaew2tDzWKZ4VvhbSxL+D+dBLJRH6pVnXEgLGJJ5dHAqeW3lo32Bhdti5u9Lw8xxyt/Gl9/lTNZ4e7A9rYTRnMQfHVwAfBu+Pr+K7xHXule5ndFitZ7FL+iy8p26IvnOj2Yj56503AmgwlxtHU9IVDl8d7PdhS/x6wN4tuN7Cnv7z3c+rOuf8wm9YHggn7oH31o3pMIGMbK8XB6Luht2DisGnanhcsGDwLPJ0lBAp6BI4BZ0WkSwaTy0FViSMrGXGqMWhtV1z33TxQleH6y5amtjMcij0YAChp2TJXSJ4BKrKFmAinM+7qkte3L6rii9IXVK/RZk1vuKJj7OCB3uzb+s3foq0GPO+BDBBIlh5I7/suo6mfaD4pAMDA5uMXjbaeAbL+pcqZITk02wSbr41+vaC1Wt0bDp1Pr3NdRv9sPn6zP160UoT3gZGHDZEqbCoTxf7ZemBFV7j8hltNzo1X3PLcfI21W2AnUJjOu/4GNKJ81p/a73u9f8eJ09n0Pa/ciqbtBbH8wa2iWKtgOUgFEHTuDBegtKO0xPGp6yh9MpDw7b/d+H2/F91/AR2/laOxS1LoAAAAAElFTkSuQmCC);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;

    &:hover {
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
    }

    &:active {
        background-color: #eeeeee;
    }

    &:focus {
        outline: none;
        box-shadow:
            0 -1px 0 rgba(0, 0, 0, .04),
            0 2px 4px rgba(0, 0, 0, .25),
            0 0 0 3px #c8dafc;
    }

    &:disabled {
        filter: grayscale(100%);
        background-color: #ebebeb;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
        cursor: not-allowed;
    }
}

.login-with-github-btn {
    transition: background-color .3s, box-shadow .3s;

    padding: 12px 16px 12px 42px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 -1px 0 rgb(0, 0, 0), 0 1px 1px rgb(0, 0, 0);

    color: #000;

    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzK7FeAAAAH3RSTlMA7Q3DfAj7Ieb28bhdA86FKhgyU6kR1+A/jZxGPGx10SASNQAAAW9JREFUOMttUlkWgyAMjIqAYAXFrW7c/5aFgNZK8yH4MiQzkwBc8WKGLH2/EMNekEa5LmNlMapxWctnfpYxGzFy/knnJLOPyEj+zbeL/RNLe+aH3v6Nfojs3+5H8J8c5cJ930FN7ekRVkvqyAnh/qisGfFUayTQ+OvmmNaqnrtudofjt/lnjadxIGf91N2hriMWsNX6BKzoiyth8JLNiXNYoTIQLHgn7qM2ZwZgh6xLhxNINBCOIQUM4SlQfxTln/EW6BhgpyJPATkCLKCIsU0B7YgyAGcgthSw+WlYDqGQSgEqNIcgd0p0dlMwCFYRkA9EFyqLFXLpslLYiehLa6lJeG+lk1dT22vjuPLiQEh5FOf2UL8QvoQcdm/YHgrs12JJ9Gdz+L0k4yRZAOhzxXlUv1e2YTC0JwcWO1T7OVlFbWE0O1lGAFXXDpREWJrxht0Bgtwm+DLeeH4HjOZ3h5ia7oBJscR7TVQceq7Id8k/NYYyBYtg2goAAAAASUVORK5CYII=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;

    &:hover {
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
    }

    &:active {
        background-color: #eeeeee;
    }

    &:focus {
        outline: none;
        box-shadow:
            0 -1px 0 rgba(0, 0, 0, .04),
            0 2px 4px rgba(0, 0, 0, .25),
            0 0 0 3px #c8dafc;
    }

    &:disabled {
        filter: grayscale(100%);
        background-color: #ebebeb;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
        cursor: not-allowed;
    }
}
</style>