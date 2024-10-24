import { Rational } from "./rational";

// 定義操作方法：回傳分數的字串
const operation = () => "Executing operation for a rational number.";

// 初始化 Rational 類別
const r1 = new Rational(3, 6, operation);
console.log(r1.toString()); // 輸出: 1/2

// 執行 operation 方法
console.log(r1.doOperation()); // 輸出: Executing operation for a rational number.
