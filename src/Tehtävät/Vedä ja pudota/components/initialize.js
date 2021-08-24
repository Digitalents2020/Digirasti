import { VEDETTAVAT, TESTI } from './data'
import { shuffle, GAME_STATE } from './utils'

const initialize = {

  bench: shuffle(VEDETTAVAT),
  [TESTI.eka]: [],
  [TESTI.toka]: [],
  gameState: GAME_STATE.READY,
  timeLeft: 0
}