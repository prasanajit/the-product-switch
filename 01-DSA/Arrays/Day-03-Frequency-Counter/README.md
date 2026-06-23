1. What is the Frequency Counter Pattern?

Frequency counter pattern where we count the number of occurance opf the each items given and keep the record to compare it.

2. Why do we use the Frequency Counter Pattern?

to check the number of occuerance of the items

3. When should we use this pattern?

Use the Frequency Counter pattern when you need to compare frequencies of values, characters, or elements between two collections without using nested loops.

4. How does it improve over nested loops?

So if we keep the loops separate then it depends on the N value where on the nested loops it gets multiplied which is n², and that's exactly this pattern does here

5. Which data structure is commonly used in this pattern?

Objects (or Hash Maps / Map in JavaScript)

6. What is the Time Complexity? Explain why.

it's O(n) as we have separate loops, which only rund N times and depends on N value

7. What is the Space Complexity? Explain why.

it's O(n) as we have the objects where we log the counts of each items which depends on the N value

8. Advantages of the Frequency Counter Pattern.

The time complexity is less than the nested loops

9. Disadvantages of the Frequency Counter Pattern.

the space complexity is O(n)

10. Give one real-world example.

Checking whether two words are anagrams in a dictionary application.

11. Give one interview problem where this pattern can be used.

anagram challenge and array matching
