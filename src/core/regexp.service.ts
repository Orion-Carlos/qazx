/*
 * File: regexp.service.ts
 * File Created: Wednesday, 13th June 2018 3:46:05 pm
 * Author: songyz
 * Description: 自定义校验规则服务
 * -----
 * Last Modified: Thursday, 14th June 2018 11:20:19 am
 * Modified By: songyz
 * -----
 *  All rights reserved.
 */

/*******************************************************************************
 * isAdult : 判断是否已成年 alert(tit.regExp.isAdult("310113198704121234") ) 
 *isChinese : 判断是否为中文 alert(tit.regExp.isChinese("我是中文"))
 *isDate : 判断是否为正确日期格式  alert(tit.regExp.isDate("2012-12-12")) 
 *isEmail : 判断是否为Email地址  alert(tit.regExp.isEmail("lancer07@139.com")) 
 *isIdcard : 判断是否为身份证号  alert(tit.regExp.isIdcard("310113198502031876")) 
 *isMobile : 判断是否为手机号  alert(tit.regExp.isMobile("13661234567")) 
 *isQQ : 判断是否为QQ号  alert(tit.regExp.isQQ("180003000")) 
 *isTel : 判断是否为固定电话号  alert(tit.regExp.isTel("021-56565656")) 
 *isURL : 判断是否为链接地址  alert(tit.regExp.isURL("http://www.linqing07.com"))
 *isPsd : 判断是否为密码  alert(tit.regExp.isPsd("wwewewewe"))
 *isPostalcode : 判断是否为邮政编码  alert(tit.regExp.isPostalcode("223200"))
 *isCardNum : 判断是否只有字母和数字 alert(tit.regExp.isCardNum("223200"))
 *isMoney : 判断是否只有点和数字  alert(tit.regExp.isMoney("2.1"))
 *isNumOfTwo : 判断是否1-100之间可带两位小数  alert(tit.regExp.isNumOfTwo("3.12"))
 *isSiZeString : 判断是否为四则运算公式格式  alert(tit.regExp.isSiZeString("(10000*0.6-10000*0.6 *0.2)*0.2"))
 *isOnlySiZeSymbol : 判断四则运算公式是否只包含符号  alert(tit.regExp.isOnlySiZeSymbol(".+-*\/()"))
 *isFullIdCard : 严格验证是否是身份证，true为真 alert(tit.regExp.isOnlySiZeSymbol(""))
 ******************************************************************************/
