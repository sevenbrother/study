/*
    数组工具类
    1. 查找最大值
    2. 根据元素选择索引
*/
function ArrayTool(array) {
    this.array = array;

    this.getMaxValue = function() {
        var tempMax = this.array[0];
        for (var i = 1; i < this.array.length; i++) {
            if (this.array[i] > tempMax) {
                tempMax = this.array[i];
            }
        }

        return tempMax;
    }

    this.getIndexByValue = function(value) {
        for (var index in this.array) {
            if (this.array[index] == value) {
                return index;
            }
        }

        return -1;
    }
}

var tool = new ArrayToolInner();
function ArrayToolInner() {
    this.getMaxValue = function(array) {
        var tempMax = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] > tempMax) {
                tempMax = array[i];
            }
        }

        return tempMax;
    }

    this.getIndexByValue = function(array, value) {
        for (var index in array) {
            if (array[index] == value) {
                return index;
            }
        }

        return -1;
    }
}