# You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.



def find_outlier(integers):
    allEven = map(lambda x: x%2, integers)
    allEven = list(allEven)
    if allEven.count(0) > 1:
      index = allEven.index(sorted(allEven)[-1])
      return integers[index]
    else:
      allOdd = allEven
      index = allOdd.index(sorted(allOdd)[0])
      return integers[index]
