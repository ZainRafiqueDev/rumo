export interface ILegalSection {
  heading: string;
  body: string[];
}

export const privacySections: ILegalSection[] = [
  { heading: '1. Introduction', body: ['This Privacy Policy explains how Rumo (“we”, “us”) collects, uses and protects personal information when you visit our website or use our services. By using Rumo, you agree to the practices described here.'] },
  { heading: '2. Information we collect', body: ['Account information such as your name, work email, company and billing details.', 'Usage information such as pages viewed, features used, device and browser type, and IP address.', 'Customer data you connect to Rumo, for example CRM records and email metadata, which we process on your behalf.'] },
  { heading: '3. How we use information', body: ['To provide, maintain and improve the service, including generating scores, recommendations and content.', 'To communicate with you about updates, security alerts and support requests.', 'To detect fraud, abuse and security incidents, and to comply with legal obligations.'] },
  { heading: '4. AI and your data', body: ['Models trained on your customer data are used only within your workspace. We do not use customer data to train shared models or share it with other customers.'] },
  { heading: '5. Sharing of information', body: ['We share information only with trusted subprocessors who help us deliver the service (such as cloud hosting and payment providers), when required by law, or with your consent. We do not sell personal information.'] },
  { heading: '6. Data retention', body: ['We retain account information for as long as your account is active. Upon termination, customer data is deleted within 30 days of your request, unless we are legally required to keep it longer.'] },
  { heading: '7. Your rights', body: ['Depending on where you live, you may have the right to access, correct, delete, or export your personal information, and to object to certain processing. To exercise these rights, contact privacy@rumo.example.'] },
  { heading: '8. Security', body: ['We use industry-standard safeguards including encryption in transit and at rest, access controls and regular audits. No method of transmission is 100% secure, but we work hard to protect your information.'] },
  { heading: '9. International transfers', body: ['If we transfer data across borders, we rely on approved mechanisms such as Standard Contractual Clauses.'] },
  { heading: '10. Changes to this policy', body: ['We may update this policy from time to time. We will notify you of material changes by email or through the product.'] },
  { heading: '11. Contact us', body: ['Questions? Email privacy@rumo.example.'] },
];

export const termsSections: ILegalSection[] = [
  { heading: '1. Acceptance of terms', body: ['By creating an account or using Rumo, you agree to these Terms & Conditions. If you are using Rumo on behalf of an organization, you represent that you have authority to bind that organization.'] },
  { heading: '2. The service', body: ['Rumo provides AI-powered sales optimization tools including lead scoring, content generation, analytics and workflow automation. We may update or modify features from time to time.'] },
  { heading: '3. Free trial', body: ['New customers may receive a 7-day free trial. At the end of the trial, your account converts to a paid subscription only if you add payment details and choose a plan.'] },
  { heading: '4. Accounts and security', body: ['You are responsible for keeping your credentials secure and for all activity under your account. Notify us immediately of any unauthorized use.'] },
  { heading: '5. Subscriptions and billing', body: ['Subscriptions are billed monthly or annually in advance per user. Fees are non-refundable except where required by law. You may cancel at any time, and cancellation takes effect at the end of the current billing period.'] },
  { heading: '6. Acceptable use', body: ['You agree not to misuse the service, including sending unlawful or deceptive communications, violating anti-spam laws, attempting to breach security, reverse-engineering the service, or using it to infringe others’ rights.'] },
  { heading: '7. Your data', body: ['You retain all rights to the data you submit to Rumo. You grant us a limited license to process that data solely to provide the service to you.'] },
  { heading: '8. Intellectual property', body: ['Rumo and its licensors own all rights in the service, software and branding. These terms do not grant you any rights except the right to use the service as described here.'] },
  { heading: '9. Disclaimers', body: ['The service is provided “as is”. AI-generated scores, forecasts and content are provided for guidance and may contain errors; you are responsible for reviewing them before acting on them.'] },
  { heading: '10. Limitation of liability', body: ['To the fullest extent permitted by law, Rumo’s total liability arising from the service will not exceed the amounts you paid in the twelve months preceding the claim.'] },
  { heading: '11. Termination', body: ['Either party may terminate at any time. We may suspend accounts that violate these terms.'] },
  { heading: '12. Changes', body: ['We may revise these terms. Continued use after changes constitutes acceptance.'] },
  { heading: '13. Contact', body: ['Questions about these terms? Email legal@rumo.example.'] },
];

export const securityPractices = [
  { title: 'Encryption everywhere', text: 'AES-256 encryption at rest and TLS 1.2+ for all data in transit. Keys are rotated automatically and stored in hardware security modules.' },
  { title: 'SOC 2 Type II', text: 'Independently audited controls for security, availability and confidentiality. Reports are available under NDA.' },
  { title: 'Access control', text: 'Single sign-on (SAML), SCIM provisioning, multi-factor authentication and granular role-based permissions.' },
  { title: 'Data isolation', text: 'Every customer’s data and models are logically isolated. We never train shared models on your information.' },
  { title: 'Continuous monitoring', text: '24/7 monitoring, anomaly detection and on-call engineers with a documented incident response plan.' },
  { title: 'Penetration testing', text: 'Annual third-party penetration tests and an invite-only bug bounty program.' },
  { title: 'Regional hosting', text: 'Choose US or EU data residency on Enterprise plans.' },
  { title: 'Backups & recovery', text: 'Encrypted daily backups with tested disaster recovery and a 4-hour recovery time objective.' },
];
