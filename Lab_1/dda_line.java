import java.util.Scanner;
import java.lang.*;
import java.lang.Math;

public class dda_line
{

    public static int swap(int x,int y)
    {
        return(x);
    }

    static void dda(int x0, int y0,int x1,int y1)
    { 
        if(x1 < x0)
        {
            x0 = swap(x1,x1 = x0);
            y0 = swap(y1,y1 = y0);
        }
        double x = x0,y = y0;
        double m = (y1 - y)/(x1 - x);
        //System.out.print( m+"\n");
        while(x<=x1)
        { 
            System.out.print("(" + Math.round(x)+" "+Math.round(y)+")\n");
            x++;
            y = y + m;
        }
    }


    public static void main(String[] args)
    {

        Scanner scan = new Scanner(System.in);

        System.out.println("--------------DDA line algoritm--------------");

        System.out.println("\n Enter cordinates for first point :");

        int x0 = scan.nextInt();
        int y0 = scan.nextInt();

        System.out.println("\n Enter cordinates for sceond point :");

        int x1 = scan.nextInt();
        int y1 = scan.nextInt();

        System.out.println("\n The pixels contributing to the line are :");
        dda(x0,y0,x1,y1);

    }

}