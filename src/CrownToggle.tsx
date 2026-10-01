export function CrownToggle({
  obtained,
  label,
  onToggle,
}: {
  obtained: boolean
  label: string
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      className={obtained ? 'crown on' : 'crown'}
      aria-pressed={obtained}
      aria-label={obtained ? `${label} obtenue` : `Marquer ${label} comme obtenue`}
      title={obtained ? 'Obtenue' : 'Pas encore obtenue'}
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => {
        event.stopPropagation()
        onToggle()
      }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 17.2h16l-1.2-8.4-3.8 3.1L12 6.2 9 11.9 5.2 8.8 4 17.2z" />
        <path d="M6.2 19.6h11.6" />
      </svg>
    </button>
  )
}
