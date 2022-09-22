// 고객/점주 탭
const $joinCust = document.querySelector('#select--1[type=radio]');
const $joinOwn = document.querySelector('#select--2[type=radio]');
const $ownerInput = document.querySelector('.owner-input');

$joinCust.addEventListener('change', e => {
    $ownerInput.classList.remove('reveal');
});
$joinOwn.addEventListener('change', e => {
    $ownerInput.classList.add('reveal');
});

// 약관 전체선택
function checkAll(checkAll) {
    const $checkboxes = document.querySelectorAll('input[type="checkbox"]');

    $checkboxes.forEach(e => {
        e.checked = checkAll.checked
    });
}