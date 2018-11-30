import java.util.Scanner;
import java.lang.*;


public class Bresenham_circle
{
    public static void rest(int xc,int yc,int x,int y)
    {
        System.out.print("(" + (xc+x)+" "+(yc+y)+")\n");
        System.out.print("(" + (xc+x)+" "+(yc-y)+")\n");
        System.out.print("(" + (xc-x)+" "+(yc+y)+")\n");
        System.out.print("(" + (xc-x)+" "+(yc-y)+")\n");
        System.out.print("(" + (xc+y)+" "+(yc+x)+")\n");
        System.out.print("(" + (xc+y)+" "+(yc-x)+")\n");
        System.out.print("(" + (xc-y)+" "+(yc+x)+")\n");
        System.out.print("(" + (xc-y)+" "+(yc-x)+")\n");
    }

    static void bresenham_circle(int xc, int yc,int r)
    { 
        int d = 3 - 2*r ;
        int x = 0;
        int y = r;
        while(y >= x)
        {
        	rest(xc,yc,x,y);

        	x++;

        	if(d>0)
        	{
        		y--;
        		d = d + 4*(x - y) + 10;
        	}
        	else
        	{
        		d = d + 4*x + 6;
        	}
        }

    }


    public static void main(String[] args)
    {

        Scanner scan = new Scanner(System.in);

        System.out.println("-----------Bresenham algoritm to draw circle-----------");

        System.out.println("\n Enter cordinates of center :");

        int xc = scan.nextInt();
        int yc = scan.nextInt();

        System.out.println("\n Enter radius of circle :");

        int r = scan.nextInt();

        System.out.println("\n The pixels contributing to the cirle are :");
        bresenham_circle(xc,yc,r);

    }

}