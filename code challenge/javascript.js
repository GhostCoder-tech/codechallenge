$(document).ready(() => {

    $('.menu-btn').click(
        () => {
            $('body').css('overflow-y', 'hidden');
            $('.menu-edit').toggle(
                () => {$('.menu-edit').css('display', 'none');},
                () => {$('.menu-edit').css('display', 'flex');}
            );
        }
    );

    $('.menu-close-button').click(
        () => {
            $('.menu-edit').toggle(
                () => {$('.menu-edit').css('display', 'flex');},
                () => {$('.menu-edit').css('display', 'none');}
            );
            $('body').css('overflow-y', 'scroll');
        }
    )
})