function findMatching(drivers, name) {
  return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((driver) => driver.slice(0, string.length) === string.slice()))
}
