# PRD – ARCI EXAM Portal

## 1. Overview
ARCI EXAM is a web‑based exam creation, delivery, and analytics platform for **SMP, SMU/SMK, and Higher Education (Perguruan Tinggi)**. The **portal** is the central UI for all user roles (Admin, Instructor/Guru/Dosen, Student/Siswa/Mahasiswa, Proctor). It must be responsive, accessible, and provide a seamless experience from sign‑in to exam results.

---

## 2. User Roles & Permissions
| Role | Permissions |
|------|-------------|
| **Admin** | Manage users, view all exams & analytics, configure system settings, audit logs. |
| **Instructor** | Create/edit question banks, build exams, schedule exams, view exam results, export reports. |
| **Student** | Register for exams, take exams, view personal results, request re‑grade. |
| **Proctor** | Monitor live exams, view webcam feeds, flag suspicious activity, generate proctoring logs. |

---

## 3. Core Portal Pages & Functionalities
### 3.1 Landing / Home
- Hero section with branding "ARCI EXAM" and tagline.
- CTA buttons: **"Get Started"** (login) and **"Demo"** (tour).
- Features overview cards (Question Bank, Live Proctoring, Analytics, Integrations).
- Footer with links (Privacy, Terms, Contact).

### 3.2 Authentication
- **Login / Sign‑up** page supporting email/password and OAuth (Google, Microsoft). 
- **Forgot password** flow with secure token email.
- **Two‑factor authentication** optional via Auth0/Supabase MFA.
- Post‑login redirect based on role to respective dashboard.

### 3.3 Dashboard (Role‑Specific)
#### Admin Dashboard
- System health widgets (service uptime, DB usage).
- User management table (search, filter, role assignment).
- Global analytics overview (exams per month, active users).
- Settings panel (email SMTP, proctoring AI config, branding).

#### Instructor Dashboard
- **My Exams** list (status: Draft, Published, Completed).
- **Create New Exam** button.
- Quick stats: #students, average score, cheat‑flag count.
- Access to **Question Bank** (CRUD, import/export).

#### Student Dashboard
- **Upcoming Exams** carousel with start time countdown.
- **Past Exams** with scores & downloadable certificates.
- **Profile** section (personal info, password change).

#### Proctor Dashboard
- Live exam monitor view (grid of webcam streams, exam timer).
- Alert panel for AI‑detected anomalies.
- Export logs button.

### 3.4 Exam Builder (Instructor)
- Drag‑and‑drop interface to assemble questions from the bank.
- Per‑question settings: point value, time limit, randomization.
- Exam‑level settings: total duration, start/end windows, proctoring toggle, password/access code.
- Preview mode – responsive mock of student view.
- Publish → generates a unique exam URL and optional access code.

### 3.5 Exam Taking (Student)
- Landing page with exam title, instructions, timer.
- Question navigation (sidebar with progress dots). 
- Auto‑save on answer change (WebSocket + optimistic UI). 
- Proctoring overlay: webcam feed, mic status, environment check.
- Submit button → final confirmation modal.
- Post‑submission: immediate score (if enabled) and link to results.

### 3.6 Analytics & Reporting (Instructor/Admin)
- **Exam Overview**: enrollment, completion rate, average score, time‑on‑question chart.
- **Item Analysis**: difficulty, discrimination index, option selection distribution.
- **Export**: CSV, PDF, Excel.
- **Custom Dashboard**: drag widgets, save layouts.

### 3.7 Settings & Integrations
- **LMS Integration**: OAuth‑based SSO, webhook for exam results.
- **API Keys**: generate for third‑party tools.
- **Branding**: upload logo, set primary/secondary colors (applied via Tailwind config).
- **Notifications**: email templates, in‑app alerts, Slack webhook.

---

## 4. Non‑Functional Requirements (Portal‑Specific)
- **Performance**: Initial page load < 1.5 s (LCP), subsequent navigation < 300 ms.
- **Accessibility**: WCAG 2.1 AA – keyboard navigation, ARIA landmarks, focus order.
- **Responsiveness**: Mobile‑first layout, breakpoints at 640 px, 1024 px, 1280 px.
- **Internationalization**: i18n support (English default, add locales via JSON files).
- **Security**: Content‑Security‑Policy, SameSite cookies, CSRF tokens on forms.
- **SEO**: Server‑Side Rendering (Next.js) for public pages, meta tags per exam.

---

## 5. Technical Implementation (Portal)
- **Frontend Framework**: Next.js (React) + TypeScript + Tailwind CSS.
- **State / Data**: React Query for server data, Zustand for UI state, Socket.io client for real‑time sync.
- **Authentication UI**: Supabase Auth UI components (or Auth0 Lock).
- **Routing**: Next.js file‑system routes (`/login`, `/dashboard`, `/exam/[id]`).
- **Protected Routes**: Higher‑order component checking JWT/role before rendering.
- **Component Library**: Headless UI (modals, menus) + custom design system.
- **Testing**: Jest + React Testing Library (unit), Cypress (e2e) covering login, exam flow, admin actions.
- **CI/CD**: GitHub Actions – lint → unit tests → build → Vercel deployment preview.
- **Observability**: Sentry for frontend errors, Lighthouse CI for performance scores.

---

