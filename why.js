$(document).ready(function () {

    var project_count=1;

    $('.next').click(function(){
        if(project_count==4){
            project_count=0
        }
        project_count++;
        $('.main_img').attr('src','/img/project_'+project_count+'.jpg')
    })
    
    $('.prev').click(function(){
        if(project_count==1){
            project_count=5
        }
        project_count--;
        $('.main_img').attr('src','/img/project_'+project_count+'.jpg')



    })

})