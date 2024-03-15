#include <iostream>  

using namespace std;  

class Point {  
  public:  
    double x; 
		double y;

    Point(int newX, int newY) {    
      this->x = newX;    
      this->y = newY;    
    }    

    void display() {    
      cout << "(" << this->x << ",  " << this->y << ")" << endl;    
    }    
}; 

int main(void) {  
  Point p1 =Point(1.0, 2.0);       
  Point p2=Point(100.0, 200.0); 
  p1.display();    
  p2.display();    
  return 0;  
}  
