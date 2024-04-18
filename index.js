const qrText = document.getElementById("qrText");
const imgBx = document.getElementById("imgBx");
const qrImg = document.getElementById("qrImg");

function generateQR(){
    if(qrText.value.length > 0){
        qrImg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    }
    
    else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }

}