function findMatching(drivers, name) {
  return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase())
}



functions matchName(drivers, string) {
  return drivers.filter((driver) => driver.name === string)
}
