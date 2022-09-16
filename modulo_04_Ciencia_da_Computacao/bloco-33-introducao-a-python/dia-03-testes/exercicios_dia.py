# Escreva um programa que retorne uma lista com os valores numéricos de 1 a N


def fizz_buzz(num):
    numbers = []
    for number in range(1, num + 1):
        if number % 3 == 0 and number % 5 == 0:
            numbers.append("FizzBuzz")
        elif number % 3 == 0:
            numbers.append("Fizz")
        elif number % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(number)
    return numbers


print(fizz_buzz(5))
