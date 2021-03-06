const Select = ( { options = [], onSelect }) =>{

  return(
    <select onChange={(e) => onSelect(e.target.value)}>
    {options.map(o => <option key={o.id} value={o.value}>{o.name}</option>)}
    </select>
  )
}

export default Select;
