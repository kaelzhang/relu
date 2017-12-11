import test from 'ava'
import relu from '.'

;[
  [0, 0],
  [-1, 0],
  [1, 1],
  [2, 2]
].forEach(([x, y]) => {
  test(`ReLU(${x}) -> ${y}`, t => {
    t.is(relu(x), y)
  })
})
