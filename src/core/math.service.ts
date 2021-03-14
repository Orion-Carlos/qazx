/*
 * File: math.service.ts
 * Project: ng4dora
 * File Created: Wednesday, 13th June 2018 3:46:05 pm
 * Author: songyz
 * Description: 运算相关服务
 * -----
 * Last Modified: Thursday, 14th June 2018 11:20:19 am
 * Modified By: songyz
 * -----
 *  All rights reserved.
 */

/*******************************************************************************
 * randomColor : 随机颜色 alert(tit.math.randomColor()) 暂时无法使用//todo
 * randomNum : 随机数 tit.math.randomNum(50,100) 产生50-100之间的随机数 
 * sum : 求和 alert(tit.math.sum(10,20,20,32))
 * formatNumRound : 四舍五入格式化数字，默认保留两位小数 tit.math.formatNumRound(111.1111,2) 
 *                  和 tit.math.formatNumRound(111.1111)等价
 ******************************************************************************/

export class MathService {
    // randomColor() {
    //     var color = Math.random(0, 0xFFFFFF);
    //     return '#' + ('000000' + color.toString(16)).slice(-6);
    // }
    randomNum (begin:number, end:number) {
        var c = end - begin + 1;
        return Math.floor(Math.random() * c + begin);
    }
    sum (...argument:number[]) {
        var result = 0;
        for ( var i = 0; i < argument.length; i++) {
            result += argument[i];
        }
        return result;
    }
    formatNumRound (no : number , prex: number = 2) {
        return  (Math.round(no*Math.pow(10, prex))/Math.pow(10, prex)).toFixed(2);
    }
}
