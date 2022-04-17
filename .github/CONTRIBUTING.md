# Contributing to Awaken

Here are guidelines we would like you to follow:

- [GIT Workflow](#workflow)
- [Commit Message Guidelines](#commit)

### <a name="workflow"></a> Git Workflow

Please use [git-flow worflow]() when contributing to this repository
A CLI for simplifying this process is avaiable under: [git-flow AVH]()

#### Versioning

- Semantic Versioning MAJOR.MINOR.PATCH
  - MAJOR version when you make incompatible API changes,
  - MINOR version when you add functionality in a backwards-compatible manner, and
  - PATCH/HOTFIXES version when you make backwards-compatible bug fixes or hotfixes.
- Naming convention example: hotfix/1.0.1, release/1.1.0

- Hotfix branches should always target PATCH/HOTFIX version and never include breaking changes
- Release branches should target MAJOR versions if a breaking change has been including, otherwise target next MINOR version

### <a name="commit"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

#### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples:

```
fix(heroes): return heroes on GET requests

heroes were returning as null from the backend in some cases

closes #1
```

#### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation
- **cicd**: Changes to our CI configuration files and scripts (example scopes: Travis)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
- **test**: Adding missing tests

#### Scope

The scope could be anything specifying place of the commit change. For example `company`,
`heroes`, `dungeons`, etc...

#### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

#### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.