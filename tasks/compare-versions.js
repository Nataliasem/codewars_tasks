const compareVersions = (version1, version2) => {
    const v1 = version1.split('.').map(Number)
    const v2 = version2.split('.').map(Number)

    const maxLength = Math.max(v1.length, v2.length)

    for (let i = 0; i < maxLength; i++) {
        let n1 = v1[i] || 0, n2 = v2[i] || 0
        if (n1 === n2) {
            continue
        }

        return (n1 > n2)
    }
    return true;
}

compareVersions("10.4", "11")


