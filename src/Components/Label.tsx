interface Props {
  value: boolean,
  text: string,
  mode: string,
  onClick(): void,
  defaultChecked: boolean,
}
export const Label = ({ defaultChecked, mode, value, text, onClick }: Props) => {
  return (
    <label>
      <input
        type="radio"
        className="nes-radio is-dark"
        name={mode}
        value={value.toString()}
        defaultChecked={defaultChecked}
        onClick={() => onClick()}
      />
      <span>{text}</span>
    </label>
  )
}
