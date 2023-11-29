//  게임의 전역 값의 경우 대문자로 처리 (단어 구분할 때는 언더 스코어 _)
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

// max health
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

// repeat function
function attackMonster(mode) {
  let maxDamage;

  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  // Monster Damage
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;

  // Player Damag
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentMonsterHealth > 0) {
    alert("You won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a drawl!");
  }
}

// attack
function attackHandler() {
  attackMonster("ATTACK");
}

// strong attack
function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
