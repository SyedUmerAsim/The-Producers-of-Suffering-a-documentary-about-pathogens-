


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






fungi_button.addEventListener("click", function(){
    document.getElementById("fungi_button").style.borderColor = "rgb(255, 227, 70)";
    document.getElementById("bacteria_button").style.borderColor = "grey";
    document.getElementById("virus_button").style.borderColor = "grey"
    document.getElementById("prion_button").style.borderColor = "grey"
    document.getElementById("parasite_button").style.borderColor = "grey"
})

bacteria_button.addEventListener("click", function(){
    document.getElementById("fungi_button").style.borderColor = "grey";
    document.getElementById("bacteria_button").style.borderColor = "rgb(255, 227, 70)"
    document.getElementById("virus_button").style.borderColor = "grey"
    document.getElementById("prion_button").style.borderColor = "grey"
    document.getElementById("parasite_button").style.borderColor = "grey"
})
   
virus_button.addEventListener("click", function(){
    document.getElementById("fungi_button").style.borderColor = "grey";
    document.getElementById("bacteria_button").style.borderColor = "grey"
    document.getElementById("virus_button").style.borderColor = "rgb(255, 227, 70)"
    document.getElementById("prion_button").style.borderColor = "grey"
    document.getElementById("parasite_button").style.borderColor = "grey"
})

prion_button.addEventListener("click", function(){
    document.getElementById("fungi_button").style.borderColor = "grey";
    document.getElementById("bacteria_button").style.borderColor = "grey"
    document.getElementById("virus_button").style.borderColor = "grey"
    document.getElementById("prion_button").style.borderColor = "rgb(255, 227, 70)"
    document.getElementById("parasite_button").style.borderColor = "grey"
})

parasite_button.addEventListener("click", function(){
    document.getElementById("fungi_button").style.borderColor = "grey";
    document.getElementById("bacteria_button").style.borderColor = "grey"
    document.getElementById("virus_button").style.borderColor = "grey"
    document.getElementById("prion_button").style.borderColor = "grey"
    document.getElementById("parasite_button").style.borderColor = "rgb(255, 227, 70)"
})