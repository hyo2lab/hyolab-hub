# hyolab-hub

내가 만든 서비스들을 나열하고 각 서비스로 연결하는 정적 허브 페이지 (tanstack.com 느낌).

- 서비스 목록의 단일 출처는 `src/data/services.ts`. 화면은 이 배열만 렌더링한다.
- 단일 페이지. 라우터, 서버, 인증 없음. 의존성은 최소로 유지한다.
- 다크 모드는 `<html>` 의 `.dark` 클래스. 초기값은 `index.html` 인라인 스크립트가, 토글은 `src/lib/theme.ts` 가 담당하고 둘은 같은 localStorage 키(`theme`)를 쓴다.
- Tailwind v4 CSS-first (`src/index.css`). 동적 클래스는 조합하지 말고 전체 문자열로 적는다 (`ServiceCard` 의 `accentStyles` 참고).
- UI 문구는 한국어(해요체).
- 커밋은 Conventional Commits, 제목은 한국어. 예: `feat: 서비스 카드에 상태 배지 추가`

푸시 전 확인: `pnpm format:check && pnpm lint && pnpm typecheck && pnpm test && pnpm build`
