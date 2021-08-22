interface IProps {
  type: string
  handleClick: any
}

const QuantityButton = ({ type, handleClick }: IProps) => {
  const symbol = type === 'increment' ? '+' : '-'

  return <button onClick={handleClick}>{symbol}</button>
}

export default QuantityButton
