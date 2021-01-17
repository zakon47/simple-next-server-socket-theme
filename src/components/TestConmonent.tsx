import React from 'react';

interface IProps {

}

const TestComponent = (props: IProps) => {
  return (
    <div>
      TestComponent
    </div>
  );
};

export default TestComponent;


TestComponent.getInitialProps = async (ctx) => {
  return {}
}
