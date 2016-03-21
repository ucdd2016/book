var gmap = {

    address:    "",
    mapurl:     "http://maps.google.com/maps/api/staticmap?markers=",
    mapsensor:  "false",
    mapsize:    "480x420",
    urlpostfix: "",

    // Initialize the object
    init: function(address){

        if(! (address)) {
            console.log("init: all 3 parameters should be set");
            return;
        }
        // Set variables
        this.address = encodeURIComponent(address);
        this.urlpostfix = "&size="+this.mapsize+"&sensor="+this.mapsensor;

        var inputurl = this.generateURL();
        return inputurl;
    },

    // Generate the url used for the different map types
    generateURL: function(){
        var res = this.mapurl+this.address+this.urlpostfix;
        return res;
    }
};