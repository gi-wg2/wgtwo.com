---
slug: new-website
title: "How I leveraged the 80/20 principle to rebuild wgtwo.com"
tags: [website, react]
authors: [jonny-griffin]
---

import { ImgComparisonSlider } from '@img-comparison-slider/react';
import styles from "./styles.css";
import Highlight from '@site/src/components/highlight/Highlight';

For a company that provides an innovative solution across the telecommunication sector, I believe it is essential to have a web presence that effectively communicates our technology. This blog post illustrates my approach to taking our existing (old) website and transforming it into what it is today. 

Let's see what I can achieve with one self-initiative, saying yes, and tackle building a new website by adopting a common methodology, the Pareto 80/20 Principle.

<!--truncate-->

<center><b><Highlight color="#000">wgtwo.com 2.0 => wgtwo.com 3.0</Highlight></b></center>
<center><i>before and after</i></center>

<ImgComparisonSlider class="slider" hover="hover">
    <img slot="first" src={require('./wgtwo-home-2.0.png').default} />
    <img slot="second" src={require('./wgtwo-home-3.0.png').default} />
</ImgComparisonSlider>

#### Background

The old wgtwo.com website did not fully communicate the **wgtwo** initiatives, technology, and culture in a way that is beneficial for sharing content, inspiring the industry, and securing new engineering and business talent. Working Group Two has had a website that has been non-operational for over a year and it is time to bring it to an end. While there were many problems with the old website, in short, a few were related to no operational owner within our company, was built and maintained by a 3rd party company, and lastly, was never completed as there were broken links, bad CSS.

While I could have a blog post in entirely of the old website, let's skip over that and instead focus on how I built the new and improved wgtwo.com. To tackle this growing problem, I created the following mental outline to spend one week, 7 days, to create a better wgtwo.com. The outline was as follows:

:::tip Steps taken for building a new website
Step 1: setting the objectives  
Step 2: understand the current issues of the wgtwo online presence   
Step 3: come up with strategies to solve  
Step 4: organize important content and design away - tell a story  
Step 5: code it up  
:::

## Step 1: Objectives

### 80/20 Principle

