#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

int main() {
    std::cout << "==================================" << std::endl;
    std::cout << "🧮 C++ Math Calculator" << std::endl;
    std::cout << "==================================" << std::endl;
    
    std::vector<double> numbers;
    std::string input;
    
    std::cout << "Enter numbers (type 'done' when finished):" << std::endl;
    
    // Collect numbers from user
    while (true) {
        std::cout << "Number: ";
        std::getline(std::cin, input);
        
        if (input == "done" || input == "DONE") {
            break;
        }
        
        try {
            double num = std::stod(input);
            numbers.push_back(num);
            std::cout << "Added: " << num << std::endl;
        } catch (const std::exception& e) {
            std::cout << "Invalid number. Please try again." << std::endl;
        }
    }
    
    if (numbers.empty()) {
        std::cout << "No numbers entered. Goodbye!" << std::endl;
        return 0;
    }
    
    // Calculate statistics
    double sum = 0;
    for (double num : numbers) {
        sum += num;
    }
    
    double average = sum / numbers.size();
    
    auto minElement = std::min_element(numbers.begin(), numbers.end());
    auto maxElement = std::max_element(numbers.begin(), numbers.end());
    
    // Display results
    std::cout << "\n📊 Results:" << std::endl;
    std::cout << "Numbers entered: ";
    for (size_t i = 0; i < numbers.size(); ++i) {
        std::cout << numbers[i];
        if (i < numbers.size() - 1) std::cout << ", ";
    }
    std::cout << std::endl;
    
    std::cout << "Count: " << numbers.size() << std::endl;
    std::cout << "Sum: " << sum << std::endl;
    std::cout << "Average: " << average << std::endl;
    std::cout << "Minimum: " << *minElement << std::endl;
    std::cout << "Maximum: " << *maxElement << std::endl;
    
    std::cout << "\n🎉 C++ calculation complete!" << std::endl;
    
    return 0;
}