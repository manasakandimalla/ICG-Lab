import java.util.Scanner;
import java.lang.*;
import java.lang.Math;
import java.awt.*;

public class bcircle extends Frame
{
    int[] x = new int[500];
    int[] y = new int[500];
    int i=0;

    public void rest(int xc,int yc,int tx,int ty)
    {
        x[i] =  (xc+tx); y[i] = (yc+ty) ; i++ ;
        x[i] =  (xc+tx); y[i] = (yc-ty) ; i++ ;
        x[i] =  (xc-tx); y[i] = (yc+ty) ; i++ ;
        x[i] =  (xc-tx); y[i] = (yc-ty) ; i++ ;
        x[i] =  (xc+ty); y[i] = (yc+tx) ; i++ ;
        x[i] =  (xc+ty); y[i] = (yc-tx) ; i++ ;
        x[i] =  (xc-ty); y[i] = (yc+tx) ; i++ ;
        x[i] =  (xc-ty); y[i] = (yc-tx) ; i++ ;
    }

    public bcircle(int xc, int yc,int r)
    { 
        setTitle("Bresenham circle");
        setSize(300, 350);
        setVisible(true);
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

    public void paint(Graphics g)
    {
        for(int j=0;j<i;j++)
        {
            g.drawLine(x[j],y[j], x[j], y[j]);  
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

        new bcircle(xc,yc,r);

    }

}