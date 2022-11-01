const jokes = [
  {
    joke: "What do you call a joke that isn't funny?",
    punchline: "A sentence",
  },
  {
    joke: "What did the full glass say to the empty glass?",
    punchline: "You look drunk",
  },
  {
    joke: "What band was better than The Cure?",
    punchline: "Prevention!",
  },
  {
    joke: "Why does Snoop Dogg use an umbrella?",
    punchline: "Fo drizzle",
  },
  {
    joke: "How does NASA organize a party?",
    punchline: "They planet",
  },
  {
    joke: "What did one ocean say to the other?",
    punchline: "Nothing, they just waved",
  },
  {
    joke: "What's the opposite of artificial intelligence?",
    punchline: "Natural stupidity",
  },
  {
    joke: "Have you heard about the guy who stole the calendar?",
    punchline: "He got 12 months!",
  },
  {
    joke: "What do you call a can opener that doesn't work?",
    punchline: "A can't opener",
  },
  {
    joke: "Why do I drink coffee?",
    punchline: "I like to do stupid things faster and with more energy",
  },
  {
    joke: "What's the best part about teamwork?",
    punchline: "Someone else to blame",
  },
  {
    joke: "What do you call stealing ideas from many?",
    punchline: "Research",
  },
  {
    joke: "What do you call 12 people doing the work of one?",
    punchline: "A committee",
  },
  {
    joke: "What's the problem with unemployment jokes?",
    punchline: "None of them work",
  },
  {
    joke: "What did the employee do when the boss said to have a good day?",
    punchline: "Went home",
  },
  {
    joke: "What did the supervisor say to the calendar?",
    punchline: "Your days are numbered",
  },
  {
    joke: "What do they call the boss at Old McDonald's farm?",
    punchline: "C-I-E-I-O",
  },
  {
    joke: "Who wins in a fight between Sunday and Monday?",
    punchline: "Sunday, Monday is a weekday",
  },
  {
    joke: "What do you call someone who is happy on Mondays?",
    punchline: "Unemployed",
  },
  {
    joke: "Why did the skeleton fail all his Monday tests?",
    punchline: "His heart wasn't in it",
  },
  {
    joke: "Did you know that a day on the planet Mercury lasts 1407,5 hours?",
    punchline: "That's like one Monday!",
  },
  { joke: "Wanna hear a one-word scary story?", punchline: "Monday" },
  {
    joke: "You know what can really ruin a Friday?",
    punchline: "Remembering it's only Thursday",
  },
  {
    joke: "What do you call a day that's not serious about anything?",
    punchline: "Casual Friday",
  },
  {
    joke: "What's the one thing that's better than a Friday night?",
    punchline: "A day off on Monday",
  },
  {
    joke: "What's a cow's favorite Friday night spot?",
    punchline: "The mooooooovies",
  },
  {
    joke: "What day of the week is an egg's least favorite?",
    punchline: "Fry-day",
  },
  {
    joke: "What's scarier than Friday the 13th?",
    punchline: "Monday the 16th",
  },
  {
    joke: "What did the Iceberg say to the Romaine on Friday?",
    punchline: "Lettuce celebrate!",
  },
  {
    joke: "What did the horse get for Black Friday?",
    punchline: "A Macintosh",
  },
  {
    joke: "Why did Friday go to visit a doctor?",
    punchline: "He was week",
  },
  {
    joke: "What is faster than the Flash?",
    punchline: "Friday nights",
  },
  {
    joke: "Why was the hospital empty?",
    punchline: "Because it is a feel-good Friday",
  },
  {
    joke: "What is the greatest gift Friday can give?",
    punchline: "Weekend vibes",
  },
  {
    joke: "What should you do when life gives you lemons?",
    punchline: "Ask for more Friday nights instead",
  },
  {
    joke: "What does an employee look forward to on Friday nights?",
    punchline: "The next Friday night",
  },
  {
    joke: "What is the only thing better than a Friday night?",
    punchline: "A Monday holiday",
  },
  {
    joke: "Whoever stole my copy of Microsoft Office?",
    punchline: "I will find you! You have my Word!",
  },
  {
    joke: "What's the best way to get a dozen people to say bye 300 times?",
    punchline: "A conference call",
  },
  {
    joke: "Why was I late to my Zoom meeting?",
    punchline: "network traffic",
  },
  {
    joke: "What does a mathematician say when something goes wrong?",
    punchline: "Figures!",
  },
  {
    joke: "Why did the can crusher quit his job?",
    punchline: "Because it was soda pressing",
  },
  {
    joke: "Why is a doctor always calm?",
    punchline: "Because she has a lot of patients",
  },
  {
    joke: "What do you call a factory that manufactures products that are fine?",
    punchline: "A satis-factory",
  },
  {
    joke: "What's the worst part about working at a calendar factory?",
    punchline: "No days off",
  },
  {
    joke: "Why are construction workers great at parties?",
    punchline: "They always raise the roof",
  },
  {
    joke: "What did the nearsighted optometrist say when he was sick?",
    punchline: "I can't see myself coming in today",
  },
  {
    joke: "Why are fewer people going into archeology?",
    punchline: "Career advancement is in ruins",
  },
  {
    joke: "Why are chemists great at solving problems?",
    punchline: "Because they have all the solutions!",
  },
  {
    joke: "Why did the developer go broke?",
    punchline: "Because he used up all his cache",
  },
  {
    joke: "Why don't scientists trust atoms?",
    punchline: "They make up everything",
  },
  {
    joke: "Why did the scarecrow get promoted?",
    punchline: "Because he was out standing in his field!",
  },
  {
    joke: "Why did the employee get fired from the calendar factory?",
    punchline: "He took a day off",
  },
];

export const getRandomJoke = () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
};

export default {
  getRandomJoke,
};
