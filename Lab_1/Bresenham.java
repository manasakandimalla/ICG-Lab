import java.util.Scanner;
import java.lang.*;


public class Bresenham 
{
    public static int swap(int x,int y)
    {
        return(x);
    }

    static void bresenham(int x0, int y0,int x1,int y1)
    { 
        int temp;      
        if(x1 < x0)
        {
            //swap point one and two
            x0 = swap(x1,x1 = x0);
            y0 = swap(y1,y1 = y0);
        }
        int yd = y1 - y0,xd= x1 - x0;
        int dy = Math.abs(yd), dx = Math.abs(xd);
        if(dy > dx)
        {
            //swap x,y and dx,dy
            x0 = swap(y0,y0 = x0);
            x1 = swap(y1,y1 = x1);
            dx = swap(dy,dy = dx);
        }

        int error = 0;
        
        for(int x=x0, y=y0;x<=x1;x++)
        {
            if(Math.abs(yd) > Math.abs(xd))
                System.out.print("(" + y+" "+x+")\n");
            else System.out.print("(" + x+" "+y+")\n");

            if( 2*(error + dy) < dx )
            {
                error += dy;
            }

            else
            {
                if(y1 > y0)
                    y++;
                else y--;
                error += dy - dx;
            }
        }
    }


    public static void main(String[] args)
    {

        Scanner scan = new Scanner(System.in);

        System.out.println("-----------Bresenham line algoritm-----------");

        System.out.println("\n Enter cordinates for first point :");

        int x0 = scan.nextInt();
        int y0 = scan.nextInt();

        System.out.println("\n Enter cordinates for sceond point :");

        int x1 = scan.nextInt();
        int y1 = scan.nextInt();

        System.out.println("\n The pixels contributing to the line are :");
        bresenham(x0,y0,x1,y1);

    }

}