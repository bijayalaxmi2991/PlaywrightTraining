// & : AND 
// | : OR
// ^ : XOR (exclusive OR) - returns 1 if only one of the bits is 1, otherwise returns 0
// ~ : NOT - inverts the bits of the operand
// << : Left shift - shifts the bits to the left by a specified number of positions
// >> : Right shift - shifts the bits to the right by a specified number of positions (sign-propagating)


// 0&0 = 0, 0&1 = 0, 1&0 = 0, 1&1 = 1
console.log(5 & 3); // Output: 1, 
// 5 = 0101
// 3 = 0011
// 5 & 3 = 0001 (1 in decimal)

// 0|0 = 0, 0|1 = 1, 1|0 = 1, 1|1 = 1
console.log(5 | 3); // Output: 7
// 5 = 0101
// 3 = 0011
// 5 | 3 = 0111 (7 in decimal)

// 0^0 = 0, 0^1 = 1, 1^0 = 1, 1^1 = 0
console.log(5 ^ 3); // Output: 6
// 5 = 0101
// 3 = 0011
// 5 ^ 3 = 0110 (6 in decimal)

console.log(~5); // Output: -6
// 5 = 0000 0101
// ~5 = 1111 1010 (-6 in decimal, because of two's complement representation)

console.log(5 << 1); // Output: 10
// 5 = 0000 0101
// 5 << 1 = 0000 1010 (10 in decimal)

console.log(5 >> 1); // Output: 2
// 5 = 0000 0101
// 5 >> 1 = 0000 0010 (2 in decimal)

