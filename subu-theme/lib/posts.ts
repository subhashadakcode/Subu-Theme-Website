import type { Post } from "./types"
import { calculateReadingTime } from "./utils"
import { cache } from "react"

// Sample data for blog posts
const posts: Post[] = [
  {
    _id: "1",
    title: "Getting Started with Next.js and React",
    slug: "getting-started-with-nextjs-and-react",
    excerpt:
      "Learn how to build modern web applications with Next.js and React. This guide covers everything you need to know to get started.",
    content: `
      <h2>Introduction to Next.js</h2>
      <p>Next.js is a React framework that enables server-side rendering, static site generation, and more. It's a powerful tool for building modern web applications.</p>
      
      <h2>Why Choose Next.js?</h2>
      <p>Next.js provides a great developer experience with features like:</p>
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>API routes</li>
        <li>File-based routing</li>
        <li>Built-in CSS and Sass support</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js app, run the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will create a new Next.js app in the my-app directory. Navigate to the directory and start the development server:</p>
      <pre><code>cd my-app
npm run dev</code></pre>
      
      <h2>Creating Pages</h2>
      <p>In Next.js, pages are React components exported from files in the pages directory. Each page is associated with a route based on its file name.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js is a powerful framework for building modern web applications. With its built-in features and optimizations, it's a great choice for developers looking to build fast, SEO-friendly websites.</p>
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    publishedAt: "2023-09-15T10:00:00Z",
    author: {
      _id: "author1",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Frontend developer with a passion for React and modern web technologies.",
      socialLinks: [
        { platform: "Twitter", url: "https://twitter.com/alexjohnson" },
        { platform: "GitHub", url: "https://github.com/alexjohnson" },
      ],
    },
    category: "technology",
    tags: ["react", "nextjs", "javascript", "web-development"],
    readingTime: 5,
    commentCount: 3,
    comments: [
      {
        _id: "comment1",
        postId: "1",
        name: "Sarah Parker",
        email: "sarah@example.com",
        content: "Great introduction to Next.js! I especially liked the explanation of server-side rendering.",
        createdAt: "2023-09-16T14:30:00Z",
      },
      {
        _id: "comment2",
        postId: "1",
        name: "Mike Thompson",
        email: "mike@example.com",
        content: "This was really helpful for getting started. Looking forward to more tutorials!",
        createdAt: "2023-09-17T09:15:00Z",
      },
      {
        _id: "comment3",
        postId: "1",
        name: "Lisa Wong",
        email: "lisa@example.com",
        content: "I was struggling with understanding the file-based routing, but this made it clear. Thanks!",
        createdAt: "2023-09-18T16:45:00Z",
      },
    ],
    featured: true,
  },
  {
    _id: "2",
    title: "Mastering CSS Grid Layout",
    slug: "mastering-css-grid-layout",
    excerpt:
      "CSS Grid Layout is a powerful tool for creating complex layouts. Learn how to use it effectively in your web projects.",
    content: `
      <h2>Introduction to CSS Grid</h2>
      <p>CSS Grid Layout is a two-dimensional layout system designed for the web. It lets you lay out items in rows and columns, and has many features that make building complex layouts straightforward.</p>
      
      <h2>Basic Concepts</h2>
      <p>To get started with CSS Grid, you need to understand a few basic concepts:</p>
      <ul>
        <li>Grid Container: The element on which display: grid is applied</li>
        <li>Grid Item: The children of the grid container</li>
        <li>Grid Line: The dividing lines that make up the structure of the grid</li>
        <li>Grid Track: The space between two adjacent grid lines</li>
        <li>Grid Cell: The space between four grid lines</li>
        <li>Grid Area: The total space surrounded by four grid lines</li>
      </ul>
      
      <h2>Creating a Grid</h2>
      <p>To create a grid container, you set the display property to grid:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 20px;
}</code></pre>
      
      <h2>Placing Items</h2>
      <p>You can place items in a grid using the grid-column and grid-row properties:</p>
      <pre><code>.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}</code></pre>
      
      <h2>Responsive Grids</h2>
      <p>CSS Grid makes it easy to create responsive layouts. You can use the repeat() function with auto-fit or auto-fill:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>CSS Grid is a powerful layout tool that makes it easy to create complex, responsive layouts. With a good understanding of the basics, you can create sophisticated designs with minimal CSS.</p>
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    publishedAt: "2023-09-10T08:30:00Z",
    author: {
      _id: "author2",
      name: "Sam Rivera",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Full-stack developer specializing in modern CSS and JavaScript frameworks.",
      socialLinks: [
        { platform: "Twitter", url: "https://twitter.com/samrivera" },
        { platform: "GitHub", url: "https://github.com/samrivera" },
      ],
    },
    category: "technology",
    tags: ["css", "web-design", "responsive-design"],
    readingTime: 6,
    commentCount: 2,
    comments: [
      {
        _id: "comment4",
        postId: "2",
        name: "John Doe",
        email: "john@example.com",
        content: "This article really helped me understand CSS Grid better. The examples are clear and practical.",
        createdAt: "2023-09-11T10:20:00Z",
      },
      {
        _id: "comment5",
        postId: "2",
        name: "Emma Wilson",
        email: "emma@example.com",
        content:
          "I've been using Flexbox for everything, but after reading this I'm going to start using Grid for more complex layouts.",
        createdAt: "2023-09-12T15:45:00Z",
      },
    ],
    featured: true,
  },
  {
    _id: "3",
    title: "The Art of Travel Photography",
    slug: "the-art-of-travel-photography",
    excerpt:
      "Capture stunning travel moments with these photography tips and techniques. Learn how to tell stories through your images.",
    content: `
      <h2>Introduction to Travel Photography</h2>
      <p>Travel photography is about capturing the essence of a place - its landscapes, people, culture, and spirit. It's a way to tell stories and share experiences through images.</p>
      
      <h2>Essential Equipment</h2>
      <p>While you don't need the most expensive gear to take great travel photos, there are some essentials:</p>
      <ul>
        <li>A reliable camera (DSLR, mirrorless, or even a good smartphone)</li>
        <li>Versatile lenses (a wide-angle for landscapes and a portrait lens)</li>
        <li>Extra batteries and memory cards</li>
        <li>A lightweight tripod</li>
        <li>A camera bag for protection</li>
      </ul>
      
      <h2>Composition Techniques</h2>
      <p>Good composition is key to compelling travel photography:</p>
      <ul>
        <li>Rule of Thirds: Place key elements along the grid lines or at their intersections</li>
        <li>Leading Lines: Use natural lines to lead the viewer's eye through the image</li>
        <li>Framing: Use natural elements to frame your subject</li>
        <li>Perspective: Experiment with different angles and heights</li>
      </ul>
      
      <h2>Capturing Local Culture</h2>
      <p>Some of the most powerful travel photos capture local culture and people:</p>
      <ul>
        <li>Visit local markets and festivals</li>
        <li>Learn a few phrases in the local language</li>
        <li>Ask permission before photographing people</li>
        <li>Be respectful of local customs and traditions</li>
      </ul>
      
      <h2>Post-Processing Tips</h2>
      <p>Enhance your travel photos with thoughtful editing:</p>
      <ul>
        <li>Adjust exposure and contrast</li>
        <li>Enhance colors without oversaturating</li>
        <li>Crop for better composition</li>
        <li>Develop a consistent style for your travel series</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Travel photography is about more than just taking pretty pictures - it's about storytelling, connecting with places and people, and sharing experiences. With practice and patience, you can create images that transport viewers to the places you've been.</p>
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    publishedAt: "2023-09-05T14:15:00Z",
    author: {
      _id: "author3",
      name: "Taylor Kim",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Travel photographer and writer with a passion for capturing cultural stories.",
      socialLinks: [
        { platform: "Instagram", url: "https://instagram.com/taylorkim" },
        { platform: "Website", url: "https://taylorkim.com" },
      ],
    },
    category: "travel",
    tags: ["photography", "travel", "tips"],
    readingTime: 7,
    commentCount: 4,
    comments: [
      {
        _id: "comment6",
        postId: "3",
        name: "David Chen",
        email: "david@example.com",
        content: "These tips are gold! I'm planning a trip to Southeast Asia and will definitely use these techniques.",
        createdAt: "2023-09-06T09:10:00Z",
      },
      {
        _id: "comment7",
        postId: "3",
        name: "Rachel Green",
        email: "rachel@example.com",
        content:
          "I never thought about using leading lines before. Just tried it with some old travel photos and it makes such a difference!",
        createdAt: "2023-09-07T11:30:00Z",
      },
      {
        _id: "comment8",
        postId: "3",
        name: "Carlos Mendez",
        email: "carlos@example.com",
        content: "What editing software do you recommend for beginners?",
        createdAt: "2023-09-08T16:20:00Z",
      },
      {
        _id: "comment9",
        postId: "3",
        name: "Taylor Kim",
        email: "taylor@example.com",
        content:
          "@Carlos I recommend starting with Adobe Lightroom or the free alternative, Darktable. Both are great for organizing and editing photos!",
        createdAt: "2023-09-09T10:15:00Z",
      },
    ],
    featured: true,
  },
  {
    _id: "4",
    title: "Healthy Meal Prep Ideas for Busy Professionals",
    slug: "healthy-meal-prep-ideas-for-busy-professionals",
    excerpt:
      "Save time and eat well with these meal preparation strategies. Learn how to plan, prep, and store nutritious meals for the week.",
    content: `
      <h2>Introduction to Meal Prepping</h2>
      <p>Meal prepping is the practice of preparing whole meals or dishes ahead of schedule. It's a great way to save time, reduce stress, and eat healthier throughout the week.</p>
      
      <h2>Benefits of Meal Prepping</h2>
      <p>There are numerous benefits to meal prepping:</p>
      <ul>
        <li>Saves time during busy weekdays</li>
        <li>Reduces food waste</li>
        <li>Helps control portions and calories</li>
        <li>Saves money by reducing takeout meals</li>
        <li>Decreases decision fatigue around food choices</li>
      </ul>
      
      <h2>Getting Started: Essential Equipment</h2>
      <p>You don't need fancy equipment to start meal prepping, but these items can help:</p>
      <ul>
        <li>Quality food storage containers (glass or BPA-free plastic)</li>
        <li>Sheet pans for roasting vegetables</li>
        <li>A good chef's knife</li>
        <li>Measuring cups and spoons</li>
        <li>A rice cooker or Instant Pot (optional but helpful)</li>
      </ul>
      
      <h2>Meal Prep Strategies</h2>
      <p>There are several approaches to meal prepping:</p>
      <ul>
        <li>Full Prep: Prepare complete meals for the week</li>
        <li>Batch Cooking: Cook large batches of specific foods</li>
        <li>Ingredient Prep: Wash, chop, and prepare ingredients</li>
        <li>Portioning: Divide snacks and meals into grab-and-go portions</li>
      </ul>
      
      <h2>Simple Meal Prep Ideas</h2>
      <h3>Breakfast Options:</h3>
      <ul>
        <li>Overnight oats with fruit and nuts</li>
        <li>Egg muffins with vegetables</li>
        <li>Greek yogurt parfaits</li>
        <li>Smoothie packs (pre-portioned frozen fruits and greens)</li>
      </ul>
      
      <h3>Lunch and Dinner Options:</h3>
      <ul>
        <li>Sheet pan roasted vegetables with protein</li>
        <li>Grain bowls with a variety of toppings</li>
        <li>Mason jar salads</li>
        <li>Slow cooker soups and stews</li>
      </ul>
      
      <h2>Storage and Food Safety</h2>
      <p>Proper storage is crucial for meal prepping:</p>
      <ul>
        <li>Most prepared meals last 3-5 days in the refrigerator</li>
        <li>Label containers with dates</li>
        <li>Some meals can be frozen for longer storage</li>
        <li>Reheat foods to the proper temperature before eating</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Meal prepping doesn't have to be complicated or time-consuming. Start small, find recipes you enjoy, and develop a routine that works for your lifestyle. With a little planning, you can enjoy healthy, homemade meals all week long.</p>
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    publishedAt: "2023-08-28T11:45:00Z",
    author: {
      _id: "author4",
      name: "Jordan Patel",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Nutritionist and wellness coach specializing in practical health solutions for busy lifestyles.",
      socialLinks: [
        { platform: "Instagram", url: "https://instagram.com/jordanpatel" },
        { platform: "Website", url: "https://jordanpatel.com" },
      ],
    },
    category: "food",
    tags: ["meal-prep", "nutrition", "healthy-eating", "recipes"],
    readingTime: 8,
    commentCount: 3,
    comments: [
      {
        _id: "comment10",
        postId: "4",
        name: "Sophia Rodriguez",
        email: "sophia@example.com",
        content:
          "I've been wanting to start meal prepping but felt overwhelmed. These simple strategies make it seem much more doable!",
        createdAt: "2023-08-29T13:25:00Z",
      },
      {
        _id: "comment11",
        postId: "4",
        name: "Marcus Johnson",
        email: "marcus@example.com",
        content: "Do you have any specific recipes for high-protein, low-carb meal prep options?",
        createdAt: "2023-08-30T09:40:00Z",
      },
      {
        _id: "comment12",
        postId: "4",
        name: "Jordan Patel",
        email: "jordan@example.com",
        content:
          "@Marcus Great question! Try sheet pan chicken with roasted vegetables, egg and turkey bacon breakfast muffins, or tuna salad lettuce wraps. I'll write a follow-up post with specific recipes soon!",
        createdAt: "2023-08-31T14:15:00Z",
      },
    ],
    featured: false,
  },
  {
    _id: "5",
    title: "Mindfulness Practices for Daily Life",
    slug: "mindfulness-practices-for-daily-life",
    excerpt:
      "Incorporate mindfulness into your everyday routine with these simple practices. Learn how to reduce stress and increase present-moment awareness.",
    content: `
      <h2>What is Mindfulness?</h2>
      <p>Mindfulness is the practice of purposely focusing your attention on the present moment—and accepting it without judgment. It's about being fully engaged with whatever you're doing at the moment, free from distraction or judgment, and aware of your thoughts and feelings without getting caught up in them.</p>
      
      <h2>Benefits of Mindfulness</h2>
      <p>Research has shown numerous benefits of regular mindfulness practice:</p>
      <ul>
        <li>Reduced stress and anxiety</li>
        <li>Improved focus and concentration</li>
        <li>Better emotional regulation</li>
        <li>Enhanced self-awareness</li>
        <li>Improved sleep quality</li>
        <li>Reduced rumination and negative thinking</li>
      </ul>
      
      <h2>Simple Mindfulness Practices</h2>
      <h3>Mindful Breathing</h3>
      <p>One of the simplest ways to practice mindfulness is through focused breathing:</p>
      <ol>
        <li>Find a comfortable seated position</li>
        <li>Close your eyes or maintain a soft gaze</li>
        <li>Focus your attention on your breath</li>
        <li>Notice the sensation of air moving in and out of your body</li>
        <li>When your mind wanders (which is normal), gently bring your attention back to your breath</li>
        <li>Start with 5 minutes and gradually increase the duration</li>
      </ol>
      
      <h3>Mindful Observation</h3>
      <p>This exercise helps you connect with the beauty of the natural environment:</p>
      <ol>
        <li>Choose a natural object within your immediate environment (a flower, an insect, the clouds)</li>
        <li>Focus on watching it for a minute or two</li>
        <li>Don't do anything except notice the details</li>
        <li>Explore the object as if you're seeing it for the first time</li>
        <li>Connect with its energy and purpose</li>
      </ol>
      
      <h3>Mindful Awareness</h3>
      <p>This practice involves bringing awareness to routine activities:</p>
      <ul>
        <li>Choose a routine activity (brushing teeth, washing dishes, eating)</li>
        <li>Bring full awareness to the activity</li>
        <li>Notice the sensations, movements, and thoughts that arise</li>
        <li>When your mind wanders, gently bring it back to the activity</li>
      </ul>
      
      <h2>Incorporating Mindfulness into Daily Life</h2>
      <p>You don't need to meditate for hours to practice mindfulness. Here are ways to incorporate it into your daily routine:</p>
      <ul>
        <li>Start your day with a mindful minute</li>
        <li>Practice mindful eating by savoring each bite</li>
        <li>Take mindful breaks throughout your workday</li>
        <li>Practice mindful listening in conversations</li>
        <li>End your day with a brief body scan meditation</li>
      </ul>
      
      <h2>Overcoming Common Challenges</h2>
      <p>Many people face challenges when starting a mindfulness practice:</p>
      <ul>
        <li>Mind wandering: This is normal; gently return to your focus</li>
        <li>Impatience: Start with short sessions and gradually increase</li>
        <li>Self-judgment: Approach practice with curiosity, not criticism</li>
        <li>Finding time: Integrate mindfulness into existing routines</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mindfulness is a skill that develops with practice. Start small, be consistent, and approach the practice with curiosity and kindness. Even a few minutes of mindfulness each day can lead to significant benefits for your mental and emotional wellbeing.</p>
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    publishedAt: "2023-08-20T09:30:00Z",
    author: {
      _id: "author5",
      name: "Maya Williams",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Mindfulness coach and yoga instructor dedicated to helping people find balance in their busy lives.",
      socialLinks: [
        { platform: "Instagram", url: "https://instagram.com/mayawilliams" },
        { platform: "Website", url: "https://mayawilliams.com" },
      ],
    },
    category: "lifestyle",
    tags: ["mindfulness", "mental-health", "wellness", "meditation"],
    readingTime: 6,
    commentCount: 2,
    comments: [
      {
        _id: "comment13",
        postId: "5",
        name: "Thomas Lee",
        email: "thomas@example.com",
        content:
          "I've been trying to meditate for years but always gave up. These simple practices seem much more approachable. Thank you!",
        createdAt: "2023-08-21T16:50:00Z",
      },
      {
        _id: "comment14",
        postId: "5",
        name: "Aisha Khan",
        email: "aisha@example.com",
        content:
          "The mindful observation practice has been a game-changer for me. I've started noticing so many beautiful details in my daily life that I used to miss.",
        createdAt: "2023-08-22T10:35:00Z",
      },
    ],
    featured: false,
  },
  {
    _id: "6",
    title: "Essential Tools for Remote Work Success",
    slug: "essential-tools-for-remote-work-success",
    excerpt:
      "Boost your productivity and collaboration while working remotely with these essential tools and strategies.",
    content: `
      <h2>The Remote Work Revolution</h2>
      <p>Remote work has transformed from a rare perk to a mainstream work arrangement. Whether you're working from home full-time, part-time, or as part of a distributed team, having the right tools and strategies is essential for success.</p>
      
      <h2>Setting Up Your Workspace</h2>
      <p>A productive remote work environment starts with the right physical setup:</p>
      <ul>
        <li>Dedicated workspace: Ideally a separate room or at least a designated area</li>
        <li>Ergonomic chair and desk: Proper posture prevents physical strain</li>
        <li>External monitor: Increases screen real estate and productivity</li>
        <li>Quality headphones with microphone: Essential for clear communication</li>
        <li>Reliable internet connection: Consider a backup option</li>
        <li>Proper lighting: Reduces eye strain and improves video call quality</li>
      </ul>
      
      <h2>Communication and Collaboration Tools</h2>
      <h3>Video Conferencing</h3>
      <p>Video calls are the closest substitute for face-to-face meetings:</p>
      <ul>
        <li>Zoom: Feature-rich platform with reliable performance</li>
        <li>Google Meet: Seamless integration with Google Workspace</li>
        <li>Microsoft Teams: Excellent for organizations using Microsoft 365</li>
      </ul>
      
      <h3>Team Chat</h3>
      <p>Instant messaging platforms keep teams connected throughout the day:</p>
      <ul>
        <li>Slack: Organized channels, integrations, and direct messaging</li>
        <li>Microsoft Teams: Chat functionality with deep Office integration</li>
        <li>Discord: Popular for communities and informal team communication</li>
      </ul>
      
      <h3>Project Management</h3>
      <p>Keep track of tasks, deadlines, and progress with these tools:</p>
      <ul>
        <li>Asana: Visual project management with customizable workflows</li>
        <li>Trello: Kanban-style boards for tracking tasks</li>
        <li>Monday.com: Colorful, intuitive interface with multiple views</li>
        <li>Notion: All-in-one workspace for notes, tasks, and wikis</li>
      </ul>
      
      <h3>Document Collaboration</h3>
      <p>Create and edit documents together in real-time:</p>
      <ul>
        <li>Google Workspace: Docs, Sheets, and Slides with real-time collaboration</li>
        <li>Microsoft 365: Word, Excel, and PowerPoint with cloud collaboration</li>
        <li>Notion: Flexible documents with databases and templates</li>
      </ul>
      
      <h2>Productivity and Time Management</h2>
      <p>Stay focused and manage your time effectively:</p>
      <ul>
        <li>Time tracking: Toggl, RescueTime, or Clockify</li>
        <li>Focus apps: Forest, Focus@Will, or Freedom</li>
        <li>Task management: Todoist, TickTick, or Microsoft To Do</li>
        <li>Calendar management: Google Calendar or Microsoft Outlook</li>
      </ul>
      
      <h2>Remote Work Strategies</h2>
      <h3>Establishing Boundaries</h3>
      <p>Create clear separation between work and personal life:</p>
      <ul>
        <li>Set consistent working hours</li>
        <li>Create start and end-of-day rituals</li>
        <li>Use different browser profiles for work and personal use</li>
        <li>Turn off notifications outside working hours</li>
      </ul>
      
      <h3>Communication Best Practices</h3>
      <p>Effective communication is crucial for remote teams:</p>
      <ul>
        <li>Overcommunicate important information</li>
        <li>Be clear about your availability</li>
        <li>Choose the right communication channel for the message</li>
        <li>Practice active listening during video calls</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The right tools and strategies can make remote work not just feasible but highly productive and enjoyable. Experiment with different tools to find what works best for your specific needs and work style. Remember that technology should support your work, not complicate it.</p>
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    publishedAt: "2023-08-15T13:20:00Z",
    author: {
      _id: "author1",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Frontend developer with a passion for React and modern web technologies.",
      socialLinks: [
        { platform: "Twitter", url: "https://twitter.com/alexjohnson" },
        { platform: "GitHub", url: "https://github.com/alexjohnson" },
      ],
    },
    category: "technology",
    tags: ["remote-work", "productivity", "tools", "collaboration"],
    readingTime: 7,
    commentCount: 3,
    comments: [
      {
        _id: "comment15",
        postId: "6",
        name: "Priya Sharma",
        email: "priya@example.com",
        content: "Great list! I'd add Miro for virtual whiteboarding - it's been essential for our design team.",
        createdAt: "2023-08-16T09:15:00Z",
      },
      {
        _id: "comment16",
        postId: "6",
        name: "Robert Chen",
        email: "robert@example.com",
        content:
          'The boundary-setting tips are so important. It took me months to figure out how to "leave work" when my office is in my home.',
        createdAt: "2023-08-17T14:30:00Z",
      },
      {
        _id: "comment17",
        postId: "6",
        name: "Olivia Martinez",
        email: "olivia@example.com",
        content: "Any recommendations for tools that help with remote team building and social connections?",
        createdAt: "2023-08-18T11:45:00Z",
      },
    ],
    featured: false,
  },
]

