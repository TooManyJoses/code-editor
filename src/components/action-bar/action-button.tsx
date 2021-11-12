interface ActionButtonProps {
  iconName: string,
  handleClick: () => void
}

const ActionButton: React.FC<ActionButtonProps> = ({ iconName, handleClick }) => {
  return (
    <button className="button is-primary is-small" onClick={handleClick}>
    <span className="icon">
      <i className={`fas ${iconName}`}></i>
    </span>
  </button>
  )
}

export default ActionButton;