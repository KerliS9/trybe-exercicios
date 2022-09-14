from random import randint

# if e else
pantheon_of_arton = [
    {"nome": "Wirna", "domínio": "Magia"},
    {"nome": "Nimb", "domínio": "Sorte"},
    {"nome": "Ahadarak", "domínio": "Tormenta"},
]

dice_roll = randint(1, 20)
print(f"dice_roll: {dice_roll}")

if dice_roll == 1:
    print("Vixi... Deu ruim!")
elif 2 <= dice_roll <= 15:
    print("Ahadarak, porque me atormentas!")
elif 16 <= dice_roll <= 19:
    print("Nimb, obrigado pela sorte")
else:
    print("Agora ninguém me segura!")

# for in - separando os domínios
domains = []
for god in pantheon_of_arton:
    domains.append(god["domínio"])
print(domains)

# filtrar usando comprehension
domains = [god for god in pantheon_of_arton if god["domínio"] != "Tormenta"]
print(f"filter domains: {domains}")

key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}
print(from_to[key])
