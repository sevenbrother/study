/**
 * 实例化vue对象
 * 
 * el: element 需要获取的元素，一定是html中的根容器元素
 * data: 用于数据的存储
 * methods: 用于存储方法
 * data-binding: 给属性绑定对应的值
 */
new Vue({
    el: "#vue-app",
    data: {
        name:"seven",
        age:10,
        website:"https://www.baidu.com",
        websiteTag:"<a href='https://www.baidu.com'>百度一下</a>"
    },
    methods: {
        greet: function(time) {
            return "Good " + time + ", " + this.name;
        }
    }
});
