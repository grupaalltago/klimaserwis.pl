# Governance

## Decision rights

| Decision type | Who decides | Artifact |
|---|---|---|
| Product scope / priority | Product owner + Lead | Roadmap / issue |
| Architecture (stack, topology, data) | Lead + stakeholders | ADR |
| Local implementation detail within approved boundaries | Author + reviewer | PR |
| Security-sensitive change | Lead + security review | ADR and/or PR |

## Rule: no unilateral architecture

Agents and contributors **must not** make architectural decisions alone.

When something is unclear:

1. List the decision.
2. Propose **at least two viable alternatives** with trade-offs.
3. Recommend one option with rationale (recommendation ≠ decision).
4. Wait for explicit approval (ADR accepted / Lead confirmation).

## ADR lifecycle

```text
Proposed → Accepted | Rejected | Superseded
```

See [architecture/adr/README.md](architecture/adr/README.md).

## Escalation

If a change is blocked on an open decision, document the blocker in the PR or issue and ping the Lead. Do not invent a temporary stack that becomes permanent.
