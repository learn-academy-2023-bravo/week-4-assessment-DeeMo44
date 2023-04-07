# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# create a method named 'evenOdd' that takes a number as a parameter
def evenOdd(num)
  # if the number % 2 is 0 then it is even
  if num % 2 == 0
    # print the number is even
    p "#{num} is even"
    # if the number is not even then it is odd
  else
    # print the number is odd
    p "#{num} is odd"
  end
end

evenOdd(reposts1)
evenOdd(reposts2)
evenOdd(reposts3)
# Output:
# "7 is odd"
# "42 is even"
# "221 is odd"
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# create a method named 'noVowels' that takes a string as a parameter
def noVowels(string)
  # use .delete method to delete all upper/lower case vowels
  p string.delete "aeiouAEIOU"
end

noVowels(beatles_album1)
noVowels(beatles_album2)
noVowels(beatles_album3)
# Output:
# "Rbbr Sl"
# "Sgt Pppr"
# "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# create a method named palindrome that takes a string as a parameter
def palindrome(string)
  # use .downcase method to ensure string has same case
  # use .reverse to reverse the string
  # if the string is the same as its reverse it is a palindrome
  if string.downcase == string.downcase.reverse
    # print the string is a palindrome
    p "#{string} is a palindrome"
    # if the string is not the same as its reverse it is not a palindrome
  else
    # print the string is not a palindrome
    p "#{string} is not a palindrome"
  end
end

palindrome(palindrome_tester1)
palindrome(palindrome_tester2)
palindrome(palindrome_tester3)
# Output:
# "Racecar is a palindrome"
# "LEARN is not a palindrome"
# "Rotator is a palindrome"