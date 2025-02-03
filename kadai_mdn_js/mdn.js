const today = new Date();

const year = today.getFullYear();  // 年を表示
const month = today.getMonth() + 1; // 月を表示
const day = today.getDate();      // 日付を表示
console.log(year + '年' + month + '月' + day + '日');