import { BlogPost } from "@/utils/markdown";

export const post: BlogPost = {
  id: "1",
  title: "Plant Visits: What do you look for?",
  slug: "plant-visits-what-to-look-for",
  date: "2024-05-23",
  excerpt: "How to quickly perform an operational assessment in any factory.",
  coverImage: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9",
  tags: ["lean", "operations", "strategy"],
  content: `
# Plant Visits: What do you look for?
### How to quickly perform an operational assessment in any factory

My wife is a doctor and typically spends 30 minutes on an annual wellness exam for her patients. 30 minutes is not a lot of time to cover a patient's entire medical history for the past year. Similarly, plant visits in operations present the challenge of quickly understanding a factory from start to finish, identifying pain points, prioritizing them, and understanding the value opportunity for improvement. It can be a lot to unpack, but I'll walk through some basic frameworks.

It's vital to know what to look for when walking around a factory of any kind; there are telltale signs of waste (Defects, Excess Processing, Overproduction, Waiting, Inventory, Transportation, Motion, and Non-Utilized Talent).

Here are seven categories I love to explore:

1. Clarity of Purpose and End Customer Engagement
2. Lean Excellence
3. Scheduling Execution
4. People Engagement
5. Equipment Management and Maintenance
6. Quality Rigor and Process
7. Inventory and Material Flow

### Clarity of Purpose and End Customer Engagement
The plant manager and executive team may know the overall annual targets for the factory or broader business unit. The sales team may know the major customers and quality ratings. However, does everyone else? Do the machinists understand the bigger picture? Do the assemblers understand their customer base and take pride in their quality?

These questions are not only a litmus test for culture but for understanding alignment of vision. Is the leader's vision for the operation communicated to the entire operation? This can have a dramatic effect on overall customer satisfaction. Some potential ways to understand this are seeing if major customers are displayed and identified by name and if quality standards are well known and displayed across the factory or if they're only known by the inspection department and warranty teams.

### Lean Excellence
Lean Excellence means a lot more than a "5S" banner hanging from the rafters of a factory. This can broadly include the usage of lean value streams, appropriate lean methods (Heijunka scheduling, kanban, etc.), visual management in cells (e.g., SQDC boards or digital equivalents), as well as overall shop floor organization and cleanliness.

To get a pulse check on a company's overall adoption of lean, you can use the following quick questions and observations to understand immediate pain points and growth opportunities:

Are all locations labeled and include a barcode/QR code? This plays a big role in inventory accuracy and proper material flow.
How easy is it to understand if a given line or cell is ahead or behind their goal? Could a visitor easily understand the cell or line's performance? This provides a glimpse of visual management and tiered daily accountability.
Are meetings structured at three levels of operations? Is there evidence of a cell-level daily standup, a function-level meeting, and an executive plant meeting where issues can escalate across these three levels? This provides a perspective on how issues identified by operators are escalated to leaders; without this, problems can persist.
How much trash is on the floor? This admittedly sounds really basic, but it can be a telltale sign of how mature the company is in terms of shop floor cleanliness. Cardboard may seem like a minor issue, but before long, a messy shop floor can create quality issues, poor organization, and more.

### Scheduling Execution
It's important to note: you're not trying to assess the complexity of the scheduling process and execution but rather the simplicity of it. If it requires several optimizations and level-loading to create an optimal schedule for an operation, there are probably deeper issues and unidentified bottlenecks.

Here are some basic observations and questions to ask:

Do most production lines run off of a single pace? Or, does each cell act like an individual silo?
Is the schedule and the attainment of the schedule visible on the shop floor?
Is a pull system leveraged from customer demand to create a schedule?
These issues can help clarify if there is a scheduling problem or a broader process problem on the shop floor.

### People Engagement
The most important asset in a factory isn't a bank of multi-axis CNC machines, but its people. When identifying improvement opportunities and pain points, it's important to keep in mind that if the company lacks overall people engagement, championing buy-in and change management for new initiatives will be very difficult.

Are frontline employees cross-trained on a variety of cells and work areas?
Are there cross-functional teams that have routine Kaizen events to improve the process?
Does the company invest in its people?
Some of these questions are obviously hard to gauge from walking the shop floor and probably still difficult to gauge during an interview. Looking for any artifacts on past Kaizens or a cross-training board will sometimes clue you in on overall people engagement on the shop floor.

### Equipment Management and Maintenance
This category extends beyond just equipment maintenance and into the broader view of how capital decisions are made, how equipment is managed and maintained, how maintenance programs are executed, and how flexible the plant is to reconfigure assets and change the flow.

Similar to people engagement, some of these topics may be harder to identify on a quick shop walk, but here are some key identifiers:

Do assets have prominent maintenance schedules and startup checklists?
Are setup times standardized at the asset and product level?
Is there a clear and prominent preventative maintenance schedule? Is this schedule on a system (e.g., CMMS) or on paper/Excel?
Understanding the maturity of a company's use of capital will key you in on growth opportunities as well as potential risks of equipment breakdown.

### Quality Rigor and Process
At this point, it's a cliché to say, "Quality is everyone's responsibility", but as you walk around the shop floor, does it seem like the only people who care about the finished product are the quality inspectors and quality manager? Or, does everyone feel like a stakeholder of the outcomes of the products the company is producing?

On a technical side, is there any evidence of process capability (cPk, etc.) being performed for parts? Or, is the inspection process and analysis somewhat lax? Are there examples of scrap processes being followed? Are parts that require inspection quarantined in a specific location to avoid confusion with approved parts?

It's also important to understand the integration of quality with other systems. Is the quality inspection process integrated with systems of record (ERP, QMS, PLM), or is it a standalone process on Excel?

### Inventory and Material Flow
Simply put, the more forklifts you see, the worse the material flow is. Similar to scheduling, complex material flows point to deeper problems. When material flows are a complex web of forklifts, tuggers, and more, there is a deeper value stream mapping opportunity for improvements beyond a few percentage points of operational efficiency.

Inventory turns can be a critical metric for working capital efficiency; understanding areas of excess inventory, shortages, and a lack of standardization around material movement can pinpoint an opportunity to improve material flow.

Some key questions and observations to make for inventory and material flow may include asking if finished products have been categorized by volume and variability (e.g., standard ABC-XYZ analysis); this provides a perspective on how serious the company analyzes inventory and downstream impacts.

### Operational Maturity Assessment Recap
There are plenty of assessment guides with detailed questions and framing to understand the level of maturity for each of these seven sections. It's also important to understand not only which areas are worse and which areas are best on this operational assessment, but also which areas have the highest potential for creating value. What pain points contain low-hanging fruit for immediate improvement? Coalescing these qualitative pain points into a prioritized list of improvement opportunities can be key for understanding the opportunity to improve operations.

There are also many other frameworks out there too; one of my favorites is the classic Harvard Business Review's "Read a Plant Fast: Rapid Plant Assessment."

[Read a Plant-Fast](https://hbr.org/2002/05/read-a-plant-fast?source=post_page-----b886fa0fd677---------------------------------------)
`,
};
