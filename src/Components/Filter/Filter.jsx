import { VscSearch } from "react-icons/vsc";
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selector';
import * as actions from '../../redux/actions';
import { InputFilter, LabelFilter } from './Filter.styled'


export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => dispatch(actions.changeFilter(event.target.value));


  
    return (
      <LabelFilter>
        <VscSearch></VscSearch>
        Find contacts by name
        <InputFilter
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Rosie Simpson"
        />
           
            
      </LabelFilter>
    )
  
}
 