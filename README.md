# Pentest-Tools.com Documentation

This folder contains the official documentation for [Pentest-Tools.com](https://pentest-tools.com), built with [Mintlify](https://mintlify.com).

## Documentation structure

```
docs/
├── index.mdx               # Introduction
├── core-concepts.mdx        # Core concepts overview
├── core/                    # Core platform concepts
│   ├── workspaces.mdx
│   ├── assets.mdx
│   ├── tools.mdx
│   ├── scans/               # Scanning guides
│   └── findings/            # Working with findings
├── tools/                   # Security tool reference (28 files)
├── capabilities/            # Platform capabilities
│   ├── attack-surface.mdx
│   ├── reports/             # Reports and exports
│   ├── pentest-robots.mdx
│   ├── teams-and-roles.mdx
│   ├── notifications.mdx
│   ├── integrations/        # Slack, Jira, CI/CD, etc.
│   ├── vpn/                 # VPN configuration
│   └── wordlists.mdx
├── ai/                      # AI features
│   ├── mcp/                 # MCP integration
│   ├── soft404detector.mdx
│   ├── authentication.mdx
│   └── endpoint-discovery.mdx
├── account-billing/         # Account and billing
│   ├── plans-and-limits/    # Pricing and quotas
│   ├── billing/             # Billing and subscriptions
│   └── security/            # Account and data security
├── api-reference/           # REST API documentation
└── docs.json                # Site navigation config
```

## Local development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify):

```bash
npm i -g mintlify
```

Run the development server:

```bash
cd docs
mintlify dev
```

Preview at `http://localhost:3000`.

## Writing guidelines

Follow the conventions in `.cursor/rules`:

- Use Mintlify components (`<Steps>`, `<Tabs>`, `<CardGroup>`, etc.)
- Write in second person ("you")
- Use active voice
- Include cross-references between related pages
- Add `## Related topics` at the end of concept, API, and capability pages
- Tool pages (`docs/tools/`) use `## Follow-up actions` as their navigation convention instead, which links to related tools in context

## Style conventions

- Sentence case for all headings: capitalize the first word only; proper nouns stay capitalized
- Proper nouns always capitalized: tool names (Website Scanner, Network Scanner, Password Auditor, etc.), Jira, Slack, Docker, GitHub, Azure, AWS, GCP
- Acronyms always uppercase: API, VPN, DNS, SSL/TLS, CVE, HTTP, HTTPS, CIDR, RPS
- No em dashes (—): use a comma, colon, period, or parentheses instead
- Run all prose through the `/humanizer` skill before writing to any file (catches inflated language, em dashes, rule-of-three, -ing phrases, and other AI writing patterns)

## Key files

| File | Purpose |
|------|---------|
| `docs.json` | Site navigation and configuration |
| `style.css` | Global Mintlify style overrides for Pentest-Tools branding |
| `brand.js` | Lightweight UI behavior enhancements for docs branding |
| `tools/index.mdx` | Tools overview page |
| `core/scans/authenticated-scanning.mdx` | Authentication guide for all tools |
| `ai/authentication.mdx` | AI-enhanced authentication feature |

## Publishing

Changes pushed to the default branch are automatically deployed via the Mintlify GitHub integration.

## Resources

- [Mintlify documentation](https://mintlify.com/docs)
- [Mintlify components](https://mintlify.com/docs/content/components)
- [docs.json schema](https://mintlify.com/docs.json)
