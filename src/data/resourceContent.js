export const navigationItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'shared-norms', label: 'Shared Norms' },
  { id: 'shared-values', label: 'Shared Values' },
  { id: 'behaviors', label: 'Behaviors in Practice' },
  { id: 'questions', label: 'Questions for Consideration' },
  { id: 'related-resource', label: 'Related Leader Spotlight' },
]

export const norms = [
  {
    title: 'Share your ideas',
    paragraphs: [
      'Share suggestions, information, gaps, questions, or concerns as soon as they are noticed, even if they are incomplete or uncomfortable.',
      'Surfacing risks early and openly helps protect the project, the public, and one another. Team members may hold unique and useful knowledge, so the group should remain curious and remember what it is like not to know.',
    ],
  },
  { title: 'Assume good intent', paragraphs: ['Assume colleagues are acting in good faith. Seek to understand before judging, reacting, or escalating. Check context across roles and departments.'] },
  { title: 'Lean into discomfort', paragraphs: ['Do not avoid hard conversations. Lean into productive discomfort to prevent larger issues later.', 'Stay engaged in difficult conversations, speak up for what you need, clearly communicate requirements, and respect the outcome of the agreed decision-making process.'] },
  { title: 'Check for understanding', paragraphs: ['Confirm shared understanding before moving forward to reduce misalignment and rework.', 'Clarify decisions, assumptions, responsibilities, and next steps, especially when working across departments and roles.'] },
  { title: 'Stay engaged and flexible', paragraphs: ['Build in feedback loops to capture and reflect on how the team is working together during each phase of the project.', 'Adjust course as needed and confirm that the team is ready before moving to the next phase.'] },
  { title: 'Share sidebar discussions', paragraphs: ['Side conversations should feed back into the appropriate team discussion.', 'Summarize key outcomes, share them with the relevant group, and incorporate them into the formal decision-making process.'] },
  { title: 'Provide meeting transparency', paragraphs: ['Use agendas and minutes for all meetings. Make meeting materials available in a shared location before and after the meeting.', 'Capture topics raised outside the agenda in a formal parking lot so they can be revisited later.'] },
  { title: 'Use project templates', paragraphs: ['Check for and use existing standard project templates before creating new work products.'] },
  { title: 'Store project artifacts in a shared location', paragraphs: ['Store documents and other project artifacts in the agreed shared location. Avoid keeping official project files only on personal drives.'] },
  { title: 'Use the agreed decision-making process', paragraphs: ['Make decisions through the process established by the project team.', 'A consistent approach helps clarify decision rights, reduce confusion, and build confidence in the path forward.'] },
  { title: 'Streamline email communication', paragraphs: ['Use descriptive subject lines and clear prefixes to explain what recipients need to do.'], list: ['INQ: A short inquiry that requires input.', 'ACT: A task or action is required.', 'FYI: Information for awareness or review.'], afterList: 'Share links to centrally stored documents rather than attaching separate copies whenever possible.' },
  { title: 'Follow established vendor communication paths', paragraphs: ['Use scheduled meetings and established relationship channels for vendor communication.', 'Make sure team members understand who the vendor contacts are and how questions, decisions, and issues should be routed.'] },
]

export const valueCards = [
  { title: 'Transparency', body: 'The purpose, progress, impacts, and decisions of the implementation are visible and understandable to the people affected.' },
  { title: 'Inclusion', body: 'Decision-making includes affected parties across the organization and follows the agreed process.' },
  { title: 'Completeness', body: 'New solutions meet project scope requirements. End users receive training and are prepared to stop using legacy systems and processes after implementation.' },
  { title: 'Standardization', body: 'Financial activities are performed consistently across departments. Processes that fall outside the primary system are treated as intentional exceptions.' },
  { title: 'Fiscal Responsibility', body: 'Proposed solutions meet financial, regulatory, timeliness, and compliance requirements.' },
  { title: 'Service', body: 'The implementation is guided by a commitment to serve staff, leadership, and the public by improving how financial work is performed.' },
]

export const behaviorCards = [
  { title: 'Integrity', looksLike: 'Risks and tradeoffs are documented, issues are raised early, and design decisions are traceable and defensible.', outcome: 'Decisions and actions are honest, ethical, and grounded in what best serves the municipality.' },
  { title: 'Stewardship', looksLike: 'Scope and budget are controlled, sustainable configurations are prioritized over excessive customization, and staff expertise is respected.', outcome: 'Public funds, staff time, and institutional knowledge are managed responsibly.' },
  { title: 'Accountability', looksLike: 'Roles, decision rights, approval workflows, and leadership expectations are clearly defined.', outcome: 'Ownership of decisions, actions, and results remains visible throughout the implementation.' },
  { title: 'Relationship-Building', looksLike: 'Stakeholders are engaged early, concerns are treated as valid input, and cross-department collaboration is strengthened through the project.', outcome: 'Collaboration, listening, and mutual respect become essential parts of how the project moves forward.' },
  { title: 'Participation', looksLike: 'Team members respond to invitations, share perspectives, identify stakeholders, complete assigned work, document questions, and highlight opportunities for improvement.', outcome: 'Ownership and engagement support broader adoption and increased trust in decisions.' },
]

export const questions = [
  'What shared norms already exist on your team, even if they are unwritten?',
  'Which behaviors help your organization navigate change well?',
  'How are decisions communicated across departments?',
  'Where does institutional knowledge currently live?',
  'What values should guide your next major project?',
  'How might documenting shared expectations help build trust and reduce friction?',
]
