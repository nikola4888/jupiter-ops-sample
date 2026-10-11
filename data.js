/*
  data.js — every link, date and figure on the page lives here.
  Rule: no number may be added unless it is quoted from a public Jupiter page
  (or a post on an account Jupiter lists), with that page's URL recorded in
  sources and the check date in `checked`.
  Starter-table rows are posts I opened and dated myself. Paste new rows with a link only.
*/

window.PLAN = {
  "checked": "9 October 2026",
  "author": {
    "name": "Nikola",
    "url": "https://x.com/nikola4888"
  },
  "sources": {
    "home": {
      "title": "jup.ag (home and site metadata)",
      "url": "https://jup.ag/"
    },
    "dir": {
      "title": "jup.ag/directory (product and community directory)",
      "url": "https://jup.ag/directory"
    },
    "docsIdx": {
      "title": "Jupiter Docs: full page index",
      "url": "https://docs.jup.ag/llms.txt"
    },
    "hub": {
      "title": "Jupiter Support Hub",
      "url": "https://support.jup.ag/"
    },
    "ticket": {
      "title": "Support Hub: open a ticket",
      "url": "https://support.jup.ag/requests/new"
    },
    "spotFaq": {
      "title": "Docs: Jupiter Spot FAQ",
      "url": "https://docs.jup.ag/user-docs/trade/spot/faq"
    },
    "spotRisk": {
      "title": "Docs: Spot risks and limitations",
      "url": "https://docs.jup.ag/user-docs/trade/spot/risks-and-limitations"
    },
    "predFaq": {
      "title": "Docs: Jupiter Predict FAQ",
      "url": "https://docs.jup.ag/user-docs/trade/predict/faq"
    },
    "staking": {
      "title": "Docs: DAO Staking",
      "url": "https://docs.jup.ag/user-docs/more/dao/staking"
    },
    "asr": {
      "title": "Docs: Active Staking Rewards (ASR)",
      "url": "https://docs.jup.ag/user-docs/more/dao/asr"
    },
    "daoFaq": {
      "title": "Docs: Jupiter DAO FAQ",
      "url": "https://docs.jup.ag/user-docs/more/dao/faq"
    },
    "daoIdx": {
      "title": "Docs: Jupiter DAO Overview",
      "url": "https://docs.jup.ag/user-docs/more/dao/index"
    },
    "jupTok": {
      "title": "Docs: JUP Token Overview",
      "url": "https://docs.jup.ag/user-docs/more/jup-token/index"
    },
    "mobFaq": {
      "title": "Docs: Jupiter Mobile FAQ",
      "url": "https://docs.jup.ag/user-docs/global/mobile/faq"
    },
    "send": {
      "title": "Docs: Mobile, Funding & Sending (Send to Spend)",
      "url": "https://docs.jup.ag/user-docs/global/mobile/funding-and-sending"
    },
    "spendFees": {
      "title": "Docs: Jupiter Spend Fees & Limits (incl. QR Pay countries)",
      "url": "https://docs.jup.ag/user-docs/global/spend/fees-and-limits"
    },
    "spendFaq": {
      "title": "Docs: Jupiter Spend FAQ",
      "url": "https://docs.jup.ag/user-docs/global/spend/faq"
    },
    "spendRisk": {
      "title": "Docs: Jupiter Spend Risks & Security",
      "url": "https://docs.jup.ag/user-docs/global/spend/risks-and-security"
    },
    "offerChat": {
      "title": "Docs: Offerbook Chat",
      "url": "https://docs.jup.ag/user-docs/earn/offerbook/chat"
    },
    "vrfdFaq": {
      "title": "Docs: VRFD FAQ (token verification)",
      "url": "https://docs.jup.ag/user-docs/launch/vrfd/faq"
    },
    "lendFaq": {
      "title": "Docs: Jupiter Lend FAQ",
      "url": "https://docs.jup.ag/user-docs/earn/lend/faq"
    },
    "security": {
      "title": "Docs: Security (audits)",
      "url": "https://docs.jup.ag/user-docs/more/security/index"
    },
    "forum": {
      "title": "Jupiter Forum (discuss.jup.ag)",
      "url": "https://discuss.jup.ag/"
    },
    "asrTopic": {
      "title": "Forum: “What day is the next ASR rewards in 2026?” (Apr–Jul 2026)",
      "url": "https://discuss.jup.ag/t/what-day-is-the-next-asr-rewards-in-2026/40108"
    },
    "lendTopic": {
      "title": "Forum: wallet-drain report filed in General (21 Sep 2026)",
      "url": "https://discuss.jup.ag/t/jup-ag-borrow-lend-bugs-and-phantom-wallet-compromise/40238"
    },
    "vote": {
      "title": "vote.jup.ag (staking and voting)",
      "url": "https://vote.jup.ag/"
    },
    "rewards": {
      "title": "jup.ag/rewards (Rewards Hub)",
      "url": "https://jup.ag/rewards"
    },
    "discord": {
      "title": "Discord: discord.gg/jup",
      "url": "https://discord.gg/jup"
    },
    "tg": {
      "title": "Telegram: t.me/jup_marketing, “Jup Marketing Command Center”",
      "url": "https://t.me/jup_marketing"
    },
    "x": {
      "title": "X: @JupiterExchange",
      "url": "https://x.com/JupiterExchange"
    },
    "xdao": {
      "title": "X: @jup_dao",
      "url": "https://x.com/jup_dao"
    },
    "xQr": {
      "title": "X: @jup_mobile, On-Chain QR Payments (8 Oct 2026)",
      "url": "https://x.com/jup_mobile/status/2108225919290654926"
    },
    "xFree": {
      "title": "X: @jup_predict, “Free money if you ask me...” (6 Oct 2026)",
      "url": "https://x.com/jup_predict/status/2107261382362005563"
    },
    "xSpace": {
      "title": "X: @jup_predict, weekly Space with @JUPCommunity (8 Oct 2026)",
      "url": "https://x.com/jup_predict/status/2108141683896455186"
    },
    "xGacha": {
      "title": "X: @JupiterExchange, $50 Gacha pack with a Rolex (7 Oct 2026)",
      "url": "https://x.com/JupiterExchange/status/2107871626478137748"
    },
    "xReusd": {
      "title": "X: @jupiter_earn, reUSD loop on Jupiter Lend (7 Oct 2026)",
      "url": "https://x.com/jupiter_earn/status/2107838339407880233"
    },
    "xWallet": {
      "title": "X: @jupiter_manage, “How to get Jupiter Wallet” (6 Oct 2026)",
      "url": "https://x.com/jupiter_manage/status/2107375537790603735"
    },
    "xHome": {
      "title": "X: @jup_mobile, new Jupiter Mobile homepage (5 Oct 2026)",
      "url": "https://x.com/jup_mobile/status/2107146295466938443"
    },
    "xTxv1": {
      "title": "X: @JupDevRel, Solana transaction v1 on the Swap API (7 Oct 2026)",
      "url": "https://x.com/JupDevRel/status/2107795240564486367"
    },
    "xLend": {
      "title": "X: @jupiter_earn, Jupiter Lend passes $2.5B total market size (5 Oct 2026)",
      "url": "https://x.com/jupiter_earn/status/2107185954217992294"
    },
    "xBday": {
      "title": "X: @jupiter_manage, Jupiter Wallet birthday giveaway (1 Oct 2026)",
      "url": "https://x.com/jupiter_manage/status/2105625990269378961"
    },
    "xCard": {
      "title": "X: @jup_mobile, Jupiter Physical Card orders open (30 Sep 2026)",
      "url": "https://x.com/jup_mobile/status/2105326812687663138"
    },
    "card": {
      "title": "Docs: Jupiter Card",
      "url": "https://docs.jup.ag/user-docs/global/spend/jupiter-card"
    },
    "gachaOpen": {
      "title": "Docs: Jupiter Gacha, Opening Packs (odds and expected value)",
      "url": "https://docs.jup.ag/user-docs/trade/gacha/opening-packs"
    },
    "lendAssets": {
      "title": "Docs: Jupiter Lend Supported Assets (reUSD risk note)",
      "url": "https://docs.jup.ag/user-docs/earn/lend/supported-assets"
    },
    "devs": {
      "title": "Jupiter Developer Docs",
      "url": "https://developers.jup.ag/"
    },
    "academy": {
      "title": "Jupiter Academy",
      "url": "https://academy.jup.ag/"
    }
  },
  "audiences": [
    {
      "name": "Traders",
      "what": "Spot, Perps and Predict users on jup.ag and in the app. The largest group, and the one most exposed to fake tokens and fake support.",
      "room": "Discord for general questions. A Support Hub ticket for anything about their own transaction, except Predict, where the FAQ says to raise tickets via Discord.",
      "docs": "Spot FAQ, Spot risks and limitations, Predict FAQ.",
      "src": [
        "spotFaq",
        "predFaq",
        "ticket"
      ]
    },
    {
      "name": "Mobile, Wallet and Spend users",
      "what": "People who use Jupiter as a wallet, or pay with the card and QR Pay. Spend runs through regulated partners and needs Global ID verification.",
      "room": "Support Hub tickets. Public chat only points them there, because their questions involve identity, balances and partners.",
      "docs": "Jupiter Mobile FAQ, Spend FAQ, Spend Fees & Limits.",
      "src": [
        "mobFaq",
        "spendRisk",
        "spendFaq"
      ]
    },
    {
      "name": "JUP stakers and the DAO",
      "what": "Holders who stake on vote.jup.ag, vote, and claim quarterly Active Staking Rewards.",
      "room": "Discord and @jup_dao for announcements. Proposal discussion on discuss.jup.ag. Claims at jup.ag/rewards, not on the vote page.",
      "docs": "Staking, ASR, DAO FAQ.",
      "src": [
        "staking",
        "asr",
        "daoFaq",
        "xdao"
      ]
    },
    {
      "name": "Builders and token teams",
      "what": "Integrators using the APIs, plus project teams asking about token verification, metadata or launchpad listing.",
      "room": "Developer docs for integration. Support Hub tickets for verification and token-page issues. Public chat is the wrong room for listing requests.",
      "docs": "Developer Platform, VRFD FAQ.",
      "src": [
        "devs",
        "vrfdFaq"
      ]
    }
  ],
  "sendToDocs": [
    {
      "text": "Anyone asking for the JUP, JLP, JupSOL or JupUSD address. Addresses are copied from the token docs only, never typed from memory in chat.",
      "src": [
        "jupTok"
      ]
    },
    {
      "text": "Anyone asking whether a token is safe because it has a green check. The verification docs explain what the badge confirms and what it does not.",
      "src": [
        "vrfdFaq"
      ]
    },
    {
      "text": "Anyone asking whether Spend, the card or QR Pay works in their country. The Fees & Limits page has the list; a moderator's opinion does not.",
      "src": [
        "spendFees"
      ]
    },
    {
      "text": "Developers asking about routes, transaction formats or rate limits. The developer docs are the answer of record.",
      "src": [
        "devs"
      ]
    }
  ],
  "gaps": [
    {
      "title": "Two ticket doors",
      "body": "The Support Hub, the Spot FAQ and the Mobile FAQ send people to a ticket form on support.jup.ag. The Predict FAQ tells people to raise tickets via Discord, and lists what to include. A trader who uses both products learns two different routes, and a Discord ticket is exactly what fake “support” accounts imitate.",
      "src": [
        "hub",
        "spotFaq",
        "mobFaq",
        "predFaq"
      ]
    },
    {
      "title": "Many accounts, no list",
      "body": "In the last 14 days @JupiterExchange reposted @jup_mobile, @jup_predict, @jupiter_earn, @jupiter_trade, @jupiter_manage and @JupDevRel. The DAO FAQ adds @jup_dao, and a Predict post names @JUPCommunity. Some of these carry X's verified badge and some don't. I searched the full docs and found no page that lists them all. That is a lot of names to copy.",
      "src": [
        "x",
        "xdao",
        "xSpace",
        "docsIdx"
      ]
    },
    {
      "title": "Stake in one place, claim in another",
      "body": "JUP is staked on vote.jup.ag, but ASR is claimed at jup.ag/rewards. The docs answer “I can't find where to claim ASR” twice. Claims stay open only for a limited window, and for the April to June round the last route, a support ticket, closed on 7 October. Unclaimed rewards are not sent automatically. On the forum, “what day is the next ASR?” drew 322 views.",
      "src": [
        "staking",
        "asr",
        "daoFaq",
        "asrTopic"
      ]
    },
    {
      "title": "“Official channels”, unnamed",
      "body": "The ASR page says each claim window is announced on Jupiter's official channels and has no fixed date. It names @jup_dao and the vote page's Notify me option, but not which Discord channel or which of the other X accounts. The next window is the next spike in questions.",
      "src": [
        "asr"
      ]
    },
    {
      "title": "The DAO FAQ points to details that aren't there",
      "body": "The FAQ says Working Groups have been disbanded and the grant program halted, and that people can reach out to “AlleyCat or AG”, with “see the DAO Overview for details”. The Overview page has no such details and does not mention either name.",
      "src": [
        "daoFaq",
        "daoIdx"
      ]
    },
    {
      "title": "Two logins with different rules",
      "body": "A Quick Account in Jupiter Mobile can be created with email, Google, Twitter or Discord. Global ID, which Spend needs, accepts email, Google or Apple, and says Discord and X logins are not supported and will be logged out. Someone who signed up through Discord will meet this on the day they try to pay.",
      "src": [
        "mobFaq"
      ]
    },
    {
      "title": "Two kinds of “scan to pay”",
      "body": "The docs describe QR Pay as a Spend feature: Global ID verification, DCS-issued cards only for now, and a country list that includes the Philippines and shows Singapore and Thailand as temporarily unavailable. On 8 October @jup_mobile announced on-chain QR payments straight from a wallet. I found no docs page yet for the new one. Expect “do I need KYC to scan?”",
      "src": [
        "spendFees",
        "xQr"
      ]
    },
    {
      "title": "A new place to be DMed",
      "body": "Offerbook, the peer-to-peer lending product, has its own Chat: public channels readable without a wallet, plus direct messages addressed by username or wallet address. Only Jupiter admins can pin. A DM channel next to a lending offer is the place a fake “admin” will try first.",
      "src": [
        "offerChat"
      ]
    },
    {
      "title": "The only Telegram is a marketing room",
      "body": "The Support Hub lists Discord, X, YouTube and Reddit. The site's metadata also lists one Telegram, t.me/jup_marketing, whose public page reads “Jup Marketing Command Center”. Anyone searching Telegram for “Jupiter support” will find rooms that Jupiter did not list.",
      "src": [
        "hub",
        "home",
        "tg"
      ]
    }
  ],
  "onboarding": [
    {
      "stage": "First visit",
      "job": "Get the person to the right door. Ask which product they are using, then hand over one link: the product FAQ, or the ticket route for that product.",
      "never": "That support can reverse or refund a transaction. Jupiter is self-custodial, and the Spot FAQ limits compensation to specific cases on Ultra."
    },
    {
      "stage": "First week",
      "job": "Answer the two questions that prevent most losses: how to check a token or address is the real one, and where to get help with your own transaction. Both answers are links.",
      "never": "That a verified token is safe or a good trade. Verification confirms identity, not value."
    },
    {
      "stage": "First useful action",
      "job": "One self-serve action that builds trust: hide an unknown airdropped token, turn on Notify me on vote.jup.ag, or check a staked balance at jup.ag/portfolio.",
      "never": "An ASR date or amount, a JUP price, or when a feature reaches a country."
    }
  ],
  "channels": [
    {
      "surface": "jup.ag",
      "listed": "Itself",
      "job": "Front door. Route people by product, not by question.",
      "src": "home"
    },
    {
      "surface": "docs.jup.ag",
      "listed": "Support Hub, directory",
      "job": "The answer of record. Chat links here instead of rephrasing it.",
      "src": "docsIdx"
    },
    {
      "surface": "support.jup.ag",
      "listed": "Site, directory, docs",
      "job": "Anything about a person's own transaction, wallet flag, claim or token page. The ticket form is the default route.",
      "src": "hub"
    },
    {
      "surface": "Discord, discord.gg/jup",
      "listed": "Site, Support Hub, docs",
      "job": "Community conversation and first-line routing. Also the ticket route the Predict FAQ names.",
      "src": [
        "discord",
        "predFaq"
      ]
    },
    {
      "surface": "X, @JupiterExchange",
      "listed": "Site, Support Hub",
      "job": "Announcements. Replies point to the post or the doc, never to DMs.",
      "src": "x"
    },
    {
      "surface": "X, @jup_dao",
      "listed": "DAO and ASR docs",
      "job": "DAO votes and ASR claim windows.",
      "src": [
        "xdao",
        "asr"
      ]
    },
    {
      "surface": "X product accounts (@jup_mobile, @jup_predict, @jupiter_earn and others)",
      "listed": "Reposted by @JupiterExchange; I found no docs page listing them",
      "job": "Product news only. Not a support room. Worth one canonical list.",
      "src": "x"
    },
    {
      "surface": "Jupiter Forum, discuss.jup.ag",
      "listed": "Directory, DAO docs",
      "job": "Proposal discussion. Support reports posted there get a pointer to the ticket form.",
      "src": [
        "forum",
        "lendTopic"
      ]
    },
    {
      "surface": "vote.jup.ag and jup.ag/rewards",
      "listed": "DAO docs",
      "job": "Staking and voting on one; ASR claims on the other. Always named together.",
      "src": [
        "vote",
        "rewards"
      ]
    },
    {
      "surface": "Offerbook Chat",
      "listed": "Offerbook docs",
      "job": "Lender and borrower conversation. Needs its own scam pin, since it allows DMs.",
      "src": "offerChat"
    },
    {
      "surface": "Jupiter Academy and YouTube",
      "listed": "Support Hub, directory",
      "job": "Tutorials to link in answers.",
      "src": "academy"
    },
    {
      "surface": "security@jup.ag",
      "listed": "Site metadata",
      "job": "Vulnerability reports only. Not for lost funds.",
      "src": "home"
    },
    {
      "surface": "Reddit, r/jupiterexchange",
      "listed": "Site, Support Hub",
      "job": null,
      "src": "hub"
    },
    {
      "surface": "Telegram, t.me/jup_marketing",
      "listed": "Site metadata only; not on the Support Hub",
      "job": null,
      "src": "tg"
    }
  ],
  "escalation": [
    {
      "level": "Answer from docs",
      "who": "Mod or community person, with a link every time",
      "items": [
        "Why a swap failed, or “no routes found”",
        "How staking, the 7-day unstake and voting work",
        "Where ASR is claimed, and that it lands in the stake",
        "Token and contract addresses, copied from docs",
        "What the verified badge means",
        "Predict fees, limits and settlement",
        "Which countries Spend and QR Pay cover",
        "How to hide a spam token"
      ]
    },
    {
      "level": "Raise it",
      "who": "Through the ticket route the docs name for that product",
      "items": [
        "A specific failed trade or compensation request",
        "A flagged wallet",
        "A Predict market stuck past resolution",
        "Impersonators, fake support DMs, fake extension links",
        "Contradictions in docs, like the two ticket routes",
        "A drain or exploit report posted in public"
      ]
    },
    {
      "level": "Never promised",
      "who": "Not by mods, not by me, not in any tone",
      "items": [
        "Compensation, refunds or their timing",
        "Yield or APY on Lend, JLP or JupUSD",
        "ASR dates or amounts",
        "That a token is safe, or will be verified or listed"
      ]
    }
  ],
  "questions": [
    {
      "q": "My swap keeps failing. What do I do?",
      "a": "The Support Hub and Spot FAQ cover failed swaps and when to open a ticket.",
      "src": [
        "hub",
        "spotFaq"
      ]
    },
    {
      "q": "I got a bad fill. Can I be compensated?",
      "a": "The Spot FAQ lists the cases it covers and what it never covers. Ticket route only.",
      "src": [
        "spotFaq",
        "ticket"
      ]
    },
    {
      "q": "Where do I claim ASR, and why can't I see it?",
      "a": "The ASR page, then its troubleshooting section.",
      "src": [
        "asr"
      ]
    },
    {
      "q": "How long does unstaking JUP take?",
      "a": "The Staking page. I don't add an estimate.",
      "src": [
        "staking"
      ]
    },
    {
      "q": "Is this the real JUP token?",
      "a": "JUP Token Overview has the address. Compare every character.",
      "src": [
        "jupTok"
      ]
    },
    {
      "q": "My Predict position is stuck after the event ended.",
      "a": "Predict FAQ, settlement section, then the ticket route it names.",
      "src": [
        "predFaq"
      ]
    },
    {
      "q": "Does Spend or QR Pay work in my country?",
      "a": "Spend Fees & Limits lists the countries and which cards are supported.",
      "src": [
        "spendFees"
      ]
    },
    {
      "q": "I sent the wrong token to my Spend deposit address.",
      "a": "The Spend FAQ answers this directly. Its answer is not good news, and I wouldn't soften it.",
      "src": [
        "spendFaq"
      ]
    },
    {
      "q": "Tokens I never bought appeared in my wallet.",
      "a": "Mobile FAQ, security section: don't interact with them; hide them.",
      "src": [
        "mobFaq"
      ]
    },
    {
      "q": "How do I get my token verified?",
      "a": "VRFD FAQ. Verification decisions are not made in chat.",
      "src": [
        "vrfdFaq"
      ]
    }
  ],
  "rhythm": {
    "post": [
      {
        "text": "A pinned “where to ask what” message in Discord, refreshed weekly, built from the channel map above, with the ticket route for each product."
      },
      {
        "text": "One canonical list of Jupiter accounts and links, pinned everywhere it can be, so “is this account real?” has a one-link answer."
      },
      {
        "text": "The day the next ASR window opens: one post with the jup.ag/rewards link, a note that claims land in the stake, and the closing date. A reminder one week before it closes.",
        "src": [
          "asr"
        ]
      },
      {
        "text": "A short scam notice with each launch that changes how people sign or pay, like on-chain QR payments: official links only, and support never DMs first.",
        "src": [
          "xQr"
        ]
      },
      {
        "text": "On every giveaway's results day, a reply under the post: winners are named in the thread, nobody is DMed, and there is nothing to connect or sign.",
        "src": [
          "xBday"
        ]
      },
      {
        "text": "One answered question a week, posted with its doc link, chosen from what came up most."
      }
    ],
    "dont": [
      {
        "text": "APY numbers or screenshots. A rate in a post goes stale before the replies do."
      },
      {
        "text": "“Free money” framing for prediction markets. The Predict FAQ lists losing the full position as a main risk.",
        "src": [
          "xFree",
          "predFaq"
        ]
      },
      {
        "text": "Price talk, buyback talk or anything about where JUP is going."
      },
      {
        "text": "Features, countries or listings before Jupiter announces them."
      },
      {
        "text": "Engagement bait. Quiet weeks stay quiet."
      }
    ],
    "test": "Pin the ticket route and the account list for two weeks. Before and after, count messages that are some version of “where do I open a ticket?” or “is this account real?”. If the count drops, keep them. If it doesn't, the routes are the problem, not the pin."
  },
  "watch": [
    {
      "what": "The same question asked three or more times in a week",
      "shows": "A findability gap in docs or announcements",
      "notProve": "That the docs are wrong"
    },
    {
      "what": "Ticket questions asked in public instead",
      "shows": "That a route is unclear for that product",
      "notProve": "That support is slow. The answer may have happened in a ticket."
    },
    {
      "what": "Impersonation, fake-link and fake-extension reports",
      "shows": "That the community is being targeted",
      "notProve": "How many people were actually harmed"
    },
    {
      "what": "Replies on launch posts asking the same clarifying question",
      "shows": "That the post copy missed something",
      "notProve": "What users as a whole think"
    },
    {
      "what": "Mismatches between docs, Support Hub and posts",
      "shows": "Maintenance debt that will turn into support load",
      "notProve": "That anything is wrong onchain"
    }
  ],
  "posts": [
    {
      "date": "8 Oct 2026",
      "link": "xQr",
      "label": "On-Chain QR Payments",
      "surface": "X, @jup_mobile",
      "shows": "Wallet-paid QR, next to the existing Spend QR Pay that needs Global ID. Expect “do I need KYC?”",
      "action": "Reply"
    },
    {
      "date": "8 Oct 2026",
      "link": "xSpace",
      "label": "Predict weekly Space",
      "surface": "X, @jup_predict",
      "shows": "A weekly Space with @JUPCommunity, yet another account name.",
      "action": "Ignore"
    },
    {
      "date": "7 Oct 2026",
      "link": "xGacha",
      "label": "$50 Gacha pack with a Rolex",
      "surface": "X, @JupiterExchange",
      "shows": "81 replies when checked. Odds and expected value already have a docs page.",
      "action": "Docs"
    },
    {
      "date": "7 Oct 2026",
      "link": "xReusd",
      "label": "reUSD loop on Jupiter Lend",
      "surface": "X, @jupiter_earn",
      "shows": "A headline APY. The supported-assets page explains the reinsurance risk behind it.",
      "action": "Docs"
    },
    {
      "date": "7 Oct 2026",
      "link": "xTxv1",
      "label": "Transaction v1 on the Swap API",
      "surface": "X, @JupDevRel",
      "shows": "Developer change, opt-in. Builders only.",
      "action": "Ignore"
    },
    {
      "date": "6 Oct 2026",
      "link": "xFree",
      "label": "“Free money if you ask me...”",
      "surface": "X, @jup_predict",
      "shows": "Copy that a risk page would not say.",
      "action": "Ignore"
    },
    {
      "date": "6 Oct 2026",
      "link": "xWallet",
      "label": "How to get Jupiter Wallet",
      "surface": "X, @jupiter_manage",
      "shows": "“Click, add to Chrome, done.” The same steps a fake-extension scam copies.",
      "action": "Reply"
    },
    {
      "date": "5 Oct 2026",
      "link": "xHome",
      "label": "New Jupiter Mobile homepage",
      "surface": "X, @jup_mobile",
      "shows": "A rebuilt home screen. Expect “where did X go?” questions.",
      "action": "Docs"
    },
    {
      "date": "5 Oct 2026",
      "link": "xLend",
      "label": "Jupiter Lend passes $2.5B",
      "surface": "X, @jupiter_earn",
      "shows": "A milestone, not a user action.",
      "action": "Ignore"
    },
    {
      "date": "1 Oct 2026",
      "link": "xBday",
      "label": "Jupiter Wallet birthday giveaway",
      "surface": "X, @jupiter_manage",
      "shows": "Entry is a reply with a screenshot of your open wallet extension; 533 replies when checked. Winners were due 6 Oct, the day fake “you won, claim here” replies arrive.",
      "action": "Reply"
    },
    {
      "date": "30 Sep 2026",
      "link": "xCard",
      "label": "Physical card orders open",
      "surface": "X, @jup_mobile",
      "shows": "79 replies when checked. Country and card-issuer questions have a docs answer.",
      "action": "Docs"
    }
  ],
  "postRowsTarget": 12,
  "postsNote": "These rows are posts I could open and date myself on <a href=\"https://x.com/JupiterExchange\">@JupiterExchange</a> and the product accounts it reposted, 25 September to 9 October. Dates are UTC. Discord needs an account to read, so the empty rows are for Discord and forum posts, and I will paste linked posts only."
};
