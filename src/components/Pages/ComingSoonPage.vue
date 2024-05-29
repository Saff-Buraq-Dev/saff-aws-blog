<template>
    <div class="coming-soon-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="coming-soon-content">
                        <router-link to="/" class="logo">
                            <img src="../../assets/images/logo.png" alt="image">
                        </router-link>
                        <h2>We Are Launching Soon</h2>
                        <ul class="coming-soon-countdown flex-wrap d-flex">
                            <li class="align-items-center flex-column d-flex justify-content-center">
                                <span id="days" class="days">{{days}}</span>
                                Days
                            </li>
                            <li class="align-items-center flex-column d-flex justify-content-center">
                                <span id="hours" class="hours">{{hours}}</span>
                                Hours
                            </li>
                            <li class="align-items-center flex-column d-flex justify-content-center">
                                <span id="minutes" class="minutes">{{minutes}}</span>
                                Mins
                            </li>
                            <li class="align-items-center flex-column d-flex justify-content-center">
                                <span id="seconds" class="seconds">{{seconds}}</span>
                                Secs
                            </li>
                        </ul>
                        <form class="newsletter-form" @submit.prevent>
                            <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL">
                            <button type="submit" class="btn-style-one red-light-color">Subscribe <i class="ph-caret-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComingSoonPage',
    data() {
        return {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    },
    created() { // Turn data into viewable values
        setInterval(() => {
            this.commingSoonTime();
        }, 1000);
    },
    methods: {
        commingSoonTime() {
            let endTime = new Date("December 5, 2029 17:00:00 PDT");            
            let endTimeParse = (Date.parse(endTime)) / 1000;
            let now = new Date();
            let nowParse = (Date.parse(now) / 1000);
            let timeLeft = endTimeParse - nowParse;
            let days = Math.floor(timeLeft / 86400);
            let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
    }
}
</script>