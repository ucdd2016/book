var gmap = {

    address:    "",
    mapurl:     "http://maps.google.com/maps/api/staticmap?markers=",
    mapsensor:  "false",
    mapsize:    "480x420",
    urlpostfix: "",
    maptype:    "map", // default to standard map
    elem_map:   "",

    // Initialize the object
    init: function(address,targetmap){

        if(! (address && targetmap)) {
            console.log("init: all 3 parameters should be set");
            return;
        }
        // Set variables
        this.address = encodeURIComponent(address);
        this.urlpostfix = "&size="+this.mapsize+"&sensor="+this.mapsensor;
        this.elem_map = $("#"+targetmap) || {};
        // Render the elements
        var res = this.render();
        return res;
    },

    // Generate the url used for the different map types
    generateURL: function(t){
        if(!t) return;
        this.maptype = t;
        switch (this.maptype){
            case 'map':
                var res = this.mapurl+this.address+this.urlpostfix;
                return res;
                break;
        }
    },

    // Render image elements in targets
    render: function(){
        $elem_map = $(this.elem_map);
        $elem_map.html(
            $(document.createElement("img"))
                .attr("src",this.generateURL("map"))
        );
        return this.generateURL("map");
    }
};