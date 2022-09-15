import random
import sys

""" meu_numero = 0
while meu_numero < 42:
    meu_numero += int(input("Digite um número: "))

print(meu_numero) """

# play guess number
random_number = random.randint(1, 10)
guess = ""

""" while guess != random_number:  # enquanto não adivinhar o número
    guess = int(input("Qual o seu palpite? Entre 1 e 10 "))

print("O número sorteado era: ", guess) """

# valores externos na execução de nossos programas
if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)

# modificar a saída padrão para a saída de erros
err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)

# imprima na vertical
nome = input("Digite seu nome: ")
for n in nome:
    print(n)

# receba números e jogue um erro
nums = input("Insira valores aqui, separados por espaço: ")
numsArr = nums.split(" ")
sum = 0
for num in numsArr:
    if not num.isdigit():
        print(f"Erro ao somar valores, | {num} | não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")

# desempacotamento
a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = (1, 2, 3)
# Quando um * está presente no desempacotamento, os valores são desempacotados
# em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]
