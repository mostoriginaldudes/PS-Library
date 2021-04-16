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

  // 작거나 같은 값의 주솟값을 반환한다.
  int* result = lower_bound(arr, arr + n, 3);
  cout << *result << '\n'; // 3
  return 0;
}