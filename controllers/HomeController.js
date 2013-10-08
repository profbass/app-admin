module.exports = {
    /*
        Will be translated to get("/people") (first level is generated by controller name)
    */
    get_index : function(req, res) {
        res.send("Hello visitor!");
    },

    /*
        Will be translated to post("/people") (HTTP-method is extracted by first item in function name)
    */
    post_index : function(req, res) {
        res.send("A post");
    },

    /*
        Will be translated to post("/people/finest") (subsections automatically appended)
    */
    get_finest : function(req, res) {
        res.send("A post");
    },

    /*
        Will be translated to post("/people/:id") (parameters automatically extracted from function parameters)
    */
    get_index : function(req, res, id) {
        res.send("You are requesting the resource with id: " + id);
    },

    /*
        Will be translated to post("/people/:id/friends") (if parameter is included in function-name, it will be be included in the same position)
    */
    get_id_friends : function(req, res, id) {
        res.send("You are requesting the friends of the person with id: " + id); 
    }
}