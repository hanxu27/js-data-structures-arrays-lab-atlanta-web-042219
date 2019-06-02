// Write your solution here!
let drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(params) {
  return drivers.push(params)
}

function destructivelyPrependDriver(params) {
  return drivers.unshift(params)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(params) {
  return [...drivers, params]
}

function prependDriver(params) {
  return [params, ...drivers]
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver(params) {
  return drivers.slice(1)
}