function promiseGetRequest(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve(JSON.parse(request.responseText));
                } else {
                    reject(`ERROR ${request.status} while processing ${url}`);
                }
            }

        };
        request.send();
    });
}

class Enemie {
    constructor(name, race, strength, vitality, defense, magic, weapon, armor) {
        this.name = name;
        this.race = race;
        this.strength = strength;
        this.vitality = vitality;
        this.defense = defense;
        this.dexterity = dexterity;
        this.magic = magic;
        this.weapon = weapon;
        this.armor = armor;
        this.level = level;
        this.score = 0;
        this.status = 1;
        //0 = dead
        //1 = alive
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
    get strength() {
        return this._strength;
    }

    set strength(value) {
        this._strength = value;
    }

    get vitality() {
        return this._vitality;
    }

    set vitality(value) {
        this._vitality = value;
    }

    get defense() {
        return this._defense;
    }

    set defense(value) {
        this._defense = value;
    }

    get dexterity() {
        return this._dexterity;
    }

    set dexterity(value) {
        this._dexterity = value;
    }

    get magic() {
        return this._magic;
    }

    set magic(value) {
        this._magic = value;
    }

    get score() {
        return this._score;
    }

    set score(value) {
        this._score = value;
    }

    get armor() {
        return this._armor;
    }

    set armor(value) {
        this._armor = value;
    }

    get weapon() {
        return this._weapon;
    }

    set weapon(value) {
        this._weapon = value;
    }

    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    levelUp() {
        this._level++;
        this._vitality += 10;
        this._strength += 1;
        this._dexterity += 0.1;
    }



    takeDamage(damage) {

        this._vitality -= damage;
        if (this._vitality <= 0) {
            this._status = 0;
        }
    }
}


class Weapon {
    constructor(name, damage, speed, range) {
        this.name = name;
        this.damage = damage;
        this.speed = speed;
        this.range = range;
    }
    get range() {
        return this._range;
    }

    set range(value) {
        this._range = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get damage() {
        return this._damage;
    }

    set damage(value) {
        this._damage = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }
}
class Player {
    constructor(name, password, race) {
        this.name = name;
        this.password = password;
        this.race = race;
        this.strength = 10;
        this.vitality = 100;
        this.defense = 0;
        this.dexterity = 1;
        this.magic = 10;
        this.weapon = null;
        this.armor = null;
        this.level = 0;
        this.score = 0;
        this.status = 1;
        //0 = dead
        //1 = alive
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
    get strength() {
        return this._strength;
    }

    set strength(value) {
        this._strength = value;
    }

    get vitality() {
        return this._vitality;
    }

    set vitality(value) {
        this._vitality = value;
    }

    get defense() {
        return this._defense;
    }

    set defense(value) {
        this._defense = value;
    }

    get dexterity() {
        return this._dexterity;
    }

    set dexterity(value) {
        this._dexterity = value;
    }

    get magic() {
        return this._magic;
    }

    set magic(value) {
        this._magic = value;
    }

    get score() {
        return this._score;
    }

    set score(value) {
        this._score = value;
    }

    get armor() {
        return this._armor;
    }

    set armor(value) {
        this._armor = value;
    }

    get weapon() {
        return this._weapon;
    }

    set weapon(value) {
        this._weapon = value;
    }

    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    levelUp() {
        this._level++;
        this._vitality += 10;
        this._strength += 1;
        this._dexterity += 0.1;
    }

    takeDamage(damage) {

        this._vitality -= damage;
        if (this._vitality <= 0) {
            this._status = 0;
        }
    }
}
class Race {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}



class weaponRepository {
    constructor() {
        this._weapons = [];
        giveWeapons();
    }

    get weapons() {
        return this._weapons;
    }

    giveWeapons() {
        this._weapons.push(new Weapon('sword', 10, 2, 2));
        this._weapons.push(new Weapon('dagger', 5, 4, 1));
        this._weapons.push(new weapon('longsword', 20, 1, 3));
        this._weapons.push(new Weapon('axe', 17, 1, 2));
    }
}
class RaceRepository {
    constructor() {
        this._races = [];
        this.giveRaces();
    }

    get races() {
        return this._races;
    }

    giveRaces() {
        this._races.push(new Race('human'));
        this._races.push(new Race('orc'));
        this._races.push(new Race('elf'));
        this._races.push(new Race('crabpeople'));
        this._races.push(new Race('lizardmen'));
        this._races.push(new Race('memes'));
    }
}

class playerRepository {
    constructor() {
        this.players = [];
        this.getPlayers();
    }

    get players() {
        return this._players;
    }

    set players(value) {
        this._players = value;
    }

    playerExists(name) {
        this._players.forEach((player) => {
            if (player.name === name) {
                return player;
            }
        });
        return false;
    }
    getPlayerNames() {
        return this._players.map(m => {
            return m.name;
        })
    }

    getIndexOfPlayer(player) {
        return this._players.forEach((el, i) => {
            if (el.name = player.name) {

                return i;
            } else return -1;
        });
    }

    addPlayer(player) {
        if(this._players.length > 0){
            console.log(this.getPlayerNames());
            if (this.getPlayerNames.indexOf(player.name)===-1) {
                const mes = document.getElementById('message');
                mes.innerHTML = `the name ${player.name} already exists, be wise, be creative!`;
                consol.log('player already exists');
                return;
            }
        }


        this._players.push(new Player(player.name, player.password, player.race));
        this.setPlayers();
    }

    savePlayer(player) {
        this._players.splice(this.getIndexOfPlayer(player), 1);
        this._players.push(player);
        this.setPlayers(this._players);
    }

