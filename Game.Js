let mainMenuVisible = false;
let playerMoney = 0;

function createMenu() {
    const mainMenu = document.createElement('div');
    mainMenu.className = 'mainMenu';
    mainMenu.style.height = '700px';
    mainMenu.style.width = '400px';
    mainMenu.style.outline = '4px solid black';
    mainMenu.style.display = 'none';
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

    const playerMoneyDisplay = document.createElement('div')
    playerMoneyDisplay.className = 'playerMoneyDisplay';
    playerMoneyDisplay.style.outline = '2px solid black'
    playerMoneyDisplay.style.padding = '20px 30px';
    playerMoneyDisplay.style.backgroundColor = 'gray';
    playerMoneyDisplay.style.position = 'absolute';
    playerMoneyDisplay.style.zIndex = '2';
    playerMoneyDisplay.style.top = '0';
    playerMoneyDisplay.style.right = '0';

    function updatePlayerMoneyDisplay() {
        playerMoneyDisplay.innerHTML = 'Money: ' + playerMoney;
    }

    mainMenu.appendChild(playerMoneyDisplay);
    mainMenu.appendChild(editButton);
    mainMenu.appendChild(p1);

    document.body.appendChild(mainMenu);

    editButton.addEventListener('click', function () {
        playerMoney += 1;
        updatePlayerMoneyDisplay();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Insert') {
            mainMenuVisible = !mainMenuVisible;
            mainMenu.style.display = mainMenuVisible ? 'block' : 'none';
        }
    });

    updatePlayerMoneyDisplay();
}

createMenu();
