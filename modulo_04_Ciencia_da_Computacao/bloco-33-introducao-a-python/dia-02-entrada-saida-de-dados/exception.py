while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")


try:
    arquivo = open("arquivo.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")

# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto
# à variável file
with open("arquivo1.txt", "w") as file:
    file.write("Michelle 27\n")
print(file.closed)

# with abre e fecha o arquivo
LINES = ["Marcos 10\n", "Felipe 4\n", "José 6\n", "Ana 10\n", "Maria 5\n"]
with open("estudantes.txt", "w") as file:
    file.writelines(LINES)

selected_students = []
with open("estudantes.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            selected_students.append(student_grade[0] + " " + student_grade[1])

with open("selected_students.txt", mode="w") as selected_students_file:
    print(selected_students)
    selected_students_file.writelines(selected_students)
