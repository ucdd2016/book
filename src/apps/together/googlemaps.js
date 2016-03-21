var gmap = {
    address:    "",
    mapurl:     "http://maps.google.com/maps/api/staticmap?markers=",
    mapsensor:  "true",
    mapsize:    "480x420",
    urlpostfix: "",

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

    generateURL: function(){
        var res = this.mapurl+this.address+this.urlpostfix;
        return res;
    }
};