// Calculate reading time for each post
posts.forEach((post) => {
  if (!post.readingTime) {
    post.readingTime = calculateReadingTime(post.content)
  }
})

// Get all posts with pagination and filtering
export const getAllPosts = cache(
  async ({
    page = 1,
    limit = 10,
    category,
    tag,
  }: {
    page?: number
    limit?: number
    category?: string
    tag?: string
  } = {}) => {
    // Filter posts by category and/or tag if provided
    let filteredPosts = [...posts]

    if (category) {
      filteredPosts = filteredPosts.filter((post) => post.category === category)
    }

    if (tag) {
      filteredPosts = filteredPosts.filter((post) => post.tags?.includes(tag))
    }

    // Sort posts by date (newest first)
    filteredPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    // Calculate pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

    return {
      posts: paginatedPosts,
      totalPosts: filteredPosts.length,
      totalPages: Math.ceil(filteredPosts.length / limit),
      currentPage: page,
    }
  },
)

// Get a single post by slug
export const getPostBySlug = cache(async (slug: string) => {
  return posts.find((post) => post.slug === slug)
})

// Get featured posts
export const getFeaturedPosts = cache(async (limit = 3) => {
  return posts
    .filter((post) => post.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
})

// Get related posts
export const getRelatedPosts = cache(async (postId: string, category: string, limit = 3) => {
  return posts
    .filter((post) => post._id !== postId && post.category === category)
    .sort(() => 0.5 - Math.random()) // Simple random sorting
    .slice(0, limit)
})

