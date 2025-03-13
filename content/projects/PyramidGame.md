---
date: 2025-03-13
title: 'From K-Drama to Code: My Journey Building The Pyramid Game'
github: 'https://github.com/errhythm/the-pyramid-game'
external: 'https://pyramidgame.errhythm.me'
image: '/images/projects/PyramidGame-Main.png'
tech:
  - NextJS
  - Prisma
  - Clerk
  - Shadcn
showInProjects: true
featured: false
featuredSort: 4
---

You know how sometimes you're just chilling, watching K-dramas, and suddenly your developer brain goes "Hey, I could build that!"? Well, that's exactly what happened to me while watching "Pyramid Game." One minute I'm stress-eating snacks watching students navigate a complex social hierarchy, and the next thing I know, I'm opening VS Code at 2 AM. Classic developer moment, right?

## *The "Aha!" Moment*
Let me paint you a picture: There's this K-drama where students participate in this wild voting system that determines their social ranking. Think of it as a digital popularity contest, but with actual consequences. The rules caught my attention - each student gets to vote for others, can't vote for themselves (sorry, narcissists!), and ends up with a rank from A to F based on the votes they receive.

![Pyramid Game Home Page](/images/projects/PyramidGame-HomePage.png)

## The Tech Stack: Because Every Project Needs a Solid Foundation
After the initial excitement wore off (and the caffeine kicked in), I had to make some serious technical decisions. Here's what I went with:

![Tech Stack](/images/projects/PyramidGame-TechStack.png)

## The "Fun" Parts (Read: Challenges)
### The Ranking Algorithm: Math Is Hard
Remember in school when you thought "When will I ever use math in real life?" Well, past me, HERE'S YOUR ANSWER! Let me take you through this rollercoaster ride.

![Game Waiting Page](/images/projects/PyramidGame-WaitingPage.png)

My first attempt was beautifully naive. I thought I could just count votes and assign ranks based on simple thresholds:

```javascript
// My first innocent attempt at ranking
const calculateRank = (votes, totalVotes) => {
const percentage = (votes / totalVotes) * 100;
if (percentage > 75) return 'A';
if (percentage > 50) return 'B';
if (percentage > 25) return 'C';
if (votes > 0) return 'D';
return 'F';
};
```

Looks clean, right? Well, it worked perfectly in my test case with 5 participants and 15 total votes. But then reality hit when we had a game with 10 participants and 50 votes. Suddenly, we had a situation where nobody got rank B or C, creating this weird gap in our pyramid. It looked something like this:

![Test Game Result](/images/projects/PyramidGame-TestResult.png)

The pyramid wasn't really a pyramid anymore - it was more like a seesaw! Finally, after some serious head-scratching, I landed on the current algorithm. It's a two-phase approach that first assigns ranks based on vote percentages and then promotes ranks to fill gaps:

```tsx
// First pass: Assign initial ranks
    const initialRanks: { participantId: string; rank: Rank }[] = [];

    for (const participant of participants) {
      let rank: Rank = "F";
      if (participant.voteCount > 0) {
        const votePercentage = (participant.voteCount / maxVotes) * 100;
        if (votePercentage >= 67) {
          rank = "A";
        } else if (votePercentage >= 33) {
          rank = "B";
        } else if (votePercentage >= 24) {
          rank = "C";
        } else if (votePercentage > 0) {
          rank = "D";
        }
      }
      initialRanks.push({ participantId: participant.id, rank });
    }

    // Second pass: Promote ranks if there are gaps
    const rankOrder: Rank[] = ["A", "B", "C", "D", "F"];
    const ranksPresent = new Set(initialRanks.map(p => p.rank));
    
    const finalRanks = initialRanks.map(({ participantId, rank }) => {
      if (rank === "F") return { participantId, rank }; // Don't promote F ranks
```

This final version handles our edge cases much better. It ensures that:

1. Top performers (75%+ votes) always get rank A

2. Nobody gets stuck in a lower rank when there are empty ranks above them

3. The F rank is reserved for those with zero votes

4. The distribution feels fair regardless of the number of participants


This distribution created a perfect pyramid shape while maintaining the dramatic tension that made the original K-drama so interesting. It's fascinating how something that seemed so simple at first required so much iteration to get right. But hey, isn't that just software development in a nutshell?

<div class="tenor-gif-embed" data-postid="10387296048274213689" data-share-method="host" data-aspect-ratio="1.33155" data-width="100%"><a href="https://tenor.com/view/pyramid-game-wonyoung-jang-daah-baek-harin-baek-ha-rin-gif-10387296048274213689">Pyramid Game Wonyoung GIF</a>from <a href="https://tenor.com/search/pyramid+game-gifs">Pyramid Game GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

## Wrapping Up

Building the Pyramid Game has been a wild ride - from late-night coding sessions fueled by ramyeon to the satisfaction of seeing people actually using it. It's amazing how a simple K-drama concept turned into a full-fledged web application that people can use to create their own social experiments (hopefully with less drama than the show).

What started as a "hey, I could build that!" moment turned into a deep dive into real-time systems, social dynamics, and the occasional existential crisis about ranking algorithms. The best part? Every time I watch a new episode, I get ideas for new features. My Notion is full of "wouldn't it be cool if..." notes that I'm slowly turning into reality.

If you want to check out the game or maybe host your own social experiment, you can find it at https://pyramidgame.errhythm.me. Just remember: with great power comes great responsibility... and potentially some awkward social situations. 😉

Got questions? Found a bug? Mail me at rhythm@duck.com or check this blog where I post about my coding adventures and maybe some occasional K-drama recommendations!*

