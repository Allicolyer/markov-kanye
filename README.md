# About Kanye.fun

This site uses Markov chains to generate quotes that sound like Kanye
West.

### Markov Chains Explained

A ‘Markov Process’ is a process for which the probability of the next
thing that will happen only depends on the last thing that happened, and
not everything before it. Let’s say you wanted to make a prediction
about whether a sports team will win their next game. Instead of looking
at the team’s winning history, you look only at the last one or two
games and decide based on that. This is the idea behind Markov chains.

Markov chains are frequently used to generate text that mimics the style
or sound of some other text. For example, let’s create a Markov chain to
generate sentences that sounds like Dr. Suess. Our input sentence is:
“One fish two fish red fish blue fish”. To create the Markov chain, we
first go through each word in the sentence and write down the word that
comes next. So, the word ‘fish’ comes after ‘one’, and the word ‘two’
comes after ‘fish’. We do this until we’re finished with our input.

- one: fish
- fish: two, red, blue
- two: fish
- red: fish
- blue: fish

We now have a Markov chain that can be used to generate a new Dr. Suess
sentence. To do that, first, pick a word to start with, let’s say ‘two’.
Pick one word that comes after ‘two’ and add it to the sentence. Here it
would be ‘fish’.

“Two fish”

The last word in our sentence is fish, so now pick a word from the
Markov chain that comes after ‘fish’ and add it to the sentence. Let’s
say we pick ‘blue’.

“Two fish blue”

Now ‘blue’ is the last word, so pick a word that comes after ‘blue’ in
our Markov chain and add it to the sentence. After a few more
iterations, we’ll get something that sounds like Dr. Suess.

“Two fish blue fish red fish two”

### How Kanye.fun works

This site builds a Markov chain from two-hundred different Kanye West
quotes and uses that chain to generate quotes in a similar style to
Kanye. The Markov chain weights word differently based on how often they
appear next to each other. So for instance, if six quotes have the
combination ‘I am’ and only one has the combination ‘I have’, ‘I am’ is
six times more likely to appear in a generated quote than ‘I have’. Just
like with any Markov chain, there is always a chance that the generated
Kanye West quote is actually a real Kanye West quote.

Switching between ‘more random’ and ‘less random’ lets you choose
between using a first-order Markov chain and a second-order Markov
chain. First-order Markov chains use only on the last word to pick the
next word in a sentence. Second-order Markov chains use the last two
words in a sentence to predict the next one. The second-order chain
generates quotes that sound more like Kanye, while the first-order chain
generates sentences that are more jumbled and random.

### Contributors

- Kanye.fun was created by [Allison Colyer](https://twitter.com/AlliColyer).
- Thanks to [Michael Lu](https://github.com/michaelwlu) for being a contributing programmer.
- Thanks to [Seth Klein](https://www.linkedin.com/in/sethaklein/) for creating the Kanye graphic.
- Thanks to [Chloe Revery](https://github.com/chloerevery)
- Thanks to [Recurse Center](https://www.recurse.com/) for supporting this project.

### Coming Soon

If you loved Kanye.fun, I’ll soon be working on spinning up an API
endpoint so that you can use generated Kanye quotes in whatever web
project you want. Keep an eye out for updates!