## 6. Release Milestones
| Milestone | Scope | Target Duration |
|-----------|-------|-----------------|
| **M1 – Foundations** | Auth, role‑based routing, basic landing page | 2 weeks |
| **M2 – Question Bank** | CRUD UI, import/export, media upload | 3 weeks |
| **M3 – Exam Builder** | Drag‑and‑drop UI, timer, publish flow | 4 weeks |
| **M4 – Live Exam Engine** | Real‑time answer sync, proctoring overlay | 5 weeks |
| **M5 – Analytics Dashboard** | Charts, export, admin reports | 3 weeks |
| **M6 – Polish & QA** | Accessibility fixes, performance tuning, beta testing | 2 weeks |

---

## 7. Open Questions (to resolve with stakeholder)
1. Preferred identity provider (Supabase vs. Auth0) for enterprise SSO?
2. Level of AI‑proctoring (cloud‑based vs. client‑side only)?
3. Branding assets (logo, color palette) for ARCI EXAM.
4. Desired SLA for exam result availability (immediate vs. delayed processing).

---

*Prepared for the ARCI EXAM project – feel free to suggest modifications or add additional sections.*

---

## 8. Responsive Design with **Stitch**

**Stitch** is a utility‑first, component‑based CSS framework that works seamlessly with Tailwind and provides ready‑made responsive layout primitives. We will use Stitch to guarantee a consistent, mobile‑first experience across all portal pages.

### 8.1 Design Principles
| Principle | Implementation with Stitch |
|-----------|-----------------------------|
| **Mobile‑first** | Base styles target `sm` breakpoint (≤ 640 px). Larger breakpoints (`md`, `lg`, `xl`) progressively enhance layout. |
| **Grid‑based layout** | Use `st-grid` classes to define 12‑column grids; `st-col-span-{n}` for column span. |
| **Component consistency** | Buttons, cards, modals, and navbars are built from Stitch’s `st-btn`, `st-card`, `st-modal`, `st-nav` components, ensuring uniform spacing and interaction states. |
| **Theming** | Primary/secondary colors are defined in `stitch.config.js` and injected into Tailwind via the `extend` field, allowing dark‑mode toggling with a single variable (`--st-primary`). |
| **Accessibility** | Stitch’s components include built‑in ARIA attributes and focus outlines; we will audit with axe‑core and add custom overrides where needed. |

### 8.2 Page‑Level Breakpoints
| Page | Layout at Breakpoints |
|------|-----------------------|
| **Landing / Home** | `sm`: single‑column stacked hero, CTA buttons full‑width. `md`: two‑column hero (text + illustration). `lg`: three‑column feature cards. |
| **Dashboard** | `sm`: vertical accordion navigation, content stacked. `md`: side‑nav collapsible, main area full width. `lg`: persistent side‑nav, grid of widgets (4‑col on `lg`, 2‑col on `md`). |
| **Exam Builder** | `sm`: step‑wizard vertical, drag‑drop list becomes accordion. `md`: split view (question list left, canvas right). `lg`: full two‑pane layout with resizable divider. |
| **Exam Taking** | `sm`: single column, full‑width question cards, bottom fixed submit bar. `md`: two‑column (question list left, progress bar right). `lg`: grid of question cards with optional sidebar for navigation. |

### 8.3 Stitch Integration Steps
1. **Install** `npm i @stitchcss/core @stitchcss/components` (or Yarn). 
2. **Configure** `stitch.config.js` to map our brand colors (`--st-primary`, `--st-secondary`). 
3. **Extend Tailwind** in `tailwind.config.js` to include Stitch’s utilities via `require('@stitchcss/tailwind')`. 
4. **Create a global stylesheet** `styles/stitch.css` importing Stitch base and components, then import it in `_app.tsx`. 
5. **Wrap reusable UI** (Button, Card, Modal) in thin React wrappers that apply Stitch classes, e.g., `<button className="st-btn st-btn-primary">`. 
6. **Responsive testing** – use Chrome DevTools device toolbar and Lighthouse to verify LCP < 1.5 s across breakpoints. 
7. **Accessibility audit** – run `npm run a11y` (axe‑core integration) and fix any violations.

### 8.4 Example Component (Stitch Card)
```tsx
import React from 'react';

export const ExamCard = ({title, description, onClick}: {
  title: string;
  description: string;
  onClick: () => void;
}) => (
  <div className="st-card st-shadow-md st-p-4 st-rounded-lg hover:st-shadow-lg transition-shadow">
    <h3 className="st-text-xl st-font-semibold st-mb-2">{title}</h3>
    <p className="st-text-sm st-text-gray-600 st-mb-4">{description}</p>
    <button
      className="st-btn st-btn-primary st-w-full"
      onClick={onClick}
    >
      Open Exam
    </button>
  </div>
);
```;

### 8.5 Testing & Validation
- **Visual regression** with Chromatic (Storybook) to catch layout breaks.
- **Unit tests** for component rendering at `sm`, `md`, `lg` breakpoints using `@testing-library/react` and `window.innerWidth` mocks.
- **E2E Cypress** scenarios: navigate portal on mobile viewport, ensure navigation drawer works, exam builder layout switches correctly.

### 8.6 Documentation
- Add a **Design System** page (`/docs/design-system`) in the repo’s `docs/` folder describing all Stitch utilities, color tokens, and responsive guidelines.
- Provide **Figma** files (exported from Stitch) for designers to reference.

---

*All other sections of the PRD remain unchanged.*