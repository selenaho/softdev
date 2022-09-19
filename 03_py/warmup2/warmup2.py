def string_times(str, n):
  return str*n

def front_times(str, n):
  if len(str) < 3:
    word = str
  else:
    word = str[0:3]
  return word*n

def string_bits(str):
  x = 0
  s = ""
  for e in str:
    if x%2 == 0:
      s += e
    x +=1
  return s

def string_splosion(str):
  word = ""
  for e in range(len(str)+1):
    word += str[0:e]
  return word

def last2(str):
  word = str[str(len)-2:]
  counter = 0
  for a in range(len(str) - 1):
    if word == str[a:a+2]:
      counter += 1
  return counter