//处理文本太多的问题，超出长度的替换为...
function text_dealer(text, num) {
    if (!text) return ''
    if (text.length > num) {
        return text.slice(0, num) + '...'
    }
    return text
}
//处理从url提取参数的问题
function GetRequest() {
    var url = location.search;
    url = decodeURI(url);
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0].replace(/\s/g, "")] = unescape(strs[i].split("=")[1].replace(/\s/g, ""));
        }
    }
    return theRequest;
}
//用于动态获取ip地址，防止由于开发环境与部署环境不一致导致的问题
function setIpAdress() {
    if (window.location.origin === "file://") {
        axios.defaults.baseURL = "http://localhost:8083";
        //axios.defaults.baseURL = "http://42.192.211.76:8083";
    } else {
        axios.defaults.baseURL = window.location.origin + ":8083";
    }
}
//long类型转化为时间输出
function timeTrans(time) {
    return datetimeFormat(time);
}

function datetimeFormat(longTypeDate) {
    var dateTypeDate = "";
    var date = new Date();
    date.setTime(longTypeDate);
    dateTypeDate += date.getFullYear(); //年  
    dateTypeDate += "-" + getMonth(date); //月  
    dateTypeDate += "-" + getDay(date); //日  
    dateTypeDate += " " + getHours(date); //时  
    dateTypeDate += ":" + getMinutes(date); //分 
    dateTypeDate += ":" + getSeconds(date); //秒
    return dateTypeDate;
}
//返回 01-12 的月份值  
function getMonth(date) {
    var month = "";
    month = date.getMonth() + 1; //getMonth()得到的月份是0-11  
    if (month < 10) {
        month = "0" + month;
    }
    return month;
}
//返回01-30的日期  
function getDay(date) {
    var day = "";
    day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    return day;
}
//小时 
function getHours(date) {
    var hours = "";
    hours = date.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    return hours;
}
//分 
function getMinutes(date) {
    var minute = "";
    minute = date.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    return minute;
}
//秒
function getSeconds(date) {
    var seconds = "";
    seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return seconds;
}
function IsURL(str_url){
    const re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    return re.test(str_url)
}
function hasHttp(str_url){
    let newString = str_url;
    if (str_url.indexOf("http") == -1) {
        newString = "http://" + str_url;
    }
    return newString;
}
export {IsURL,hasHttp}