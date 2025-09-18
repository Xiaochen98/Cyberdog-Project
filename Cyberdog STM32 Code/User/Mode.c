#include "stm32f10x.h"                  // Device header
#include "stdlib.h"
#include "Delay.h"
#include "OLED.h"
#include "Servo.h"
#include "PWM.h"
#include "Movement.h"
#include "usart1.h"
#include "stdio.h"

extern uint8_t move_mode ;

void mode_forward(void)
{
			OLED_ShowImage(0, 0, 128, 64, BMP2);
			move_forward();

	
}
void mode_behind(void)
{
			OLED_ShowImage(0, 0, 128, 64, BMP2); 
			move_behind();
	
}
void mode_left(void)
{
			OLED_ShowImage(0, 0, 128, 64, BMP3); 
			move_left();
	
	
}
void mode_right(void)
{
			OLED_ShowImage(0, 0, 128, 64, BMP4); 
			move_right();

}

void mode_swing_qianhou(void)
{
			OLED_ShowImage(0, 0, 128, 64, BMP11); 
			move_shake_qianhou();

}

void mode_dance(void)
{
			OLED_ShowImage(0, 0, 128, 64, BMP5); 
			move_dance();

	
}
void mode_stand(void)
{
			OLED_ShowImage(0, 0, 128, 64, BMP1); 
			move_stand();	
	
}

