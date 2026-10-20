export interface PostSection {
  heading?: string;
  paragraphs: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  sections: PostSection[];
}

export const posts: Post[] = [
  {
    slug: "baa-baba-ais-the-domestic-content-rules-engineers-need-to-know",
    title: "BAA, BABA, and AIS: The Domestic Content Rules Engineers Need to Know",
    excerpt:
      "Federal domestic content standards have multiplied. Three of them now govern most flange, valve, and fitting work on federally funded or federally procured projects. Buy American, Build America Buy America, and American Iron and Steel each have different triggers, different scopes, and different documentation. Getting them straight is now part of the spec engineer's job.",
    category: "Compliance",
    date: "2026-04-22",
    readTime: "11 min read",
    sections: [
      {
        paragraphs: [
          "Ten years ago, the domestic content question on a federal pipe and flange order was usually straightforward: was it Buy American Act eligible, yes or no. The Buy American Act of 1933 governed most federal procurement, the manufacturer signed a certification, and the order shipped. Today the question is harder. Three distinct domestic content standards now appear on federal-adjacent project specifications, each with different triggers, different scopes, and different documentation requirements. Engineers and buyers who treat them as interchangeable get tripped up at submittal review.",
          "This walks through what each standard actually requires, where it applies, and how the documentation differs. The short version: BAA is the original direct-procurement standard with a domestic-manufacture requirement. BABA is the newer infrastructure-funding standard that demands domestic melt all the way through final fabrication. AIS is functionally identical to BABA on iron and steel but applies to EPA State Revolving Fund and USDA Rural Development water projects. Knowing which one applies to a given project is the first step. Knowing how to document compliance is the second."
        ]
      },
      {
        heading: "Buy American Act (BAA)",
        paragraphs: [
          "The Buy American Act of 1933 applies to direct federal procurement. If a federal agency is purchasing goods for its own use under contract, BAA is the controlling standard. The Federal Acquisition Regulation (FAR) Part 25 implements BAA in federal contracts and is the source of the contract clause language that flows down to the supplier. The trigger is direct federal procurement, not federal funding flowing to a non-federal entity.",
          "For iron and steel products like flanges, fittings, and valves, BAA requires that the product be manufactured in the United States. The interpretation is that the final manufacturing process must occur on US soil. A forged flange must be forged and machined domestically. Component melt origin is not always required by BAA on its own, although project-specific overlays may add a melt requirement. Cost share rules also apply: the value of US-sourced components must exceed a threshold percentage of total cost. The Biden administration raised that threshold in 2022 and the trend is upward.",
          "The most common documentation for BAA compliance is a manufacturer certification. A short written statement from the manufacturer confirms domestic manufacture, references the contract clause, and accompanies the order. For higher-stakes projects, the documentation expands to include mill test reports, component origin statements, and a project-specific compliance letter. BAA waivers exist for unavailability, unreasonable cost, and public interest, but they are project-specific, time-bounded, and not assumed in advance."
        ]
      },
      {
        heading: "Build America Buy America (BABA)",
        paragraphs: [
          "Build America Buy America was enacted in November 2021 as part of the Infrastructure Investment and Jobs Act. It applies to federal financial assistance for infrastructure projects. The triggering condition is federal funding flowing to a non-federal entity, regardless of who the direct purchaser is. A state DOT spending federal-aid highway dollars on a bridge is subject to BABA. A water utility receiving an EPA grant is subject to BABA on the iron and steel portions of the project even though the EPA is not the direct purchaser.",
          "Infrastructure under BABA is defined broadly. Roads, bridges, transit, rail, ports, airports, water, wastewater, broadband, electrical transmission, drinking water systems, and structures supporting all of those are covered. The Office of Management and Budget issued initial guidance in April 2022 and individual federal agencies have published implementing rules with specific scope and waiver procedures.",
          "For iron and steel products, BABA imposes a stricter manufacturing standard than BAA. All manufacturing processes from the initial melt through final fabrication must occur in the United States. A flange forged domestically from foreign-melted steel meets BAA but not BABA. The mill test report must show that the heat was melted at a domestic mill, with the mill name and location on the certificate. The supplier's certification must confirm that no manufacturing step occurred outside the United States.",
          "BABA documentation typically includes the MTR with domestic melt verification, a manufacturer certification, and a project-specific compliance letter referencing the funding source and the federal agency implementation. Waivers under BABA mirror the BAA waiver framework but the bar is generally high, especially for standard size iron and steel products where domestic supply is well established."
        ]
      },
      {
        heading: "American Iron and Steel (AIS)",
        paragraphs: [
          "AIS predates BABA. It was first enacted in the EPA Clean Water State Revolving Fund through the FY2014 appropriation and has been re-authorized continuously since. The provision applies to projects funded through the Clean Water State Revolving Fund (CWSRF) and the Drinking Water State Revolving Fund (DWSRF). USDA Rural Development water and wastewater programs carry parallel AIS language with the same standard.",
          "Functionally, AIS is identical to BABA for iron and steel products. All manufacturing processes from initial melt through final fabrication must occur in the United States. The documentation chain runs from the mill heat lot through coating and final assembly. The supplier provides an AIS step certification in the EPA-standard format, the mill test reports with domestic melt verification, and a project-specific compliance letter referencing the SRF program and project number.",
          "Where AIS differs from BABA is in the historical depth of implementation and the program-specific guidance. EPA has issued detailed technical guidance on AIS scope, including coatings and linings applied at the manufacturing plant. State Revolving Fund administrators issue project-level guidance and review submittals. The standard is mature, the submittal templates are established, and the supply chain knows how to deliver."
        ]
      },
      {
        heading: "Which Standard Applies When",
        paragraphs: [
          "Funding source drives the standard. A direct federal agency purchase is BAA. A federally funded state or local infrastructure project is BABA. A federally funded SRF water project is AIS. Some projects carry overlapping requirements where multiple federal funding streams converge on a single procurement. In those cases the most restrictive standard governs, which usually means BABA or AIS prevails over BAA for the iron and steel scope.",
          "Project specifications should name the applicable standard explicitly. When they do not, the contracting officer or project owner can confirm. Federal-aid highway contracts under the Federal Highway Administration usually invoke BABA. EPA SRF water contracts usually invoke AIS. GSA direct procurement usually invokes BAA. The funding source is the indicator. Quoting against the wrong standard means the order ships without the correct documentation and the submittal gets rejected at project review.",
          "There is also legacy ARRA language that occasionally appears on older project documents or on procurement language that was templated from older specifications. The American Recovery and Reinvestment Act of 2009 created a Buy American provision for stimulus-funded projects that was effectively a precursor to BABA. The ARRA provisions are mostly retired on new work, but the spec language sometimes lingers. When ARRA language appears on a current project, confirm with the project office whether the actual requirement is ARRA or one of the current standards."
        ]
      },
      {
        heading: "Documentation Differences",
        paragraphs: [
          "The documentation package differs by standard. BAA orders typically need a manufacturer certification and an MTR. BABA orders need the MTR with explicit domestic melt verification, the manufacturer certification confirming all manufacturing in the United States, and a BABA-specific compliance letter. AIS orders need the AIS step certification in EPA format, the domestic-melt MTR, and a project-specific letter referencing the SRF program and the EPA technical guidance.",
          "For the manufacturer certification, the language matters. A BAA certification says the product was manufactured in the United States. A BABA or AIS certification says all manufacturing processes including the initial melt occurred in the United States. The two sentences are not interchangeable. A supplier that issues a BAA certification on a BABA-funded project has not certified to the correct standard. The submittal will be rejected even if the underlying product happens to qualify.",
          "Heat lot segregation is another practical difference. For BAA, any qualifying domestic-manufactured product can ship. For BABA and AIS, the supplier must pull from confirmed domestic-melt heat lots and keep the documentation chain unbroken through fabrication and shipping. Mixed-source inventory is the failure mode here. A supplier that does not segregate domestic-melt material from foreign-melted material risks shipping the wrong heat lot against a compliance order. That is why purpose-built compliance suppliers operate with separate inventory tracks for federal projects."
        ]
      },
      {
        heading: "Practical Spec-Writing Takeaways",
        paragraphs: [
          "Identify the funding source before writing the domestic content clause. Direct federal procurement is BAA. Federal infrastructure funding is BABA. EPA SRF or USDA Rural Development water funding is AIS. Write the clause to the standard the funding source actually requires. Generic 'domestic preference' language without naming the standard creates ambiguity that supplier quotes will price against the loosest interpretation.",
          "Spell out the documentation deliverables in the purchase order. MTR with domestic melt verification, manufacturer certification with the correct standard language, compliance letter referencing the project and funding source. If the project requires AIS step certification in the EPA standard format, say so. If the project office wants the submittal in a specific template, send the template with the order.",
          "Confirm component-level scope. BABA and AIS apply to iron and steel products that are permanently incorporated into the project. Subcomponents matter where the project specifies. A flange assembly may include studs, nuts, and gaskets that are separate procurement items with separate compliance scopes. Engineering specifications that quietly assume all bolt-up hardware ships compliant with the flange order are setting up a paperwork miss at submittal time. Specify each component and its compliance scope on the BOM."
        ]
      }
    ]
  },
  {
    slug: "domestic-melt-vs-domestic-manufacture-why-the-distinction-matters",
    title: "Domestic Melt vs Domestic Manufacture: Why the Distinction Matters",
    excerpt:
      "On a Buy American Act order, domestic manufacture is the bar. On Build America Buy America and American Iron and Steel, the bar moves back to the melt. That one-word change rewrites the supply chain, the documentation, and the inventory practice for compliant pipe and flange supply. A close look at what the distinction actually means in practice.",
    category: "Compliance",
    date: "2026-04-08",
    readTime: "10 min read",
    sections: [
      {
        paragraphs: [
          "Federal domestic content rules for iron and steel products have grown teeth over the last few years. The Buy American Act has been on the books since 1933 and the requirement most engineers were trained around. Then in 2021 the Build America Buy America Act introduced a stricter standard, and the American Iron and Steel provisions that already governed EPA State Revolving Fund water projects came into sharper focus. Underneath all three is a deceptively simple difference: where the melt has to happen.",
          "Domestic manufacture and domestic melt sound like synonyms in everyday language. In federal compliance language they describe two very different supply chains. Domestic manufacture means the final manufacturing step occurs in the United States. Domestic melt means the steel itself was poured at a domestic mill, before any forging or rolling or machining took place. The first standard is satisfied by a US-based forging shop working from imported billet. The second is not. This walks through what the distinction actually requires, where it shows up on project specifications, and how the supply chain handles the two standards differently."
        ]
      },
      {
        heading: "The Original Buy American Act Standard",
        paragraphs: [
          "The Buy American Act, enacted in 1933, applies to direct federal government procurement. The Federal Acquisition Regulation Part 25 implements it for contracting purposes. For iron and steel products, BAA requires that the product be manufactured in the United States. The traditional interpretation is that the final substantial manufacturing process must occur on US soil. For a forged steel flange, that means the forging and machining operations happen domestically.",
          "Under BAA, the melt origin of the steel is generally not controlling. A flange forged in Pennsylvania from billet that was melted in Brazil meets the BAA manufacturing test as long as the forging itself occurred in the United States and the cost share rules are met. The documentation is a manufacturer certification stating that the product was manufactured domestically. The MTR may show foreign melt without disqualifying the order under BAA alone.",
          "This is not to say melt origin never matters under BAA. Project-specific overlays can require domestic melt as a contract-specific addition. Some agencies layer melt requirements on top of the BAA baseline for sensitive applications. But the BAA baseline itself does not require domestic melt for iron and steel. The supply chain has historically operated on this basis, with domestic-finished products built from a mix of domestic and imported feedstock."
        ]
      },
      {
        heading: "Where BABA and AIS Move the Bar",
        paragraphs: [
          "Build America Buy America (2021) and American Iron and Steel (in effect since 2014 for EPA SRF) shift the standard. For iron and steel products, both standards require that all manufacturing processes including the initial melt occur in the United States. The melt is the beginning of the steel's life as a product, and BABA and AIS treat it as part of the manufacturing chain that must remain domestic.",
          "In practical terms, a flange forged domestically from foreign-melted billet does not qualify under BABA or AIS. A ductile iron pipe cast domestically from imported pig iron does not qualify. A welded steel pipe rolled domestically from imported skelp does not qualify. The melt has to happen at a domestic mill, and the mill test report has to document that origin with the mill name and location on the certificate.",
          "The reasoning is policy-driven. Federal infrastructure spending under BABA and federal water program spending under AIS is intended to support American steelmaking capacity, not just American downstream fabrication. Limiting compliance to domestic manufacture without requiring domestic melt would allow federal projects to fund downstream jobs while feeding foreign mills upstream. The melt requirement closes that loop."
        ]
      },
      {
        heading: "What the Documentation Looks Like",
        paragraphs: [
          "The documentation chain for BAA compliance is short. A manufacturer certification stating that the iron or steel product was manufactured in the United States, an MTR showing chemistry and mechanical properties, and any project-specific letter the contract requires. The MTR does not need to call out melt origin for BAA purposes, although it usually does as a matter of standard mill certificate practice.",
          "The BABA and AIS documentation chain is longer because the melt origin has to be explicitly documented. The MTR shows the mill name and location where the heat was poured. The manufacturer certification states that all manufacturing processes including the initial melt occurred in the United States. The compliance letter references the funding source, the project number, and confirms that the supplied lot meets the controlling federal standard.",
          "For AIS specifically, the EPA standard step certification format is the expected deliverable. It is a short form that lists the manufacturer, the product, the project, the SRF program, and the certification language. It typically gets stamped or counter-signed depending on the state SRF administrator's requirement. The submittal package goes to the project office for review before the product is paid for."
        ]
      },
      {
        heading: "Heat Lot Segregation",
        paragraphs: [
          "A supplier that handles a mix of compliance levels has to segregate inventory. Heat lots confirmed as domestic melt are tracked separately from any inventory that may include foreign-melted material. When a BABA or AIS order comes in, the supplier pulls from the domestic-melt track and documents the chain. When a BAA order comes in, either track can be used as long as the product was manufactured domestically.",
          "Segregation matters because the failure mode is silent. A flange forged from an imported heat looks identical to a flange forged from a domestic heat. The MTR is the only place the origin is documented. A supplier who does not segregate risks shipping the wrong heat lot against a compliance order. The project office may not catch the mistake at receiving inspection because the product is dimensionally correct and the basic chemistry checks out. The mistake gets caught later, often at submittal review or at audit, and the project either has to obtain a waiver or replace the product.",
          "Domestic-melt heat lots are also a planning constraint. Domestic mills do not melt every grade every week. Specialty alloy grades, low-sulfur heats, and supplementary-tested heats may have longer melt-to-availability cycles than commodity carbon grades. A BABA or AIS project that requires a specific chrome-moly grade may have to schedule against a future melt rather than pull from current inventory. The lead time math is different than for general BAA service."
        ]
      },
      {
        heading: "Why It Matters on Day One of the Order",
        paragraphs: [
          "Engineers and buyers writing the original purchase order set the compliance scope. If the order calls 'BAA compliant' on a BABA-funded project, the order may ship product that is forged domestically from imported melt. The product meets BAA but not BABA. The project office rejects the submittal. The order has to be redone with domestic melt or a waiver has to be pursued. Either path costs schedule and probably costs money.",
          "The fix is precise language at order entry. Name the funding source. Name the controlling standard. Specify the documentation deliverables. If BABA is the standard, say so. If AIS is the standard, say so and reference the SRF program. If the spec is ambiguous, ask the project office. Suppliers that handle compliance work as a routine part of their business will read the order, identify the applicable standard, and quote against the correct compliance scope. Suppliers that treat domestic content as an afterthought will often default to the loosest interpretation and ship product that disqualifies at submittal.",
          "The other reason to get this right early is heat lot planning. A BABA or AIS order placed today may need a heat lot that the mill will pour next month. The supplier needs that visibility at quote time to commit to a delivery date. An order that arrives with full compliance scope spelled out gets a realistic lead time. An order that arrives with vague language gets a generic lead time that may slip when the actual compliance scope is identified later. Send the funding source with the inquiry."
        ]
      },
      {
        heading: "The Practical Shorthand",
        paragraphs: [
          "BAA equals domestic manufacture. The forging or rolling happens in the United States. Melt origin not controlling. Cost share applies. Manufacturer certification documents compliance.",
          "BABA equals domestic melt through final manufacture. Every step including the initial melt happens in the United States. MTR documents melt origin with mill name and location. Manufacturer certification confirms all-domestic manufacturing chain. Compliance letter references the project funding source.",
          "AIS equals same standard as BABA for iron and steel, applied to EPA Clean Water and Drinking Water SRF projects and USDA Rural Development water programs. EPA step certification in standard format. Project-specific compliance letter.",
          "Confirm the funding source on the project, write the order to the standard that funding triggers, segregate inventory for BABA and AIS, and document the chain end to end. Call (281) 484-8325 or send the project spec to sales@texasflange.com and we will confirm which compliance scope the order needs before it ships.",
          "One more practical note for projects that span multiple compliance regimes. A federal building campus may have GSA direct procurement under BAA running in parallel with an EPA-funded water infrastructure piece under AIS and a federal-aid highway tie-in under BABA. The three pieces of the project will need three different documentation packages, and the supply chain has to track each one separately. Trying to consolidate the procurement into a single BAA-style certification across the whole project will fail submittal on the BABA and AIS portions. Spec the compliance scope per work breakdown structure, not per project, and the documentation flows correctly from the start."
        ]
      }
    ]
  },
  {
    slug: "api-6a-flanges-a-practical-spec-guide-for-pipeline-and-wellhead-service",
    title: "API 6A Flanges: A Practical Spec Guide for Pipeline and Wellhead Service",
    excerpt:
      "ASME B16.5 tops out around 2500 PSI working pressure. API 6A starts there and runs to 25000. A walk through the dimensional family, the pressure classes, the material classes, and the ring gasket logic that makes 6A flanges work in wellhead, christmas tree, and high pressure pipeline service.",
    category: "Standards",
    date: "2026-03-25",
    readTime: "12 min read",
    sections: [
      {
        paragraphs: [
          "Most plant flange work happens inside the ASME B16.5 envelope. Class 150 through Class 2500. A105 carbon for general service. F316L stainless for corrosion service. Chrome-moly for hot service. Within those bounds, B16.5 is the workhorse of industrial pipe flange supply. But oil and gas service has another envelope above the top of B16.5, where API 6A and API 6BX govern the pressure-control fittings that handle wellhead, christmas tree, and high-pressure pipeline service. Spec engineers who only work inside B16.5 sometimes get tripped up when an upstream or midstream project drops API 6A flanges into the BOM. This is the practical guide.",
          "The short version: API 6A flanges look superficially like ASME B16.5 flanges, with similar dimensional families and similar bolt patterns at the lower pressure classes. But the metallurgical requirements, the ring gasket geometry, and the pressure rating envelope are different. Substituting a B16.5 flange where the spec calls API 6A is not a cost optimization; it is a compliance failure that will not pass dimensional or pressure verification at hookup. This walks through what API 6A actually is, the pressure classes and their applications, the ring gasket logic, and how to read the standard at the order stage."
        ]
      },
      {
        heading: "What API 6A Covers",
        paragraphs: [
          "API Specification 6A, 'Wellhead and Christmas Tree Equipment,' is the dimensional and metallurgical standard for surface and subsurface pressure-control equipment in oil and gas service. The standard covers casing heads, tubing heads, christmas trees, and the flanges, studs, and ring gaskets that connect them. It also covers blowout preventer top flanges and the high-pressure flowline service immediately downstream of the wellhead.",
          "The 6A standard's flange family runs in working pressure classes designated by a thousand-PSI rating: 2M, 3M, 5M for the 6B series, and 10M, 15M, 20M, 25M for the 6BX series. The 'M' stands for thousand, so 2M is 2000 PSI working pressure. The 6B and 6BX designators refer to the ring gasket family used at each pressure level: 6B uses R-series rings (oval or octagonal), 6BX uses BX-series rings with self-energizing geometry for higher pressure.",
          "API 6A flanges are dimensionally close to ASME B16.5 at the 2M class, where the bolt circle and bolt count compare to B16.5 Class 600. Above 5M, the dimensional family diverges sharply. A 10M or 15M flange has a much larger raised face, a deeper ring groove, and a heavier flange thickness than any B16.5 flange. Above 10M the standard moves to BX-class ring grooves entirely."
        ]
      },
      {
        heading: "The Material Classes",
        paragraphs: [
          "API 6A defines material classes that combine chemistry and heat-treatment with environmental service rating. The material class system is unique to the standard and engineers familiar only with ASTM material grades sometimes find it counterintuitive. The classes are AA, BB, CC, DD, EE, FF, and HH, each rated for a different service environment combination.",
          "Class AA and BB cover standard sweet service. The materials are typically AISI 4140 or AISI 4130 alloy steel with normalize-and-temper or quench-and-temper heat treatment to achieve the strength required at the working pressure. AA is general service; BB is general service with charpy impact testing for cold-weather suitability.",
          "Class CC and DD add NACE MR0175 sour service compliance. The hardness limits drop, the heat treatment is tightly controlled, and the chemistry has additional restrictions. CC is standard sour service. DD adds low-temperature impact requirements. For wellhead service in fields with measurable H2S, CC or DD is the typical minimum.",
          "Class EE, FF, and HH add additional severe-service requirements. EE is for sour service plus low temperature plus higher-strength material. FF adds an even more conservative hardness limit. HH is the most restrictive class, covering sour service at the lowest temperatures with the most conservative chemistry. The class designation appears on the MTR and the manufacturer certification."
        ]
      },
      {
        heading: "Ring Gaskets: R vs BX",
        paragraphs: [
          "API 6A ring gaskets come in two main families. R-series rings (sometimes written as R-x where x is a numeric designator) are the older family, used on 2M through 5M class flanges. The R rings are solid metal rings, typically soft iron, low-carbon steel, F5 chrome-moly, F304 stainless, or F316 stainless depending on service. R rings come in oval and octagonal cross-section profiles, with the octagonal being more common in modern practice because it seats more reliably.",
          "BX-series rings (BX-150 through BX-303 and others) are the higher-pressure family, used on 10M and above. The BX cross-section is rectangular with relieved corners and a deliberate angle on the contact face that causes the ring to self-energize: pressure inside the flange assembly pushes the ring outward against the groove wall, increasing the seal force as pressure rises. This self-energizing geometry is what allows BX flanges to hold pressures that would extrude an R-ring assembly.",
          "Mating the wrong ring family to the flange is a service failure mode. A 10M flange machined for BX-152 will not seal with an R-37 ring. The contact geometry is wrong, the seating force is wrong, and the assembly will leak under pressure. The flange and the ring must be ordered together, and the project drawing or order specification should list both the flange ring groove designation and the matching ring gasket part number.",
          "Ring materials track service. Soft iron rings are the standard for sweet service. F5 chrome-moly rings handle moderate elevated temperature. F304 and F316 stainless rings cover stainless service and resist corrosion in standby and intermittent service. Inconel 718 and other nickel alloy rings appear in severe sour service and HPHT (high pressure high temperature) applications. Each ring material has different working pressure and temperature limits."
        ]
      },
      {
        heading: "Where 6A Flanges Live",
        paragraphs: [
          "Wellhead and christmas tree service is the primary 6A application. The wellhead is the surface termination of the well casing, with API 6A flanges and ring gaskets sealing each casing string. The christmas tree sits on top of the wellhead with valves and chokes that control flow. Frac trees for hydraulic fracturing service are a related 6A application, typically running at 10M or 15M pressure class for the highest pressure stimulation.",
          "Blowout preventer top flanges interface to API 6A. The BOP stack itself is also a 6A-related assembly. Choke and kill manifolds, used to circulate well kill fluid during well control operations, are 6A. The wellhead-to-pipeline transition often uses 6A flanges at the wellhead side and B16.5 flanges at the pipeline side, with a transition spool between the two.",
          "Surface flowlines downstream of the choke manifold in high-pressure production service often stay in 6A flange territory through the first valves and pressure-reducing equipment, then drop into B16.5 once the working pressure falls below 2500 PSI. The transition point is project-specific and is usually managed through specified transition spools or pressure-reducing chokes.",
          "Some hot-tap and pipeline maintenance applications use 6A flanges for connections that operate above standard B16.5 ratings. In those cases the spec engineer should confirm whether the application warrants the 6A flange family or whether B16.5 Class 1500 or 2500 would cover the actual operating conditions with adequate margin."
        ]
      },
      {
        heading: "Documentation and Compliance",
        paragraphs: [
          "API 6A documentation requirements are stricter than ASME B16.5. The MTR must include the material class designation, the chemistry within the class limits, the mechanical properties including charpy impact at the required temperature, and the heat treatment record. Hardness mapping is mandatory for sour service classes (CC and above). NDE requirements vary by class and include ultrasonic testing and magnetic particle or liquid penetrant testing on machined surfaces.",
          "Monogramming applies to API 6A flanges manufactured under API licensee programs. The API monogram on the flange body confirms that the manufacturer is licensed to produce 6A equipment, follows API quality requirements, and is subject to API audit. The monogram is a quick visual confirmation at receiving inspection. Non-monogrammed product can still be 6A-conformant but lacks the third-party validation that the monogram represents.",
          "For domestic content compliance, API 6A flanges produced under BAA, BABA, or AIS programs follow the same chain-of-traceability rules as ASME flanges. Domestic melt mills capable of pouring the API 6A alloy grades are a subset of the broader US steel industry. Lead times on BABA-compliant 6A material may run longer than on commercial 6A material because the heat lot scheduling is tighter. Plan accordingly when the project specification combines API 6A pressure class with federal domestic content requirements."
        ]
      },
      {
        heading: "Practical Spec-Writing Notes",
        paragraphs: [
          "When specifying an API 6A flange, include the working pressure class (2M, 3M, 5M, 10M, 15M, 20M, 25M), the material class (AA, BB, CC, DD, EE, FF, HH), the bore size, the facing type (RTJ is the default; FX or other facings for specialty service), the ring groove designation (R-x or BX-x), and the matching ring gasket part number. Include any NDE requirements above the standard baseline. Include the API monogram requirement if the project specification requires monogrammed product.",
          "Confirm material class against actual service environment. The class system rewards precise matching: ordering a more restrictive class than service requires costs money and may slow delivery, while ordering a less restrictive class than service requires risks failure in service. The H2S partial pressure, the operating temperature range, and any reservoir-specific corrosion factors drive the class selection.",
          "Order the flange and the ring gasket together. Quote, confirm, and ship as a matched pair. A 6A flange without the correct ring gasket is an incomplete assembly. Send the spec, the working pressure, the service environment, and the funding source if federally affected, and we will quote the flange, the ring, and the documentation scope as a single package. Call (281) 484-8325 or email sales@texasflange.com."
        ]
      }
    ]
  }
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
