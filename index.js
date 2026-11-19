


function show_fungi(){
    document.getElementById("fungi_info").style.visibility = "visible";
    document.getElementById("bacteria_info").style.visibility = "hidden";
    document.getElementById("virus_info").style.visibility = "hidden";
    document.getElementById("prion_info").style.visibility = "hidden";
    document.getElementById("parasite_info").style.visibility = "hidden";
}

function show_bacteria(){
    document.getElementById("fungi_info").style.visibility = "hidden";
    document.getElementById("bacteria_info").style.visibility = "visible";
    document.getElementById("virus_info").style.visibility = "hidden";
    document.getElementById("prion_info").style.visibility = "hidden";
    document.getElementById("parasite_info").style.visibility = "hidden";
}

function show_virus(){
    document.getElementById("fungi_info").style.visibility = "hidden";
    document.getElementById("bacteria_info").style.visibility = "hidden";
    document.getElementById("virus_info").style.visibility = "visible";
    document.getElementById("prion_info").style.visibility = "hidden";
    document.getElementById("parasite_info").style.visibility = "hidden";
}

function show_prions(){
    document.getElementById("fungi_info").style.visibility = "hidden";
    document.getElementById("bacteria_info").style.visibility = "hidden";
    document.getElementById("virus_info").style.visibility = "hidden";
    document.getElementById("prion_info").style.visibility = "visible";
    document.getElementById("parasite_info").style.visibility = "hidden";
}

function show_parasites(){
    document.getElementById("fungi_info").style.visibility = "hidden";
    document.getElementById("bacteria_info").style.visibility = "hidden";
    document.getElementById("virus_info").style.visibility = "hidden";
    document.getElementById("prion_info").style.visibility = "hidden";
    document.getElementById("parasite_info").style.visibility = "visible";
}