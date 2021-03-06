const n = 10;
const arr  = new Array(n).fill(0).map((_, i) => i);

/**
 * * lowerBound 함수는 가장 먼저 등장하는 target과 같거나 작은 값을 반환한다.
 * ? 조건을 만족하는 가장 먼저 발견한 값을 반환한다.
 * ! 이진탐색 기반으로 동작하기 때문에 데이터가 정렬되어 있어야 한다.
 * 
 * @param {number} target 기준값
 * @return {number}
 */
function lowerBound (target) {
  let left = 0;
  let right = arr.length-1;

  while(left < right) {
    const mid = Math.floor((left + right) / 2);

    arr[mid] < target 
      ? left = mid + 1
      : right = mid;
  }
  return right;
}

console.log(arr[lowerBound(3)]); // 3