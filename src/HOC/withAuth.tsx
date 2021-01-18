
interface IProps {

}

const withSimple = (Component) => {
  return function (props) {
    return (
      <div>
        <Component {...props}/>
      </div>
    )
  };
};

export default withSimple;