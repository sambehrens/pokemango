// declare variables here
var mangos = 0;
var mps = 0;
var mpc = 1;
var upgrades = [
    {
        name: "get a mango tree",
        cost: 50,
        increase: 1,
        unlocked: true,
        purchased: 0
    },
    {
        name: "get a picker stick",
        cost: 150,
        increase: 4,
        unlocked: false,
        purchased: 0
    },
    {
        name: "get a little helper boy",
        cost: 250,
        increase: 7,
        unlocked: false,
        purchased: 0
    },
    {
        name: "gnecitally mofidy htem",
        cost: 1000,
        increase: 14,
        unlocked: false,
        purchased: 0
    },
    {
        name: "start a mango fighting ring",
        cost: 3500,
        increase: 26,
        unlocked: false,
        purchased: 0
    },
    {
        name: "trade mangos for harambe",
        cost: 8000,
        increase: 45,
        unlocked: false,
        purchased: 0
    },
    {
        name: "find the fountain of mangos",
        cost: 50000,
        increase: 120,
        unlocked: false,
        purchased: 0
    },
    {
        name: "buy a mango god",
        cost: 150000,
        increase: 200,
        unlocked: false,
        purchased: 0
    },
    {
        name: "kill the papaya god",
        cost: 500000,
        increase: 503,
        unlocked: false,
        purchased: 0
    },
    {
        name: "get chramndeer",
        cost: 1420666,
        increase: 1111,
        unlocked: false,
        purchased: 0
    }
];
var cntx;
window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    cntx = ctx;
    var mango = document.getElementById("mango");
    ctx.drawImage(mango, 0, 20, 250, 100);
    
    c.onclick = function (event) {
        clickMango(event);
        console.log(mangos);
    }
    start();
};

// set them here
function start() {
    $("#manPerSec").text("MPS: " + mps)
    displayUpgrades();
}

function displayUpgrades() {
    for (var i = 0; i < upgrades.length; i += 1) {
        if (upgrades[i].unlocked && upgrades[i].purchased == 0) {
            $('<div id="upgrade' + (i+1) + '" class="upgrade"><p id="numberBoughten' + (i+1) + '" class="mumbot">0</p><p class="upgradeText">' + upgrades[i].name + '</p><p id="up' + (i+1) + 'Price" class="upgradeText">price: ' + upgrades[i].cost + '</p><p class="mpsupgrade">mps: ' + upgrades[i].increase + '</p></div>').hide().appendTo("#upgradeMenu").fadeIn();
        }
    }
}

function clickMango(event) {
    mpc = 1 + Math.floor(mps/50);
    mangos += mpc;
    updateHUD();
    $('<p style="font-size: ' + Math.floor((Math.random() * 15) + 12) + '; position: absolute; margin-left: ' + (event.pageX-30-Math.random()*11) + ';margin-top: ' + (event.pageY-30-Math.random()*11) + '">+' + mpc + '</p>').appendTo("body").fadeOut("slow").remove(delay(1000));
//    cntx.font = "30px Verdana";
//    cntx.fillText("+" + mpc,10,50);
}

function mangosPered() {
    mangos += mps/10;
    updateHUD();
}

function upgradeMPS(index) {
    if (mangos >= upgrades[index].cost) {
        mps += upgrades[index].increase;
        mangos -= upgrades[index].cost;
        upgrades[index].cost += Math.ceil(upgrades[index].cost*0.1);
        upgrades[index].purchased += 1;
        if (upgrades[index].purchased == 1) {
            if (upgrades.length-1 > index) {
                upgrades[index + 1].unlocked = true;
                displayUpgrades();
            }
        }
        updateHUD();
        $('#up' + (index+1) + 'Price').text("price: " + upgrades[index].cost);
        $('#numberBoughten' + (index+1)).text(upgrades[index].purchased);
    }
}

function updateHUD() {
    $("#totMangos").text("Mangos: " + Math.round(mangos));
    $("#manPerSec").text("MPS: " + mps)
}

setInterval(mangosPered, 100);

// click functions



$(document).ready(function() {
    $(document).on('click', '#upgrade1', function() { 
        upgradeMPS(0);
    });
    $(document).on('click', '#upgrade2', function() { 
        upgradeMPS(1);
    });
    $(document).on('click', '#upgrade3', function() { 
        upgradeMPS(2);
    });
    $(document).on('click', '#upgrade4', function() { 
        upgradeMPS(3);
    });
    $(document).on('click', '#upgrade5', function() { 
        upgradeMPS(4);
    });
    $(document).on('click', '#upgrade6', function() { 
        upgradeMPS(5);
    });
    $(document).on('click', '#upgrade7', function() { 
        upgradeMPS(6);
    });
    $(document).on('click', '#upgrade8', function() { 
        upgradeMPS(7);
    });
    $(document).on('click', '#upgrade9', function() { 
        upgradeMPS(8);
    });
    $(document).on('click', '#upgrade10', function() { 
        upgradeMPS(9);
    });
});







// cookies

//setInterval(setMyCookies(), 10000);

function setMyCookies() {
//    setCookie("score", mangos, 100);
//    setCookie("mpsec", mps, 100);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function checkCookie() {
    var username=getCookie("username");
    if (username!="") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
//    var score=getCookie("score");
////    var mpsec=getCookie("mpsec");
//    console.log("check cookie function");
//    if (score!="") {
//        mangos=parseFloat(score);
////        mps=parseFloat(mpsec);
//        console.log("checkCookie mangos: " + score + ", mps: " + mpsec);
//    }
}