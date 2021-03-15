/**
 * A = Ga
 * B = Gb 일 때,
 * A = Bq+R
 * G(A,B) = G(B,R)
 * 즉, A와 B의 최대공약수와 B와 R의 최대공약수가 같다.
 */
public class EuclideanAlgorithm {
    static int gcdRecursion(int A, int B) {
        if(B == 0) return A;
        return gcdRecursion(B, A % B);
    }

    static int gcdLoop(int A, int B) {
        while (B != 0) {
            int R = A % B;
            A = B;
            B = R;
        }
        return A;
    }
}
