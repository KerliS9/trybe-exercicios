restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

for index in range(5):
    print(index)

# comprehension list
min_rating = 3.0
filtered_restaurants = [
    restaurant for restaurant in restaurants if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

filtered_restaurants = [restaurant["name"]]
print(f"restaurant names: {filtered_restaurants}")

# usando strings
nomes = ["Duda", "Rafa", "Cris", "Yuri"]
nomes2 = [s for s in nomes if "a" in s]
print(nomes2)  # Saída ['Duda', 'Rafa']

# identificando números quadrados entre 1 e 10
quadrados = [x * x for x in range(11)]
print(quadrados)  # Saída [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# while - sequencia Fibonacci
n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

# enumerate - adiciona e converte em lista
languages = ["Python", "Java", "JavaScript"]

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))
# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

languages = ["Python", "Java", "JavaScript"]

# desestruturar (unpack) os itens da lista ou tupla:
for index, language in enumerate(["Python", "Java"]):
    print(f"{index} - {language}")
# Saída:
# 0 - Python
# 1 - Java

# calcule o fatorial
num = 5
counter = 1
result = 1
while counter <= num:
    print(f"counter: {counter}")
    result = result * num
    print(result)
    counter += 1

number = 5
result = 1
# Usamos number + 1 pro range ir até o number
for factor in range(1, number+1):
    result *= factor
print(f"fatorial com range: {result}")

ratings = [6, 8, 5, 9, 10]
new_ratings = []
for rating in ratings:
    new_ratings.append(rating * 10)
print(new_ratings)

ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
print(new_ratings)

for rat in ratings:
    if (rat % 3) == 0:
        print(f"múltiplo de 3: {rat}")
