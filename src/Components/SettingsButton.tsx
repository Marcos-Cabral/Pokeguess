interface Props {
  levantarModal(): void
  width: number,
}
export const SettingsButton = ({ levantarModal, width }: Props) => {
  return (
    <button
      style={{
        position: 'absolute',
        top: '20px',
        zIndex: 11,
        left: width >= 900 ? '90%' : '81%',
      }}
      type="button"
      className="nes-btn btn-setting"
      onClick={() => levantarModal()}
    >
      <img
        width="40px"
        height="40px"
        src="https://static.thenounproject.com/png/2758641-200.png"
      />
    </button>
  )
}
