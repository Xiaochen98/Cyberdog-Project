#include "stm32f10x.h"                  // Device header
#include "stdlib.h"
#include <stdio.h>
#include "Delay.h"
#include "OLED.h"
#include "Servo.h"
#include "PWM.h"
#include "Movement.h"
#include "usart1.h"
#include "Mode.h"

uint8_t move_mode = '0';//mode
uint8_t flag = '0';//save date from BLE
uint16_t Time;

int main(void)
{
	//Init Models
	OLED_Init();		//OLED Init
	USART1_Init();		//BLE UART Init
	Servo_Init();		//Servo_GetAngle1 Init

	
	//default gesture
	OLED_Clear();
	OLED_ShowImage(0, 0, 128, 64, BMP1); 
  //waiting for commend
	while (1)
	{  
		
		flag = USART1_GetRxFlag();
		move_mode = USART1_GetRxData();		//get data from BLE model

		//move according to BLE data//
		if (move_mode == 'f') { //Forward
			mode_forward();
		} else if (move_mode == 'b') { //Backward
			mode_behind();
		} else if (move_mode == 'l') { //Left
			mode_left();
		} else if (move_mode == 'r') { //Right
			mode_right();
		} else if (move_mode == 'w') { //Wave
			mode_swing_qianhou(); 
		} else if (move_mode == 'd') { //Dance
			mode_dance();
		} else if (move_mode == '5') { //Stand
			mode_stand();
		} 
	}
}
