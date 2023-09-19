let twitchLVL = 0;
const addMoney = function (valueToAdd) {
  var checkbox = document.querySelector('input[name=money]');
  checkbox.value = parseInt(valueToAdd, 10) + parseInt(checkbox.value, 10);
};
const twitch_up = function () {
  twitchLVL += 1;
  document.getElementById('twitch_lvl').innerHTML = twitchLVL;
};
class Game extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.spritesheet('abo', './images/twitch_lvl1.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('twitch_1', './images/twitch_lvl1.png', { frameWidth: 36, frameHeight: 36 });
    this.load.spritesheet('twitch_2', './images/twitch_lvl2.png', { frameWidth: 36, frameHeight: 36 });
    this.load.spritesheet('twitch_3', './images/twitch_lvl3.png', { frameWidth: 36, frameHeight: 36 });
    this.load.spritesheet('twitch_4', './images/twitch_lvl4.png', { frameWidth: 36, frameHeight: 36 });
    this.load.spritesheet('twitch_5', './images/twitch_lvl5.png', { frameWidth: 36, frameHeight: 36 });
    this.load.spritesheet('twitch_6', './images/twitch_lvl6.png', { frameWidth: 36, frameHeight: 36 });
    this.load.spritesheet('twitch_7', './images/twitch_lvl7.png', { frameWidth: 36, frameHeight: 36 });
    this.load.spritesheet('boom', './images/explosion.png', { frameWidth: 64, frameHeight: 64, endFrame: 23 });
  }

  create() {
    var checkbox = document.querySelector('input[name=abo]');
    checkbox.onclick = () => {
      createShip();
    };
    var twitch = document.querySelector('input[name=twitch]');
    twitch.onclick = () => {
      twitchLVL = 1;
      document.getElementById('twitch_lvl').innerHTML = twitchLVL;
      createTwitch(false);
    };

    // this.add
    //   .text(400, 32, 'Click icons to collect monaayyyy', {
    //     color: '#00ff00',
    //   })
    //   .setOrigin(0.5, 0);

    var config1 = {
      key: 'move',
      frames: 'abo',
      frameRate: 4,
      repeat: -1,
    };

    var config2 = {
      key: 'explode',
      frames: 'boom',
      hideOnComplete: true,
    };

    this.anims.create(config1);
    this.anims.create(config2);

    var colors = [
      0xef658c, 0xff9a52, 0xffdf00, 0x31ef8c, 0x21dfff, 0x31aade, 0x5275de,
      0x9c55ad, 0xbd208c,
    ];

    const self = this;

    const createAbo = function () {
      var x = Phaser.Math.Between(50, 750);
      var y = Phaser.Math.Between(100, 550);
      var aboSprite = self.add.sprite(x, y, 'abo');
      aboSprite.play('move');
      aboSprite.setTint(Phaser.Utils.Array.GetRandom(colors));
      aboSprite.setInteractive();
      aboSprite.once('pointerdown', function () {
        this.clearTint();
        this.play('explode');
        createAbo(false);
        addMoney(10);
      });
      if (twitch.checked) {
        console.log('auto click');
        setTimeout(() => {
          aboSprite.emit('pointerdown');
        }, 8000 - twitchLVL * 1000);
      }
    };

    const createTwitch = function (isAutoCreated) {
      var x = Phaser.Math.Between(50, 750);
      var y = Phaser.Math.Between(100, 550);
      var twitchSprite = self.add.sprite(x, y, `twitch_${twitchLVL}`);
      twitchSprite.setInteractive();
      twitchSprite.once('pointerdown', function () {
        this.clearTint();
        this.play('explode');
        setTimeout(() => {
          !isAutoCreated && createTwitch(false);
        }, 5000);
        addMoney(1000);
      });
      if (twitch.checked && !isAutoCreated) {
        for (let i = 0; i < twitchLVL; i++) {
          setTimeout(() => {
            createTwitch(true);
          }, 1000 + i * 1000);
        }
      }
    };

    createAbo(false);
  }
}
const config = {
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  scene: Game,
  canvas: document.getElementById('game'),
};

var game = new Phaser.Game(config);