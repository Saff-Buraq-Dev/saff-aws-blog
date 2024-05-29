<template>
    <div class="contact-info-area bg-f1f5fd">
        <div class="container">
            <div class="contact-info-inner">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-contact-info-box">
                            <div class="icon bg1">
                                <i class="ph-phone-call"></i>
                            </div>
                            <h3><a href="tel:(+321) 895-980 008">(+321) 895-980 008</a></h3>
                            <h3><a href="tel:(+321) 895-980 008">(+321) 895-980 008</a></h3>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-contact-info-box">
                            <div class="icon">
                                <i class="ph-envelope-simple-open"></i>
                            </div>
                            <h3><a href="mailto:hello@vumy.com">hello@vumy.com</a></h3>
                            <h3><a href="mailto:info@vumy.com">info@vumy.com</a></h3>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-contact-info-box">
                            <div class="icon bg2">
                                <i class="ph-map-pin-line"></i>
                            </div>
                            <h3>2750 Quadra Street Victoria, Canada.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="contact-area ptb-100">
        <div class="container">
            <div class="section-title style-two">
                <span class="sub-title">Contact with us</span>
                <h2>Have Any Questions? <br>Let's Talk!</h2>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="contact-form">
                        <form  @submit.prevent>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label>Your Name</label>
                                        <input type="text" name="name" class="form-control" id="name">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label>Email Address</label>
                                        <input type="email" name="email" class="form-control" id="email">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label>Subject</label>
                                        <input type="text" name="msg_subject" class="form-control" id="msg_subject">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone_number" class="form-control" id="phone_number">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <label>Message...</label>
                                        <textarea name="message" id="message" class="form-control" cols="30" rows="5"></textarea>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="checkme">
                                        <label class="form-check-label" for="checkme">
                                            Accept <router-link to="/terms-conditions">Terms of Services</router-link> and <router-link to="/privacy-policy">Privacy Policy</router-link>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <button type="submit" class="btn-style-one red-light-color">Send Message  <i class="ph-caret-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div id="maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629806.5608507423!2d-74.14550980308866!3d40.99473892694984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c295001ca56f9f%3A0x313170de6c0e7b75!2sFairview%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1630302531294!5m2!1sen!2sbd"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>