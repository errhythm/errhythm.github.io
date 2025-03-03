---
date: 2025-03-03
title: 'How I Implemented the Similar Petitions Suggestions in Jonogon'
github: 'https://github.com/jonogon/jonogon-mono/pull/123'
external: 'https://jonogon.org'
tech:
  - JavaScript
  - tRPC
  - Lodash
  - ReactJS
company: 'Jonogon'
showInProjects: true
featured: false
featuredSort: 4
---

Imagine pouring your heart into drafting a petition for your country, only to find that someone else has already raised the same issue. It was clear: duplicate petitions in Jonogon could dilute the collective impact. So I started thinking of a solution which would warn users that same kind of petition already exists so they can check that out first and match their voice with them instead.

One day, while googling something random, it hit me: Google’s search suggestions were the perfect inspiration.I didn’t need to build a full-on, AI-powered search beast for Jonogon—just a simple, friendly feature that suggests similar petitions, it would be like a friendly neighborhood guide, gently tapping you on the shoulder mid-petition-drafting to say, “Hey, someone’s already singing your tune—wanna join the chorus?”

## The Quota Chaos and a Call to Unite

Fueled by the spirit of a student-led revolution—the Quota movement in Bangladesh. In the wake of that transformative energy, Jonogon was born: an open-source platform where every verified voice matters, and communities come together to hold decision-makers accountable. With over 2,500 global contributors and a vision of an equitable, compassionate Bangladesh, Jonogon isn’t just a tech project—it’s a movement.

## The Big Idea: Less Noise, More Power

The goal? Cut the clutter and amplify impact. When you’re typing your petition title, this feature whispers, “Hold up—check these out first.” Like I said previously, when you are typing like Bangladesh should enable cryptocurrency and there is already an existing petition titled, Legalize Paypal and Cryptocurrency in Bangladesh, we are suggesting up to three matching petitions—complete with titles, upvote/downvote counts, and a peek option—we’re helping users decide: join forces or forge ahead solo. It’s all about channeling that collective roar into a single, mighty bellow.

![Similar Petitions Suggestions](/images/jonogon-suggestions.gif)

## Under the Hood: The Evolution of the Feature

The backend was the heart of this innovation. I started by crafting a new procedure within our tRPC router.

Suppose, you type a title (five characters minimum—no skimping!), we chop it into keywords, toss out anything under three letters, and ping our PostgreSQL database with ILIKE for a fuzzy match. Five petitions pop up, tops. But the early searches were a keyword free-for-all—"the," "is," "and" clogging the pipes. I roped in the `stopword` library, kicking out English and Bengali fillers (think "the" and "এবং"). Now, we’re laser-focused on the meaty bits.

Using our PostgreSQL query builder, I constructed a dynamic search. The query checks each petition title for a case-insensitive match against our curated keywords. Keywords need at least two hits now, and we sort by match count, upvotes, then downvotes. Only the top five make the cut—quality over quantity, folks!

```js
const debouncedSuggest = useCallback(
  debounce((searchTerm: string) => {
    const words = searchTerm.split(' ').filter(word => word.trim() !== '');
    const cleanedWords = removeStopwords(words, [...eng, ...ben]);
    const cleanedTitle = cleanedWords.join(' ').trim();
    if (cleanedWords.length >= 2 && cleanedTitle.length >= 5) {
      refetch();
    } else {
      setSimilarPetitions([]);
    }
  }, 300),
  [refetch, setSimilarPetitions]
);
```

In the frontend, I slotted right under the title field in our draft and create new petition pages—always watching, ready to pounce. To ensure the interface remained snappy and to avoid bombarding our servers with requests, I used `Lodash`’s debounce function. This way, the system waits a brief 300 milliseconds after typing stops before initiating the search. A slight delay, but one that ensured a smoother user experience.

Next up? Maybe some `pg_trgm` wizardry or NLP vibes for a more personalized suggestions. For now, it’s a win for the 2,500+ dreamers building this with me. Check out the official GitHub Repository of [Jonogon](https://github.com/jonogon/jonogon-mono), or vote in [Jonogon](https://jonogon.org/). Let’s keep making Bangladesh louder, together!
