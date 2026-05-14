const todayTodos = [
  {
    id: 't1',
    title: '오늘 배포 범위 확정 및 체크리스트 업데이트',
    status: '진행 중' as const,
    tag: '배포',
  },
  {
    id: 't2',
    title: '추천 모델 실험(실험군 B) 롤아웃 계획 정리',
    status: '대기' as const,
    tag: 'ML',
  },
  {
    id: 't3',
    title: '결제 실패 알림 슬랙 채널 정리 및 규칙 정비',
    status: '대기' as const,
    tag: '알림',
  },
  {
    id: 't4',
    title: '일일 회고용 주요 지표 스냅샷 저장',
    status: '완료' as const,
    tag: '리포트',
  },
]

const todayLog = [
  { time: '09:12', text: 'ETL 파이프라인 지연 원인 분석', tag: 'data' },
  { time: '11:03', text: '추천 모델 A/B 실험 대시보드 지표 정리', tag: 'ml' },
  { time: '13:48', text: '결제 실패율 알람 임계값 조정', tag: 'ops' },
  { time: '15:06', text: '재고 싱크 오류 재현 및 핫픽스 PR 생성', tag: 'dev' },
]

const quickNotes = [
  {
    id: 'n1',
    text: '장바구니 이탈률을 주간 기준으로도 보고 싶다.',
  },
  {
    id: 'n2',
    text: 'AI 요약 결과에 “위험도” 스코어 컬럼 추가 고려.',
  },
  {
    id: 'n3',
    text: '야간 배치 실패 시 아침에 바로 보이는 인덱스 카드 필요.',
  },
]

const urgentTodos = [
  {
    id: 'u1',
    text: '프로덕션: 체크아웃 지연(p95 900ms↑) 원인 파악',
    owner: '나',
  },
  { id: 'u2', text: 'AI 요약 배치 재시도 폭증(>20) 대응', owner: 'SRE' },
  { id: 'u3', text: '대시보드 권한 정책(조직/팀) 스펙 확정', owner: 'PM' },
]

const completedWork = [
  {
    at: '10:26',
    title: '주문 이벤트 파서 오류 핫픽스 배포',
    meta: 'orders-ingest · 1.3.7 → 1.3.8',
  },
  {
    at: '12:14',
    title: '대시보드 지표 정의서(초안) 공유',
    meta: 'notion · KPI 12개',
  },
  {
    at: '14:08',
    title: '알림 채널 라우팅 규칙 정리',
    meta: 'slack · #ops / #ml / #data',
  },
]

const services = [
  { name: 'API Gateway', status: 'healthy' as const, note: 'p95 140ms' },
  { name: 'Orders DB', status: 'degraded' as const, note: 'replica lag 6s' },
  { name: 'Feature Store', status: 'healthy' as const, note: 'freshness 12m' },
  { name: 'LLM Worker', status: 'incident' as const, note: 'queue 1,248' },
]

const aiWork = [
  {
    at: '14:32',
    title: '대시보드 카드 컴포넌트 리팩터',
    meta: 'src/ui/Card.tsx · 6 files',
  },
  {
    at: '14:55',
    title: '알람 규칙 YAML 검증기 추가',
    meta: 'ops/alerts · schema + tests',
  },
  {
    at: '15:10',
    title: '서비스 상태 위젯 레이아웃 제안',
    meta: 'App shell · responsive grid',
  },
]

function StatusDot({ tone }: { tone: 'ok' | 'warn' | 'bad' }) {
  const cls =
    tone === 'ok'
      ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.55)]'
      : tone === 'warn'
        ? 'bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]'
        : 'bg-rose-400 shadow-[0_0_12px_rgba(251,113,133,0.55)]'

  return <span className={`size-2.5 rounded-full ${cls}`} aria-hidden />
}

function Panel({
  title,
  children,
  right,
}: {
  title: string
  right?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/5 backdrop-blur-md sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-sm font-medium tracking-wide text-slate-200">
          {title}
        </h2>
        {right}
      </div>
      {children}
    </section>
  )
}

