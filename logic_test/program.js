// 1) Fungsi untuk memeriksa apakah sebuah bilangan adalah bilangan prima
function isPrime(num) {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    var i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
        i += 6;
    }
    return true;
}
// 2) Fungsi untuk menentukan bilangan terbesar dari sederet bilangan dalam array
function findMaxNumber(numbers) {
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
// 3) Fungsi untuk menghasilkan format berikut
function printPattern(n) {
    for (var i = 1; i <= n; i++) {
        var row = '';
        for (var j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}
// 4) Bubble sorting
function bubbleSort(numbers) {
    var len = numbers.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                var temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers;
}
// 5) Menghasilkan output tertentu
function printOutput() {
    for (var i = 1; i <= 4; i++) {
        var row = '';
        for (var j = 0; j < 3; j++) {
            row += (j * 4 + i) + ' ';
        }
        console.log(row);
    }
}
// Test fungsi-fungsi
console.log("1) Apakah 7 bilangan prima? ", isPrime(7));
console.log("2) Bilangan terbesar dari array adalah ", findMaxNumber([11, 6, 31, 201, 99, 861, 1, 7, 14, 79]));
console.log("3) Pola format:");
printPattern(8);
console.log("4) Hasil pengurutan menggunakan bubble sort:", bubbleSort([99, 2, 64, 8, 111, 33, 65, 11, 102, 50]));
console.log("5) Output:");
printOutput();
