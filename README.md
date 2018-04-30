The program I developed works as so:
1) use original input (m employees w/ n restuarants each) to create a list of all restuarant pairs,
which is O(n * m) space and time complexity, or O(n^2) for simplicity, assuming n is greater of the two values.

2) for each employee, we loop through the list of all pairs and add to the running count of pairs for which that employee contributes.

3) we filter this list of pairs by our cut off count, in this case 10

This program runs in O(n^2 * m) time where n is the number of employees and m is the number of restuarants. More simply put that is O(n^3) time complexity, and O(n^2) space complexity to produce the intermediate mapping of restuarant pairs to counts. To answer the questions explciitly asked in the challenge:

1) Will your program work as our employee count grows to a thousand?
  Ten thousand? Higher?

  It will, though it grows at O(n^3) which isn't ideal. However, the algorithm depends in large part on looping through the list of possible restaurant pairs, which should grow as restuarants are added, but should cap off at some point as the number of local restuarants is saturated. At that point, the growing employee count only contributes to linear growth. 

2) What would you improve about your solution, if you had more time to
  develop it?

  The solution could likely be improved by either finding a more clever algorithm (it's possibly a dynamic programming solution could apply in this case) or saving data, so that when the list of employees and restuarants is updated, we only need to calculate the newest additions instead of calculating everything all over again. Additionally, lookups could be quicker if the restuarants for each individual were provided as an object instead of an array.

In either case, this algorithm works, and it's runtime, while not ideal, seems reasonable given the values we are working with. If I could test it on more data, I am very curious how the runtime would grow as the number of restuarants plateued but the number of employees continued to grow. As the algorithm is written, we should see better runtime in such a case, though the complexity is unchanged. 
