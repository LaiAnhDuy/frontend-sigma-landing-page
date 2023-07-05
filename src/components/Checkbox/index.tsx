import './Checkbox.style.scss';

interface CheckBoxProps{
checked: boolean;
}
const Checkbox = (props: CheckBoxProps) => {


  return (
    <label className={`checkbox ${props.checked ? 'checked' : ''}`}>
      <input
        type="checkbox"
        checked={props.checked}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
