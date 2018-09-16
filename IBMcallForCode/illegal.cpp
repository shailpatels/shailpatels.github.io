#include "CImg.h"
#include <iostream>
#include <math.h>
#include <fstream>

using namespace cimg_library;

int main(){

unsigned int width = 64;
unsigned int height = 64;

//create image object using BMP file in directory
CImg<float> image("C:/Users/karenwu/Desktop/forKarenProject1/Project1/Patch_18-R436-1_DefectID830_defect.bmp");

float gamma = 0.55;
float gamma_correction = 1 / gamma;

//2D array contructor
unsigned int** ary = new unsigned int*[width];
for (unsigned int i = 0; i < width; i++) {
	ary[i] = new unsigned int[height];
}

//obtain RGB value from each pixel in image and adjust it's gamma
for (unsigned int i = 0; i < width; i++) {
	for (unsigned int j = 0; j < height; j++) {
		float Bcolor = image(i, j, 0, 2); // read pixel val at certain coord

		//change pixel val using gamma adjustment formula
		unsigned int newB = unsigned int (pow(Bcolor / 255, gamma_correction) * 255);

		//place new pixel val in new image
		ary[i][j] = newB;
	}
}

//populate 2d array(new image)
//CImg<unsigned char>  theImage(461, 346, 1, 3, 1); //og one
CImg<unsigned char>  theImage(width, height, 1, 1, 0);

for (unsigned int i = 0; i<width; i++){
	for (unsigned int j = 0; j<height; j++){
		//theImage(i, j, 1) = ary[i][j];
		theImage(i, j, 0) = ary[i][j];
	}
}

//display and write image
CImgDisplay main_disp(theImage); // display it
theImage.save_bmp("Patch_18-R436-1_DefectID830_defect_gamma_0.55.bmp"); // write it


//destructor
for (unsigned int i = 0; i < width; i++) {
	delete[] ary[i];
}
delete[] ary;


std::cin.ignore();
}