new Vue({
    el: "#vue-app",
    data: {
        changeColor: false,
        changeLength: false
    },
    methods: {
    },
    computed: {
        compClasses: function() {
            return {
                changeColorClass: this.changeColor,
                changeLengthClass: this.changeLength
            };
        }
    }
});
