#include <iostream>
#include <string>

int main() {
    std::cout << "🚀 Hello from C++!" << std::endl;
    std::cout << "This is a simple C++ program running from TypeScript!" << std::endl;
    
    std::string name;
    std::cout << "Enter your name: ";
    std::getline(std::cin, name);
    
    std::cout << "Nice to meet you, " << name << "!" << std::endl;
    std::cout << "C++ and TypeScript working together! 🎉" << std::endl;
    
    return 0;
}