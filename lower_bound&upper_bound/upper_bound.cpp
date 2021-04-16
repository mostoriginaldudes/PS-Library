#include <iostream>
#include <algorithm>
using namespace std;

int n = 10;
int arr[10];

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  for(int i=0; i<n; i++) {
    arr[i] = i;
  }

  // 큰 값의 주솟값을 반환한다.
  int* result = upper_bound(arr, arr + n, 3);
  cout << *result << '\n'; // 4
  return 0;
}