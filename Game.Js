let playerMoney = 0;
let playerLvl = 1;
let clickMultiplier = 1;
let upgradeCost = 50;

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

playerMoney = parseInt(getCookie('playerMoney')) || 0;
playerLvl = parseInt(getCookie('playerLvl')) || 1;
clickMultiplier = parseInt(getCookie('clickMultiplier')) || 1;
upgradeCost = parseInt(getCookie('upgradeCost')) || 50;

function saveProgress() {
    setCookie('playerMoney', playerMoney, 30);
    setCookie('playerLvl', playerLvl, 30);
    setCookie('clickMultiplier', clickMultiplier, 30);
    setCookie('upgradeCost', upgradeCost, 30);
}

function createMenu() {
    const mainMenu = document.createElement('div');
    mainMenu.className = 'mainMenu';
    mainMenu.style.height = '700px';
    mainMenu.style.width = '400px';
    mainMenu.style.outline = '4px solid black';
    mainMenu.style.position = 'fixed';
    mainMenu.style.top = '50%';
    mainMenu.style.left = '50%';
    mainMenu.style.transform = 'translate(-50%, -50%)';

    const p1 = document.createElement('div');
    p1.className = 'p1';
    p1.style.height = '100%';
    p1.style.width = '100%';
    p1.style.backgroundColor = 'gray';
    p1.style.position = 'fixed';
    p1.style.zIndex = '1';

    const editButton = document.createElement('button');
    editButton.className = 'editButton';
    editButton.innerHTML = 'ATTACK'
    editButton.style.outline = '2px solid black';
    editButton.style.padding = '20px 30px';
    editButton.style.position = 'absolute';
    editButton.style.zIndex = '2';

    const upgradeButton = document.createElement('button');
    upgradeButton.className = 'upgradeButton';
    upgradeButton.innerHTML = 'Upgrade $' + upgradeCost;
    upgradeButton.style.outline = '2px solid black';
    upgradeButton.style.padding = '20px 30px';
    upgradeButton.style.position = 'absolute';
    upgradeButton.style.zIndex = '2';
    upgradeButton.style.left = '31%';

    const lvlDisplay = document.createElement('div');
    lvlDisplay.className = 'lvlDisplay';
    lvlDisplay.innerHTML = 'Alcohol LvL: ' + playerLvl;
    lvlDisplay.style.outline = '2px solid black';
    lvlDisplay.style.padding = '20px 30px';
    lvlDisplay.style.position = 'absolute';
    lvlDisplay.style.zIndex = '2';
    lvlDisplay.style.top = '92%';

    const playerMoneyDisplay = document.createElement('div')
    playerMoneyDisplay.className = 'playerMoneyDisplay';
    playerMoneyDisplay.style.outline = '2px solid black'
    playerMoneyDisplay.style.padding = '20px 30px';
    playerMoneyDisplay.style.backgroundColor = 'gray';
    playerMoneyDisplay.style.position = 'absolute';
    playerMoneyDisplay.style.zIndex = '2';
    playerMoneyDisplay.style.top = '0';
    playerMoneyDisplay.style.right = '0';
    playerMoneyDisplay.innerHTML = 'Money: ' + playerMoney;

    const gifImage = document.createElement('image');
    gifImage.className = 'gifImage'
    gifImage.src = 'https://raw.githubusercontent.com/HalF-siDe/random-clicker-game/main/New%20Piskel.gif';
    gifImage.style.position = 'fixed';
    gifImage.style.height = 300
    gifImage.style.width = 300
    gifImage.style.top = '50%';
    gifImage.style.left = '50%';
    gifImage.style.transform = 'translate(-50%, -50%)';

    const gameIcon = document.createElement('img');
    gameIcon.src = 'https://raw.githubusercontent.com/HalF-siDe/random-clicker-game/main/beer.png';
    gameIcon.style.zIndex = '2';
    gameIcon.style.height = 40;
    gameIcon.style.width = 40;
    
    const settingsButton = document.createElement('div');
    settingsButton.className = 'settingsButton';
    settingsButton.style.position = 'absolute';
    settingsButton.style.zIndex = '2';
    settingsButton.style.bottom = '10px';  // Adjusted position from 'top' to 'bottom'
    settingsButton.style.right = '10px';   // Adjusted position from 'left' to 'right'
    settingsButton.style.width = '50px';
    settingsButton.style.height = '50px';
    settingsButton.style.backgroundImage = 'url(https://raw.githubusercontent.com/HalF-siDe/random-clicker-game/main/settings-sliders.png)';
    settingsButton.style.backgroundSize = 'cover';
    settingsButton.style.cursor = 'pointer';


    const settingsMenu = document.createElement('div');
    settingsMenu.className = 'settingsMenu';
    settingsMenu.style.display = 'none';
    settingsMenu.style.position = 'absolute';
    settingsMenu.style.bottom = '65px';
    settingsMenu.style.right = '10px';
    settingsMenu.style.width = '150px';
    settingsMenu.style.backgroundColor = 'white';
    settingsMenu.style.border = '1px solid black';
    settingsMenu.style.padding = '10px';

    const clearProgressButton = document.createElement('button');
    clearProgressButton.innerHTML = 'Clear Progress';
    clearProgressButton.style.marginBottom = '10px';

    const exportButton = document.createElement('button');
    exportButton.innerHTML = 'Export Progress';
    exportButton.style.marginBottom = '5px';

    const importButton = document.createElement('button');
    importButton.innerHTML = 'Import Progress';

    mainMenu.appendChild(playerMoneyDisplay);
    mainMenu.appendChild(editButton);
    mainMenu.appendChild(upgradeButton);
    mainMenu.appendChild(p1);
    mainMenu.appendChild(lvlDisplay)
    mainMenu.appendChild(gifImage)
    mainMenu.appendChild(gameIcon)
    mainMenu.appendChild(settingsButton)
    mainMenu.appendChild(settingsMenu)

    document.body.appendChild(mainMenu);
    document.body.appendChild(settingsButton);
    document.body.appendChild(settingsMenu);

    function updatePlayerMoneyDisplay() {
        playerMoneyDisplay.innerHTML = 'Money: ' + playerMoney;
    }

    function updatePlayerLvLdisplay() {
        if (playerMoney >= 1000) {
            playerLvl = 5;
        } else if (playerMoney >= 500) {
            playerLvl = 4;
        } else if (playerMoney >= 100) {
            playerLvl = 3;
        } else if (playerMoney >= 50) {
            playerLvl = 2;
        } else {
            playerLvl = 1;
        }
    
        lvlDisplay.innerHTML = 'Alcohol LvL: ' + playerLvl;
    }
    
    upgradeButton.addEventListener('click', function () {
        if (playerMoney >= upgradeCost) {
            playerMoney -= upgradeCost;
            clickMultiplier += 1;
            upgradeCost *= 2;
    
            updatePlayerMoneyDisplay();
            upgradeButton.innerHTML = 'Upgrade $: ' + upgradeCost;
            saveProgress();
        }
    });
    

    editButton.addEventListener('click', function () {
        playerMoney += 1 * clickMultiplier;
        updatePlayerMoneyDisplay();
        playSpriteAnimation('https://raw.githubusercontent.com/HalF-siDe/random-clicker-game/main/bubblePopAnimtion/bubblePop_3.png');
        saveProgress();
    });

    function playSpriteAnimation(spriteURL) {
        const sprite = document.createElement('img');
        sprite.src = spriteURL;
        sprite.style.position = 'absolute';
    
        const randomX = event.clientX + Math.floor(Math.random() * 61) - 30;
        const randomY = event.clientY + Math.floor(Math.random() * 61) - 30;
    
        sprite.style.left = randomX + 'px';
        sprite.style.top = randomY + 'px';
        sprite.style.imageRendering = 'pixelated';
        sprite.style.pointerEvents = 'none';
        sprite.style.scale = 10;
    
        document.body.appendChild(sprite);
    
        let frame = 0;
        const totalFrames = 8;
        const frameDelay = 166;
    
        function animate() {
            sprite.src = `https://raw.githubusercontent.com/HalF-siDe/random-clicker-game/main/bubblePopAnimtion/bubblePop_${frame}.png`;
            frame = (frame + 1) % totalFrames;
    
            if (frame !== 0) {
                setTimeout(animate, frameDelay);
            } else {
                sprite.remove();
            }
        }
    
        animate();
    }
    

    setInterval(function () {
        updatePlayerLvLdisplay();
        saveProgress();
    }, 1000);

    settingsButton.addEventListener('click', function () {
        settingsMenu.style.display = settingsMenu.style.display === 'none' ? 'block' : 'none';
    });

    clearProgressButton.addEventListener('click', function () {
        playerMoney = 0;
        playerLvl = 1;
        clickMultiplier = 1;
        upgradeCost = 50;

        saveProgress();

        updatePlayerMoneyDisplay();
        updatePlayerLvLdisplay();
        upgradeButton.innerHTML = 'Upgrade $: ' + upgradeCost;
        settingsMenu.style.display = 'none';
    });

    exportButton.addEventListener('click', function () {
        const exportedData = JSON.stringify({ playerMoney, playerLvl, clickMultiplier, upgradeCost });
        const blob = new Blob([exportedData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ALCOHOL_SIMULATOR.lop';
        a.click();
        settingsMenu.style.display = 'none';
    });

    importButton.addEventListener('click', function () {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.lop';
        input.addEventListener('change', function () {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = function (event) {
                const importedData = JSON.parse(event.target.result);
                playerMoney = importedData.playerMoney;
                playerLvl = importedData.playerLvl;
                clickMultiplier = importedData.clickMultiplier;
                upgradeCost = importedData.upgradeCost;

                saveProgress();

                updatePlayerMoneyDisplay();
                updatePlayerLvLdisplay();
                upgradeButton.innerHTML = 'Upgrade $: ' + upgradeCost;
            };
            reader.readAsText(file);
            settingsMenu.style.display = 'none';
        });
        input.click();
    });

    settingsMenu.appendChild(clearProgressButton);
    settingsMenu.appendChild(exportButton);
    settingsMenu.appendChild(importButton);
}

createMenu();
