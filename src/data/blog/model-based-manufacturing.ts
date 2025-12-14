import { BlogPost } from "@/utils/markdown";

export const post: BlogPost = {
  id: "10",
  title: "Model-Based Systems Engineering Requires Model-BasedManufacturing",
  slug: "model-based-manufacturing",
  date: "2025-12-13",
  excerpt: "Model-based systems engineering requires model-based manufacturing to fulfill the system double-v",
  coverImage: "https://images.unsplash.com/photo-1712179355181-cd9add37f76a",
  tags: ["systems engineering"],
  content: `
# Why Model-Based Engineering Must Integrate with Manufacturing to Fulfill the System Double-V

Model-Based Engineering (MBE) promised a shift in how complex systems (like Aerospace & Defense)
are designed, validated, and evolved. Instead of documents and disconnected paper trails,
models become the authoritative source of system intent across the lifecycle.

But there is a problem: In most organizations, MBE still stops with design engineers.
Manufacturing and operations live downstream and are loosely connected through handoffs,
emails, and tribal knowledge. As a result, the industry talks
about *digital threads* and *digital twins*—yet struggles to link **as-designed
intent** with **as-built reality** in an operational way.

![systems_v](../blog_images/model-based-manufacturing/systems_v.png)

To live up to the hype of the **system double-V**, MBE must extend beyond
design models and integrate directly with how products are manufactured,
verified, and improved. Manufacturing is inherently messy, so this isn't easy.

---
## The System Double-V Is Incomplete Without Manufacturing

The traditional V-model pairs requirements and architecture with
verification and validation. Model-based approaches add a second,
virtual V: digital representations that mirror physical systems
across development and operation.

![systems_v](../blog_images/model-based-manufacturing/mbe-diamond.png)

In theory, this creates symmetry not only between design and delivery
but also between physical processes and systems and simulated processes and systems:

* virtual design ↔ physical build
* modeled behavior ↔ observed performance
* requirements ↔ verification evidence

Obviously, this symmetry starts to breakdown around manufacturing.

Engineering models describe what *should* happen. Manufacturing
systems deal with what *does* happen. When these worlds are
disconnected, the “right side” of the V becomes a patchwork of
spreadsheets, MES logs, and manual sign-offs. After all the investment
in model-based systems for engineers, fails can occur from a single paper process
on the shop floor. Without a feedback loop, it's hard to systematically provide guidance
or improvement opportunities to the design team.

The result is a double-V that looks complete on slides but collapses in execution.

---

## SysML v2 Raises the Stakes

SysML v2 represents a meaningful evolution in systems modeling:

* richer semantics
* more formal constraint definition
* improved interoperability
* APIs designed for automation, not just visualization

Most importantly, SysML v2 enables modeling at the **system-of-systems**
level. Manufacturing, logistics, quality, and operations can now be
represented not as downstream processes, but as systems with structure,
behavior, and constraints of their own.

Once manufacturing is modeled as a system, the question is no
longer *whether* it should integrate with MBE—but *how* that integration
happens technically and organizationally. Now that manufacturing has a seat
at the system of systems table, it's vital to understand how to properly integrate
it with the rest of the system. 

Gaps can include:
* poorly documented processes
* lack of APIs for representing manufacturing processes
* stark distinctions between the simulated factory with how it actually runs

---

## Open vs. Closed Manufacturing Systems

As MBE pushes closer to execution, organizations will need to rethink
manufacturing systems especially in light of open architecture and composable approaches.
These aren't new buzzwords; the same transformation that occurred in engineering
now needs to occur in manufacturing.

The only difference is frequency of changes; design engineering may take
months to change a design; manufacturing may fine-tune operations processes daily.

Because of this, the need for open, composable systems that can iterate alongside
manufacturers is that much more important.

In this model, engineering systems do not “own” manufacturing
execution—and manufacturing systems do not hard-code engineering intent.
Instead, they **interoperate**.

This makes it possible to treat manufacturing as a *runtime
environment* for system models.

---

## From Static Models to Runtime Instantiation

The real opportunity in MBE + manufacturing integration is not perfect
automation. It is **runtime instantiation**.

Engineering models define:

* constraints
* sequences
* acceptance criteria

Manufacturing systems:

* instantiate those models in context
* allow human-in-the-loop adaptation
* capture evidence of what actually occurred

When built on open architectures, this enables:

* real-time verification against model intent
* traceability from requirement to execution evidence
* feedback loops where deviations inform future designs

Crucially, this approach accepts an uncomfortable truth:

> Factories are not deterministic systems.

They are environments filled with judgment calls,
exceptions, and local optimization. Any architecture that assumes
otherwise will fail at scale.

---

## Why Human Adaptation Is Not a Bug

One of the implicit assumptions in many model-driven narratives is
that variability is a problem to be eliminated.

In reality, variability is how production survives.

Open, composable systems acknowledge that:

* operators will adapt workflows
* engineers will refine processes mid-production
* constraints will evolve as learning accumulates

The goal is not to prevent all deviations with more top-down rules,
but to **make deviation visible,
structured, and traceable**—so it can improve both the model and the system.

Closed architectures tend to resist this. Open architectures are designed for it.

---

## Completing the Double-V

The system double-V only works when:

* **as-designed intent** flows into execution without losing meaning
* **as-built reality** flows back into models without losing context

That bidirectional flow cannot be achieved through monolithic systems alone. It requires:

* open interfaces
* composable execution layers
* acceptance of human-in-the-loop operation

SysML v2 strengthens the left side of the equation. Manufacturing
integration determines whether the right side ever catches up.

---

## Conclusion: MBE Needs an Execution Layer, Not Just Better Models

Model-Based Engineering is not failing because models are insufficient.
It falls short when models cannot survive contact with reality.

The next phase of MBE is not about richer abstractions—it is
about **architectures that allow models to be instantiated, tested,
adapted, and learned from in the real world**.

Open, composable manufacturing systems are not a nice-to-have. They
are the missing half of the system double-V.

Until engineering intent and manufacturing execution share a living,
bidirectional connection, the digital thread remains aspirational—and
the promise of MBE remains unfinished.
`,
};
