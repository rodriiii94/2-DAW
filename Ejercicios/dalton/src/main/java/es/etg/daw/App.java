package es.etg.daw;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        int hermanos = 0;

        Scanner sc = new Scanner(System.in);

        try {

            do {
                hermanos = sc.nextInt();

                int[] altura = new int[hermanos];

                for (int i = 0; i < hermanos; i++) {
                    altura[i] = sc.nextInt();
                }

                if (hermanos != 0) {

                    if (esDalton(altura, hermanos) == true) {
                        System.out.println("DALTON\n");
                    } else {
                        System.out.println("DESCONOCIDOS\n");
                    }
                } else {
                    break;
                }
            } while (hermanos != 0);

        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }

    }

    public static boolean esDalton(int[] altura, int hermanos) {

        boolean esDalton = false;
        try {
            if (hermanos <= 1 &&  altura.length > hermanos) {
                esDalton = false;
            } else {
                boolean ascending = true;
                boolean descending = true;

                for (int i = 0; i < altura.length - 1; i++) {

                    if (altura[i] < altura[i + 1]) {
                        descending = false;
                    } else if (altura[i] > altura[i + 1]) {
                        ascending = false;
                    } else {
                        // If two consecutive numbers are equal, it's not Dalton
                        ascending = false;
                        descending = false;
                    }
                }

                esDalton = ascending || descending;
            }
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }

        return esDalton;
    }
}
