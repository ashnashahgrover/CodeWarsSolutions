# An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
#
# is_isogram("Dermatoglyphics" ) == true
# is_isogram("aba" ) == false
# is_isogram("moOse" ) == false # -- ignore letter case

def is_isogram(string)
  #your code here
  for i in (0..string.length-2) do
    if string[i]==string[i+1]
      return false
    elsif string.count(string[i].upcase) + string.count(string[i].downcase)>1
      return false
    end
  end
  return true
end
