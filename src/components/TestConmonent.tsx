import React from 'react';

interface IProps {

}

const TestComponent = (props: IProps) => {
  console.log('props 2', props)
  return (
    <div>
      TestComponent
    </div>
  );
};

export default TestComponent;


TestComponent.getInitialProps = async (ctx) => {
  console.log('getInitialProps 2', ctx)
  return {}
}
