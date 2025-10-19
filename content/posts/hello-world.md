---
title: 'StreamWatch CLI: My First Real-World Project'
---

## Building StreamWatch

For a while, I wanted a simple way to keep track of live streams without opening a browser and drowning in tabs.  I also have a computer with old hardware. I spend a lot of time in the terminal, so it made sense to build a lightweight CLI tool that lets me manage and watch live streams in a clean way. That’s how StreamWatch was born — my first real-world project as a self-taught software engineer and business analyst.

👉 [Live Project Page](https://snowballons.github.io/streamwatch)

👉 [GitHub Repo](https://github.com/snowballons/streamwatch-cli)

##### Why I Built It

I was constantly switching between tabs just to see if someone was live. The browser felt slow and heavy. Existing tools didn’t really fit what I wanted. I needed something minimal, fast, and distraction-free.  

As a junior dev, I also needed a personal project that solve my problems. This is the first lesson I learnt when creating a software product. Building StreamWatch helped me combine technical skills with my analytical side: planning, defining requirements, and making decisions based on real needs.

##### What StreamWatch Does

StreamWatch is a command-line tool that helps you:

1. Add and organize your favorite live streams  
2. Check live status quickly from the terminal  
3. Open streams in a media player like [MPV](https://mpv.io/) using [Streamlink ](https://streamlink.github.io/) 
4. Navigate easily using keyboard shortcuts  
5. Import/export your list for quick setup

The goal was to keep it clean and efficient . No need for  fancy UI, just useful features that actually works out of the box.

##### Tech Stack

* Language: [Python ](https://www.python.org/) 
* Streaming: Streamlink (handles pulling the live video)  
* Player: MPV (for playback)  
* Interface: Pure CLI with basic interactive controls  
* Config: Simple .json and .ini files for setup

I chose this stack because it’s lightweight and cross-platform. Plus, I got to deepen my Python skills while learning how to work with external tools.

##### Challenges I Faced

Since this was my first real project, I hit a few bumps:

Figuring out how to structure a CLI app properly  

Managing configs and user data cleanly  

Handling errors from different streaming platforms (mostly, streamlink) 

Writing code that’s reusable and not just “it works for now”

Each challenge taught me something new. I learned to break problems down, test often, and keep the scope small.

##### Lessons Learned

Working on StreamWatch taught me more than just code:

Planning matters : thinking like expert helped me define features clearly before writing code.  

Start simple : shipping a basic version fast gave me momentum.  

Document everything :  it made it easier to debug and share with others.  

Small wins count :  even a CLI tool can be a real, useful product.

##### What’s Next

StreamWatch is still growing. Some ideas I want to work on next:

* Adding support for more platforms (via plugins or when streamlink updates available lists of streams) 
* More automation hooks before and after streams  
* Smoother config experience  
* Possibly a simple GUI version later on

This project showed me what’s possible when you combine curiosity with consistent effort.

##### Final Thoughts

If you’re learning to code, don’t wait for the “perfect” idea. Pick a small problem in your daily life and build something around it. You’ll learn a lot, and the end result will mean something to you.

StreamWatch might be a small project, but for me, it’s a big step. It’s proof that self-taught developers can create real tools , one line of code at a time.

#####

👉 [Check out the project](https://snowballons.github.io/streamwatch)

👉[ View the code on GitHub](https://github.com/snowballons/streamwatch-cli)
