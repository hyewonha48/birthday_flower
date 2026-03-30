const userMonth = document.querySelector(`#user_month`);
const userYear = document.querySelector(`#user_year`);
const userDay = document.querySelector(`#user_day`);
const birthdayBtn = document.querySelector(`#birthday_btn`);
const error_msg = document.querySelectorAll(`.error_msg`);
console.log(userMonth, birthdayBtn, error_msg);

// 태어난 달을 입력 안하고 버튼을 클릭하면
// error_msg2 출력하기
birthdayBtn.addEventListener('click', function(){
    // 태어난 달의 값이 빈문자열과 같으면 콘솔실행
    if(userMonth.value == '') msg_func(1,'block');
    else msg_func(1);
    if(userMonth.value == '') msg_func(0,'block');
    else msg_func(0);
    if(userMonth.value == '') msg_func(2,'block');
    else msg_func(2);
})
// 반복 목적 함수 (이벤트 밖)
function msg_func(index, value) {
    return error_msg[index].style.display = value;
}

// birthdayBtn.addEventListener('click', function(){
//     // 태어난 달의 값이 빈문자열과 같으면 콘솔실행
//     if(userMonth.value == '') error_msg[1].style.display = 'block';
//     else error_msg[1].style.display = 'none';
//     // 태어난 년도, 일, 입력안하고 버튼클릭시 해당 error_msg 출력하기
//     if(userYear.value == '') error_msg[0].style.display = 'block'; // 년도버튼
//     else error_msg[0].style.display = 'none';
//     if(userDay.value == '') error_msg[2].style.display = 'block'; // 일버튼
//     else error_msg[2].style.display = 'none';
// })

