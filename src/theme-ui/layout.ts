import {LayoutMain as styled} from '../../layouts/styles';

let x = '';
export default {
  [`.${styled.wrap}`]: {
    backgroundColor: "backgroundColor"
  },
  [`.${styled.head}`]: {
    borderColor: "line"
  },
  [`.${styled.content}`]: {
    backgroundColor: theme => `${theme.colors.backgroundLight}`,
    boxShadow: theme => `0 0 4px ${theme.colors.boxShadow}`
  },
};
