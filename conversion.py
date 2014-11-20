1 + 1

print(5)

a = 5

array = ['s', 5, 8]

third = array[2]

last_element = array[len(array) - 1]

dictionary = {
  'hello': 'hi'
  'there': 'that'
}

word = dictionary['hello']

def square(num):
  return num * num

c = square(num)


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

b = 'hello!'

b[0] == 'h'

zero_to_three = b[0:3]

sheep = lambda x: x

mess_this = 1
def will_do():
  nonlocal mess_this # ERROR THIS IS IMPOSSIBLE IN PYTHON
  mess_this += 1

will_do() # ERROR
will_do() # ERROR

print(mess_this) # ERROR

def higher_order(num):
  '''
  # THIS IS IMPOSSIBLE IN PYTHON:
  nonlocal a
  nonlocal b
  nonlocal c
  nonlocal dictionary
  nonlocal word
  nonlocal arrray
  .
  .
  .
  '''
  def inception():
    return num + 5
  return inception

higher_order(6)() # returns 11

def higher_order_redux(mess_this):
  def will_do():
    nonlocal mess_this
    mess_this += 1
  will_do()
  return mess_this

higher_order_redux(4) # 6