export default function App() {
  const progress = 68

  return (
    <div className="min-h-dvh bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 text-slate-100 antialiased">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(56,189,248,0.10),transparent_55%),radial-gradient(ellipse_60%_40%_at_90%_10%,rgba(139,92,246,0.10),transparent_55%)]"
        aria-hidden
      />

      <aside className="md:fixed md:inset-y-0 md:left-0 md:z-40 md:w-72">
        <div className="h-full border-b border-slate-800/70 bg-slate-950/30 px-4 py-5 backdrop-blur-md md:border-b-0 md:border-r md:px-5 md:py-6">
          <div className="flex items-center justify-between gap-3 md:justify-start">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl border border-slate-800 bg-slate-900/60 ring-1 ring-inset ring-white/5">
                <div className="size-2.5 rounded-sm bg-gradient-to-br from-sky-400 to-violet-400" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-white">
                  AI Dev Control
                </p>
                <p className="text-xs text-slate-500">
                  Commerce Intelligence
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-2.5 py-1 text-[11px] text-slate-400">
                v0.1
              </span>
            </div>
          </div>

          <nav className="mt-5 grid grid-cols-2 gap-2 md:mt-8 md:grid-cols-1">
            {[
              '개요',
              '프로젝트',
              '실행 기록',
              '장애',
              '알림',
              '설정',
            ].map((label, idx) => (
              <button
                key={label}
                type="button"
                className={[
                  'group inline-flex items-center justify-between rounded-xl border px-3 py-2 text-left text-sm transition',
                  idx === 0
                    ? 'border-slate-700/80 bg-slate-900/60 text-white ring-1 ring-inset ring-white/10'
                    : 'border-slate-800/70 bg-transparent text-slate-300 hover:border-slate-700/80 hover:bg-slate-900/40',
                ].join(' ')}
              >
                <span className="truncate">{label}</span>
                <span className="text-xs text-slate-500 group-hover:text-slate-400">
                  ⌘K
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-5 hidden rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4 ring-1 ring-inset ring-white/5 md:block">
            <div className="flex items-center gap-2">
              <StatusDot tone="ok" />
              <p className="text-sm font-medium text-slate-200">시스템 정상</p>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              에이전트 온라인 · 정책 적용됨 · 민감정보 마스킹
            </p>
          </div>
        </div>
      </aside>

      <div className="relative md:pl-72">
        <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/35 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <div className="min-w-0">
              <p className="text-xs font-medium tracking-[0.22em] text-slate-500">
                커머스 인텔리전스 관제실
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1.5 text-xs text-slate-300 ring-1 ring-inset ring-white/5">
                  <StatusDot tone="ok" />
                  프로덕션 · 운영 중
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/30 px-3 py-1.5 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">SLO</span> 99.93%
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/30 px-3 py-1.5 text-xs text-slate-400">
                  에이전트: 4개 실행 중
                </span>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                className="hidden rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-2 text-sm text-slate-200 ring-1 ring-inset ring-white/5 transition hover:border-slate-700/80 hover:bg-slate-900/60 sm:inline-flex"
              >
                새 실행
              </button>
              <button
                type="button"
                className="rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-2 text-sm text-slate-200 ring-1 ring-inset ring-white/5 transition hover:border-slate-700/80 hover:bg-slate-900/60"
              >
                ⌘K
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 sm:mb-5">
            <p className="flex items-center gap-2">
              <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] text-slate-300">
                오늘
              </span>
              가장 먼저 처리해야 할 작업과 진행 상황이 여기에서 보입니다.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200 hover:border-slate-600 hover:bg-slate-900"
              >
                + 오늘 할 일 추가
              </button>
              <button
                type="button"
                className="rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1.5 text-xs text-slate-300 hover:border-slate-700 hover:bg-slate-900/60"
              >
                AI에게 정리 요청
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-7">
              <Panel
                title="오늘 할 일"
                right={
                  <span className="text-xs text-slate-500">
                    진행 중 {todayTodos.filter((t) => t.status === '진행 중').length}건 ·
                    대기 {todayTodos.filter((t) => t.status === '대기').length}건
                  </span>
                }
              >
                <ul className="space-y-2">
                  {todayTodos.map((t) => (
                    <li
                      key={t.id}
                      className="flex items-start justify-between gap-3 rounded-xl border border-slate-800/70 bg-slate-900/40 px-3 py-2.5 text-sm ring-1 ring-inset ring-white/5"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-slate-200">{t.title}</p>
                        <p className="mt-0.5 text-xs text-slate-500">
                          태그 <span className="text-slate-400">{t.tag}</span>
                        </p>
                      </div>
                      <span
                        className={[
                          'shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium',
                          t.status === '진행 중'
                            ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                            : t.status === '완료'
                              ? 'border-slate-600 bg-slate-800 text-slate-200'
                              : 'border-slate-700 bg-slate-900 text-slate-300',
                        ].join(' ')}
                      >
                        {t.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </Panel>

              <div className="mt-4 lg:mt-6">
                <Panel
                  title="프로젝트 진행률"
                  right={
                    <span className="rounded-full border border-slate-800 bg-slate-900/40 px-2.5 py-1 text-xs font-medium text-slate-300">
                      스프린트 · D-3
                    </span>
                  }
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-white tabular-nums">
                      {progress}%
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      커머스 인텔리전스 v0.1 마일스톤
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {[
                      { k: 'PR', v: '12' },
                      { k: '체크', v: '38' },
                      { k: '장애', v: '1' },
                    ].map((m) => (
                      <div
                        key={m.k}
                        className="rounded-xl border border-slate-800/70 bg-slate-900/30 px-3 py-2 ring-1 ring-inset ring-white/5"
                      >
                        <p className="text-xs text-slate-500">{m.k}</p>
                        <p className="mt-0.5 text-sm font-semibold text-slate-200">
                          {m.v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-900 ring-1 ring-inset ring-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400 shadow-[0_0_18px_rgba(56,189,248,0.18)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="rounded-md border border-slate-800 bg-slate-900/30 px-2 py-1">
                    다음: 인증 + RBAC
                  </span>
                  <span className="rounded-md border border-slate-800 bg-slate-900/30 px-2 py-1">
                    리스크: LLM 워커 큐 적체
                  </span>
                  <span className="rounded-md border border-slate-800 bg-slate-900/30 px-2 py-1">
                    담당: 플랫폼
                  </span>
                </div>
              </Panel>

              <div className="mt-4 lg:mt-6">
                <Panel
                  title="오늘 작업 로그"
                  right={
                    <span className="text-xs text-slate-500">
                      {todayLog.length}건
                    </span>
                  }
                >
                  <ul className="space-y-3">
                    {todayLog.map((item) => (
                      <li
                        key={`${item.time}-${item.text}`}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 w-12 shrink-0 text-xs font-medium text-slate-500 tabular-nums">
                          {item.time}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm text-slate-200">
                            {item.text}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-500">
                            태그{' '}
                            <span className="text-slate-400">{item.tag}</span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </div>

              <div className="mt-4 lg:mt-6">
                <Panel
                  title="최근 완료 작업"
                  right={
                    <span className="text-xs text-slate-500">
                      {completedWork.length}건
                    </span>
                  }
                >
                  <ol className="space-y-3">
                    {completedWork.map((w) => (
                      <li key={`${w.at}-${w.title}`} className="flex gap-3">
                        <div className="w-12 shrink-0 text-xs font-medium text-slate-500 tabular-nums">
                          {w.at}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-slate-200">{w.title}</p>
                          <p className="mt-0.5 truncate text-xs text-slate-500">
                            {w.meta}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Panel>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Panel
                title="긴급 TODO"
                right={
                  <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/25 bg-rose-500/10 px-2.5 py-1 text-xs font-medium text-rose-200">
                    <span className="size-1.5 rounded-full bg-rose-300" />
                    주의 필요
                  </span>
                }
              >
                <ul className="space-y-2">
                  {urgentTodos.map((t) => (
                    <li
                      key={t.id}
                      className="rounded-xl border border-slate-800/70 bg-slate-900/30 p-3 ring-1 ring-inset ring-white/5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm text-slate-200">{t.text}</p>
                        <span className="shrink-0 rounded-full border border-slate-800 bg-slate-900/40 px-2 py-0.5 text-[11px] text-slate-400">
                          {t.owner}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                        <span className="rounded-md border border-slate-800 bg-slate-950/40 px-2 py-1">
                          분류
                        </span>
                        <span className="rounded-md border border-slate-800 bg-slate-950/40 px-2 py-1">
                          런북
                        </span>
                        <span className="rounded-md border border-slate-800 bg-slate-950/40 px-2 py-1">
                          담당 지정
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Panel>

              <div className="mt-4 lg:mt-6">
                <Panel
                  title="아이디어 메모"
                  right={
                    <span className="text-xs text-slate-500">
                      {quickNotes.length}건
                    </span>
                  }
                >
                  <ul className="space-y-2 text-sm">
                    {quickNotes.map((note) => (
                      <li
                        key={note.id}
                        className="rounded-xl border border-slate-800/70 bg-slate-950/40 p-3 ring-1 ring-inset ring-white/5"
                      >
                        <p className="text-slate-200">{note.text}</p>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </div>

              <div className="mt-4 lg:mt-6">
                <Panel
                  title="서비스 상태"
                  right={
                    <span className="rounded-full border border-slate-800 bg-slate-900/30 px-2.5 py-1 text-xs text-slate-400">
                      최근 5분
                    </span>
                  }
                >
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {services.map((svc) => {
                      const tone =
                        svc.status === 'healthy'
                          ? 'ok'
                          : svc.status === 'degraded'
                            ? 'warn'
                            : 'bad'
                      const label =
                        svc.status === 'healthy'
                          ? '정상'
                          : svc.status === 'degraded'
                            ? '성능 저하'
                            : '장애'

                      return (
                        <div
                          key={svc.name}
                          className="rounded-xl border border-slate-800/70 bg-slate-900/25 p-3 ring-1 ring-inset ring-white/5"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-sm font-medium text-slate-200">
                              {svc.name}
                            </p>
                            <span className="inline-flex items-center gap-2 text-xs text-slate-400">
                              <StatusDot tone={tone} />
                              {label}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-slate-500">
                            {svc.note}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </Panel>
              </div>

              <div className="mt-4 lg:mt-6">
                <Panel
                  title="AI 작업 로그"
                  right={
                    <span className="text-xs text-slate-500">에이전트: gpt</span>
                  }
                >
                  <ol className="space-y-3">
                    {aiWork.map((w) => (
                      <li key={`${w.at}-${w.title}`} className="flex gap-3">
                        <div className="w-12 shrink-0 text-xs font-medium text-slate-500 tabular-nums">
                          {w.at}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-slate-200">{w.title}</p>
                          <p className="mt-0.5 truncate text-xs text-slate-500">
                            {w.meta}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Panel>
              </div>
            </div>
          </div>

          <footer className="mt-10 border-t border-slate-800/80 pt-6 text-center text-xs text-slate-600">
            <p>
              실무형 다크 운영 UI ·{' '}
              <span className="text-slate-500">Tailwind CSS</span> ·{' '}
              <span className="text-slate-500">Vite</span>
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
