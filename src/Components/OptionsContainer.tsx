export const OptionsContainer = ({children}: any) => {
  return (
    <div
      style={{
        width: '100%',
        background: '#212529',
        margin: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        gap: 30,
      }}
    >
      {children}
    </div>
  )
}
