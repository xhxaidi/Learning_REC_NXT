# Bug Fixes & Changes Log

This document records the errors that were present in the Queue Management app and how
each was fixed. It's kept as a learning reference for the course.

---

## 1. `src/App.tsx`

### 1.1 — Spread operator typo (`..` instead of `...`)
**Before**
```tsx
setQueue([...queue,{..customer,id:Date.now(),status:"waiting" }])
```
**Problem:** `..customer` uses two dots. The JavaScript spread operator requires **three**
dots. Two dots is a syntax error → *"Identifier expected"*.

**After**
```tsx
setQueue([...queue, { ...customer, id: Date.now(), status: 'waiting' }])
```

---

### 1.2 — Wrong parameter type on `addToQueue`
**Before**
```tsx
const addToQueue = (customer: string) => { ... }
```
**Problem:** `QueueForm` calls `onAdd({ name, service })`, so `addToQueue` receives an
**object**, not a `string`. Spreading a string is also invalid → *"Spread types may only be
created from object types"*.

**After:** Introduced shared types and used the object type.
```tsx
export interface Customer {
  id: number
  name: string
  service: string
  status: string
}
export type NewCustomer = Pick<Customer, 'name' | 'service'>

const addToQueue = (customer: NewCustomer) => { ... }
```

---

### 1.3 — Broken `.map` ternary in `updateStatus`
**Before**
```tsx
setQueue(queue.map(customer=>{
  customer.id === ?{...customer,status:newStatus};customer
}))
```
**Problem:** three separate issues —
1. The value after `===` is missing (it should compare against `id`).
2. A `;` is used where the ternary needs a `:`.
3. The callback never `return`s, so `.map` produces `void[]`.

**After**
```tsx
setQueue(
  queue.map((customer) =>
    customer.id === id ? { ...customer, status: newStatus } : customer
  )
)
```

---

### 1.4 — `useState([])` inferred as `never[]`
**Before**
```tsx
const [queue, setQueue] = useState([])
```
**Problem:** With no type argument, TypeScript infers the state as `never[]`. Every later
`customer.id`, spread, and `setQueue(...)` then fails type checking
(*"Property 'id' does not exist on type 'never'"*, *"not assignable to type 'never'"*).

**After**
```tsx
const [queue, setQueue] = useState<Customer[]>([])
```

---

### 1.5 — Importing a `.jsx` file into a strict TS project
**Before**
```tsx
import QueueForm from "./components/QueueForm.jsx"
```
**Problem:** A `.jsx` file has no type declarations, so it is implicitly `any` →
*"Could not find a declaration file for module './components/QueueForm.jsx'"*.

**After:** Renamed the file to `QueueForm.tsx` and dropped the extension from the import.
```tsx
import QueueForm from './components/QueueForm'
```

---

### 1.6 — Unused functions (`updateStatus`, `removeFromQueue`)
**Problem:** The project's `tsconfig` enables `noUnusedLocals` / `noUnusedParameters`, so
these two handlers — defined but never passed anywhere (the display was only a
`<h1>Queue Display</h1>` placeholder) — were build errors.

**After:** Built a real `QueueDisplay` component (see §3) and wired both handlers into it.
```tsx
<QueueDisplay
  queue={queue}
  onUpdateStatus={updateStatus}
  onRemove={removeFromQueue}
/>
```

---

## 2. `src/components/QueueForm.tsx` (renamed from `.jsx`)

### 2.1 — Props not destructured
**Before**
```tsx
const QueueForm = (onAdd) => { ... }
```
**Problem:** The first argument to a component is the **props object**, so `onAdd` was the
whole props object. Calling `onAdd({ name, service })` would try to call an object →
runtime `TypeError`.

**After**
```tsx
interface QueueFormProps {
  onAdd: (customer: NewCustomer) => void
}
const QueueForm = ({ onAdd }: QueueFormProps) => { ... }
```

---

### 2.2 — `useState()` with no initial value
**Before**
```tsx
const [name, setName] = useState();
const [service, setService] = useState();
```
**Problem:** `name` and `service` start as `undefined`, so `name.trim()` throws
*"Cannot read properties of undefined"*. It also makes the inputs switch from
uncontrolled → controlled (React warning).

**After**
```tsx
const [name, setName] = useState('')
const [service, setService] = useState('')
```

---

### 2.3 — Unused `React` import + untyped event
**Before**
```tsx
import React, { useState } from 'react'
const handleSubmit = (e)=>{ ... }
```
**Problem:** `React` is never referenced (React 19 automatic JSX runtime), and the event
parameter `e` was untyped.

**After**
```tsx
import { useState } from 'react'
import type { FormEvent } from 'react'
const handleSubmit = (e: FormEvent) => { ... }
```

---

## 3. New: `src/components/QueueDisplay.tsx`

Added to consume `updateStatus` and `removeFromQueue` (resolving §1.6) and to render the
actual queue. Each customer row shows name, service, a status badge, a **mark-served**
button (`onUpdateStatus`) and a **remove** button (`onRemove`).

---

## 4. Styling — `src/App.css`

Previously empty and never imported. Added `import './App.css'` to `App.tsx` and styles for
both `.queue-form` and `.queue-display`, reusing the theme variables defined in `index.css`
(`--accent`, `--border`, `--bg`, `--text-h`, `--shadow`, etc.) so it works in light and dark.

---

## Verification

```bash
npm run build   # tsc -b && vite build  → passes
npm run lint    # eslint .              → no issues
```
Both commands complete cleanly with zero errors or warnings.
