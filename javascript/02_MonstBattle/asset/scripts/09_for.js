//  게임의 전역 값의 경우 대문자로 처리 (단어 구분할 때는 언더 스코어 _)
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

// 전역 상수 설정
const MODE_ATTACK = "ATTACK"; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = "STRONG_ATTACK"; // MODE_STRONG_ATTACK = 1
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

// user input
const enteredValue = prompt("Maximum life for you and the monster.", "100");

// inNaN = 숫자가 아닐때 & 사용자가 설정한 값이 0이거나 0보다 작을 때 100으로 설정
let chosenMaxLife = parseInt(enteredValue);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

// max health
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

let battleLog = [];

// login log
function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  // switch = 엄격한 동치비교에 적합한 문장
  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: "MONTER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: "PLAYER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry = {
        event: ev,
        value: val,
        target: "PLAYER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    default:
      logEntry = {};
  }

  // 코드가 복잡해보일 수 있으나 가독성을 위해 나머지는 그대로 유지함.
  // if (ev === LOG_EVENT_PLAYER_ATTACK) {
  //   logEntry.target = "MONSTER";
  // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: "MONTER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: "PLAYER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: "PLAYER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_GAME_OVER) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // }
  battleLog.push(logEntry);
}

// reset
function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

// if win & lost & drawl
function endRound() {
  // bonus life
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You would be dead but the bonus life saver you!");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "A DRAW",
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  // reset (어떤 결과이던 reset)
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

// mode
function attackMonster(mode) {
  // 삼항 연산자
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent = MODE_ATTACK
    ? LOG_EVENT_PLAYER_ATTACK
    : LOG_EVENT_PLAYER_STRONG_ATTACK;

  // if (mode === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === MODE_STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }

  // Monster Damage
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);

  endRound();
}

// attack
function attackHandler() {
  attackMonster(MODE_ATTACK);
}

// strong attack
function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

// heal
function healPlayerHandler() {
  let healValue;

  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial health");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;

  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );

  endRound();
}

// log
function printLogHandler() {
  // for
  for (let i = 0; i < 3; i++) {
    console.log("----------");
  }
  // for (let i = 10; i > 0; ) {
  //   i--;
  //   console.log(i);
  // }
  // for (let i = 0; i < battleLog.length; i++) {
  //   console.log(battleLog[i]);
  // }

  // for-of (매번 반복되는 상수 of 반복하려고 하는 배열의 이름)
  // let i = 0;
  // for (const logEntry of battleLog) {
  //   console.log(logEntry);
  //   console.log(i);
  //   i++;
  // }

  // for-in 객체의 키-값 쌍
  // let i = 0;
  // for (const logEntry of battleLog) {
  //   console.log(`#${i}`);
  //   for (const key in logEntry) {
  //     console.log(`${key} => ${logEntry[key]}`);
  //   }
  //   i++;
  // }

  // console.log(battleLog);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
