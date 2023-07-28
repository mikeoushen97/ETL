const contVal = document.getElementById('control__val');
const blockVal = document.getElementById('block__val');
const sensVal = document.getElementById('sensor__val');
const lampName = document.getElementById('lighter');
const cabelName = document.getElementById('cabel');
const lampLength = document.getElementById('lamp__length');
const lampVal = document.getElementById('lamp__val');
const cabelClemVal = document.getElementById('cabel-clem__val');
const cabelVal = document.getElementById('cabel__val');

const contPrice = document.getElementById('control__price');
const blockPrice = document.getElementById('block__price');
const sensPrice = document.getElementById('sensor__price');
const lampPrice = document.getElementById('lamp__price');
const cabelClemPrice = document.getElementById('cabel-clem__price');
const cabelPrice = document.getElementById('cabel__price');
const fullPrice = document.getElementById('calc__full');

const resultBtn = document.getElementById('result');
const fullComplect = document.getElementById('standart');
const ecoComplect = document.getElementById('econom');
const controllerComplect = document.getElementById('controller');
const ladderAmount = document.getElementById('ladder-amount');
const ladderLength = document.getElementById('ladder-length');

const lampImg = document.getElementById('lighter-image');

function complectType() {
    if (fullComplect.checked) {
        contVal.value = 1;
        blockVal.value = 1;
        sensVal.value = 2;
        lampLength.value = (ladderLength.value / 10);
        lampVal.value = ladderAmount.value;
        cabelClemVal.value = ladderAmount.value;;
        cabelVal.value = 1;
        lampName.innerHTML = 'Светильник';
        cabelName.innerHTML = 'Кабель с клеммами 7.5м';

        contPrice.innerHTML = (contVal.value * 17000) - ((contVal.value * 17000) * 0.15) + ' руб';
        blockPrice.innerHTML = ((blockVal.value * 2500) - ((blockVal.value * 2500) * 0.15) + ' руб');
        sensPrice.innerHTML = ((sensVal.value * 500) - ((sensVal.value * 500) * 0.15) + ' руб');
        lampPrice.innerHTML = ((((ladderLength.value / 10) * 10) * ladderAmount.value) - (((ladderLength.value / 10) * 10) * ladderAmount.value) * 0.15) + ' руб';
        cabelClemPrice.innerHTML = ((cabelClemVal.value * 200) - ((cabelClemVal.value * 200) * 0.15) + ' руб');
        cabelPrice.innerHTML = ((cabelVal.value * 300) - ((cabelVal.value * 300) * 0.15) + ' руб');

        function moreThan24() {
            if (ladderAmount.value > 24) {
                contVal.value = contVal.value * 2;
                blockVal.value = blockVal.value * 2;
                sensVal.value = sensVal.value * 2;
            }
            else if (ladderAmount.value > 48) {
                contVal.value = 3;
                blockVal.value = 3;
                sensVal.value = 6;
            }
        }

        moreThan24()

        fullPrice.innerHTML = ((contVal.value * 17000) - ((contVal.value * 17000) * 0.15) +
            (blockVal.value * 2500) - ((blockVal.value * 2500) * 0.15) +
            (sensVal.value * 500) - ((sensVal.value * 500) * 0.15) +
            (((ladderLength.value / 10) * 10) * ladderAmount.value) - (((ladderLength.value / 10) * 10) * ladderAmount.value) * 0.15 +
            (cabelClemVal.value * 200) - ((cabelClemVal.value * 200) * 0.15) +
            (cabelVal.value * 300) - ((cabelVal.value * 300) * 0.15)) + ' руб';

    }
    else if (ecoComplect.checked) {
        contVal.value = 1;
        blockVal.value = 1;
        sensVal.value = 2;
        lampName.innerHTML = 'Светодиодная лента';
        lampLength.value = (ladderLength.value / 10);
        lampVal.value = ladderAmount.value;
        cabelName.innerHTML = 'Кабель с клеммами 0.2м';
        cabelClemVal.value = ladderAmount.value;;
        cabelVal.value = 1;

        contPrice.innerHTML = (contVal.value * 17000) - ((contVal.value * 17000) * 0.15) + ' руб';
        blockPrice.innerHTML = ((blockVal.value * 2500) - ((blockVal.value * 2500) * 0.15) + ' руб');
        sensPrice.innerHTML = ((sensVal.value * 500) - ((sensVal.value * 500) * 0.15) + ' руб');
        lampPrice.innerHTML = ((((ladderLength.value / 10) * 2.5) * ladderAmount.value)) + ' руб';
        cabelClemPrice.innerHTML = ((cabelClemVal.value * 200) + ' руб');
        cabelPrice.innerHTML = ((cabelVal.value * 300) - ((cabelVal.value * 300) * 0.15) + ' руб');

        function moreThan24() {
            if (ladderAmount.value > 24) {
                contVal.value = contVal.value * 2;
                blockVal.value = blockVal.value * 2;
                sensVal.value = sensVal.value * 2;
            }
            else if (ladderAmount.value > 48) {
                contVal.value = 3;
                blockVal.value = 3;
                sensVal.value = 6;
            }
        }

        moreThan24()

        fullPrice.innerHTML = ((contVal.value * 17000) - ((contVal.value * 17000) * 0.15) +
            (blockVal.value * 2500) - ((blockVal.value * 2500) * 0.15) +
            (sensVal.value * 500) - ((sensVal.value * 500) * 0.15) +
            (((ladderLength.value / 10) * 2.5) * ladderAmount.value) +
            (cabelClemVal.value * 200) +
            (cabelVal.value * 300) - ((cabelVal.value * 300) * 0.15)) + ' руб';
    }
    else if (controllerComplect.checked) {
        contVal.value = 1;
        blockVal.value = 1;
        sensVal.value = 2;

        contPrice.innerHTML = (contVal.value * 17000) - ((contVal.value * 17000) * 0.15) + ' руб';
        blockPrice.innerHTML = ((blockVal.value * 2500) - ((blockVal.value * 2500) * 0.15) + ' руб');
        sensPrice.innerHTML = ((sensVal.value * 500) - ((sensVal.value * 500) * 0.15) + ' руб');

        fullPrice.innerHTML = ((contVal.value * 17000) - ((contVal.value * 17000) * 0.15) +
            (blockVal.value * 2500) - ((blockVal.value * 2500) * 0.15) +
            (sensVal.value * 500) - ((sensVal.value * 500) * 0.15) + ' руб');
    }
}

resultBtn.onclick = complectType;