/**
 * ! 재귀함수로 최대공약수 구하기
 * @name getGcdRecursion
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
const getGcdRecursion = (a, b) => b ? getGcd(b, a % b) : a;

/**
 * ! 반복문으로 최대공약수 구하기
 * @name getGcdLoop
 * 
 * @param {number} A 
 * @param {number} B 
 * @returns {number}
 */
const getGcdLoop = (A, B) => {
  let a = A;
  let b = B;

  while(b > 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  return a;
};