import Vue from 'vue'

Vue.directive('height', {
    inserted: function (el) {
        function getHeight() {
            let height = document.documentElement.clientHeight || document.body.clientHeight
            el.style.height = height + 'px'
        }
        getHeight()
        window.onresize = function () {
            getHeight()
        }
    }
})