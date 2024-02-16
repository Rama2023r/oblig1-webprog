let billetter = [];

function kjøpbilleter() {
    const valgFilm = document.getElementById("filmer").value;
    const antall = document.getElementById("antall").value;

    const fornavn = document.getElementById("fornavn").value;

    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("tlf").value;
    const epost = document.getElementById("epost").value;

    let ikkefeil = true;

    if(valgFilm.value == "Velg film"){
      document.getElementById("feilFilm").innerHTML = "må velge film";
      ikkefeil = false;
    }
    else{
      document.getElementById("feilFilm").innerHTML = "";
      ikkefeil = true;
    }



    if (antall == "") {
        document.getElementById("feilAntall").innerHTML = "må skrive noe i antall";
      ikkefeil = false;
    } else {
        document.getElementById("feilAntall").innerHTML = " ";

      ikkefeil = true;
    }
    if (fornavn == "") {
        document.getElementById("feilfornavn").innerHTML = "må skrive noe i fornavn";
      ikkefeil = false;
    } else {
        document.getElementById("feilfornavn").innerHTML = " ";
      ikkefeil = true;
    }
    if (etternavn == "") {
        document.getElementById("feiletternavn").innerHTML = "må skrive noe i etternavn";
      ikkefeil = false;
    } else {
        document.getElementById("feiletternavn").innerHTML = " ";
      ikkefeil = true;
    }

    if (epost == "") {
        document.getElementById("feilepost").innerHTML = "må skrive noe i epost";
      ikkefeil = false;
    } else if (!epost.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
        document.getElementById("feilepost").innerHTML = "må skrive valid epost";
      ikkefeil = false;
    } else {
        document.getElementById("feilepost").innerHTML = " ";
      ikkefeil = true;
    }


  if (telefonnr == "") {
    document.getElementById("feiltlf").innerHTML = "må skrive noe i telephone";
    ikkefeil = false;
  }
  else if(!telefonnr.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})$/)){
    document.getElementById("feiltlf").innerHTML = "må skrive valid telephone";
    ikkefeil = false;
  }
  else{
    document.getElementById("feiltlf").innerHTML = " ";
    ikkefeil = true;
  }

  if(ikkefeil == true){
let billet = {
  film:valgFilm,
  antall:antall,
  fornavn:fornavn,
  etternavn:etternavn,
  telefonnr:telefonnr,
  epost:epost
}

    billetter.push(billet);
     document.getElementById("filmer").value=""
  document.getElementById("antall").value=""

     document.getElementById("fornavn").value=""

    document.getElementById("etternavn").value=""
     document.getElementById("tlf").value=""
    document.getElementById("epost").value=""

     let ut = "<table><tr><th>film</th><th>antall</th><th>fornavn</th><th>etternavn</th><th>telefonnr</th><th>epost</th>" +
         "</tr>";

    for(let i = 0; i<billetter.length; i++){
      ut += "<tr>" +
          "<td>"+billetter[i].film+ "</td>"+
          "<td>"+billetter[i].antall+ "</td>"+
          "<td>"+billetter[i].fornavn+ "</td>"+
          "<td>"+billetter[i].etternavn+ "</td>"+
          "<td>"+billetter[i].telefonnr+ "</td>"+
          "<td>"+billetter[i].epost+ "</td>"+
          "</tr>";
    }
    ut += "</table>";
    document.getElementById("output").innerHTML= ut;
  }
}

function slett() {
  billetter = [];
  document.getElementById("output").innerHTML = ""
}