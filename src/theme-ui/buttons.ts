import styled from '../components/button/index.module.scss'

export default {
  [`.${styled.main}`]: {
    backgroundColor: "buttonBg",
    color: "buttonCollor",
    // fontSize: ["1.4rem","1.4rem","1.6rem","2rem"]
    ":disabled":{
      opacity: .3
    }
  },
};
