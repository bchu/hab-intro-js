1 + 1

print(5)

a = 5

dictionary = {
  'hello': 'hi',
  'there': 'that'
}

word = dictionary['hello']

b = 'hello'

b[0] = 'j'

array = ['s', 5, 8]

third = array[2]

var zero_to_three = array.slice(0, 3)

last_element = array[len(array) - 1]

new_array = []

new_array.append(1)
new_array.append(2)
new_array.pop()
new_array.insert(0, 'a')
new_array.pop(0)


#############################################


def square(num):
  return num * num

c = square(a)

if True:
  return True
elif False:
  return None
elif False or True:
  return True and False
elif 0 == 1:
  return 0
else:
  return 'error'

while a > 0:
  a -= 1

for x in range(5):
  print(x ** 2)


#############################################


sheep = lambda x: x

def higher_order(num):
  def inception():
    nonlocal num
    num += 5
  inception()
  return num

higher_order(6) # returns 11

mess_this = 1
def will_do():
  global mess_this
  mess_this += 6

will_do()

print(mess_this) # 7
