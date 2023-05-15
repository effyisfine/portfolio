//fullpage 스크립트 + 앵커 스크립트
$(document).ready(function () {
    $("#fullpage").fullpage({
        anchors: ["intro", "profile", "ptf", "footer"],
        menu: "#topMenu",
        //navigation: true,
        //scrollBar: true,
    });

    // $(".case a").on("mouseenter", function(){
    //     let imgH=$(this).find("img").height();
    //     let caseH=$(this).height();
    //     $(this).find("img").css({
    //         top:-(imgH-caseH)
    //     });
    // });
    // $(".case a").on("mouseleave", function(){
        //     $(this).find("img").css({
        //         top:0
        //     });
        // });
        
    $(".case a").on("mouseenter", function(){
        let imgH=$(this).find("img").height();
        let caseH=$(this).height();
        let caseImg = imgH-caseH;
        $(this).find("img").animate({'top': -caseImg});
        });
    
    $(".case a").on("mouseleave", function(){
        $(this).find("img").animate({'top':0});
    });
    
    
        // 모바일 버튼 
        $(".m_btn").on("click", function(){
            $(".m_btn_menu").toggleClass("on")
            $(this).toggleClass("on")
        });
});