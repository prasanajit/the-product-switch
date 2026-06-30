1. What is the Sliding Window Pattern?

The Sliding Window Pattern is an optimization technique where a fixed-size or variable-size window moves across an array or string to avoid recalculating values from scratch.

2. Why do we use the Sliding Window Pattern?

because it's complexity is O(n) which is better than O(n^2)

3. When should we use this pattern?

Use this pattern when a problem involves consecutive elements (subarrays or substrings).

4. How is Sliding Window different from Multiple Pointers?

multiple pointers works using two elemwnts while sliding window works using a sub set of data 

5. What type of problems is Sliding Window commonly used for?

Sliding Window is commonly used for problems involving contiguous subarrays or substrings, such as finding the maximum sum, longest substring, or minimum window.

6. What is the Time Complexity?

Explain why.

Each element enters and leaves the window at most once, so every element is processed a constant number of times, resulting in O(n).

7. What is the Space Complexity?

Explain why.

it's O(1), as we have to update one or two varibales data and return

8. Advantages of the Sliding Window Pattern.

time complexity is more efficient

9. Disadvantages of the Sliding Window Pattern.

The Sliding Window Pattern is not suitable for every problem. It is mainly used for problems involving contiguous (consecutive) elements in an array or string. If the problem does not involve a window of consecutive elements, another pattern may be more appropriate.

10. Give one real-world example.

Longest Substring Without Repeating Characters

11. Give one interview problem where this pattern can be used.

Longest Substring Without Repeating Characters