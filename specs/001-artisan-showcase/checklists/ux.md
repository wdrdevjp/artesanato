# UX Requirements Quality Checklist: Artesanato Showcase

**Purpose**: Validate UX-related requirements quality - completeness, clarity, consistency, measurability, and coverage
**Created**: 2026-04-13
**Feature**: [spec.md](./spec.md) | [plan.md](./plan.md) | [tasks.md](./tasks.md)

## Requirement Completeness

- [ ] CHK001 Are visual hierarchy requirements defined with measurable criteria (size, positioning) for the floating carousel effect? [Completeness, Spec §FR-001]
- [ ] CHK002 Are requirements defined for the exact number of carousel images visible at once? [Completeness, Gap]
- [ ] CHK003 Are accessibility requirements specified for carousel manual navigation (keyboard support)? [Coverage, Gap]
- [ ] CHK004 Are product card image rotation requirements complete (interval timing, transition effects)? [Completeness, Spec §FR-004]
- [ ] CHK005 Are hover/focus/active state requirements defined for all interactive elements? [Completeness, Gap]
- [ ] CHK006 Are mobile/responsive layout requirements defined for the carousel and product cards? [Completeness, Gap]

## Requirement Clarity

- [ ] CHK007 Is "efeito de sobreposição flutuante" (floating overlap effect) quantified with specific visual properties (size ratios, z-index, offset)? [Clarity, Spec §FR-001]
- [ ] CHK008 Is "descrição breve" (brief description) defined with character count or truncation rules? [Clarity, Spec §FR-003]
- [ ] CHK009 Is the auto-rotation interval for product card images explicitly specified? [Clarity, Spec §FR-004]
- [ ] CHK010 Are "transições suaves" (smooth transitions) quantified with timing values? [Clarity, Spec §FR-001]
- [ ] CHK011 Is the carousel auto-transition behavior defined for hover/pause scenarios? [Clarity, Gap]
- [ ] CHK012 Are the exact marketplace selector ordering rules clear (Shopee, Mercado Livre when present, WhatsApp always last)? [Clarity, Spec §FR-005]

## Requirement Consistency

- [ ] CHK013 Are carousel navigation requirements consistent across all user stories? [Consistency, Spec §FR-001/FR-002]
- [ ] CHK014 Are product card layout requirements consistent between category page and any admin preview? [Consistency, Gap]
- [ ] CHK015 Do timeout/error states for marketplace link opening have consistent behavior? [Consistency, Gap]

## Acceptance Criteria Quality

- [ ] CHK016 Can "Page load time ≤ 3s" be objectively verified with specific network conditions defined? [Measurability, Spec §CR-001]
- [ ] CHK017 Can "Lighthouse performance score ≥ 90" be achieved consistently across all pages? [Measurability, Spec §CR-002]
- [ ] CHK018 Are visual hierarchy requirements testable with defined acceptance thresholds? [Measurability, Spec §SC-006]
- [ ] CHK019 Is "maximum 2 clicks" for navigation measurably defined? [Measurability, Spec §SC-002]

## Scenario Coverage

- [ ] CHK020 Are zero-state requirements defined (no categories, no products)? [Coverage, Edge Case]
- [ ] CHK021 Are single-item scenarios defined (one category, one product, one image)? [Coverage, Edge Case]
- [ ] CHK022 Are requirements for carousel behavior with single category defined? [Coverage, Edge Case, Spec §Edge Cases]
- [ ] CHK023 Are loading state requirements defined for dynamic content? [Coverage, Gap]
- [ ] CHK024 Are error state requirements defined for API failures on category/product pages? [Coverage, Gap]

## Edge Case Coverage

- [ ] CHK025 Is fallback behavior defined when category image fails to load? [Edge Case, Gap]
- [ ] CHK026 Is fallback behavior defined when product image fails to load? [Edge Case, Spec §Edge Cases]
- [ ] CHK027 Is behavior defined when product has no marketplace links except required WhatsApp? [Edge Case, Spec §FR-011]
- [ ] CHK028 Is behavior defined when all marketplace links are missing (only WhatsApp)? [Edge Case, Gap]
- [ ] CHK029 Is behavior defined when product price is zero or not set? [Edge Case, Gap]

## Non-Functional Requirements

- [ ] CHK030 Are WCAG 2.1 AA compliance requirements quantified for specific interactive elements? [Accessibility, Spec §CR-006]
- [ ] CHK031 Are keyboard navigation requirements defined for all interactive flows? [Accessibility, Gap]
- [ ] CHK032 Are focus indicator requirements defined for all keyboard-navigable elements? [Accessibility, Gap]

## Dependencies & Assumptions

- [ ] CHK033 Is the assumption that "visitantes têm apenas acesso de leitura" enforced by requirements? [Assumption, Spec §Assumptions]
- [ ] CHK034 Are image lazy-loading requirements consistent across carousel and product cards? [Consistency, Spec §T031]
- [ ] CHK035 Is the dependency on cloud image repository uptime addressed with fallback behavior? [Dependency, Gap]
