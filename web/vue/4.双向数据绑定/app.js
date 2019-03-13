new Vue({
    el: "#vue-app",
    data: {
        name: "",
        age: ""
    },
    methods: {
        showName: function() {
            this.name = this.$refs.nameInput.value;
        },

        showAge: function() {
            this.age = this.$refs.ageInput.value;
        }
    }
});
