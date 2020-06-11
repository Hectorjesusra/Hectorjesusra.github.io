import commentBox from 'commentbox.io'
commentBox('5706059750572032-proj');
commentBox('5706059750572032-proj', {
    className: 'commentbox', // the class of divs to look for
    defaultBoxId: 'commentbox', // the default ID to associate to the div
    tlcParam: 'tlc', // used for identifying links to comments on your page
    backgroundColor: white, // default transparent
    textColor: null, // default black
    subtextColor: null, // default grey
    createBoxUrl(boxId, pageLocation) {

        pageLocation.search = ''; // removes query string!
        pageLocation.hash = boxId; // creates link to this specific Comment Box on your page
        return pageLocation.href; // return url string
    },
    /**
     * Fires once the plugin loads its comments.
     * May fire multiple times in its lifetime.
     *
     * @param {number} count
     */
    onCommentCount(count) {

    }
});
