# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I refactored the function to be more readable by breaking it down into smaller functions using optional chaining and if statement.
I created 2 functions to generate the partition key and to hash the key separate responsibility and always using constant to return immutables values.
I also added unit tests to ensure that the function works as expected.

The first test checks that the function returns "0" when called with undefined.
The second test checks that the function returns the partition key with hash algorithm.
The third test checks that the function returns the partition key with hashed string.