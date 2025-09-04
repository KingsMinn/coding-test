const GCD = (num1, num2) => num2 !== 0 ? GCD(num2, num1%num2) : num1
const LCM = (num1, num2) => (num1*num2) / GCD(num1, num2)

function solution(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        arr[i + 1] = LCM(arr[i], arr[i + 1])
    }
    return arr[arr.length-1]
}