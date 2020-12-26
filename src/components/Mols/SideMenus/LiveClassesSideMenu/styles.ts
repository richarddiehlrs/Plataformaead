import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 16px 0px 60px;
    margin: 0 20px 0 20px;

    width: 480px;
    height: 100%;

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
    height: 36%;

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
`;

export const LiveVideoItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
    
    p{
        max-width: 140px;
    }
`;

export const StyledButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90px;
    height: 40px;

    svg{
        color: red;
        animation: liveButton 2s ease-in-out infinite alternate;
        width: 20px;
        margin-left: 4px;
    }
    
    /* @keyframes liveButton{
        from{
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
        }
        to{
            text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
        } */
    }
    @keyframes liveButton {
        0%{
            color: #353536;
        }
        50%{
            color: red;
            font-weight: bolder;
        }
        100%{
            color: #353536;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-height: 64%;
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 50%;

    margin-bottom: 32px;
    margin-top: 32px;
    margin-right: auto;

    > p{
        margin-bottom: 12px;
        color: #fff;
    }

    .date-selection{
        margin-top: 16px;
        > p{
            color: #fff;
        }
    }

    .subject-selection{
        > p{
            color: #fff;
        }
    }
`;

export const VideosScrollContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;

    width: 100%;

    height: 380px;

    padding: 0 8px;
`;