//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('couponsService', function () {
    this.getCoupons = function () {
        return coupons;
    };

    this.insertCoupon = function (name, url, discount, code) {
        var topID = coupons.length + 1;
        coupons.push({
            id: topID,
            name: name,
            url: url,
            discount: discount,
            code: code
        });
    };

    this.deleteCoupon = function (id) {
        for (var i = coupons.length - 1; i >= 0; i--) {
            if (coupons[i].id === id) {
                coupons.splice(i, 1);
                break;
            }
        }
    };

    this.getCoupon = function (id) {
        for (var i = 0; i < coupons.length; i++) {
            if (coupons[i].id === id) {
                return coupons[i];
            }
        }
        return null;
    };

    var coupons = [
        {
            id: 1, name: "The Popcorn Factory", url: 'http://www.thepopcornfactory.com/', discount: 15, code: 'LS15'
            
        },
        {
            id: 2, name: "M&M", url: 'http://www.mymms.com/', discount: 10, code: '10RETAILMENOT'
        },
        {
            id:3, name: "coke cola", url:"http://coke.com/", discount: 12, code:"COKE12"
        }
    ];

});