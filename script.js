var accordeon = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
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

function main() {
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
  var j;

  for (j = 0; j <= tab.length - 1; j++) {
    tab[j] = Math.floor(Math.random() * tab.length);
    if (tab[j] == 0) {
      window.alert("Kris");
    } else {
      if (tab[j] == 1) {
        window.alert("Audrey");
      } else {
        if (tab[j] == 2) {
          window.alert("Manue");
        } else {
          if (tab[j] == 3) {
            window.alert("Severine");
          } else {
            if (tab[j] == 4) {
              window.alert("Elodie");
            } else {
              if (tab[j] == 5) {
                window.alert("Xavier");
              } else {
                if (tab[j] == 6) {
                  window.alert("VIrand");
                } else {
                  if (tab[j] == 7) {
                    window.alert("Martin");
                  } else {
                    if (tab[j] == 8) {
                      window.alert("Davy");
                    } else {
                      if (tab[j] == 9) {
                        window.alert("Idris");
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
  document.getElementById("change").innerHTML = button.replace(
    "Random Apprenant",
    tab[j]
  );
}
main();
