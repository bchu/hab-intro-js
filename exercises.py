# WARNING: THIS CODE IS ONLY INTENDED AS A GUIDELINE
# FOR THE KIND OF LOGIC NEEDED TO IMPLEMENT exercises.js
# invoke_once and enforce_argument_count don't actually work.

def map(list, mapper):
  return [mapper(item) for item in list]

def reduce(list, reducer, initializer=None):
  accum_value = initializer
  for x in list:
      accum_value = reducer(accum_value, x)
  return accum_value

# THIS DOES NOT ACTUALLY WORK IN PYTHON
# IT'S ONLY A GUIDELINE FOR THE JAVASCRIPT VERSION
def invoke_once(func):
  called = False
  def wrapper():
    nonlocal called
    if called:
      return
    called = True
    func()
  return wrapper

# THIS DOES NOT ACTUALLY WORK IN PYTHON
# IT'S ONLY A GUIDELINE FOR THE JAVASCRIPT VERSION
def enforce_argument_count(func, default_value, argument_count):
  def wrapper(*args):
    if len(args) < argument_count:
      return default_value
    else:
      return func(*args)
  return wrapper
