
const solder = {
    name: 'Khalid',
    health: '10',
    gun: {
        nameGun: "ak47",
        numberAmmunition : 30
    },
    provisions: 3,
    

    

  shoot: function () {
    if (this.gun.numberAmmunition === 0) {
        return `обойма пуста. Перезаредитесь`
    } 


    this.gun.numberAmmunition--

    console.log(`бах-бах`)
  },
  recharge: function () {
    if (this.provisions === 0) {
        return `обойма пуста. Перезаредитесь`
    }

    this.provisions-- 
    this.gun.numberAmmunition = 30

    console.log(`перезарядка...`)




  },
  hurt: function () {
    if (this.health === 0) {
        
    }
    this.health--
    console.log(`Ты проиграл`);
  },
} 

solder.shoot()
solder.recharge()
solder.hurt()
console.log(solder)