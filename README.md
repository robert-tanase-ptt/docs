# Pentest-Tools.com Documentation

This folder contains the official documentation for [Pentest-Tools.com](https://pentest-tools.com), built with [Mintlify](https://mintlify.com).

## Documentation structure

```
docs/
├── tools/                  # Security tool documentation
│   ├── website-vulnerability-scanner.mdx
│   ├── api-scanner.mdx
│   ├── port-scanner.mdx
│   └── ...
├── using/                  # How-to guides
│   ├── scans/              # Scanning guides
│   ├── assets/             # Asset management
│   ├── findings/           # Working with findings
│   ├── reporting/          # Reports and exports
│   └── vpn/                # VPN configuration
├── ai/                     # AI features
│   ├── authentication.mdx  # AI-enhanced login detection
│   ├── soft404detector.mdx # AI-powered 404 detection
│   └── mcp/                # MCP integration
├── api-reference/          # REST API documentation
├── concepts/               # Core concepts and glossary
├── automation/             # Pentest robots
├── notifications/          # Integrations (Slack, Jira, etc.)
├── plans-and-limits/       # Pricing and quotas
├── account/                # Account management
├── billing/                # Billing and subscriptions
└── docs.json               # Site navigation config
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
- Add `## Related tools` and `## Related topics` sections

## Key files

| File | Purpose |
|------|---------|
| `docs.json` | Site navigation and configuration |
| `tools/index.mdx` | Tools overview page |
| `using/scans/authenticated-scanning.mdx` | Authentication guide for all tools |
| `ai/authentication.mdx` | AI-enhanced authentication feature |

## Publishing

Changes pushed to the default branch are automatically deployed via the Mintlify GitHub integration.

## Resources

- [Mintlify documentation](https://mintlify.com/docs)
- [Mintlify components](https://mintlify.com/docs/content/components)
- [docs.json schema](https://mintlify.com/docs.json)
