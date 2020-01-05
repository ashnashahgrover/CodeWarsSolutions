# You might know some pretty large perfect squares. But what about the NEXT one?
#
# Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
#
# If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.
#
# Examples:
#
# findNextSquare(121) --> returns 144
# findNextSquare(625) --> returns 676
# findNextSquare(114) --> returns -1 since 114 is not a perfect

def find_next_square(sq):
    # Return the next square if sq is a square, -1 otherwise
    import math
    if math.sqrt(sq).is_integer():
      return (math.sqrt(sq)+1)**2
    else:
        return -1

# can do root = sq ** 0.5
#to take sqaure root without "import math"
