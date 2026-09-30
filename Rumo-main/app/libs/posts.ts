export interface IPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export const posts: IPost[] = [
  {
    slug: 'lead-scoring-guide',
    title: 'The Complete Guide to Predictive Lead Scoring',
    excerpt: 'What it is, how it works, and how to roll it out without alienating your sales team.',
    category: 'Playbooks',
    author: 'Yusuf Demir',
    date: 'September 10, 2026',
    readTime: '9 min read',
    sections: [
      {
        heading: 'Why traditional scoring falls short',
        paragraphs: [
          'Most teams start with rule-based lead scoring: ten points for a VP title, five for opening an email, minus ten for a free email address. It feels logical, but the weights are guesses, and they rarely get updated as your market changes.',
          'The result is a score nobody trusts. Reps ignore it, marketing tweaks it after each quarterly complaint, and high-value leads slip through the cracks because they didn’t fit the pattern someone imagined two years ago.',
        ],
      },
      {
        heading: 'How predictive scoring works',
        paragraphs: [
          'Predictive models look at your past wins and losses and learn which combinations of signals actually correlate with closing. Instead of one person guessing the weights, the model finds patterns across thousands of deals, including interactions a human would never think to write down.',
          'Good models consider three families of signals: fit (who the company is), behavior (what they do on your site, in your product and in your emails) and intent (what they research elsewhere). The mix matters more than any single signal.',
        ],
      },
      {
        heading: 'Rolling it out successfully',
        paragraphs: [
          'Start with explainability. Reps adopt scores they understand, so always show the top reasons behind a number. A simple line such as “Visited pricing 3 times this week, company size matches your best customers” builds trust quickly.',
          'Run the new score alongside the old one for a month. Compare conversion rates of the top quintile under each. When the new model wins, the data makes the case for you.',
          'Finally, close the loop. Feed outcomes back into the model, review performance monthly and involve reps when results surprise you. Their feedback is the best source of new signals.',
        ],
      },
    ],
  },
  {
    slug: 'reduce-churn-playbook',
    title: '7 Early Warning Signs a Customer Is About to Churn',
    excerpt: 'The signals hide in plain sight. Here is how to catch them 90 days before renewal.',
    category: 'Customer Success',
    author: 'Hannah Clarke',
    date: 'August 30, 2026',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Churn rarely happens suddenly',
        paragraphs: [
          'When a customer cancels, it feels abrupt to your team. To the customer, it’s the end of a slow decision that began months earlier. The good news: the signals are measurable.',
        ],
      },
      {
        heading: 'The seven signals',
        paragraphs: [
          '1. Declining logins or feature usage, especially among the original champions.',
          '2. A champion leaves the company or changes roles.',
          '3. Rising support tickets with negative sentiment, or a sudden silence after a period of heavy contact.',
          '4. Skipped business reviews and unanswered emails.',
          '5. Downgraded seat counts or removed integrations.',
          '6. Procurement asking about contract terms or data export.',
          '7. Competitor mentions in calls or public job postings for a rival tool.',
        ],
      },
      {
        heading: 'Turning signals into action',
        paragraphs: [
          'No human can monitor all seven across hundreds of accounts. Automating the collection and surfacing only meaningful changes lets your team act in days rather than quarters.',
          'Pair each signal with a playbook: a rapid executive outreach, a training session for new users, or a tailored value review. The earlier you engage, the cheaper the save.',
        ],
      },
    ],
  },
  {
    slug: 'ai-sales-emails',
    title: 'How to Write AI-Assisted Sales Emails People Actually Reply To',
    excerpt: 'AI can draft faster than any human, but only if you feed it the right context.',
    category: 'Playbooks',
    author: 'Grace Nwosu',
    date: 'August 14, 2026',
    readTime: '7 min read',
    sections: [
      {
        heading: 'Context is everything',
        paragraphs: [
          'The difference between a generic AI email and a great one isn’t the model. It’s the input. Give the system the prospect’s role, recent company news, relevant use cases and a clear call to action, and the output improves dramatically.',
        ],
      },
      {
        heading: 'A simple four-part structure',
        paragraphs: [
          'Open with relevance: one sentence that proves you did your homework. Follow with a problem your prospect likely has. Offer a brief proof point, such as a similar customer’s result. End with a single, low-friction ask.',
          'Keep emails under 120 words. Short messages are easier to read on mobile and feel more human.',
        ],
      },
      {
        heading: 'Keep a human in the loop',
        paragraphs: [
          'Always review before sending, especially in the first weeks. Edit anything that feels off-brand, and add a personal detail only you would know. Over time, your edits teach the system your voice.',
          'Measure reply rates, not opens. Privacy changes have made open tracking unreliable, but a reply is always a reply.',
        ],
      },
    ],
  },
  {
    slug: 'forecasting-accuracy',
    title: 'Why Your Sales Forecast Is Wrong (And How to Fix It)',
    excerpt: 'Rep-submitted forecasts carry hidden bias. Here is how data-driven forecasting closes the gap.',
    category: 'Revenue Operations',
    author: 'Mei Tanaka',
    date: 'July 25, 2026',
    readTime: '8 min read',
    sections: [
      {
        heading: 'The optimism problem',
        paragraphs: [
          'Reps are optimistic by nature, which is why they’re good at sales. But optimism makes forecasts unreliable. Deals linger in late stages long after they’ve gone cold, and commit numbers swell at quarter end.',
        ],
      },
      {
        heading: 'Use activity, not opinion',
        paragraphs: [
          'Objective signals like stakeholder engagement, email response times, meeting cadence and procurement involvement are better predictors of close than a rep’s gut feeling. Weight each deal by how it compares to historical winners at the same stage.',
        ],
      },
      {
        heading: 'Forecast in ranges',
        paragraphs: [
          'Single-number forecasts create a false sense of precision. Present a range with best case, expected and worst case, and track how often reality lands inside it. That builds credibility with your board and finance partners.',
        ],
      },
    ],
  },
  {
    slug: 'onboarding-new-reps',
    title: 'Ramp New Reps 3x Faster with Conversation Intelligence',
    excerpt: 'Stop relying on shadowing alone. Give new hires a library of real, winning calls.',
    category: 'Enablement',
    author: 'Hannah Clarke',
    date: 'July 8, 2026',
    readTime: '5 min read',
    sections: [
      {
        heading: 'The ramp-time tax',
        paragraphs: [
          'Average sales ramp time is now over five months. For a rep with a $1M quota, every month of ramp costs tens of thousands in lost opportunity.',
        ],
      },
      {
        heading: 'Learn from the best, at scale',
        paragraphs: [
          'Searchable call libraries let new hires hear exactly how top performers handle pricing objections, open discovery calls and ask for the next step. Tag the moments that matter and build learning paths from real examples.',
          'Pair that with automated feedback: talk-to-listen ratio, question counts and filler words give reps specific things to improve after every call.',
        ],
      },
    ],
  },
  {
    slug: 'sales-tech-stack-2026',
    title: 'Building a Modern Sales Tech Stack in 2026',
    excerpt: 'Fewer tools, tighter integration and AI in every layer.',
    category: 'Revenue Operations',
    author: 'Jonas Lindqvist',
    date: 'June 19, 2026',
    readTime: '10 min read',
    sections: [
      {
        heading: 'Start with the system of record',
        paragraphs: [
          'Your CRM remains the foundation. Keep data clean and standardize fields before layering on any AI tooling; models are only as good as the data they learn from.',
        ],
      },
      {
        heading: 'Add intelligence, not more tabs',
        paragraphs: [
          'The best new tools surface insights inside the apps your team already uses, such as your CRM, inbox and chat. Every additional login is friction that reduces adoption.',
        ],
      },
      {
        heading: 'Audit quarterly',
        paragraphs: [
          'Review usage of every tool each quarter. If fewer than half of licensed users are active, either fix adoption or cancel. Consolidation usually improves both cost and data quality.',
        ],
      },
    ],
  },
];
