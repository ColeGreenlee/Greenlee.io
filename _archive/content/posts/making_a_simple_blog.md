---
title: "Transitioning to a Static Site Generator"
date: 2022-02-16
draft: true
---

## Making a Simple Blog With Hugo

### The Why

Recently I came to the conclusion that despite my best efforts, keeping my website up to date was, at best, a chore. It was a collection of old code that I wrote in highschool using a _very cool_ Windows 98:tm: CSS theme.

![This is the old design of my website, fully embracing the cyan-styled dominance of Windows 98](/img/posts/making_a_simple_blog/old_website.png)

### This Post

As you can probably guess, this post is mostly a test of the features and styling of this website. This won't be a guide by any means, but rather I decided to write this post for a few reasons:

1. To see how markdown generated with this CSS theme looks (the answer is _pretty good_)
2. To document what I've done in creating this site and theme - this will be helpful when I inevitably have someone ask how to make a static site like mine.
3. To test run the pipeline from having a blog post idea to seeing it on my website.
4. To have fun - while this is definitely part of a broader "portfolio building" excercise, non-serious documentation is a lot easier to write.

### The Old and The Ugly

As I mentioned, my old site was a site to behold. Leaning into the vaporwave aesthetic was great, but could have been pulled of a bit better. This section will be a post-mortem of my old website.

The Good:

- Unique look, attention grabbing I suppose
- Listed my experience

The Bad:

- world's slowest cdn
- bogged down by old content
- no ability to add posts using ~markdown~

### The New and ~Simple~

Getting started with static site generators is fairly easy, and you can automatically deploy your repo to a number of services quite easily through GitHub integrations. Step one in building my new site was to decide on a generator, and for that I chose [Hugo](https://github.com/spf13/hugo). I found this [awesome list](https://github.com/myles/awesome-static-generators) of static site generators that are worth taking a look at.

The Hugo [documentation site](https://gohugo.io/documentation/) was quite helpful in figuring out syntax issues, as was [Hugo's GitHub repo](https://github.com/gohugoio/hugoBasicExample) with practical examples. This got me thinking about what I actually wanted to have in terms of content on my site. Aside from linking to different posts, the content on this site is fairly straightforward to develop a Hugo theme around, as the templating engine allows you to treat pretty much any content as parameterizable archetypes. This is a pretty cool aspect of Hugo that abstracts away some of the logic you would have to write if you had built this exact site in something like React or Angular. One neat example of this in action is in the project listing. If a project (such as this website) has an accompying post (such as the one you're reading right now), I am able to set the `associatedPostSlug` to point the 'Read More' there instead.

I didn't want to use a theme that a thousand other sites already were, and figured that this would be a great chance to try out [UIKIT](https://getuikit.com/) for the first time. I started off by generating a blank theme and got to work mocking up a general design style using components that I found interesting on UIKit's documentation site. An expert in the art of graphic design, I could only use the best tool available: MS Paint.

### The Mockup

![The new website's mockup](/img/posts/making_a_simple_blog/new_website_mockup.png)

(UI/UX professionals are terrified of my sheer power)

After a (long) night of playing around with UIKit and getting the index page closer to my end goal, I found myself with this:

![The new website's front page](/img/posts/making_a_simple_blog/new_website.png)

I was able to quite easily copy the structure of the index page's lists to quickly build the [posts](/posts/) and [projects](/projects/) listing pages, which simply provide a larger viewport for the same content.
