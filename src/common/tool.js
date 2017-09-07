/**
 * Created by cmios on 2017/7/13.
 */
export default function urlByAppendingParams(url,params) {
    let result = url;
    if (result.substr(result.length-1)!='?'){
        result = result+`?`
    }
    for (let key in params){
        let value = params[key]
        result +=`${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
    }
    result =result.substring(0,result.length-1);
    return result
}