/**
 * hyolab 에 노출되는 서비스 목록.
 * 서비스를 추가·수정할 때는 이 파일만 고치면 된다. (배열 순서 = 화면 순서)
 */

export const ACCENTS = ['violet', 'sky', 'amber', 'emerald', 'rose', 'orange'] as const;
export type Accent = (typeof ACCENTS)[number];

export type ServiceStatus = 'live' | 'wip';

export interface Service {
  /** 고유 키 (kebab-case) */
  id: string;
  /** 카드 제목 */
  name: string;
  /** 한 줄 소개 */
  tagline: string;
  /** 두세 문장 설명 */
  description: string;
  /** 배포 주소. 없으면 카드가 '링크 준비 중' 으로 표시된다. */
  url?: string;
  /** live = 운영 중, wip = 개발 중 */
  status: ServiceStatus;
  /** 카드 포인트 색 */
  accent: Accent;
  /** 기술 스택 등 짧은 태그 */
  tags: string[];
}

export const services: Service[] = [
  {
    id: 'hyolyrics',
    name: 'HyoLyrics',
    tagline: '홈레코딩용 다층 가사 주석 도구',
    description:
      '가사 한 구간에 리드·더블링·화음·애드립을 색 레인으로 겹쳐 표기하고, 파트를 나눠 함께 녹음해요.',
    // TODO: 배포 URL
    status: 'live',
    accent: 'violet',
    tags: ['React', 'Supabase'],
  },
  {
    id: 'hyo-schedule',
    name: 'HYO 스케줄',
    tagline: '둘이서 쓰는 음악 연습실 사용 일지',
    description:
      '누가 언제 연습실을 쓰는지 한눈에 보고, 체크인·체크아웃으로 기록해요. 장소별 통계와 디스코드 알림도 있어요.',
    // TODO: 배포 URL
    status: 'live',
    accent: 'sky',
    tags: ['Next.js', 'PWA'],
  },
  {
    id: 'quiz-buzz',
    name: 'quiz-buzz',
    tagline: 'QR 하나로 참여하는 실시간 퀴즈 버저',
    description:
      '방장이 이미지 퀴즈 세트로 방을 열면, 참여자는 설치나 가입 없이 QR로 들어와 실시간으로 오답 신호를 보내요.',
    // TODO: 배포 URL
    status: 'live',
    accent: 'amber',
    tags: ['Next.js', 'Realtime'],
  },
  {
    id: 'shepherd',
    name: 'Shepherd',
    tagline: '중소규모 교회를 위한 올인원 관리 서비스',
    description:
      '교인, 출석, 재정, 비품 관리와 리포트까지 교회 운영에 필요한 일을 한곳에서 처리해요.',
    url: 'https://church-manage2-au69.vercel.app',
    status: 'live',
    accent: 'emerald',
    tags: ['Next.js', 'SaaS'],
  },
  {
    id: 'ga-gye-bu',
    name: '가계부',
    tagline: '월 가용금액 기준 개인 가계부',
    description:
      '급여와 연봉 인상률로 매달 쓸 수 있는 금액을 잡고, 카테고리별 고정 지출과 잔여 금액을 관리해요.',
    // TODO: 배포 URL
    status: 'live',
    accent: 'rose',
    tags: ['Next.js', 'Supabase'],
  },
];
