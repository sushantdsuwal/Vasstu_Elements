
export default RegExr = {
    youtube_parser: (url) => {
        try {
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            var match = url.match(regExp);
            return (match && match[7].length == 11) ? match[7] : false;
        } catch (error) {
            console.log(error)
        }
    },

    mobilevalidate: (text) => {
        const reg = /^[0]?[789]\d{9}$/;
        if (reg.test(text) === false) {
            return false
        } else {
            return true
        }
    },

    emailValidate: (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            return false;
        }
        else {
            return true
        }
    },

    phoneNumberValidate: (text) => {
        var reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (reg.test(text)) {
            return true;
        }
        else {
            return false;
        }
    },

    acronym: (str) => {
        var matches = str.match(/\b(\w)/g); // ['J','S','O','N']
        var acronym = matches.join(''); // JSON
        return acronym
    },

    removeLeadingSlashesDots: (str) => {
        var newstr = str.replace(/^(?:\.\.\/)+/, "");
        return newstr;
    }

}