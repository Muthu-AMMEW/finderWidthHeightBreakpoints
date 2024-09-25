window.onresize = function () {
    const finderWHB = document.getElementById("finderWHB")
    const finderWHBResult = document.getElementById("finderWHBResult")
    const width = finderWHB.clientWidth;
    const height = finderWHB.clientHeight;
    let point;

    if (width >= 1400) {
        point = "XXL  >= 1400W";
    }
    else if (width >= 1200) {
        point = "XL >= 1200W";
    }
    else if (width >= 992) {
        point = "LG >= 992W";
    }
    else if (width >= 768) {
        point = "MD >= 768W";
    }
    else if (width >= 576) {
        point = "SM >= 576W";
    }
    else {
        // (width < 576)
        point = "XS < 576";
    }

    finderWHBResult.innerHTML = `${width}W x ${height}H ${point}`;
};