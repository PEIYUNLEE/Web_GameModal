$(document).ready(function () {
    sceneSwitchItem();
    modalController();
});

let modalController = () => {
    for (let i = 1; i < 5; i++) {
        if (i == 1) {
            $('#btn-1-1-' + i).click(() => {
                checkAns(1, 1, i, true);
            })
        } else {
            $('#btn-1-1-' + i).click(() => {
                checkAns(1, 1, i, false);
            })
        }
    }
    // $('#btn-1-1-1').click(()=>{
    //     checkAns(1,1,1,true);
    // })

}

let checkAns = (n1, n2, n3, isCorrect) => {
    $('#Modal-' + n1 + '-' + n2).modal('hide');
    if (isCorrect == true) {
        $('#Modal-sus-' + n1 + '-' + n2).modal('show');
    } else {
        $('#Modal-fail').modal('show');
    }
}

let sceneSwitchItem = () => {
    $('.home').click((event) => {
        sceneSwitch(0);
    });


    for (let i = 1; i <= 5; i++) {
        $('.scene-item-0-' + i).click((event) => {
            sceneSwitch(i);
        });
    }
}


let sceneSwitch = (sn) => {
    $('.game-home').hide();
    $('.game1').hide();
    $('.game2').hide();
    $('.game3').hide();
    $('.game4').hide();
    $('.game5').hide();
    if (sn == 0) {
        $('.game-home').show();
    }
    else {
        $('.game' + sn).show();
    }
}