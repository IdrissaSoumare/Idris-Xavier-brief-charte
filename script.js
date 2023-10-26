var accordeon = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordeon.length; i++) {
  accordeon[i].addEventListener("click", function () {
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

//------------------------MENU DEROULANT AU DESSUS ---------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

const boutonBas = document.querySelector('#change')
boutonBas.addEventListener('click', function(){
    //boutonBas.innerText = "COUCOU !";
    //console.log(boutonBas) ICI, on remplace RANDOM APPRENANT par COUCOU et on le log.
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
           boutonBas.innerText = "Kriss";
        } else {
            if (tab[j] == 1) {
                boutonBas.innerText ="Audrey";
            } else {
                if (tab[j] == 2) {
                    boutonBas.innerText ="Manue";
                } else {
                    if (tab[j] == 3) {
                        boutonBas.innerText ="Severine";
                    } else {
                        if (tab[j] == 4) {
                           boutonBas.innerText ="Elodie";
                        } else {
                            if (tab[j] == 5) {
                                boutonBas.innerText ="Xavier";
                            } else {
                                if (tab[j] == 6) {
                                  boutonBas.innerText ="VIrand";
                                } else {
                                    if (tab[j] == 7) {
                                        boutonBas.innerText ="Martin";
                                    } else {
                                        if (tab[j] == 8) {
                                           boutonBas.innerText ="Davy";
                                        } else {
                                            if (tab[j] == 9) {
                                               boutonBas.innerText ="Idriss";
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
    })

//----------------------------------------------------------------------------------------------------
