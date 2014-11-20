def map(list, mapper):
  return [mapper(item) for item in list]

def reduce(list, reducer, initializer=None):
  accum_value = initializer
  for x in it:
      accum_value = function(accum_value, x)
  return accum_value

def enforce_argument_count(func, default_value, argument_count):
  def wrapper(*args):
    if len(args) < argument_count:
      return default_value
    else:
      return func(*args)
  return wrapper
