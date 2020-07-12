$(document).ready(function() {
    var count = 0;
        developer_animation();
        function developer_animation() {
            //this is the code for animation
                setTimeout(function () {
    
                    count++;
        if (count == 1) {
             title = "Thiruvananthapuram";
        } else if (count == 2) {
             title = "Kollam";
        } else if (count == 3) {
             title = "Alappuzha";
        } else if (count == 4) {
             title = "Pathanamthitta";
        } else if (count == 5) {
             title = "Kottayam";
        } else if (count == 6) {
             title = "Idukki";
        } else if (count == 7) {
             title = "Ernakulam";
        } else if (count == 8) {
             title = "Thrissur";
        } else if (count == 9) {
             title = "Palakkad";
        }else if (count == 10) {
             title = "Malappuram";  
        }else if (count == 11) {
             title = "Kozhikode";
        }else if (count == 12) {
             title = "Wayanadu";
        }else if (count == 13) {
            title = "Kannur";
       }else if (count == 14) {
        title = "Kasaragod";
   }
        if (count != 15) {
    
            $('.title').text(`Our Branches in Kerala : ${title}`);
            developer_animation();
        } else if (count == 15) {
            count = 0;
        setTimeout(function (){
            developer_animation();
        },100);
        }
    },1000);
        }
})