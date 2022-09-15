# Crie uma função que receba dois números e retorne o maior deles.


def bigger(num1, num2):
    if num1 > num2:
        print(num1)
    else:
        print(num2)


bigger(3, 2)

# Calcule a média aritmética dos valores contidos em uma lista.

num = list(range(1, 10))
print(num)
media = sum(num) / len(num)
print(f"media manual: {media}")


def mean(num):
    total = 0
    for number in num:
        total += number
    return total / len(num)


total = mean(num)
print(total)

# imprimir asteriscos


def draw_square(n):
    for row in range(n):
        print(n * "*")


draw_square(5)

# maior quantidade de caracteres.

nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
biggest = nomes[0]
for nome in nomes:
    if len(nome) > len(biggest):
        biggest = nome

print(biggest)


def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print("function", find_biggest_name(nomes))

# cobertura da tinta


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


cans = paint_costs(5)
print(f"baldes necessários: {cans[0]},  preço total: {cans[1]}")

# receba os três lado de um triângulo e informe qual o tipo de triângulo


def triangle(side_a, side_b, side_c):
    is_triangle = (
        side_a + side_b > side_c
        and side_b + side_c > side_a
        and side_a + side_c > side_b
    )
    if side_a == side_b == side_c:
        print("Triângulo Equilátero: três lados iguais")
    elif side_a != side_b != side_c:
        print("Triângulo Escaleno: três lados diferentes")
    elif is_triangle:
        print("Triângulo Isósceles: quaisquer dois lados iguais.")
    else:
        print("não é triângulo")


triangle(2, 2, 0)
