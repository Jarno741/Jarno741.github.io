/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeMapselector() {
  document.getElementById("myMapselector").style.width = "0";
  document.getElementById("myAgentSelector").style.marginLeft = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("myMapSelecterOpenButton").style.visibility = "visible";
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openMapselector() {
  if (document.getElementById("myMapselector").style.width == "250px"){
    closeMapselector()
  } else {  
    document.getElementById("myMapSelecterOpenButton").style.visibility = "hidden";
    document.getElementById("myMapselector").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
 document.getElementById("myAgentSelector").style.marginLeft = "250px";
  }
}

var mapChoice
function mapselection(mapName) {
  mapChoice = mapName
  window.alert(mapName)
  openAgentSelector()
}
function openAgentSelector() {
  if (document.getElementById("myAgentSelector").style.width == "250px"){
    closeAgentSelector()
  } else {  
    document.getElementById("myAgentSelector").style.width = "250px";
  document.getElementById("main").style.marginLeft = "500px";
  }
}
function closeAgentSelector() {
    document.getElementById("myAgentSelector").style.width = "0px";
  document.getElementById("main").style.marginLeft = "250px";
  closeMapselector()
}

var abilitychoice
function abilityselection(abilityName) {
  abilitychoice = abilityName
  window.alert(abilityName)
  closeAgentSelector()
}
