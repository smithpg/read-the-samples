import { navigate } from "@reach/router"

const NUM_SAMPLES = 2008

function createPath(n) {
  return `/sample_${n}`
}

function getRandom() {
  return Math.floor(Math.random() * NUM_SAMPLES)
}

let current = null
export default function useNavigator() {
  function select(n) {
    current = n
    navigate(createPath(n))
  }

  function prev() {
    if (current === 0) {
      select(NUM_SAMPLES)
    }

    select(current - 1)
  }

  function next() {
    if (current === NUM_SAMPLES) {
      select(0)
    }

    select(current + 1)
  }

  function random() {
    select(getRandom())
  }

  return {
    prev,
    next,
    random,
    select,
  }
}
