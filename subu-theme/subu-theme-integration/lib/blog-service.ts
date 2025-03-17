"use server"

import type { BlogPost, BlogCategory } from "@/types/blog"

// This is a mock implementation - in production, you would fetch from your Blogger API
// or from your database after migrating the content
export async function getBlogPosts(): Promise<BlogPost[]> {
  // These are sample posts based on the screenshot
  return [
    {
      id: "1",
      title: "February Best-Sellers: Top Skincare & Makeup Kits for Valentine's & Self-Care",
      slug: "february-best-sellers-skincare-makeup-kits",
      excerpt: "Best February Skincare & Makeup Kits | Top Valentine's Day Beauty Gift Ideas.",
      content: `
# February Best-Sellers: Top Skincare & Makeup Kits for Valentine's & Self-Care

Valentine's Day is just around the corner, and what better way to celebrate than with some self-care? Whether you're treating yourself or shopping for a loved one, these skincare and makeup kits are perfect for the occasion.

## Top Picks for Valentine's Day

1. **Glow Recipe Watermelon Glow Set** - This hydrating duo includes the popular Watermelon Glow Sleeping Mask and Watermelon Pink Juice Moisturizer.

2. **Fenty Beauty Glossy Posse** - A collection of mini Gloss Bomb lip glosses in various shades, perfect for creating different looks.

3. **Laneige Lip Sleeping Mask Set** - Give the gift of soft, hydrated lips with this set of overnight lip treatments in different flavors.

4. **Charlotte Tilbury Pillow Talk Set** - The iconic Pillow Talk collection includes lipstick, lip liner, and eyeshadow in the universally flattering shade.

5. **Drunk Elephant The Littles** - A perfect introduction to this popular skincare brand with travel-sized versions of their best-selling products.

## Self-Care Essentials

Self-care is more important than ever, and these kits make it easy to create a spa-like experience at home:

- **Kiehl's Ultra Facial Set** - Everything needed for a complete skincare routine.
- **Tatcha The Starter Ritual Set** - Japanese-inspired skincare for a luxurious experience.
- **Fresh Rose Deep Hydration Set** - Rose-infused products for a soothing, hydrating routine.

Remember, self-care isn't selfish - it's necessary! Treat yourself or a loved one this Valentine's Day.
      `,
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "AMAZON",
      tags: ["skincare", "makeup", "valentine's day", "self-care", "beauty"],
      publishedAt: "2023-02-01T12:00:00Z",
      relatedPosts: ["2", "4"],
    },
    {
      id: "2",
      title: "Best Affordable Valentine's Day Gift Ideas | Thoughtful Gifts for Every Budget",
      slug: "affordable-valentines-day-gift-ideas",
      excerpt: "Affordable Valentine's Day Gift Ideas for Every Budget. 💖 Vogue Vibes Sisters - Amazon Best Sellers",
      content: `
# Best Affordable Valentine's Day Gift Ideas | Thoughtful Gifts for Every Budget

Valentine's Day doesn't have to break the bank! You can show your love and appreciation with thoughtful gifts that won't empty your wallet. Here are some affordable Valentine's Day gift ideas that are sure to impress.

## Under $25

1. **Personalized Photo Frame** - Add a special photo for a personal touch.
2. **Scented Candles** - Create a romantic atmosphere with their favorite scent.
3. **Cozy Socks** - Practical yet cute, especially with heart patterns.
4. **Chocolate Assortment** - Classic and always appreciated.
5. **Mini Succulents** - A living gift that lasts longer than flowers.

## Under $50

1. **Book by Their Favorite Author** - Show you pay attention to their interests.
2. **Essential Oil Diffuser** - For relaxation and aromatherapy.
3. **Customized Mug** - With a photo or inside joke.
4. **Skincare Set** - Self-care is always a great gift.
5. **Board Game** - For quality time together.

## Under $100

1. **Wireless Earbuds** - Perfect for music lovers.
2. **Cozy Throw Blanket** - For cuddle sessions.
3. **Cooking Class Voucher** - An experience to share.
4. **Jewelry Piece** - Simple but meaningful.
5. **Subscription Box** - The gift that keeps giving.

Remember, it's the thought that counts! A heartfelt card with sincere words can mean more than an expensive gift without personal significance.
      `,
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "AFFORDABLE VALENTINE'S GIFTS",
      tags: ["valentine's day", "gifts", "budget", "affordable", "thoughtful"],
      publishedAt: "2023-01-25T12:00:00Z",
      relatedPosts: ["1", "3"],
    },
    {
      id: "3",
      title: "Best Makeup Essentials for Beginners | Affordable Must-Have Beauty Products",
      slug: "makeup-essentials-for-beginners",
      excerpt: "Top 10 Makeup Essentials for Beginners – Must-Have Beauty Products.",
      content: `
# Best Makeup Essentials for Beginners | Affordable Must-Have Beauty Products

Starting your makeup journey can be overwhelming with countless products on the market. Here's a curated list of affordable must-have beauty products for beginners.

## Face Products

1. **BB Cream or Lightweight Foundation** - Start with something forgiving and easy to apply. The Maybelline BB Cream or L'Oreal True Match are excellent affordable options.

2. **Concealer** - For covering blemishes and dark circles. The e.l.f. Hydrating Camo Concealer offers great coverage at a budget price.

3. **Setting Powder** - To keep everything in place. Try the Rimmel Stay Matte Pressed Powder.

4. **Blush** - Adds life to your face. Milani Baked Blushes are pigmented and long-lasting.

## Eye Products

5. **Neutral Eyeshadow Palette** - Versatile for everyday looks. The Wet n Wild Color Icon palettes are incredibly affordable and good quality.

6. **Eyeliner** - Start with a pencil liner as it's more forgiving. NYX Slim Eye Pencil is a great beginner option.

7. **Mascara** - Defines your eyes instantly. Maybelline Great Lash is a classic for a reason.

## Lip Products

8. **Tinted Lip Balm** - For a subtle hint of color. Burt's Bees Tinted Lip Balms are moisturizing and natural-looking.

9. **Neutral Lipstick** - A shade close to your natural lip color. Revlon Super Lustrous lipsticks have a great formula at an affordable price.

## Tools

10. **Basic Brush Set** - You don't need fancy brushes to start. Real Techniques and e.l.f. offer quality affordable sets.

Remember, makeup should be fun! Start with these basics and expand your collection as you become more comfortable and develop your personal style.
      `,
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "AFFORDABLE MAKEUP",
      tags: ["makeup", "beginners", "affordable", "beauty", "essentials"],
      publishedAt: "2023-01-15T12:00:00Z",
      relatedPosts: ["2", "4"],
    },
    {
      id: "4",
      title: "Valentine's Day Makeup Guide: Affordable Beauty Products for a Gorgeous Look",
      slug: "valentines-day-makeup-guide",
      excerpt: "Valentine's Day Makeup Guide | Affordable Beauty Products for a Stunning Look.",
      content: `
# Valentine's Day Makeup Guide: Affordable Beauty Products for a Gorgeous Look

Whether you're going on a romantic date or celebrating with friends, Valentine's Day is the perfect occasion to create a stunning makeup look. Here's a guide using affordable beauty products that won't break the bank.

## Prep and Base

1. **Primer** - Start with a good primer to ensure your makeup lasts all night. The e.l.f. Poreless Putty Primer creates a smooth canvas for under $10.

2. **Foundation** - For a flawless base, try the L'Oreal Infallible Fresh Wear Foundation. It provides medium to full coverage with a natural finish.

3. **Concealer** - Brighten under-eyes and cover any blemishes with Maybelline Instant Age Rewind Concealer.

## Eyes

4. **Eyeshadow** - Create a romantic pink or red-toned eye look with the Colourpop Stone Cold Fox palette or the Wet n Wild Color Icon Palette in "Rose in the Air."

5. **Eyeliner** - Define your eyes with a black or brown liner. NYX Epic Ink Liner creates precise wings that stay put.

6. **Mascara** - For fluttery lashes, layer the L'Oreal Voluminous Lash Paradise mascara.

7. **False Lashes (Optional)** - For extra drama, try Ardell Demi Wispies for a natural but enhanced look.

## Cheeks and Lips

8. **Blush** - Add a flush of color with Milani Baked Blush in "Luminoso" or "Rose D'Oro" for a romantic glow.

9. **Highlighter** - Wet n Wild MegaGlo Highlighting Powder gives a beautiful glow without emphasizing texture.

10. **Lipstick** - Complete your look with a classic red lip using Maybelline SuperStay Matte Ink in "Pioneer" or a softer pink like NYX Soft Matte Lip Cream in "Stockholm."

## Setting

11. **Setting Spray** - Lock everything in place with the NYX Matte Finish Setting Spray.

Remember, the most important thing is to feel confident and comfortable in your look. These affordable products prove you don't need to spend a fortune to create a gorgeous Valentine's Day makeup look!
      `,
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "AFFORDABLE BEAUTY PRODUCTS",
      tags: ["makeup", "valentine's day", "affordable", "beauty", "tutorial"],
      publishedAt: "2023-02-05T12:00:00Z",
      relatedPosts: ["1", "3"],
    },
    {
      id: "5",
      title: "Must-Have Travel Accessories for a Romantic Getaway | Affordable Essentials Under ₹",
      slug: "must-have-travel-accessories-romantic-getaway",
      excerpt: "Essential travel accessories for your next romantic trip that won't break the bank.",
      content: `
# Must-Have Travel Accessories for a Romantic Getaway | Affordable Essentials Under ₹

Planning a romantic getaway with your significant other? Make your trip smoother and more enjoyable with these affordable travel accessories that are all priced under ₹1000.

## Organization Essentials

1. **Packing Cubes Set** - Keep your clothes organized and maximize suitcase space. These compression cubes make unpacking at your destination much easier.

2. **Travel Document Organizer** - Store your passports, boarding passes, and hotel confirmations in one secure place.

3. **Toiletry Bag** - A hanging toiletry bag saves counter space in small hotel bathrooms and keeps everything accessible.

## Comfort Items

4. **Inflatable Travel Pillow** - Get some rest on long journeys with a compact, inflatable neck pillow that takes up minimal space when not in use.

5. **Sleep Mask** - Block out light for better sleep on planes or in hotel rooms with thin curtains.

6. **Portable White Noise Machine** - Ensure peaceful sleep by drowning out unfamiliar noises.

## Tech Accessories

7. **Universal Travel Adapter** - Stay powered up no matter where your romantic adventure takes you.

8. **Portable Phone Charger** - Keep your devices charged for capturing all those special moments together.

9. **Cable Organizer** - Prevent tangled cords and easily find the right charger when needed.

## Romantic Touches

10. **Mini Bluetooth Speaker** - Set the mood with your favorite playlist anywhere you go.

11. **Travel-sized Scented Candle** - Create ambiance in your hotel room (where permitted).

12. **Compact Card Games** - For fun, screen-free entertainment during downtime.

These affordable accessories will help make your romantic getaway more organized, comfortable, and memorable without breaking the bank. Happy travels!
      `,
      featuredImage: "/placeholder.svg?height=400&width=600",
      category: "AFFORDABLE TRAVEL ACCESSORIES",
      tags: ["travel", "accessories", "romantic", "affordable", "essentials"],
      publishedAt: "2023-01-10T12:00:00Z",
      relatedPosts: ["2", "4"],
    },
  ]
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  return [
    {
      id: "1",
      name: "Amazon",
      slug: "amazon",
      description: "Best deals and products from Amazon",
    },
    {
      id: "2",
      name: "Affordable Valentine's Gifts",
      slug: "affordable-valentines-gifts",
      description: "Budget-friendly gift ideas for Valentine's Day",
    },
    {
      id: "3",
      name: "Affordable Makeup",
      slug: "affordable-makeup",
      description: "Budget-friendly makeup products and reviews",
    },
    {
      id: "4",
      name: "Affordable Beauty Products",
      slug: "affordable-beauty-products",
      description: "Budget-friendly beauty products and reviews",
    },
    {
      id: "5",
      name: "Affordable Travel Accessories",
      slug: "affordable-travel-accessories",
      description: "Budget-friendly travel accessories and essentials",
    },
  ]
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}

export async function getRelatedPosts(postId: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  const currentPost = posts.find((post) => post.id === postId)

  if (!currentPost || !currentPost.relatedPosts) {
    return []
  }

  return posts.filter((post) => currentPost.relatedPosts?.includes(post.id))
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.tags.includes(tag.toLowerCase()))
}