    deletePlayer(player) {
        const pos = this.getIndexOfPlayer(player);
        if (pos === -1) {
            const mes = document.getElementById('message');
            mes.innerHTML = `couldn't delete ${player.name}`;
            return;
        }
        this._players.splice(pos, 1);
        setPlayers();
    }

    setPlayers() {
        const fs = require('fs');
        const content = JSON.stringify(this._players);
        fs.writeFile("/data/players.json", content,(err)=> {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    }

    getPlayers() {
        promiseGetRequest('data/players.json')
            .then((data) => {
                data.forEach(player => {
                    this.addPlayer(player);
                });

            }).catch((rejected) => {
                console.log(rejected);
                const testPlayer = {
                    name: "test",
                    password: "test",
                    race: "elf"
                }
                this.addPlayer(testPlayer);
                console.log('lul');
            });
    }

}
class Game {
    constructor(player, difficulty) {
        this.player = player;
        this.difficulty = difficulty;
        this.status = 1;
        //1 : initiated
        //2 : won
        //3 : defeated
        this.enemies = [];
        this.generateEnemies();
    }

    get difficulty() {
        return this._difficulty;
    }

    set difficulty(value) {
        this._difficulty = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get player() {
        return this._winner;
    }

    set player(value) {
        this._winner = value;
    }

    get enemies() {
        return this._enemies;
    }

    set enemies(val) {
        this._enemies = val;
    }

    generateEnemies() {

    }

}
class gameComponent {
    constructor() {
        this.pr = new playerRepository();
        this.rr = new RaceRepository();
        this.cv = document.getElementById('cv');
        this.ctx = this._cv.getContext('2d');
        this.initialise();

    }

    get cv() {
        return this._cv;
    }

    set cv(val) {
        this._cv = val;
    }

    get ctx() {
        return this._ctx;
    }

    set ctx(val) {
        this._ctx = val;
    }

    get pr() {
        return this._pr;
    }

    set pr(val) {
        this._pr = val;
    }

    get rr() {
        return this._rr;
    }

    set rr(val) {
        this._rr = val;
    }

    initialise() {
        this._cv.width = 500;
        this._cv.height = 500;
        var img = new Image();
        img.src = "images/theRpgProject.png";
        img.onload = () => {
            this._ctx.drawImage(img, 0, 0, this._cv.width, this._cv.height);
        }
        const name = document.getElementById('name');
        const psw = document.getElementById('password');
        const button = document.getElementById('login');
        button.onclick = () => {
            this.login(name.value, psw.value);
        };
        const registerLink = document.getElementById('register');
        registerLink.onclick = () => {
            this.register();
        };
    }

    register() {
        const leftPanel = document.getElementById('leftPanel');
        const registerScreen = document.createElement('div');
        const loginScreen = document.getElementById('loginScreen');
        const form = document.createElement('form');
        const h3 = document.createElement('h3');
        const h3t = document.createTextNode('Register');
        h3.appendChild(h3t);
        form.appendChild(h3);
        const t1 = document.createTextNode('nickname:');
        const br1 = document.createElement('br');
        form.appendChild(t1);
        form.appendChild(br1);
        const nicknameInp = document.createElement('input');
        nicknameInp.type = 'text';
        nicknameInp.name = 'name';
        nicknameInp.id = 'name';
        form.appendChild(nicknameInp);
        const br2 = document.createElement('br');
        form.appendChild(br2);
        const t2 = document.createTextNode('password:');
        const br3 = document.createElement('br');
        form.appendChild(t2);
        form.appendChild(br3);
        const passwordInp = document.createElement('input');
        passwordInp.type = 'text';
        passwordInp.name = 'password';
        passwordInp.id = 'password';
        form.appendChild(passwordInp);
        const br4 = document.createElement('br');
        form.appendChild(br4);
        const t3 = document.createTextNode('validate password:');
        const br5 = document.createElement('br');
        form.appendChild(t3);
        form.appendChild(br5);
        const valPasswordInp = document.createElement('input');
        valPasswordInp.type = 'text';
        valPasswordInp.name = 'password';
        valPasswordInp.id = 'password';
        form.appendChild(passwordInp);
        const br6 = document.createElement('br');
        form.appendChild(br6);
        const t4 = document.createTextNode('e-mail:');
        const br7 = document.createElement('br');
        form.appendChild(t4);
        form.appendChild(br7);
        const emailInp = document.createElement('input');
        emailInp.type = 'text';
        emailInp.name = 'email';
        emailInp.id = 'email';
        form.appendChild(emailInp);
        const br8 = document.createElement('br');
        form.appendChild(br8);
        registerScreen.appendChild(form)
        const login = document.createElement('a');
        login.appendChild(document.createTextNode('Login'));
        login.onclick = ()=>{
            leftPanel.replaceChild(loginScreen,registerScreen);
        };
        registerScreen.appendChild(login);

        leftPanel.replaceChild(registerScreen, loginScreen);
    }

    login(name, psw) {
        const mes = document.getElementById('message');

        if (!this._pr.playerExists()) {
            mes.innerHTML = "The player you've given does not exist!";
        } else {
            const player = this._pr.playerExists();
            if (player.password !== psw) {
                mes.innerHTML = "the password for the given nickname is not correct!"
            } else {
                this.menuToHtml(player);
            }
        }
    }
    menuToHtml(player) {

    }
    drawGame(game) {

    }
    drawItems() {

    }
    drawEnemies() {

    }



}

function init() {
    const gc = new gameComponent();
}


window.onload = init(this);