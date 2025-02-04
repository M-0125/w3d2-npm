## Dependency Hell (where NPM helps as a magical supplier)

- Delivers exactly what you need with one phone call (`npm install`)
- Ensure all materials work together
- Stores materials in an organized way (`node_modules`)
- Keeps track of what you used (`package.json`)
- Updates materials when you want (`npm update`)
- Handles version conflicts automatically

## Package versioning

To follow Semantic Versioning (SemVer)

> 2.1.5  ---> MAJOR.MINOR.PATCH

Version Symbols
- `^4.17.1` : Accepts updates to minor and patch
- `~4.17.1` : Accepts ONLY patch updates (4.17.1 to 4.17.99)
- `4.17.1`  : EXACT version only
- `*`       : Latest version (dangerous!)
- `>4.17.1` : Greater than this version
- `>=4.17.1` : Greater than or equal to this version