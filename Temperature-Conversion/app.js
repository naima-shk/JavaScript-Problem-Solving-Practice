function convert(){
    //celsius to fahrenhiet conversion
    let celsius=document.getElementById('data').value;
    let fahrenhiet = (celsius*1.8) + 32;
    document.getElementById('res').innerText = `${celsius} C = ${fahrenhiet} F`; 

    //fahrenhiet to celsius conversion
    let fahrenhiet=document.getElementById('data').value;
    let celsius = fahrenhiet-32/1.8;
    document.getElementById('res').innerText = `${celsius} C = ${fahrenhiet} F`; 
}