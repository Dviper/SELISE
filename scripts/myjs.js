(
    function () {
        "use strict"
        //closure function
        function calculator() {
            var res = null;
            return {
                getadd: function (num1, num2) {
                    res = num1 + num2;
                    return res;
                },
                getpower: function (numbase, numpower) {
                    res = Math.pow(numbase, numpower);
                    return res;
                },
                getmul: function (num1, num2) {
                    res = num1 * num2;
                    return res;
                }
            }
        }

        var calc = calculator();
        console.log(calc.getadd(2, 5));
        console.log(calc.getmul(2, 5));
        console.log(calc.getpower(2, 5));
        //---------------------------------------------------

        //object constructor



        var construct = function () {
            var object = {
                type: "car",
                id: 101,
                color: "red",
                name: "mustang"
            }
            return object;
        }

        var display = function (object) {
            console.log(object.type);
            console.log(object.color);
            console.log(object.id);
            console.log(object.name);
        }
       
        var a=construct();
        display(a);

        //------------------------------------------------------

        var array = [2, 5, 9];
      
        var index = array.indexOf(5);
        // console.log(index);
        // delete will delete the object property, but will not reindex the array or update its length. This makes it appears as if it is undefined:
        if (index > -1) {
            // Splice(start, deleteCount)
            array.splice(array.length-1, 1);
        }

        console.log(array)

    }
).call(window);