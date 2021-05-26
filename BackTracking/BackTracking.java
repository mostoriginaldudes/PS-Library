import java.io.*;
import java.util.*;

public class BackTracking {
    private static int N, M;
    private static int[] selected;
    private static StringBuilder output = new StringBuilder();

    private static boolean[] used;

    private static void input() throws IOException {
        BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(input.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        selected = new int[M + 1];
        used = new boolean[N + 1];
    }
    public static void main(String[] args) throws IOException {
        input();

        // 1. N개 중 중복 허용하며 M개를 순서있게 나열
        recFunc1(1);

        // 2. N개 중 중복 없이 M개를 순서있게 나열
        recFunc2(1);

        // 3. N개 중 중복 허용하여 M개 고르기
        recFunc3(1);

        // 4. N개 중 중복 없이 M개 고르기
        recFunc4(1);
        System.out.println(output);
    }
    private static void print() {
        for (int m = 1; m <= M; m++) {
            output.append(selected[m]).append(" ");
        }
        output.append("\n");
    }

    // 1. N개 중 중복 허용하여 M개를 순서있게 나열
    private static void recFunc1(int k) {
        if (k == M + 1) {
            print();
            return;
        }
        for (int cand = 1; cand <= N; cand++) {
            selected[k] = cand;
            recFunc1(k + 1);
        }
    }

    // 2. N개 중 중복 없이 M개를 순서있게 나열
    private static void recFunc2(int k) {
        if (k == M + 1) {
            print();
            return;
        }
        for (int n = 1; n <= N; n++) {
            if (!used[n]) {
                used[n] = true;
                selected[k] = n;
                recFunc2(k + 1);
                used[n] = false;
            }
        }
    }

    // 3. N개 중 중복 허용하여 M개를 고르기
    private static void recFunc3(int k) {
        if (k == M + 1) {
            print();
            return;
        }
        int start = selected[k - 1];
        if (start == 0) start = 1;
        for (int n = start; n <= N; n++) {
            selected[k] = n;
            recFunc3(k + 1);
        }
    }

    // 4. N개 중 중복 없이 M개 고르기
    private static void recFunc4(int k) {
        if (k == M + 1) {
            print();
            return;
        }
        int start = selected[k - 1] + 1;
        for (int n = start; n <= N; n++) {
            selected[k] = n;
            recFunc4(k + 1);
        }
    }
}
