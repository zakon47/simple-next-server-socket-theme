import React, {useContext} from 'react';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import {mainContext} from '../src/context/mainContext/mainContext';
import {initialize} from "./_app";

type Element = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

interface IProps {
    auth
    isServer
    comments: Array<Element>
}

const Index = (props: IProps) => {
    const {state, singIn} = useContext(mainContext);
    const {comments = []} = props;
    return (
        <LayoutMain>
            <div>НАЙДЕНО: {comments.length} <small>записей</small></div>
            <div>STATE: <pre>{JSON.stringify(state, null, 2)}</pre></div>
            <button onClick={singIn}>ADD</button>
            <hr/>
            {comments && comments.map(elem => (
                <div key={elem.id} style={{marginBottom: 20}}>
                    <b>{elem.name}</b> - [{elem.email}]
                    <div>{elem.body}</div>
                </div>
            ))}
        </LayoutMain>
    );
};
export default Index;

Index.getInitialProps = async (ctx) => {
    const {auth, isServer} = await initialize(ctx);
    console.log(33, ctx)
    return {
        auth, isServer,
        comments: [],
        maps: {}
    }
}