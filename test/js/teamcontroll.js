document.addEventListener('DOMContentLoaded', function() {
    // 탭 요소 가져오기
    const projectTab = document.getElementById('projectTab');
    const teamManageTab = document.getElementById('teamManageTab');

    // 콘텐츠 영역 요소 가져오기
    const projectContent = document.getElementById('projectContent');
    const teamManageContent = document.getElementById('teamManageContent');

    // 탭 활성화 및 콘텐츠 전환 함수
    function activateTab(tabElement, contentElement) {
        // 모든 탭에서 'choice' 클래스 제거
        projectTab.classList.remove('choice');
        teamManageTab.classList.remove('choice');

        // 클릭된 탭에 'choice' 클래스 추가
        tabElement.classList.add('choice');

        // 모든 콘텐츠 영역 숨기기
        projectContent.style.display = 'none';
        teamManageContent.style.display = 'none';

        // 클릭된 탭에 해당하는 콘텐츠 영역 보이기
        contentElement.style.display = 'block'; // 또는 'flex' 등 해당 콘텐츠의 원래 display 속성에 맞게 설정
    }

    // 각 탭에 클릭 이벤트 리스너 추가
    projectTab.addEventListener('click', () => activateTab(projectTab, projectContent));
    teamManageTab.addEventListener('click', () => activateTab(teamManageTab, teamManageContent));
});
