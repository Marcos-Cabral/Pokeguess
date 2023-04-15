interface Props {
  lifes: number,
  width: number,
  esDark: boolean,
}
export const Lifes = ({ esDark, lifes, width }: Props) => {
  return (
    <div
      style={{
        position: 'relative',
        right: '0',
        display: 'flex',
        gap: '10px',
      }}
      className='lifes-container'
    >
      {[...Array(lifes)].map((i, index) => {
        return (
          <i
            key={index}
            className={`nes-icon ${width <= 550 ? 'is-small' : 'is-medium'
              } heart ${esDark && 'is-empty'}`}
          />
        );
      })}
    </div>
  )
}
