# hyolab

직접 만들고 운영하는 서비스들을 한곳에 모아 보여 주고, 각 서비스로 이동시켜 주는 허브 페이지.
[tanstack.com](https://tanstack.com) 처럼 하나의 브랜드 아래 독립된 서비스들을 나열하는 구조다.

- hyolab = 허브(이 레포), 각 서비스 = 독립 배포. 허브는 링크로만 연결한다.
- 서버 없는 정적 사이트. 인증도 없다.
- 배포: https://hyolab-hub.vercel.app

## 서비스 추가·수정

[`src/data/services.ts`](src/data/services.ts) 의 `services` 배열만 고치면 된다. 배열 순서가 화면 순서다.

```ts
{
  id: 'hyo-something',          // kebab-case, 고유
  name: 'HyoSomething',
  tagline: '한 줄 소개',
  description: '두세 문장 설명',
  url: 'https://…',             // 없으면 카드에 '링크 준비 중' 표시
  status: 'live',               // 'live' | 'wip'(공사 중 배지)
  accent: 'violet',             // violet | sky | amber | emerald | rose | orange
  tags: ['Next.js', 'Supabase'],
}
```

`pnpm test` 가 id 중복, url 형식 같은 기본 실수를 잡아 준다.

## 스택

Vite · React 19 · TypeScript · Tailwind CSS v4 · Pretendard · oxlint · Prettier · Vitest

## 개발

Node 22 (`.nvmrc`), pnpm.

```bash
pnpm install
pnpm dev          # http://localhost:5173
```

| 명령             | 설명                      |
| ---------------- | ------------------------- |
| `pnpm dev`       | 개발 서버                 |
| `pnpm build`     | 타입체크 + 빌드 (`dist/`) |
| `pnpm preview`   | 빌드 결과 미리보기        |
| `pnpm typecheck` | `tsc -b`                  |
| `pnpm lint`      | oxlint                    |
| `pnpm test`      | Vitest                    |
| `pnpm format`    | Prettier 적용             |

## 배포

Vercel 에 연결되어 있어 `main` 에 머지되면 자동으로 프로덕션 배포되고, PR 마다 미리보기 주소가 생긴다.
정적 사이트라 다른 곳으로 옮길 때도 `pnpm build` 결과물인 `dist/` 만 올리면 된다.
