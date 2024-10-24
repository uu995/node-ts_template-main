export class Rational {
    numerator: number;
    denominator: number;
    operation: () => string;

    constructor(numerator: number, denominator: number, operation: () => string) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero.");
        }

        const gcd = this.gcd(Math.abs(numerator), Math.abs(denominator));
        this.numerator = numerator / gcd;
        this.denominator = denominator / gcd;

        // 若分母為負，將符號移至分子
        if (this.denominator < 0) {
            this.numerator = -this.numerator;
            this.denominator = -this.denominator;
        }

        this.operation = operation;
    }

    // 使用輾轉相除法計算最大公因數 (GCD)
    private gcd(a: number, b: number): number {
        return b === 0 ? a : this.gcd(b, a % b);
    }

    // 執行傳入的 operation 方法
    doOperation(): string {
        return this.operation();
    }

    // toString 方法：將分數轉為字串
    toString(): string {
        return this.denominator === 1
            ? `${this.numerator}`
            : `${this.numerator}/${this.denominator}`;
    }
}
