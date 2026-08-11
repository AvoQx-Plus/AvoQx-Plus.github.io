# Contributing to AvoQx Plus

All meaningful work must start with a GitHub Issue and finish with verifiable evidence.

## Before starting

- Use one primary owner per issue.
- Include an objective, expected output, acceptance criteria, time estimate, dependencies, and evidence required.
- Do not keep more than two issues In Progress per person.
- Never commit real audit documents, private datasets, dataset paths, credentials, API keys, passwords, or .env files.

## Branches

Create a branch from main using one of these formats:

- feature/42-short-description
- fix/67-short-description
- experiment/35-short-description
- docs/21-short-description
- hardware/18-short-description

## Commits

Use focused commits with these prefixes:

- feat:
- fix:
- test:
- docs:
- experiment:
- hardware:
- chore:

## Pull requests

Every change to main must use a pull request. Include:

- What changed and why
- How it was tested
- Metrics before and after when applicable
- Screenshots for interface changes
- Related issue using Closes #42
- Any security or data-handling considerations

Request a review from another team member. The author must not approve their own work.

## Definition of done

- Acceptance criteria are satisfied.
- Tests or written findings are included.
- ML work includes metrics and error analysis.
- Hardware work includes test evidence, measurements, or a demonstration.
- At least one teammate reviewed the pull request.
- The pull request is merged and its issue is closed.
