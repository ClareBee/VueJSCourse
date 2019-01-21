new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function(){
      this.attackMonster(3, 10);
      this.monsterAttacks();
    },
    specialAttack: function(){
      this.attackMonster(10, 20);
      this.monsterAttacks();
    },
    attackMonster: function(min, max){
      let damage = this.calculateDamage(min, max);
      let hard = damage > 10 ? 'hard' : '';
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster ${hard} for ${damage}`
      })
      if(this.checkWin()){
        return;
      }
    },
    monsterAttacks: function(){
      let damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits Player for ${damage}`
      })
      this.checkWin();
    },
    heal: function(){
      if(this.playerHealth <= 90){
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.monsterAttacks();
    },
    giveUp: function(){
      this.gameIsRunning = false;
    },
    calculateDamage: function(min, max){
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function(){
      if (this.monsterHealth <= 0) {
        // confirm built in
        if (confirm('You won! New Game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New Game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