Before diving into the nitty-gritty details of how I achieved to build a new website in a week, I wanted to briefly discuss the concept of the [Pareto 80/20 Principle](https://en.wikipedia.org/wiki/Pareto_principle). Essentially, if someone is not aware of the concept, it has been around for a while but in theory, is a concept that has been applied and proven by many economists. This principle can be applied to wealth, consumption, consequences, and most importantly output and results.

:::info 80/20 Principle High Level
❯ the majority, that has little impact  
❯ the small minority, that has a major, dominant impact 

20% input = 80% output  
20% effort = 80% results

80% = Done
:::

For the website, it was important to focus on, what is our 20% input. If a task comes to the table then it was important to know the importance of the task, and how much time should be spent on this. I will be referencing back to this 20% input and 80% output. For our context, 80% is a completed website.

### Objectives

I needed a mechanism to scope the amount of work and be able to "grade" the work at the end to ensure I meet my goal and most importantly, not get distracted from the goal. Part of the 80/20 principle is to ensure that 20% of the work is done to achieve 80% of the output. 

#### Primary objectives (80%)

A website is used by an audience. It was important to understand the end-user so I can ensure that their experience was prioritized. After brainstorming I came up with two scenarios:

- Commercial: Convert potential customers from being interested in taking action
- Talent: Inspire software engineers to consider **wgtwo** as their next employer and start engaging with us

#### *Secondary objectives*  

As our secondary objectives, these were still always in the back of our head but in theory, had less of a priority. There was some overlap with the primary objectives. In the end, however, I was able to also include this as part of the 80% website offering as a lot of the written content previously existed on the old website.

- Third parties: Educate media, analysts, and third-party developers about the future of our industry and our offerings
- Internal: Be an active platform for external knowledge sharing by employees (docs, policies, case studies, blogs, etc)

### Personas

Ok sweet, so now that I have our *finite goal* in mind, let's think about the personas related to achieving our goals and objectives. Specifically, I found that it made sense to have two groups of personas, *external and internal*. 

#### External audience

We can think about external audiences as who is using the website.

* I am a technical manager at MVNO company x trying to learn about how **wgtwo** solves business problems for me
* I am a software engineer looking for a new challenge and job within the telco space
* I am an existing customer of **wgtwo** finding documentation to APIs and contact details
* I am an existing customer looking to find their security documentation
* I work at a news outlet (journalist, analyst, investors) trying to find more information about **wgtwo**

> 2 out of 5 were true with the old website

Creating these statements allowed me to think about what content is important and the organizational architecture. This gave us the criteria to then grade our content for each bullet point.

As an example, focusing a lot of time on creating a storyline was critical for answering the questions around content organization on what business problems **wgtwo** solves, hiring and recruiting, and links to our external products like API Docs and support portals, as they did not exist before. 

#### Internal audience

It was important to include internal personas as the website will be updated, maintained, and managed by whom, internal personas. Previously, the old wgtwo.com had a problem that the website was only updated by a select few in the sales team - but even then - an external request to a third-party company has to be made.

Who and how will **wgtwo** be updating the website. In short, everyone will have access to the website and be able to update content. 

* I am an engineer looking to write a technical blog post in markdown
* I am the head of marketing looking to post company news about a new feature **wgtwo** deployed
* I am the head of marketing looking to update the header text on the homepage
* I am an engineer looking to add a new link to the APIs doc
* I am an engineer looking to add a new page about details of Voice
* I am the CTO looking to update our tech page as I have a new capability
* I am the CEO finding information about how I do XYZ for a sales chat
* I am a salesperson looking to add a case study
* I am a salesperson looking to find a link to more information to send to a customer 

> 2 out of 9 were true with the old website

Essentially, from these bullet-point lists above, I reflected and see that well I have a technical and non-technical persona that needs to be able to update the website. I need something modern and scalable to allow rich and modern web content while basic text blog posts and documentation. This was important when determining the tech stack for the website.

## Step 2,3,4: Problem Analysis and Solution

The bulk of the blog post will be this section. To help organize and communicate the problems, approach, and solution - there were a few domains that were clear to me that required work and altering. 

Before tackling any problem listed before, it went through a process such as:

1. **Problem**: Identity what was not working with the old website and keep a total list
2. **Approach**: Look back at the personas and objectives as mentioned earlier and come up with a definition of done (DoD)
3. **Solution**: Have an ordered priority list of action items that must be done. It was important to review this list multiple times to ensure that one item on this list did not take more than 20% of the time compared to the other items. 

Ok, I am starting to get somewhere. Let's jump into some identified problem domains and see how I was able to achieve a cleaver solution and impact.

### <Highlight color="#000">Storyline</Highlight>
**Problem**: Unclear message of what the **wgtwo** business is.  
**Approach**: Envisioning different personas (mvno employee, 3rd party developer, journalist, future **wgtwo** employee) trying to explain the business in different ways. Essentially, how can I build an elevator pitch for the website viewer?    
**Solution**: Restructuring the existing content on the website, and intuitively creating a hierarchy of content. I achieved this via a landing homepage that is made up of several components.  
(Example homepage: Intro, Vision, product, existing customers, case studies for future customers, action to get in touch) 

<details>
  <summary>Homepage - Landing Page</summary>
  <div>
    <div>
        The old homepage displayed on the left and new on the right. The homepage here took the most about of time to complete, as this is the key page for the website. 
        <li><Highlight color="#ef507f">The header did not say what the product is selling</Highlight> => <Highlight color="#000">Stated Mobile Core Network</Highlight></li>
        <li><Highlight color="#ef507f">No details on what the product is</Highlight> => <Highlight color="#000">Added a section of Console</Highlight></li>
        <li><Highlight color="#ef507f">No information from existing customers</Highlight> => <Highlight color="#000">Added a testimonial</Highlight></li>
        <li><Highlight color="#ef507f">No sense of credibility</Highlight> => <Highlight color="#000">Logos with external links to business deals</Highlight></li>
    </div>
    <br/>
    <ImgComparisonSlider class="slider" hover="hover">
        <img slot="first" src={require('./wgtwo-homepage-2.0-full.png').default} />
        <img slot="second" src={require('./wgtwo-homepage-3.0-full.png').default} />
    </ImgComparisonSlider>
    <br/>
  </div>
</details>

<details>
  <summary>Taking a page from Apple and Facebook</summary>
  <div>
    <div>
        When analyzing other websites, I noticed one similarity between them. Short descriptive text, with a <b>period</b>, and usage of <b>color</b>. 
    </div>
    <br/>
    <ImgComparisonSlider class="slider" hover="hover">
        <img slot="first" src={require('./facebook-messenger.png').default} />
        <img slot="second" src={require('./ipad-mini.png').default} />
    </ImgComparisonSlider>
    <br/>
  </div>
</details>

### <Highlight color="#000">Branding</Highlight>
**Problem**: No clear **wgtwo** identity, different brand names / no clear “slogan”   
**Approach**: Understand our personas, business model, and decide on a central way to communicate our brand // analysis of existing content to understand how the brand should be communicated   
**Solution**: Working Group Two AS = company name, while when referencing our company, **wgtwo** in bold - all lowercase to match our logo // programmable, scalable, innovative 

<details>
  <summary>What's our company name?</summary>
  <div>
    <div>
        The old website had five different ways of writing our company name. 5. If we can't even get it right, how could someone else? Let's start and create a new standard for our name - as shown below!
        <li><Highlight color="#ef507f">Working Group 2</Highlight> => <Highlight color="#000">Working Group Two AS</Highlight></li>
        <li><Highlight color="#ef507f">Working Group 2 As</Highlight> => <Highlight color="#000">Working Group Two AS</Highlight></li>
        <li><Highlight color="#ef507f">WorkingGroup2</Highlight> => <Highlight color="#000">Working Group Two AS</Highlight></li>
        <li><Highlight color="#ef507f">WGTWO</Highlight> => <Highlight color="#000">wgtwo</Highlight></li>
        <li><Highlight color="#ef507f">WG2</Highlight> => <Highlight color="#000">wgtwo</Highlight></li>
    </div>
    <br/>
    <ImgComparisonSlider class="slider" hover="hover">
        <img slot="first" src={require('./branding-wg2.png').default} />
        <img slot="second" src={require('./branding-wgtwo.png').default} />
    </ImgComparisonSlider>
    <br/>
  </div>
</details>

<details>
  <summary>Word analysis</summary>
  <div>
      <div>
        Surprisingly, website 2.0 had some great text. A lot of work was spent to build content about the mobile core network space. From a statistically point of view, I wanted to try to analyze what words were most frequent across the website to get an idea of what words we should focus on as part of the homepage hero header text.<br/><br/>
        To achieve this, I had to run a script to download the HTML of the website, as we did not even own the source code of the website. Below you can see the small script I ran to recursively download all pages from the old website. From some small grepping, I found our that <Highlight color="#000">innovation</Highlight> was one of the top lists.<br/><br/>
        <code>wget --recursive --page-requisites --adjust-extension --span-hosts --convert-links --restrict-file-names=windows --domains wgtwo.com --no-parent wgtwo.com</code>
      </div>
    <br/>
    <img src={require('./innovation-25.png').default} />
    <br/>
  </div>
</details>

### <Highlight color="#000">Content organization</Highlight>
**Problem**: Hidden content (too long paths)  
**Approach**: [Miro](www.mirco.com) board chart to understand the existing website structure and content  
**Solution**: everything accessible via <ins>one click</ins>, make more use out of the header and footer of the page
(Example: find the interview process page) 

<details>
  <summary>Mapping the website structure with Miro</summary>
  <div>
    <div>
        The goal of the new website was to make everything accessible from one click from the home page. If this meant a link in the footer, or a call to action within a component. It should be super clear as the viewer to understand where they are when navigating on the website.<br/><br/>
        This was a time consuming process to map out the structure of the old website but in doing so, it was / is quite clear that the new website has a huge improvement in readability.<br/><br/>
        <Highlight color="#ef507f">27 pages</Highlight> => <Highlight color="#000">8 pages</Highlight>
    </div>
    <br/>
    <ImgComparisonSlider class="slider" hover="hover">
        <img slot="first" src={require('./structure-2.0.png').default} />
        <img slot="second" src={require('./structure-3.0.png').default} />
    </ImgComparisonSlider>
    <br/>
  </div>
</details>

<details>
  <summary>Product Ecosystem</summary>
  <div>
      <div>
        Analyzing the old website, I realized that the product ecosystem consisted of 5 pages with various dead-end links going to various other pages. This made it really difficult for even myself (someone who already knows the product), what was trying to be communicated. I was able to use a dialog box with bullet points to describe the two products in a clever way that can be viewed on just a single page.<br/><br/>
        <Highlight color="#ef507f">5 pages</Highlight> => <Highlight color="#000">1 page</Highlight>
      </div>
    <br/>
    <ImgComparisonSlider class="slider" hover="hover">
        <img slot="first" src={require('./pe-2.0.png').default} />
        <img slot="second" src={require('./pe-3.0.png').default} />
    </ImgComparisonSlider>
    <br/>
  </div>
</details>

### <Highlight color="#000">User Experience</Highlight>
**Problem**: Difficult to read text, website nonresponsive, outdated, not techy   
**Approach**: Adopt a modern scalable framework using React, Typescript, Docusourus. Thoroughly test the site on desktop and mobile when developing.    
**Solution**: no images only text-based site, clear structure of header/subtitles/text, mobile-friendly, and brand messaging! 

<details>
  <summary>Shutterstock images to graphical text</summary>
  <div>
      <div>
        Rather than filling a page with default, free, standard images from shutterstock.com, I spent the time to fill a page with meaning messaging where the viewer can learn about <b>wgtwo</b>.
        <br/><br/><Highlight color="#ef507f">Shutterstock images</Highlight> => <Highlight color="#000">Crafted messaging</Highlight>
      </div>
    <br/>
    <ImgComparisonSlider class="slider" hover="hover">
        <img slot="first" src={require('./shutterstock.png').default} />
        <img slot="second" src={require('./vision.png').default} />
    </ImgComparisonSlider>
    <br/>
  </div>
</details>

<details>
  <summary>Mobile Friendliness</summary>
  <div>
      <div>
        My vision is that every single landing page is mobile-friendly with the sense that heading and supporting text can be read on one screen. The size of the font.
        A known formula to help calculate the font size, take the user's age, divide by two, and that is the font size. E.g. <ins>60 age / 2 = 30px</ins>
        <br/><br/><Highlight color="#ef507f">Non-descriptive headers</Highlight> => <Highlight color="#000">Product we are selling</Highlight>
      </div>
    <br/>
    <ImgComparisonSlider class="slider" hover="hover">
        <img slot="first" src={require('./mobile-friendly-2.0.png').default} />
        <img slot="second" src={require('./mobile-friendly-3.0.png').default} />
    </ImgComparisonSlider>
    <br/>
  </div>
</details>

<details>
  <summary>Interview process</summary>
  <div>
      <div>
        One of the primary goals for the new website was hiring. You can see on website 2.0 there is a terrible empty white space. We asked the previous website owner to fix this and after a month no fix. The new website career page has an interactive element where the culture text will scroll down as the reader explores the different interview phases.
        <br/><br/><Highlight color="#ef507f">A weird empty white space</Highlight> => <Highlight color="#000">Interactive elements</Highlight>
      </div>
    <br/>
    <ImgComparisonSlider class="slider" hover="hover">
        <img slot="first" src={require('./interview-process-2.0.png').default} />
        <img slot="second" src={require('./interview-process-3.0.png').default} />
    </ImgComparisonSlider>
    <br/>
  </div>
</details>

### <Highlight color="#000">Operational</Highlight>
**Problem**: Few internal people and externals can update the site, hosted on WordPress, managed by externals   
**Approach**: Understand user personas for the website to ensure all internal users can make updates / give people in the company the ability to work on the website/ inspire to be proactive in making blog posts again / create an identity within the company (every tech company should own their tech)   
**Solution**: Public git repo, markdown, education material in updating the site, a framework to inspire to create content 
(Example: blog, docs) 

<details>
  <summary>Goodbye Wordpress, Hello React</summary>
  <div>
      <div>
        The old website was built leveraging Wordpress. To make any changes to this website, we had to send an email, wait a week, pay money, and wait. This process of improving the site was impossible. Now we have everything hosted in Github where anyone can create a pull request and apply a change. <br/><br/>
        <Highlight color="#ef507f">7 days</Highlight> => <Highlight color="#000">5 minutes</Highlight><br/><br/>
        <Highlight color="#ef507f">$$$$</Highlight> => <Highlight color="#000">0</Highlight>
      </div>
    <br/>
    <ImgComparisonSlider class="slider" hover="hover">
        <img slot="first" src={require('./request-email.png').default} />
        <img slot="second" src={require('./github-repo.png').default} />
    </ImgComparisonSlider>
    <br/>
  </div>
</details>

## Step 5: The tech

As mentioned in the Internal audience, I needed to cater to personas inside our company that were both technical and non-technical. I had use-cases where I wanted something that could be self-managed and hosted low maintenance and was a modern and scalable workflow.

- The non-techy staff and blog posts such as this, the industry-standard now days is markdown. So I knew I needed markdown.
- For the techy to make a website that could be customizable, secure, scale, and use APIs - react is also an industry standard. In addition, I wanted something that generated just plain HTML so I could host on GitHub without an issue.

:::tip The tech
* React/Typescript - Scalable modern framework that allows for complex API calls. For example, it came in handy for creating our [Careers Page](/careers)
* https://docusaurus.io - native support for markdown allowing for a rich blog (which is what you are reading today!)
* Github and GH Actions for hosting, building, and collaborating
:::

## Lessons learned
### What went well
- 80/20 model was critical to get progress made in a week. Mentally saying no to a weird CSS bug or.
- Scoping the project with a defined time (1 week) helped. The key mechanism for scoping the website. I scoped it in several ways such as the header, footer links, not adding anything new but focusing on replacing the existing website.
- Keeping this initiative small. The fewer people, the faster one can move and make decisions and get stuff done.
- Accepting that a website is never complete and focus on getting something out of the door.
- Using React with live reload was a breeze for quickly testing and demoing out new component designs

### The bad
- Starting this initiative I received push back from several people. However, I never let this get to me mentally and instead just followed my gut and kept pushing forward.
- Don't waste time on illustrations. Illustrations are tricky because it is a love/hate relationship. Some will love, and others will dislike - and seldom a full agreement. Crafting good text will tell a better story than a cheap illustration that people remember. All in all, I probably wasted 5 hours trying to come up with solutions and doing research that ended with the original text I had in about 5 minutes of thinking.

### What I learned
- I learned a new framework and language - React, Typescript, Docusaurus
- I learned about modern website design concepts
- I learned how Github actions work
- I learned how to better prioritize my time
- I learned the importance of following your gut and doing what I am passionate about
- I learned how hard illustrations are

## Today

After building the site, I demoed it on our company's Friday demos, and, there was only applause and excitement! The journey it took me to rebuild the website and retell our story was appreciated by many.

Before this website, we had three blog posts in the past year. Already within three weeks, we have three blog posts. 

People from within the company (technical and non-technical) are interested and have already made improvements to the website! 

A website is an identity for the employees and without identity, we are lost. I hope that my effort and time to do this for **wgtwo** is appreciated for the time to come.

Our old website was a <Highlight color="#000">dieing, end-of-life machine</Highlight>.   
Our new website is a <Highlight color="#000">living, breathing machine</Highlight>.   

If you made it this far in the blog post I commend you!

*Overall, I want to say a special thanks to my little Senja Mae and my wife Sophia for chilling on the couch with me while I spent countless hours using Apple airplay to cast my computer screen on the tv while coding away.*