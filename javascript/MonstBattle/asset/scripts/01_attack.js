//  게임의 전역 값의 경우 대문자로 처리 (단어 구분할 때는 언더 스코어 _)
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

// max health
let chosenMaxLife = 100;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

// attack
function attackHandler() {
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

attackBtn.addEventListener("click", attackHandler);
