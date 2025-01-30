class Skill{
    constructor(cost, damage, power){
        this.cost = cost;
        this.damage = damage;
        this.power = power;
}
}

class Character{
    constructor(name, level, str, vig, dex, agi, rfx, acu, con, spi){
        this.name = name;
        this.level = level;
        this.str = str;
        this.vig = vig;
        this.dex = dex;
        this.agi = agi;
        this.rfx = rfx;
        this.acu = acu;
        this.con = con;
        this.spi = spi;
}
}

const Azul = new Skill(10, 7, 2.5)