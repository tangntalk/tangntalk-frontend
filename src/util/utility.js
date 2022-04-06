

export const OnEnterKeyDown = (e, keyName, functionToRun) => {
    if (e.key === keyName) {
      functionToRun()
    }
}