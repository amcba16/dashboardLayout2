document.addEventListener('click',function(e){
    let menuButtonClicked = document.getElementById('menu-button').contains(e.target);
    let sidebarClicked = document.getElementById('sidebar').contains(e.target);
    if (menuButtonClicked) {
        document.getElementById('sidebar').classList.toggle('sidebar-active');
        document.getElementById('overlay').classList.toggle('overlay-block');
    } else {
        if (!sidebarClicked) {
            document.getElementById('sidebar').classList.remove('sidebar-active');
            document.getElementById('overlay').classList.remove('overlay-block');
        }
    }
});

document.addEventListener('click',function(e) {
    let notificationButtionClicked = document.getElementById('bell-icon').contains(e.target);
    let notificationContentAreaClicked = document.querySelector('.notification-content').contains(e.target);
    if (notificationButtionClicked) {
        document.querySelector('.notification-content').classList.toggle('block');
    } else {
        if (!notificationContentAreaClicked) {
            document.querySelector('.notification-content').classList.remove('block');
        }
    }
});

document.addEventListener('click',function(e) {
    let profileButtonClicked = document.querySelector('.profile-picture').contains(e.target);
    let profileSettingContainerArea = document.querySelector('.profile-setting-container').contains(e.target);
    if (profileButtonClicked) {
        document.querySelector('.profile-setting-container').classList.toggle('block');
    } else {
        if (!profileSettingContainerArea) {
            document.querySelector('.profile-setting-container').classList.remove('block');
        }
    }
});
