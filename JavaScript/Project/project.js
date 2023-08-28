let user = null;
const red_block= document.getElementById('red_div');
const blue_block= document.getElementById('blue_div');
const green_block= document.getElementById('green_div');
const yellow_block= document.getElementById('yellow_div');

const pro_user = document.getElementById('inp_pro');

const btn_add_user = document.getElementById('btn_add_user');
const btn_delete_user = document.getElementById('btn_delete_user');

const btn_move_to_red = document.getElementById('btn_move_red');
const btn_move_to_green = document.getElementById('btn_move_green');
const btn_move_to_blue = document.getElementById('btn_move_blue');
const btn_move_to_yellow = document.getElementById('btn_move_yellow');

function addUserToProject(){
    if(user == null){
        user = document.createElement("div");
        user.className = "user";
        user.setAttribute("id","user");
        user.innerHTML = pro_user.value;

        pro_user.disabled = true;
        btn_add_user.disabled = true;
        btn_delete_user.disabled = false;
        
        red_block.append(user);
    }
}

function deleteUserFromProject(){
    if(user != null){
        user.remove();
        pro_user.disabled = false;
        btn_add_user.disabled = false;
        btn_delete_user.disabled = true;
        pro_user.value = "";
        user = null;
    }
}

function moveToRed() {
    if(user != null){
        red_block.append(user);
    }
}

function moveToGreen() {
    if(user != null){
        green_block.append(user);
    }
}


function moveToBlue() {
    if(user != null){
        blue_block.append(user);
    }
}

function moveToYellow() {
    if(user != null){
        yellow_block.append(user)
    }
}

btn_add_user.addEventListener("click", addUserToProject);
btn_delete_user.addEventListener("click", deleteUserFromProject);

btn_move_to_red.addEventListener("click", moveToRed);
btn_move_to_green.addEventListener("click", moveToGreen);
btn_move_to_blue.addEventListener("click", moveToBlue);
btn_move_to_yellow.addEventListener("click", moveToYellow);