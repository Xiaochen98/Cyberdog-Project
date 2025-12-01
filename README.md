# Cyberdog-Project

Cyberdog-Project is an open-source quadruped robots, primarily implemented in C.
Designed and 3D-printed a quadruped robot body integrating all components into a functional system. Programmed an STM32 microcontroller to generate PWM signals driving four servos for leg motion, implemented UART communication with a BLE module for wireless control, and used I²C to drive an OLED display showing synchronized expressions. Additionally, developed and deployed a Bluetooth-enabled Web App for browser-based operation.

<img width="364" height="275" alt="image" src="https://github.com/user-attachments/assets/d9190082-93a5-4180-92e4-118cbbec8aa2" />
<img width="162" height="276" alt="image" src="https://github.com/user-attachments/assets/8092a3a5-daf4-47e4-b665-dd0777193248" />


## Features

- **Robust C-based Core**: High-performance and portable robot control logic in C.
- **Low-Level Hardware Control**: Assembly and linker scripts for bootloader and direct hardware interfacing.
- **Modular Structure**: Easily extend or modify components for custom robotic applications.
- **Web Interface**: Basic controls and status pages using HTML and JavaScript.
- **Makefile Build System**: Streamlined build and deployment process.

## BOM
Microcontroller: STM32F103C8T6 “Blue Pill” Development Board
Servos: SG90 9g Micro Servos × 4 (leg actuation)
Bluetooth Module: DX2002 UART-based BLE Module
Display: 0.96-inch OLED, I²C Interface
Main Battery: 3.7V Li-ion / Li-Po Battery (Robot Power Source)
Charging Module: TP4056 Li-ion Charging & Protection Board
Power Switch: SS-12F44G5 2-position Toggle Switch

## PCB

<img width="1184" height="839" alt="image" src="https://github.com/user-attachments/assets/65984b5e-b263-4356-a785-04ad9cb9872c" />


## Getting Started
### Firmware Compilation
You may use either:
Keil MDK ( Compiler V5 required), or
GCC + Make toolchain
Both toolchains generate deployable firmware binaries.

### Flashing
Use ST-Link or any JTAG/SWD programmer compatible with the STM32F1 series to flash the compiled firmware.

### Web-Based Control
Open the provided HTML file via PC or smartphone (Chrome is recommended)
Grant Bluetooth access
Pair with the robot via BLE
Send movement commands directly through the UI
Voice Command Mode is under development and will be available in a future version.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or collaboration, please open an issue or contact myself via github