/* eslint-disable */
export class RegExpService {
    isAdult (str:string) {
        var s = str;
        if (this.isIdcard(s)) {
            var birthday = (new Date(s.slice(6, 10)+'-' +s.slice(10, 12) +'-' + s.slice(12, 14))).valueOf();
			var today : number = (new Date().valueOf());
            return (today - birthday > 18 * 365 * 24 * 60 * 60 * 1000);
        } else {
            return false;
        }
    }
    isChinese (str:string) {
        // var reg = /^[\u4E00-\u9FFF]+$/;
        //校验姓名中文及中文点
        var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,16}$/
        return reg.test(str);
    }
    isDate (str:string) {
        var reg = /^\d{4}-\d{1,2}-\d{1,2}$/;
        return reg.test(str);
    }
    isEmail (str:string) {
//			var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        var reg = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/;//开始必须是一个或者多个单词字符或者是-，加上@，然后又是一个或者多个单词字符或者是-。然后是点“.”和单词字符和-的组合，可以有一个或者多个组合,邮箱不能以 - _ .以及其它特殊字符开头和结束,邮箱域名结尾为2~5个字母，比如cn、com、name
        return reg.test(str);
    }
    isPlateNumber (str:string) {
        var reg = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
        var reg2 = /^LS[A-Z_0-9]{5}$/;
        return reg.test(str) || reg2.test(str);
    }
    isVehicleIdentification (str:string) {
        var reg = /^[A-Z_0-9]{17}$/;
        return reg.test(str);
    }
    isIdcard (str:string) {
        var reg = /^(\d{14}|\d{17})(\d|[xX])$/;
        return reg.test(str);
    }
    isMobile (str:string) {
        var reg = /^0*(1)\d{10}$/;
        return reg.test(str);
    }
    isQQ (str:string) {
        var reg = /^[1-9][0-9]{4,}$/;
        return reg.test(str);
    }
    isTel (str:string) {
        var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
        return reg.test(str);
    }
    isURL (str:string) {
        var reg = /http:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/;
        return reg.test(str);
    }
    isPsd (str:string) {
        var reg = "^[\\w@\\-\\.]{6,16}$";
        return new RegExp(reg).test(str);
    }
    isPostalcode (str:string) {
        var reg = /^[1-9][0-9]{5}$/;
        return reg.test(str);
    }
    isCardNum (str:string) {
        var reg = /^[A-Za-z0-9]+$/;
        return reg.test(str);
    }
    isMoney (str:string) {
        var reg = /^(\-)?(([1-9]\d*)|[0-9])(\.\d+)?$/;
        return reg.test(str);
    }
    isNumOfTwo (str:number) {
        var returnFlag = false;
        if(str < 1 || str > 100){
            returnFlag = false;
        }else{
            var reg =/^[0-1]{0,1}[0-9]{0,1}[0-9]\.{0,1}\d{0,2}$/;
            returnFlag = reg.test(str+'');
        }
//			var reg =/^[0-1]{0,1}[0-9]{0,1}[0-9]\.{0,1}\d{0,2}$/;
//			return reg.test(str);
        return returnFlag;
    }
    isNumOfTwo02 (str:number) {
        var returnFlag = false;
        if(str < 0 || str > 100){
            returnFlag = false;
        }else{
            var reg =/^[0-1]{0,1}[0-9]{0,1}[0-9]\.{0,1}\d{0,2}$/;
            returnFlag = reg.test(str+'');
        }
//			var reg =/^[0-1]{0,1}[0-9]{0,1}[0-9]\.{0,1}\d{0,2}$/;
//			return reg.test(str);
        return returnFlag;
    }
    isNumOfTwo03 (str:number) {
        var returnFlag = false;
        if(str < 0 || str > 100){
            returnFlag = false;
        }else{
            var reg =/^[0-1]{0,1}[0-9]{0,1}[0-9]\.{0,1}\d{0,4}$/;
            returnFlag = reg.test(str+'');
        }
//			var reg =/^[0-1]{0,1}[0-9]{0,1}[0-9]\.{0,1}\d{0,2}$/;
//			return reg.test(str);
        return returnFlag;
    }
    isSiZeString (str:string) {
        var reg = /^[A-Z0-9\.\+\-\*\/\(\)]+$/;//允许大写字母、数字、小数点、加减乘除符号、英文小括号
        return reg.test(str);
    }
    isOnlySiZeSymbol (str:string) {
        var reg = /^[\.\+\-\*\/\(\)]+$/;//小数点、加减乘除符号、英文小括号
        return reg.test(str);
    }
    isFullIdCard (idcard:string) {
		if(!idcard){
			return false;
		}
        var area:any = {
            11 : "北京",
            12 : "天津",
            13 : "河北",
            14 : "山西",
            15 : "内蒙古",
            21 : "辽宁",
            22 : "吉林",
            23 : "黑龙江",
            31 : "上海",
            32 : "江苏",
            33 : "浙江",
            34 : "安徽",
            35 : "福建",
            36 : "江西",
            37 : "山东",
            41 : "河南",
            42 : "湖北",
            43 : "湖南",
            44 : "广东",
            45 : "广西",
            46 : "海南",
            50 : "重庆",
            51 : "四川",
            52 : "贵州",
            53 : "云南",
            54 : "西藏",
            61 : "陕西",
            62 : "甘肃",
            63 : "青海",
            64 : "宁夏",
            65 : "新疆",
            71 : "台湾",
            81 : "香港",
            82 : "澳门",
            91 : "国外"
        };
        var idcard:string, Y:any, JYM:any,ereg:any;
        var S, M;
        var idcard_array = new Array();
        idcard_array = idcard.split("");
        if (area[parseInt(idcard.substr(0, 2))] == null) {
            return false
        }
        ;
        switch (idcard.length) {
        case 15:
            if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0
                    || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard
                            .substr(6, 2)) + 1900) % 4 == 0)) {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;// 测试出生日期的合法性
            } else {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;// 测试出生日期的合法性
            }
            if (ereg.test(idcard)) {
                return true;
            } else {
                return false;
            }
        case 18:
            if (parseInt(idcard.substr(6, 4)) % 4 == 0
                    || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard
                            .substr(6, 4)) % 4 == 0)) {
                ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;// 闰年出生日期的合法性正则表达式
            } else {
                ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;// 平年出生日期的合法性正则表达式
            }
            if (ereg.test(idcard)) {
                S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
                        + (parseInt(idcard_array[1]) + parseInt(idcard_array[11]))
                        * 9
                        + (parseInt(idcard_array[2]) + parseInt(idcard_array[12]))
                        * 10
                        + (parseInt(idcard_array[3]) + parseInt(idcard_array[13]))
                        * 5
                        + (parseInt(idcard_array[4]) + parseInt(idcard_array[14]))
                        * 8
                        + (parseInt(idcard_array[5]) + parseInt(idcard_array[15]))
                        * 4
                        + (parseInt(idcard_array[6]) + parseInt(idcard_array[16]))
                        * 2 + parseInt(idcard_array[7]) * 1
                        + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9])
                        * 3;
                Y = S % 11;
                M = "F";
                JYM = "10X98765432";
                M = JYM.substr(Y, 1);
                if (M == idcard_array[17]) {
                    var iddate = idcard.substr(6, 8);
                    var idyear = parseInt(iddate.substr(0, 4));
                    var idmonth = parseInt(iddate.substr(4, 2));
                    var idday = parseInt(iddate.substr(6, 2));
                    // alert(iddate+","+idyear+","+idmonth+","+idday);
                    var now = new Date();
                    var year = now.getFullYear(); // 年
                    var month = now.getMonth() + 1; // 月
                    var day = now.getDate();
                    // alert(now+","+year+","+month+","+day);
                    if (idyear > year) {
                        return false;
                    } else if (idyear == year) {
                        if (idmonth > month) {
                            return false;
                        } else if (idmonth == month) {
                            if (idday > day) {
                                return false;
                            } else {
                                return true;
                            }
                        } else {
                            return true;
                        }
                    } else {
                        return true;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        default:
            return false;
        }
    };
	checkCardByType(cardNo:string,type:string){
		switch(type){
			case '15':
			    // 身份证严格校验
				return this.isFullIdCard(cardNo);
			case '20':
			case '23':
			    // 户口本出生证大于3位
				return cardNo.length >= 3;
			case '30':
				// 军人证10-18位
				return cardNo.length>=10&&cardNo.length<=18;
			case '32':
			   // 港澳台通行证大于8位
				return cardNo.length>=8
			default:
				return false;
		}
	}
    
}
