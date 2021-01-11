import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100%;

    top:0;
    z-index: 4;

    background: rgba(0,0,0,0.7);

    animation: loadModal .4s; 

    @keyframes loadModal {
        0%{
            background: rgba(0,0,0,0);
        }
        100%{
            background: rgba(0,0,0,0.7);
        }
    }

    .add-note-container{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;

        width: 400px;
        height: 140px;

        padding: 12px 12px;

        border-radius: 6px;

        background: rgba(255,255,255,0.9);
    }

    .add-note-header{
        display: flex;
        width: 100%;
        height: 30%;

        font-size: 16px;

    }
    
    .add-note-body{
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin-top: 12px;
        width: 100%;

        input{
            height: 40px;
        }
    }
`;

export const Content = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

`;

export const CloseButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    svg{
        color: rgba(224, 43, 43,1);
        transition: .4s;
    }

    &:hover{
        transform: scaleX(1.04) scaleY(1.04);

        svg{
            color: rgba(224, 43, 43,0.4);
            cursor: pointer;
        }
    }
`;
