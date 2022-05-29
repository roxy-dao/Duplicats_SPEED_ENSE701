import { InputLabel, MenuItem, Select, FormControl } from '@material-ui/core'

const Dropdown = ({ dropdownList, selected, setSelected, label }) => {
  const handleChange = (event) => {
    setSelected(event.target.value)
  }

  return (
    <FormControl>
      <InputLabel id="dropdown-label">{label}</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown-selector"
        label={label}
        value={selected}
        onChange={handleChange}
        variant="outlined"
      >
        {dropdownList.map((items) => (
          <MenuItem key={items} value={items}>
            {items}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Dropdown
