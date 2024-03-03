// 写一个冒泡排序方法
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // 交换两个元素的位置
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

            }
        }
    }
}

var dateRange = ['2024-02-01', '2024-03-01']
    // 把dateRange中的开始日期和结束日期赋给startTime和endTime，并将日期格式转为年月日
var startTime = dateRange[0];
var endTime = dateRange[1];