var accordeon = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordeon.length; i++) {
  accordeon[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

const boutonBas = document.querySelector('#change')
boutonBas.addEventListener('click', function(){
    /*boutonBas.innerText = "COUCOU !";*/
    /*console.log(boutonBas) ICI, on remplace RANDOM APPRENANT par COUCOU et on le log.*/
    var j;
    var tab = [];

    tab[0] = 0;
    tab[1] = 1;
    tab[2] = 2;
    tab[3] = 3;
    tab[4] = 4;
    tab[5] = 5;
    tab[6] = 6;
    tab[7] = 7;
    tab[8] = 8;
    tab[9] = 9;
        tab[j] = Math.floor(Math.random() * tab.length);
        if (tab[j] == 0) {
           prompt("Kriss");
        } else {
            if (tab[j] == 1) {
                prompt ("Audrey");
            } else {
                if (tab[j] == 2) {
                    prompt ("Manue");
                } else {
                    if (tab[j] == 3) {
                        prompt("Severine");
                    } else {
                        if (tab[j] == 4) {
                           prompt("Elodie");
                        } else {
                            if (tab[j] == 5) {
                                prompt("Xavier");
                            } else {
                                if (tab[j] == 6) {
                                  prompt("VIrand");
                                } else {
                                    if (tab[j] == 7) {
                                        prompt("Martin");
                                    } else {
                                        if (tab[j] == 8) {
                                           prompt("Davy");
                                        } else {
                                            if (tab[j] == 9) {
                                               prompt("Idris");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /*boutonBas.innerText = tab[j]*/
    )
