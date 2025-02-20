# Comprehensive Guide: Feature Branches & Automated Checks

This guide provides a step-by-step process for creating and managing feature branches, along with best practices and examples for setting up automated checks (CI workflows) to run unit tests, check code coverage, and perform build checks. Use this as a reference any time you need to implement new features or maintain code quality in your project.

---

## 1. Creating Feature Branches

A **feature branch** allows you to develop a new feature or make changes in isolation from the main (or `develop`) branch. This workflow helps keep your codebase stable, facilitates easier reviews, and enables parallel development among team members.

### 1.1 Prerequisites

- Have Git installed on your local machine.
- Have a remote repository (e.g., GitHub, GitLab, Bitbucket).
- Be comfortable using a terminal or command prompt.

### 1.2 Step-by-Step Process

1. **Update Local Repository**

   ```bash
   # Navigate to your project folder
   cd /path/to/your/project

   # Ensure your local main branch is up-to-date
   git checkout main
   git pull origin main
   ```

   **Why?**  

- Ensures you have the latest changes, reducing merge conflicts when you later merge your feature branch back into `main`.

2. **Create a New Feature Branch**

   ```bash
   # Create and switch to a new feature branch
   git checkout -b feat/new-hero-section
   ```

   **Why?**  
   - `git checkout -b` creates a new branch and switches you to it immediately.  
   - Use a descriptive naming convention (e.g., `feat/new-hero-section`, `fix/typo-header`, or `chore/dependencies-update`).

3. **Implement Your Changes**
   - Work on your files (HTML, CSS, JS, configuration, etc.).
   - Test locally before committing.

4. **Commit Frequently**

   ```bash
   git add .
   git commit -m "Add initial hero section layout"
   ```

   **Why?**  
   - Smaller, frequent commits with descriptive messages make it easier to track changes and roll back if necessary.

5. **Sync Your Branch with Remote**

   ```bash
   # Push your new branch to the remote repository
   git push -u origin feat/new-hero-section
   ```

   **Why?**  
   - Setting the upstream (`-u` flag) ensures your local branch references the remote branch, making subsequent pushes simpler.

6. **Open a Pull Request (PR)**
   - On your repository hosting service (e.g., GitHub), locate your feature branch.
   - Click **Compare & Pull Request** or **Merge Request**.
   - Provide a clear description of what you’ve changed, including screenshots if it’s a UI update.

7. **Resolve Comments & Merge**
   - Address feedback from code reviews and make additional commits as needed.
   - Once approved, merge the PR into `main` (or `develop`, based on your branching strategy).

### 1.3 Best Practices & Tips

- **Descriptive Branch Names**: Always use clear prefixes (`feat/`, `fix/`, `chore/`).
- **Small, Focused Changes**: Keep feature branches small and targeted to one piece of functionality.
- **Frequent Commits**: Aim for each commit to encapsulate a single logical change.
- **Rebase vs. Merge**: Some teams prefer `git rebase` for a linear history, while others prefer merge commits. Choose a convention and stick to it.
- **Branch Protection**: Configure branch protection rules (e.g., require reviews, passing CI tests) to maintain code quality.

---

## 2. Automated Checks (CI Workflows)

Automated checks ensure that every change introduced to your codebase meets quality standards. Common tasks include:

- **Running Unit Tests**  
- **Checking Code Coverage**  
- **Performing Build Checks**

### 2.1 Why Automated Checks Matter

- **Consistency**: Code is validated the same way every time, reducing human error.  
- **Fast Feedback**: Catch breaking changes or test failures early.  
- **Quality Assurance**: Enforce coding standards and best practices before changes are merged.

### 2.2 Example: GitHub Actions

Below is an example `workflow.yml` file you might place in `.github/workflows/ci.yml`. It demonstrates how to:

1. Trigger on Pull Requests and pushes to `main`.  
2. Use Node.js to install dependencies, run tests, generate coverage, and build the project.

```yaml
name: CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Check out repository
        uses: actions/checkout@v3

      - name: Use Node.js 16
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install dependencies
        run: npm install

      - name: Run tests with coverage
        run: npm run test:coverage
        # Example command: jest --coverage

      - name: Build project
        run: npm run build
```

#### Key Steps Explained

1. **Checkout Repository**  
   - Pulls the code from your repository into the CI environment.
2. **Set up Node.js**  
   - Installs the specified Node.js version required by your project.
3. **Install Dependencies**  
   - Downloads all necessary packages (`npm install` or `yarn install`).
4. **Run Tests**  
   - Executes your test suite. If any test fails, the workflow fails.
5. **Coverage**  
   - `jest --coverage` or equivalent produces coverage reports (lines, branches, functions tested).
6. **Build**  
   - Ensures the project compiles successfully, catching build-time errors early.

### 2.5 Best Practices & Tips

- **Keep Tests Fast**: CI pipelines should fail quickly on errors, providing immediate feedback.
- **Artifact Storage**: Store coverage reports or build artifacts to review them later if needed.
- **Parallel Jobs**: For larger projects, split tests (unit, integration, e2e) across separate jobs.
- **Branch-Specific Rules**: Some teams configure stricter checks on `main` while allowing more flexibility on feature branches.
- **Fail Early**: Configure your workflow to exit on the first sign of error to save time.

---

## Conclusion

Adopting a **feature-branch workflow** combined with **automated checks** will greatly enhance both your development process and code quality. By working on branches, you keep the main codebase stable and collaboration efficient. Meanwhile, continuous integration ensures that every change is thoroughly tested and vetted before making it to production.

- **Feature Branch Recap**: Isolate changes, make small commits, use descriptive branch names, and merge changes via PR with full transparency.
- **Automated Checks Recap**: Set up CI pipelines (GitHub Actions, CircleCI, GitLab CI) to run tests, code coverage, and build checks automatically on every push or pull request.
