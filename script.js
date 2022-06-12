"use strict";
const playerLives = document.querySelector(".playerLives");
const monsterLives = document.querySelector(".monsterLives");
const gameOver = document.querySelector(".gameOver");
const weaponsList = document.querySelector(".weaponsList");
const attackBtn = document.querySelector("button");
const gold = document.querySelector(".gold p");
const potion = document.querySelector(".potion");
const startAgain = document.querySelector(".startAgain");
const livesLeftIndicatorPl = document.querySelectorAll("h2")[0];
const livesLeftIndicatorMon = document.querySelectorAll("h2")[1];
let goldUnits = 0;
let monsterLivesBeginning = 100;
let playersLivesBeginning = 100;
let isGameOver = false;
attackBtn.onclick = (e) => {
    e.preventDefault();
    // const minusRandom = Math.floor(Math.random() * 10) + 1;
    // monsterLivesBeginning = monsterLivesBeginning - minusRandom
    enableWeapons();
    monsterLives.style.width = `${monsterLivesBeginning}%`;
    livesLeftIndicatorMon.innerText = `lives left: ${monsterLivesBeginning}%`;
    console.log(`Monster: ${monsterLivesBeginning}`);
    setTimeout(() => {
        monsterAttact();
    }, 1000);
    setTimeout(() => {
        countGold();
    }, 1500);
    if (monsterLivesBeginning <= 0) {
        monsterLives.style.width = "0%";
        livesLeftIndicatorMon.innerText = `lives left: 0%`;
        gameOver.style.display = "flex";
        startAgain.style.display = "flex";
        attackBtn.style.display = "none";
        isGameOver == true;
    }
    if (isGameOver == true)
        return;
};
function monsterAttact() {
    // MONSTERS RANDOMLY GENERATED DAMAGE
    const minusRandomMonst = Math.floor(Math.random() * 10) + 1;
    console.log(minusRandomMonst);
    console.log(`minusRandomMonst: ${minusRandomMonst}`);
    setTimeout(() => {
        if (bow.classList.contains("border")) {
            playersLivesBeginning = playersLivesBeginning - minusRandomMonst;
        }
        if (wand.classList.contains("border")) {
            const healRandom = Math.round(Math.random() * 100) + 1;
            console.log(`wand clicked, healRandom ${healRandom}`);
            if (healRandom <= 40) {
                playersLivesBeginning = playersLivesBeginning - minusRandomMonst + 10;
                console.log(`wand clicked, heal succesfull ${playersLivesBeginning}`);
                if (playersLivesBeginning >= 100) {
                    playersLivesBeginning = 100;
                    playerLives.style.width = "100%";
                    livesLeftIndicatorPl.innerText = `lives left: 100%`;
                }
            }
            else {
                playersLivesBeginning = playersLivesBeginning - minusRandomMonst;
                console.log(`wand clicked, heal not succesfull ${playersLivesBeginning}`);
            }
        }
        if (sword.classList.contains("border")) {
            const dodgeRandom = Math.floor(Math.random() * 100) + 1;
            console.log(`dodgeRandom: ${dodgeRandom}`);
            if (dodgeRandom <= 30) {
                playersLivesBeginning = playersLivesBeginning - 0;
                console.log(`Player: ${playersLivesBeginning}`);
            }
            else {
                playersLivesBeginning = playersLivesBeginning - minusRandomMonst;
            }
        }
        playerLives.style.width = `${playersLivesBeginning} %`;
        console.log(`Player: ${playersLivesBeginning}`);
        livesLeftIndicatorPl.innerText = `lives left: ${playersLivesBeginning}%`;
    }, 1000);
    if (playersLivesBeginning <= 0) {
        playerLives.style.width = "0%";
        livesLeftIndicatorPl.innerText = `lives left: 0%`;
        gameOver.style.display = "flex";
        startAgain.style.display = "flex";
        attackBtn.style.display = "none";
        isGameOver == true;
    }
    if (isGameOver == true)
        return;
    setTimeout(() => {
        sword.classList.remove("border");
        bow.classList.remove("border");
        wand.classList.remove("border");
    }, 2000);
}
function countGold() {
    const randomGoldUnits = Math.floor(Math.random() * 10) + 1;
    goldUnits = goldUnits + randomGoldUnits;
    gold.innerText = `Gold: ${goldUnits}`;
}
potion.onclick = (e) => {
    e.preventDefault();
    console.log(goldUnits);
    if (goldUnits >= 50) {
        playersLivesBeginning = 100;
        playerLives.style.width = "100%";
        livesLeftIndicatorPl.innerText = `lives left: 100%`;
        goldUnits = goldUnits - 50;
        gold.innerText = `Gold: ${goldUnits}`;
    }
    else
        return;
};
const weapons = [
    {
        name: "sword",
        image: "https://thumbs.dreamstime.com/b/pixel-video-game-sword-icon-cartoon-retro-style-set-107893340.jpg",
        effect: "30% chance to dodge enemy attack",
        maxDamage: 12
    },
    {
        name: "bow",
        image: "https://images.cdn4.stockunlimited.net/preview1300/pixel-art-gaming-bow_2022318.jpg",
        effect: "25% chance to do double damage on attack",
        maxDamage: 8
    },
    {
        name: "wand",
        image: "https://preview.pixlr.com/images/800wm/100/1/1001469305.jpg",
        effect: "40% chance to heal yourself by 10 hit points on attack",
        maxDamage: 9
    }
];
function appendWeapons() {
    weapons.map(x => {
        weaponsList.innerHTML +=
            `
           <div class="${x.name}"><img src="${x.image}" alt=""></div>
            
    `;
    });
}
appendWeapons();
const sword = document.querySelector(".sword");
const bow = document.querySelector(".bow");
const wand = document.querySelector(".wand");
function enableWeapons() {
    sword.onclick = () => {
        sword.classList.add("border");
        bow.classList.remove("border");
        wand.classList.remove("border");
        const swardRandom = Math.floor(Math.random() * 12) + 1;
        console.log(`Sword clicked, sword random damage: ${swardRandom}`);
        monsterLivesBeginning = monsterLivesBeginning - swardRandom;
        console.log(`Sword clicked, monsterLivesBeginning: ${monsterLivesBeginning}`);
    };
    bow.onclick = () => {
        bow.classList.add("border");
        wand.classList.remove("border");
        sword.classList.remove("border");
        let bowRandom = Math.floor(Math.random() * 8) + 1;
        console.log(`Bow clicked, bow random damage: ${bowRandom}`);
        const doubleDamageChanceRandom = Math.round(Math.random() * 100) + 1;
        console.log(`Bow clicked doubleDamageChanceRandom: ${doubleDamageChanceRandom}`);
        if (doubleDamageChanceRandom <= 25) {
            let doubleDamgeResult = bowRandom * 2;
            monsterLivesBeginning = monsterLivesBeginning - doubleDamgeResult;
            console.log(`If chance is doubled: ${monsterLivesBeginning}`);
        }
        else {
            monsterLivesBeginning = monsterLivesBeginning - bowRandom;
            console.log(`If chance is not doubled: ${monsterLivesBeginning}`);
        }
    };
    wand.onclick = () => {
        wand.classList.add("border");
        bow.classList.remove("border");
        sword.classList.remove("border");
        const wandRandom = Math.floor(Math.random() * 9) + 1;
        console.log(`Wand clicked, wand random damage: ${wandRandom}`);
        monsterLivesBeginning = monsterLivesBeginning - wandRandom;
        console.log(`Wand clicked, monsterLivesBeginning: ${monsterLivesBeginning}`);
    };
}
enableWeapons();
startAgain.onclick = () => {
    monsterLivesBeginning = 100;
    playersLivesBeginning = 100;
    goldUnits = 0;
    gold.innerText = `Gold: ${goldUnits}`;
    isGameOver = false;
    gameOver.style.display = "none";
    startAgain.style.display = "none";
    attackBtn.style.display = "flex";
    playerLives.style.width = `${playersLivesBeginning} %`;
    livesLeftIndicatorPl.innerText = `lives left: ${playersLivesBeginning}%`;
    monsterLives.style.width = `${monsterLivesBeginning}%`;
    livesLeftIndicatorMon.innerText = `lives left: ${monsterLivesBeginning}%`;
};
