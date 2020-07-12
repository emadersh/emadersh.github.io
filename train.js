$(document).ready(function () {

    var project_count=5;

    $('.next').click(function(){
        if(project_count==9){
            project_count=4
        }
        project_count++;
        $('.main_img').attr('src','/img/project_'+project_count+'.jpg')
    })
    
    $('.prev').click(function(){
        if(project_count==5){
            project_count=10
        }
        project_count--;
        $('.main_img').attr('src','/img/project_'+project_count+'.jpg')
        })

        var count = 0;
    developer_animation();
    function developer_animation() {
        //this is the code for animation
            setTimeout(function () {

                count++;
    if (count == 1) {
         title = "J";
    } else if (count == 2) {
        title = "Jo";
   } else if (count == 3) {
    title = "Joi";
} else if (count == 4) {
    title = "Join";
} else if (count == 5) {
    title = "Join U";
} else if (count == 6) {
    title = "Join Us";
} 
    if (count != 7) {

        $('.title').text(`${title}`);
        developer_animation();
    } else if (count == 7) {
        count = 0;
    setTimeout(function (){
        developer_animation();
    },1000);
    }
},100);
    

    }
})