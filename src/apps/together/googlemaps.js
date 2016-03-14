/*!
 * Google Maps methods
 *
 * @author: Rutger Laurman - lekkerduidelijk.nl
 * @todo: Make this more viable
 */

var gmap = {

    address:    "",
    mapurl:     "http://maps.google.com/maps/api/staticmap?markers=",
    streeturl:  "http://maps.googleapis.com/maps/api/streetview?location=",
    mapsensor:  "false",
    mapsize:    "480x420",
    urlpostfix: "",
    maptype:    "map", // default to standard map
    elem_street:"",
    elem_map:   "",

    // Initialize the object
    init: function(address,targetstreet,targetmap){

        if(! (address && targetstreet && targetmap)) {
            console.log("init: all 3 parameters should be set");
            return;
        }

        // Set variables
        this.address = encodeURIComponent(address);
        this.urlpostfix = "&size="+this.mapsize+"&sensor="+this.mapsensor;
        this.elem_street = $("#"+targetstreet) || {};
        this.elem_map = $("#"+targetmap) || {};

        // Render the elements
        this.render();
    },

    // Generate the url used for the different map types
    generateURL: function(t){
        if(!t) return;
        this.maptype = t;
        switch (this.maptype){
            case 'streetview':
                return this.streeturl
                    + this.address
                    + this.urlpostfix;
                break;
            case 'map':
                return this.mapurl
                    + this.address
                    + this.urlpostfix;
                break;
        }
    },

    // Render image elements in targets
    render: function(){
        $elem_street = $(this.elem_street);
        $elem_map = $(this.elem_map);

        $elem_street.html(
            $(document.createElement("img"))
                .attr("src",this.generateURL("streetview"))
        );
        $elem_map.html(
            $(document.createElement("img"))
                .attr("src",this.generateURL("map"))
        );
    }
};