const $id = document.querySelector('.id');
const $check = document.querySelector('.fa-check');

function express_id_check() {
    if($id.value == "") {
        $check.style.color='green';
    }
};