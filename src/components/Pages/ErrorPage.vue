<template>
    <div class="not-found-area ptb-100">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="not-found-content">
                        <img src="../../assets/images/error.png" alt="error-image">
                        <h3>Oops! That page can't be found</h3>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <router-link to="/" class="btn-style-one red-light-color">Back to Home <i class="ph-caret-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage'
}
</script>