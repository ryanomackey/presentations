Burning everything down and starting over can be terrifying.

- Chapter 1: Set the Scene
  - What is PUP?
  - 3 new µ-services
    - Account
    - Billing
    - User
  - Old account

- Chapter 2: Developer Experience
  - Hot Module Replacement
    - Quick iteration
      - New
        - User profile
        - Login settings
      - Rewrites
        - Resource groups
        - Spending notifications
        - Usage dashboard
      - Ports
        - Cloud Foundry
        - Subscriptions
        - Account settings
  - Developer sandbox
    - Pages
    - Global directory

- Chapter 3: Performance in Practice
  - Perceived performance
    - The static overview page
  - Code splitting
    - React Loadables
    - Cache busting
    - Preloading splits
  - Preloading queries
  - Styled Components
    - Automatic critical CSS
      > styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.

- Chapter 4: The Results
  - How'd we do?
  - Page load
  - Other lighthouse results

- Chapter 5: Moving Forward
  - Tree shaking
  - Service workers / asset precache
  - Server-side rendering?
  - Increasing simplicity
    - Complexity can be paralyzing to newer developers
  - What's holding us back?
    - Analytics?
    - Usabilla?