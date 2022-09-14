# definir funções
def imc(peso, altura):
    return peso / (altura / 100) ** 2


print(imc(61, 170))  # função com parâmetros posicionais
print(imc(altura=170, peso=61))  # função com parâmetros nomeados, pode mudar
# a ordem dos parâmetros


# função com quantidade diferentes de parâmetros


def concat(*strings):
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ', '
    return final_string


print(concat("Carlos", "Cristina"))
print(concat("Carlos", "Cristina", "Maria"))

# dict cria um objeto com chave e valor
print(dict(nome="Felipe", sobrenome="Silva", idade=25))
print(dict(nome="Ana", sobrenome="Souza", idade=21, turma=1))

print("Coin", "Rodrigo", ", ")
print("Coin", "Rodrigo", sep=", ")  # sep identifica a vírgula como separador
