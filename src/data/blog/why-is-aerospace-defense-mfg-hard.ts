import { BlogPost } from "@/utils/markdown";

export const post: BlogPost = {
  id: "3",
  title: "5 Complexities of Aerospace & Defense Manufacturing and tech-enabled considerations",
  slug: "why-is-aerospace-defense-mfg-hard",
  date: "2025-04-03",
  excerpt: "Why is Aerospace & Defense manufacturing hard? And some tech-enabled ideas to address a few issues",
  coverImage: "https://images.unsplash.com/photo-1684687931478-76d7e7cd35b7",
  tags: ["product", "manufacturing"],
  content: `

# Aerospace and Defense Manufacturing: Navigating Five Key Complexities

Aerospace and Defense (A&D) manufacturing represents one of the more complex sectors in industry.
With rigorous quality requirements, complex supply chains, and the need for clear traceability,
manufacturers require innovative solutions. Below, I'll explore five key complexities and how
technology can help address these while maintaining the core operations excellence required.

## 1. Traveled Work: When Plans Change Quickly

Picture this: a skilled technician on the shop floor, carefully assembling critical aircraft components. 
They've spent years perfecting their craft, assembling aerospace parts with millimeter tolerances.
But today, something's different. The bracket they're supposed to install isn't available.
The supplier is delayed, and the production schedule can't wait. This is where the first complexity
of A&D manufacturing comes into play: traveled work.

In the ideal world of A&D manufacturing, every component would arrive on time, in sequence, ready
for assembly. But the reality is far more complex. Assembly operations sometimes need to be performed out
of sequence or in different locations due to capacity constraints or material availability. Suppliers
could be delayed or require support from the final assembly plant for further processing. A critical
bracket installation might be delayed due to inventory shortages, or an aerospace prime might need to
perform operations originally planned for suppliers. This sounds simple, but delaying the delivery of a
multi-aisle aircraft can cost millions.

This isn't just a logistics challenge; it's a human communication challenge. teams need to maintain
quality standards while adapting to these changes; this requires clear communication across internal teams
and suppliers. The real complexity lies in ensuring that every team member, from assemblers to quality
inspectors, has the right information at the right time to put the right parts on the right aircraft.

Modern digital tools are transforming how teams address these challenges. Imagine a scenario where an
assembler, facing a delayed component, can instantly access alternative assembly sequences through a
digital work instruction system. They can document the change, notify quality teams, and update
the production schedule all from their workstation.

This real-time visibility and communication capability is revolutionizing
how teams adapt to changes while maintaining quality standards.

## 2. The True Cost of Manufacturing: Wrap Rate Ambiguity and Analysis

Walk into any aerospace and defense machine shop, and you'll see complex equipment,
skilled operators, and complex parts in various stages of production. Under all of this,
there's a cost that goes into each part: raw material cost, labor cost, equipment depreciation,
overall facilities cost, and more. It's hard to accurately understand this accumulating cost by
hour, part, or customer. This is wrap rate ambiguity. Wrap rate is essentially a factor to understand
fully loaded cost of manufacturing.

Aerospace and defense machine shops need precise understanding of their "all-in" costs for jobs.
This includes not just direct costs (labor and materials), but also indirect costs
(machine depreciation, utilities, quality costs, and more). Currently, many of these costs are
simply spread evenly across product lines, leading to inaccurate cost models and potentially unprofitable contracts.

Consider a scenario where a shop is bidding on a new contract. Without accurate cost data, they might
underbid, leading to financial strain, or overbid, losing the contract to competitors. Even worse,
consider a defense cost-plus contract: accurately reporting manufacturing costs becomes a compliance
issue. Advanced analytics can support this nuanced dynamic, but this relies on better underlying data collection.

Here's a few examples below:
- Material tracking (e.g., RFID) to improve understanding of material movement and usage cost
- Labor tracking apps to understand true cycle times
- Equipment monitoring to better allocate depreciation and electrical costs
- Quality tracking to understand allocation of the quality team cost as well as scrap and rework allocations

Too often, when costs get too high, everyone immediately assumes labor cost is the issue.
There's so much more nuance than this and other potential root causes to address. Having a
myopic view of manufacturing costs will give suboptimal solutions and also give way to thinking
labor is always the problem and not a capability for an improved manufacturing system.

Below is a quick illustrative cost breakdown. Understanding insource vs. outsource decisions can
get complicated quickly. It's vital to understand the whole manufacturing cost and all the allocated
costs. Otherwise, there's a skewed view of profitability and a potential for lost opportunities.

![wrap-rates](../blog_images/why-is-aerospace-defense-mfg-hard/wrap_rates.png)

## 3. Multi-Tiered Supply Chain Complexity: From Raw Materials to Final Assembly

The aerospace and defense supply chain is incredibly nuanced. There's a number of supplier tiers
including raw material suppliers, Tier 2,3 manufacturers, Tier 1 sub-assemblers, and Primes.
Simply put, picture a single aircraft component: it might start as raw material in one country,
be machined in another, assembled in a third, and finally installed in a fourth.
This complexity has only increased with industry consolidation, as a handful of major aerospace and defense
primes now manage vast networks of suppliers.

Here's the challenge: every component must be traceable back to its raw materials, creating a
massive data management challenge. Digital supply chain solutions are revolutionizing this
process by creating end-to-end visibility and automating traceability documentation. These
systems enable manufacturers to track materials in real-time, ensuring compliance and quality at every step.

See below for a clear example of this complexity. The Curiosity Rover relied upon a multi-tier
supply chain to manufacture and assembly a complex assembly. Understanding seemingly basic issues
around material availability, quality, delivery details, and more is critical to the success of the mission.

![Mars Rover](../blog_images/why-is-aerospace-defense-mfg-hard/mars_rover.png)

## 4. Quality and Compliance: The Foundation of Trust

Quality in aerospace and defense manufacturing isn't just about meeting specifications. It's about
ensuring safety and reliability. The industry operates under a complex web of compliance
requirements including AS9100, FedRAMP, ITAR, and ISO standards. These aren't just checkboxes to
check off; they're fundamental to building trust in the final product.

Beyond this, it's also vital to know how to triage quality events. Incorrectly scrapping a major assembly instead of
triaging for rework can be a million dollar mistake. This typically requires extensive knowledge (tribal knowledge)
and experience. Enabling systems to complement and augment this tribal knowledge is critical for improved decision making.

Modern quality systems need to span across operators, supervisors, quality engineers, design engineers,
and more to enable a true total house of quality.

Here's a big example: Boeing's Global Supply Chain
![Boeing Global Supply Chain](../blog_images/why-is-aerospace-defense-mfg-hard/boeing.png)

[Source](http://787updates.newairplane.com/787-Suppliers/World-Class-Supplier-Quality#:~:text=The%20787%20Dreamliner%20has%20about,supplier%20partners%20around%20the%20world.)


The amount of complexity to not only build the 787 but also to manage compliance of quality of all these
suppliers and in-house manufacturing creates quite the task.

## 5. Bridging the Knowledge Gap: From Shop Floor to Engineering Office

One of the most valuable but often underutilized resources in aerospace and defense manufacturing
is the knowledge of frontline operators. These team members possess critical insights about manufacturability
and assembly challenges that can significantly improve product design. Yet, too often, this knowledge remains trapped on the shop floor.

Digital platforms are changing this dynamic by creating structured channels for knowledge sharing.
Imagine an operator noticing a recurring issue with a particular component. Instead of this insight being
lost in daily operations, they can document it through a digital platform, complete with photos and measurements.
This feedback flows directly to engineering teams, who can use it to improve future designs. This continuous feedback
loop is accelerating true Design for Manufacturing (DFM) and Design for Assembly (DFA) practices.

Why does this matter so much? There's a much bigger value creation opportunity when you address issues earlier in the value chain.
* Manufacturing: There's a theoretical limit to how productive an assembly line can be; OEE can only go so high.
* (Before Manufacturing) Supply Chain: There's a potentially bigger value proposition in understanding bigger questions around where to make parts, what to make vs. buy from suppliers, which suppliers to buy from.
* (Before Supply Chain) Engineering: There's an even bigger value proposition with first examining how to design parts and assemblies in a more cost effective way to reduce waste at the design level. Design for Manufacturability studies (DFM) and Design for Assembly (DFA) studies are often overlooked because it requires close collaboration across Engineering, Supply Chain, and Manufacturing, but there's lots of value waiting.


As a summary framework, PwC's ISSR (Inherent, Structural, Systemic, Structural, and Realized) framework highlights how moving up the value chain
can open up new opportunities for bigger value creation.

![ISSR Framework](../blog_images/why-is-aerospace-defense-mfg-hard/issr.png)
[Source](https://www.strategyand.pwc.com/us/en/reports/2007-2014/design-for-affordability.pdf)

## Conclusion

The key is finding the right balance between technological solutions and human expertise. Digital tools
should enhance, not replace, the critical knowledge and skills of frontline teams.

Consider the future of aerospace and defense manufacturing: operators equipped with the right systems and apps and tools
to identify potential issues before they become problems, and engineers receiving real-time feedback from the shop floor about design improvements.

The journey won't be easy, but the rewards are significant: improved operational efficiency, enhanced quality
and compliance, reduced costs, accelerated innovation, and, most importantly, an empowered workforce.
`,
};