import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 16px 0px 80px;
    margin: 0 20px 0 20px;

    width: 460px;
    /* width: 24%; */
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
    display: flex;
    flex-direction: column;
    height: 40%;

    margin-top: 24px;

    font-family: 'Roboto';

    h4{
        color: #fff;
        font-weight: normal;
    }
    p{
        margin-left: 20px;
        margin-top: 6px;
        color: #ffd35c;
    }
    /* border: solid 0.2px blue; */
`;

export const LiveVideoItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
`;

export const StyledButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 28%;
    height: 40px;
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

    width: 40%;

    margin-bottom: 32px;
    margin-top: 32px;
    margin-right: auto;

    > p{
        margin-bottom: 12px;
        color: #fff;
    }

    .date-selection{
        margin-top: 16px;
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
