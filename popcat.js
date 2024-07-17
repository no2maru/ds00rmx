// popcat.js
// 팝캣 클릭 게임의 메인 로직
(function() {
    // 초기 클릭 횟수 설정
    let clickCount = 0;
    let isOpenMouth = false; // 변수 추가: 입이 벌려진 상태 여부

    // 팝캣 엘리먼트 가져오기
    const popcat = document.getElementById('popcat');

    // 클릭 횟수를 표시할 엘리먼트 가져오기
    const clickCountDisplay = document.getElementById('clickCount');

    // 팝캣을 클릭했을 때의 이벤트 리스너 추가
    popcat.addEventListener('mousedown', function() {
        // 입을 벌린 상태에서 클릭할 때
        if (!isOpenMouth) {
            // 팝캣의 입을 벌리는 효과 추가
            popcat.style.backgroundImage = "url('pooop.jpg')";
            isOpenMouth = true;
        }
    });

    // 팝캣을 떼었을 때의 이벤트 리스너 추가
    popcat.addEventListener('mouseup', function() {
        // 입을 벌린 상태에서 클릭을 해제할 때
        if (isOpenMouth) {
            // 팝캣의 입을 다시 닫는 효과 추가 (첫 번째 사진으로 변경)
            popcat.style.backgroundImage = "url('poop.jpg')";
            isOpenMouth = false;

            // 클릭 횟수 증가
            clickCount++;

            // 팝캣을 누른 횟수를 업데이트
            updateClickCount();
        }
    });

    // 클릭 횟수를 업데이트하는 함수
    function updateClickCount() {
        clickCountDisplay.textContent = `Clicks: ${clickCount}`;
    }
})();
