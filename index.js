function findMatching(drivers, name) {
    return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase())
}



functions matchName(drivers, name) {
  return drivers.filter((driver) => driver.name.toLowerCase() === name.toLowerCase())
}
