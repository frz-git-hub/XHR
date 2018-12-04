function sendXHR(type, url, data, callback){
    let xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.send(data);
    xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            callback(this.response);
        }
    };
}