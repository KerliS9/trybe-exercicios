import sys
import area

PEOPLE_PER_SQUARE_METER = 2  # numero de pessoas por metro quadrado em média
FIELD_LENGTH = 60  # em metros
FIELD_WIDTH = 45  # em metros

people_at_concert = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_PER_SQUARE_METER
)


print("Estão presentes no show aproximadamente", people_at_concert, "pessoas.")

# documentando a função


def quadrado(n):
    '''Recebe um número n, retorna o quadrado de n'''  # Literal de string
    return n**2


print(quadrado.__doc__)
# Saída - Recebe um número n, retorna o quadrado de n
print(print.__doc__)

value = 1
print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)
# Saída
# Prints the values to a stream, or to sys.stdout by default.
# Optional keyword arguments:
# file:  a file-like object (stream); defaults to the current sys.stdout.
# sep:   string inserted between values, default a space.
# end:   string appended after the last value, default a newline.
# flush: whether to forcibly flush the stream.
