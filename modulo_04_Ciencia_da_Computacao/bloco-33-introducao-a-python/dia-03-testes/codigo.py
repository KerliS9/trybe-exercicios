def is_odd(number):
    return number % 2 != 0


def divide(a_number, other_number):
    return a_number / other_number


list = [
        {"customer": "maria", "order": "pizza", "day": "terça-feira"},
        {"customer": "joao", "order": "hamburger", "day": "terça-feira"},
        {"customer": "maria", "order": "pizza", "day": "quarta-feira"},
        {"customer": "maria", "order": "hamburger", "day": "quinta-feira"},
    ]
print(type(list))


def get_most_ordered_dish_per_costumer(list, customer):
    """ prato mais pedido por uma determinada pessoa cliente,
    considerando que os pedidos estão em uma lista """
    return "pizza"


def get_order_frequency_per_costumer(list, customer, order):
    """ retorna a frequência que uma determinada pessoa cliente,
    pede um determinado prato, considerando os pedidos listados"""
    return 1
