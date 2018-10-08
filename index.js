function findMatching(drivers, name) {
    return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase())
}

function fuzzymatch(drivers, string) {
  
}

functions matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name)
}