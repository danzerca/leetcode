/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    var baseNum = rand7();
    var chooseNum = rand7();
    //console.log(baseNum, chooseNum)
    var res = 0;
    while (baseNum > 5) {
        baseNum = rand7();
    }
    
    while (chooseNum === 7) {
        chooseNum = rand7();
    }
    
    if (chooseNum <=3) {
        res = baseNum;
    } else {
        res = baseNum + 5;
    }

    return res;
    
};
