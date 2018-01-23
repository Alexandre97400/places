/* ******************
CO.js
********************* */
//var/www/dev/modules/co2/config/CO2/params.json:
urlCtrl.loadableUrls[ "#place" ] = {
        inMenu : true, 
        useHeader : true, 
        open : true, 
        subdomain : "place", 
        subdomainName : "Lieux",
        hash : "#places.co.search",
        icon : "map-marker", 
        mainTitle : "Moteur de Lieux <span class='text-red'>territoriales</span>",
        placeholderMainSearch : "Rechercher un lieu ...",
        lblBtnCreate : "Ajouter un lieu",
        colorBtnCreate : "green",
        module:"places"
};

//co.js object types

typeObj.place={  col:"places",ctrl:"place",color:"green",icon:"map-marker"};
typeObj.places = { sameAs:"place" };
typeObj.TiersLieux = {sameAs:"place",color: "azure",icon: "home"};
typeObj.Maison = {sameAs:"place", color: "azure",icon: "home"};

//CO LANG
co.place = {
    form : function() { dyFObj.openForm("place") },
    i : function () { co.ctrl.lbh("#"+userConnected.username+".view.directory.dir.places");},
};
