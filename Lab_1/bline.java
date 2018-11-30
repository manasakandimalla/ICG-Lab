import java.util.Scanner;
import java.lang.*;
import java.lang.Math;
import java.awt.*;

public class bline extends Frame 
{
    int[] x = new int[100];
    int[] y = new int[100];
    int max;

    public static int swap(int x,int y)
    {
        return(x);
    }

    public bline(int x0, int y0,int x1,int y1)
    { 
        setTitle("Bresenham Line");
        setSize(300, 350);
        setVisible(true);
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
        max = x1 - x0 +1;
        int error = 0;
        int i = 0;
        for(int tx=x0, ty=y0;tx<=x1;tx++,i++)
        {
            if(Math.abs(yd) > Math.abs(xd))
            {
                x[i] = ty;
                y[i] = tx;
            }
            else 
            {
                x[i] = tx;
                y[i] = ty;
            }

            if( 2*(error + dy) < dx )
            {
                error += dy;
            }

            else
            {
                if(y1 > y0)
                    ty++;
                else ty--;
                error += dy - dx;
            }
        }
    }

    public void paint(Graphics g)
    {
        for(int i=0;i<max;i++)
        {
          g.drawLine(x[i],y[i], x[i], y[i]);  
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

        new bline(x0,y0,x1,y1);

    }

}