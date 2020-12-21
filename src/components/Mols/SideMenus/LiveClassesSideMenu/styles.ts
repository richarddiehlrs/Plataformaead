import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 16px 0px 80px;
    margin: 0 20px 0 20px;

    width: 24%;
    height: 100%;

    border: solid 1px red;
`;

export const Heading = styled.header`
    color: #fff;

    p{
        font-size: 32px;
        font-family: 'Roboto';
    }
`;

export const LiveVideosList = styled.div`
    height: 40%;

    border: solid 1px blue;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 80%;

    margin-bottom: 32px;
    margin-top: 16px;

    > p{
        margin-bottom: 12px;
    }
`;

export const VideosScrollContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;

    width: 100%;
    height: 74%;

    padding: 0 8px;

    border: solid aquamarine;
`;
