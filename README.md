# Cyberdog-Project

Cyberdog-Project is an open-source robotics development platform, primarily implemented in C, with supporting code in Assembly, Linker Script, HTML, Makefile, and JavaScript. This project provides a modular and extensible codebase for building and programming quadruped robots such as "Cyberdog".

## Features

- **Robust C-based Core**: High-performance and portable robot control logic in C.
- **Low-Level Hardware Control**: Assembly and linker scripts for bootloader and direct hardware interfacing.
- **Modular Structure**: Easily extend or modify components for custom robotic applications.
- **Web Interface**: Basic controls and status pages using HTML and JavaScript.
- **Makefile Build System**: Streamlined build and deployment process.

## Getting Started

### Prerequisites

- GCC toolchain for C and Assembly
- Make
- (Optional) Web browser for HTML/JavaScript interface

### Building the Project

```sh
make
```

This command compiles all necessary files and generates binaries for deployment.

### Running

Instructions for running binaries and flashing firmware will depend on your hardware platform. Please refer to source code comments or additional documentation for details.

## Repository Structure

- `src/` - Main source code (C, Assembly)
- `scripts/` - Linker scripts and utilities
- `web/` - HTML/JavaScript files for web interface
- `Makefile` - Build instructions

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or collaboration, please open an issue or contact the maintainer via GitHub.