One of the little perks Trialspark employees enjoy is complimentary
lunch. We use this time to get to know each other better, share ideas,
and create a stronger community in which to achieve our mission. But
in this city of abundant restaurants, deciding where to eat can bring
conflict to an otherwise harmonious occasion. One way to make this
decision easier is to understand how our restaurant preferences relate
to one another. We each have a list of restaurants that we like. Can you
help us understand which restaurants we have in common?

CHALLENGE: Write a program that finds all pairs of restaurants that at
least 10 different employees have in common. You have complete freedom to
choose an algorithm, structure, and testing methodology for your program,
but please justify your choices with documentation. Please cover the following
to help us understand your solution:
1) Will your program work as our employee count grows to a thousand?
  Ten thousand? Higher?
2) What would you improve about your solution, if you had more time to
  develop it?

INPUT: A JSON file containing an object representing our employees’
favorite restaurants. The object’s keys are employee names. The values are
lists of the names of restaurants they like.

OUTPUT: A JSON file containing a list of objects. Each object contains
a pair of restaurants which appeared together in at least 10 different
employees’ restaurant lists.

For example, consider the following two employees’ lists:

{
  "Ronald Fisher": ["Bobo", "Chop't", "Elmo", "Blossom", "Narcissa", "Becco", "Parker & Quinn"],
  "Jacques Cousteau": ["Butter", "Gramercy Tavern", "Chop't", "Union Square Cafe", "Blossom",
                       "Narcissa", "Made Nice", "Esca"]
}

The output would be the following JSON:

[]

Ronald Fisher and Jacques Cousteau have 3 restaurants in common: Chop’t,
Blossom, and Narcissa. However, there are only two people who share these
restaurants. On the other hand, if our input additionally included 4 of
Ronald's friends, each sharing his exact preferences, and 4 of Jacques'
friends, each sharing his exact preferences, the output would be the following JSON:

[["Chop't", "Blossom"], ["Chop't", "Narcissa"], ["Blossom", "Narcissa"]]

Now enough employees have these restaurants in common for them to make it
into the output list of restaurant pairs.

The goal isn't to first find each restaurant that at least 10 people prefer, and then output all the combinations of that list of length 2. The goal is to find all pairs of restaurants that are *both preferred* by at least 10 people. For example, 100 people might like Narcissa, but if all of their other preferences are perfectly unique to them, then Narcissa won't show up anywhere in the output. However, if 10 or more of those people also liked Bobo, then ["Narcissa", "Bobo"] would appear as a pair in the output.

Good luck! We look forward to reviewing your solution.