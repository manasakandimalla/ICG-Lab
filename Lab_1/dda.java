import java.util.Scanner;
import java.lang.*;
import java.lang.Math;
import java.awt.*;

public class dda extends Frame
{

  int[] x = new int[100];
  int[] y = new int[100];
  int max;

  public static int swap(int x,int y)
  {
      return(x);
  }

  public dda(int x0, int y0,int x1,int y1)
  { 
    setTitle("DDA Line");
    setSize(300, 350);
    setVisible(true);
    if(x1 < x0)
    {
      x0 = swap(x1,x1 = x0);
      y0 = swap(y1,y1 = y0);
    }
    max = x1 - x0 +1;
    int i=1;
    x[0] = x0;
    y[0] = y0;
    double tx = x0,ty = y0;
    double m = (y1 - ty)/(x1 - tx);
    while(tx<=x1)
    { 
      tx++;
      ty = ty + m;
      x[i] = (int)tx;
      y[i] = (int)Math.round(ty);
      i++;
    }
  }

  public void paint(Graphics g)
  {
    for(int i=0;i<max;i++)
    {
      g.drawLine(x[i],y[i], x[i], y[i]);  
    }        
    
  }

  public static void main(String args[])
  {
    
    Scanner scan = new Scanner(System.in);

    System.out.println("--------------DDA line algoritm--------------");

    System.out.println("\n Enter cordinates for first point :");

    int x0 = scan.nextInt();
    int y0 = scan.nextInt();

    System.out.println("\n Enter cordinates for sceond point :");

    int x1 = scan.nextInt();
    int y1 = scan.nextInt();

    new dda(x0,y0,x1,y1);
  }
}