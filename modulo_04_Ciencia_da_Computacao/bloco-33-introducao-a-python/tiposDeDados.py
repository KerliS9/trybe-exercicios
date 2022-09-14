# list

trybe_course = ["Introdução", "Front-end", "Back-end"]

trybe_course.append("Ciência da Computação")
print(trybe_course)

trybe_course[0] = "Fundamentos"
print(trybe_course)

# tuple
user = ("Will", "Marcondes", 42)
# elementos são definidos separados por vírgula, envolvidos por parênteses

print(user[0])  # acesso também por índices

# set
people = {"Luana", "Isabel"}
print(people)
people = set()  # sobrescreve a variável people
people.add("kerli")
print(people)

# frozenset
# variação do set, porém imutável, ou seja, seus elementos não podem ser
# modificados durante a execução do programa.

# dict
people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}
print(people_by_id)
print(people_by_id[1])

del people_by_id[1]
print(people_by_id)
print(people_by_id.items())

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}
print(info)
info["recorrente"] = "Sim"  # adiciona a lista
print(info)
del info["origem"]
print(info)

# range
