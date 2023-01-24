
function keszito() {
    document.write("Joó Péter <hr>");
    document.write("Junior Frontend Fejlesztő és Webfejlesztő <hr>");
    document.write("#Team 11 <hr>");
};

keszito();



function hatvanyozo(szam, hatvany) {
    let osszeg = szam ** hatvany;
    document.write(`A megadott ${szam} hatványa: ${osszeg}`);
    return osszeg;
};

hatvanyozo(2, 3);


function parosLetrehoz(also, felso) {
    let randomSzam = Math.round(Math.random() * (felso - also)) + also;
    document.write("A generált random szám értéke:" + randomSzam);
}

parosLetrehoz(1, 100);




function testTomegIndex(suly, magassag) {
    let index = suly / (magassag * magassag);

    if (index < 16) {
        document.write("sulyosSovanysag");
    }
    else if (index < 17) {
        document.write("mersekeltSovanysag")
    }
    else if (index < 18.5) {
        document.write("enyheSovanysag")
    }
    else if (index < 25) {
        document.write("normalisTestsuly")
    }
    else if (index < 30) {
        document.write("tulsulyos")
    }
    else if (index < 35) {
        document.write("IfokuElhizas")
    }
    else if (index < 40) {
        document.write("IIfokuElhizas")
    }
    else {
        document.write("IIIfokuSulyosElhizas")
    }
}

testTomegIndex(200, 2)



function egeszOsztoE(szam, oszto) {
    let osszeg = szam % oszto == 0;
    if (osszeg == 0) {
        document.write("Nem osztható")
    }
    else {
        document.write(`A megadott szám ${szam} a megadott osztóval ${oszto}
            maradék nélkül osztható`);
    }
}

egeszOsztoE(2048, 3);

