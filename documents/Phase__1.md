AgriConnect – Farmer Support & Supply Chain CRM
Phase: 1 — Problem Understanding & Industry Analysis
Status: Completed/In Progress (update as you proceed)
Owner: <Your Name>

Overview
Small farmers lack a centralized way to find buyers, enforce fair prices, track government schemes, and manage deliveries, leading to dependence on middlemen and lower profit margins.
AgriConnect is a Salesforce CRM for government departments and cooperatives that stores farmer profiles, crop details, expected yield, connects farmers with buyers, enforces government‑fixed prices, automates subsidy reminders, and provides dashboards for supply‑demand and compliance.

Objectives
Connect farmers directly with buyers to improve profit margins by removing middlemen.

Enforce government‑fixed prices for crops to eliminate bargaining losses and ensure compliance.

Automate reminders for government subsidy applications and scheme milestones.

Provide dashboards for officers to monitor crop yield forecasts, price compliance, and scheme reach.

Reduce manual paperwork and delays through digitized workflows and alerts.

Stakeholders & Access Assumptions
Farmers: Create crop listings with expected yield, view fixed prices, receive scheme and delivery alerts; access only own records.

Buyers (Retailers/Wholesalers): Submit purchase requests at fixed prices, track delivery status; cannot see competitors’ offers.

Government Officers: Oversee price compliance, approve subsidy applications, and monitor dashboards; org‑wide visibility with oversight privileges.

Cooperative Admin/Back Office: Ensure data quality, manage user access, and run operational reports.

System Admin/Developer: Configure objects, automation, validations, Apex, and deployments; full admin.

Business Processes
Current (as‑is)
Farmers rely on middlemen, prices fluctuate, and deals are negotiated without transparent controls.

Subsidy applications and reminders are manual, leading to missed deadlines and benefits.

Deliveries are loosely coordinated with limited status visibility for farmers and buyers.

Target (to‑be)
Farmer posts a Crop Listing with expected yield and location; CRM auto‑sets the government‑fixed price for the item.

Buyer submits a Purchase Request; CRM validates that the offer price is not below the fixed price and blocks non‑compliant deals.

Subsidy Application workflows trigger reminders and escalate pending approvals to officers.

Delivery Schedule is created with status updates; notifications are sent to both parties at each milestone.

Dashboards show supply vs demand, scheme coverage, yield forecasts, and price‑compliance trends.

Industry‑Specific Use Cases (and Salesforce mapping)
Fixed Price Enforcement: Validation Rules on Transactions prevent below‑rate offers; Approval Process can handle rare exceptions.

Buyer–Farmer Matching: Flows match buyers to crop listings by crop, location, and quantity; list views and quick actions assist assignment.

Subsidy Reminders: Scheduled/record‑triggered Flows send reminders and custom notifications before deadlines.

MSP/Price Updates: Scheduled jobs or admin actions update the Pricing Registry when government changes are announced.

Delivery Tracking: Delivery Schedule object with status field and notifications at dispatch/delivery checkpoints.

Officer Dashboards: Summary and matrix reports for price compliance rate, total yield by crop/region, and scheme application status.

Data Model Overview (initial draft)
Farmer (custom): Profile, location, land size, contact; parent for Crop.

Crop (custom): Crop type, season, expected yield, location; lookup to Farmer.

Buyer (custom): Organization type, regions served, crop preferences; related to Purchase Requests.

Pricing Registry (MSP/Fixed Price) (custom): Crop, region, effective date, fixed price; referenced by Transactions.

Government Scheme (custom): Scheme name, eligibility, deadlines; related to Subsidy Applications.

Subsidy Application (custom): Farmer, scheme, status, due dates; approvals and reminders.

Purchase Request/Transaction (custom): Buyer, crop listing, quantity, offer price, price validation result, status.

Delivery Schedule (custom): Transaction, vehicle/partner, dispatch/delivery timestamps, status, alerts.

Relationships: Farmer–Crop (lookup), Crop–Pricing Registry (lookup), Farmer–Subsidy Application (lookup), Buyer–Purchase Request (lookup), Transaction–Delivery (lookup), and junctions where many‑to‑many is needed.

Scope, Out‑of‑Scope & Constraints (Phase 1)
In Scope: Problem statement, stakeholder mapping, current→target process, initial use‑case list, and high‑level data model sketch.

Out of Scope (now): Detailed field catalog, page layouts, Flows/Apex implementation, and integrations; these are covered in later phases.

Constraints: Public GitHub repository for reviews, registered email used consistently, and content aligned to government price enforcement objective.

AppExchange Exploration (notes)
Consider SMS connectors for reminders and delivery alerts; shortlist options that support regional messaging.

Explore logistics or supply‑chain accelerators for delivery planning if needed later.

Note any integration points that would move to Phase 7 (e.g., price feeds, AgriStack APIs).

Risks & Assumptions
Risk: Inconsistent use of registered email in forms and repos can block mentor reviews.

Risk: Private repositories delay validation; repository must remain public for mentor access.

Assumption: Government‑fixed price data will be available to populate the Pricing Registry object for enforcement logic.

Definition of Done — Phase 1
Public GitHub repo contains this Phase_1.md and a clear README summarizing the project and phase statuses.

Stakeholders, processes, use‑cases, and initial data model are documented and consistent with objectives.

Slack update posted with repo link; program form submitted using the registered email and repo URL.

