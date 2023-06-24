import './Checkbox.style.scss';

interface CheckBoxProps{
checked: boolean;
handleCheckboxChange:()=>void
}
const Checkbox = (props: CheckBoxProps) => {


  return (
    <label className={`checkbox ${props.checked ? 'checked' : ''}`}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
