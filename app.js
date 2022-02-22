let damage = 0;
let fireDamage = 3;
let iceDamage = 1;
let poisonDamage = 4;
function ButtonFunc(elem) {
    let x = elem.id;
    switch (x) {
        case '1':
            damage=damage+fireDamage-1;
            break;
        case '2':
            damage=damage+iceDamage+1;
            break;
        case '3':
            damage=damage+poisonDamage;
            break;
    }
    document. getElementById("status"). innerHTML = "Dragon Damage : "+damage;
    if(damage>=10){
        document. getElementById("win"). innerHTML = "You Win !";
    }
}