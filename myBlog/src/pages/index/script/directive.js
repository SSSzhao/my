import Vue from 'vue'

Vue.directive('height', {
    inserted: function (el) {
        function getHeight() {
            let height = document.documentElement.clientHeight || document.body.clientHeight
            el.style.height = height + 'px'
        }
        getHeight()
        window.addEventListener('resize',function() {
            getHeight()
        })
    }
})

Vue.directive('marginTop', {
    inserted: function (el) {
        function getHeight() {
            let height = document.documentElement.clientHeight || document.body.clientHeight
            if(height>el.offsetHeight){
                el.style.marginTop = parseInt((height - el.offsetHeight)/3) + 'px'
            }
        }
        getHeight()
        window.addEventListener('resize',function() {
            getHeight()
        })
    }
})